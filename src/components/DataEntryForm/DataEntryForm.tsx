'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './DataEntryForm.module.css';
import { saveFormData, updateFormData, checkDuplicate, auth } from '@/lib/firebase';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import StatusModal from '../Shared/StatusModal';
import LoadingSpinner from '../Shared/LoadingSpinner';

interface DataEntryFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
  onCancel?: () => void;
  mode?: 'create' | 'edit' | 'view';
  initialData?: any;
  currentUserEmail?: string;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({
  isModal = false,
  onSuccess,
  onCancel,
  mode = 'create',
  initialData,
  currentUserEmail = 'System'
}) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    surname: initialData?.surname || '',
    givenName: initialData?.givenName || '',
    middleName: initialData?.middleName || '',
    specialty: initialData?.specialty || '',
    department: initialData?.department || '',
    phicNo: initialData?.phicNo || '',
    birTan: initialData?.birTan || '',
    contactNo: initialData?.contactNo || '',
    email: initialData?.email || '',
    privacyAccepted: mode !== 'create', // Assume accepted if editing/viewing
  });

  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);

  // Status Modal State
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: ''
  });

  const formatBirTan = (val: string) => {
    // Remove all non-digits
    const cleanValue = val.replace(/\D/g, '');
    // Insert hyphen every 3 digits
    const parts = cleanValue.match(/.{1,3}/g);
    return parts ? parts.join('-') : cleanValue;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (name === 'birTan') {
      const maskedValue = formatBirTan(value);
      if (maskedValue.length <= 15) {
        setFormData((prev) => ({ ...prev, [name]: maskedValue }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, boolean> = {};
    const requiredFields = ['surname', 'givenName', 'specialty', 'contactNo', 'email'];

    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        errors[field] = true;
      }
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatusModal({
        isOpen: true,
        type: 'error',
        title: 'Validation Error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setLoading(true);

    try {
      // Check for duplicates
      const excludeId = mode === 'edit' ? initialData?.id : undefined;

      const isEmailDuplicate = await checkDuplicate('doctors', 'email', formData.email, excludeId);
      if (isEmailDuplicate) {
        setStatusModal({
          isOpen: true,
          type: 'error',
          title: 'Duplicate Entry',
          message: 'A physician with this email address is already registered.'
        });
        setLoading(false);
        return;
      }

      if (formData.phicNo) {
        const isPhicDuplicate = await checkDuplicate('doctors', 'phicNo', formData.phicNo, excludeId);
        if (isPhicDuplicate) {
          setStatusModal({
            isOpen: true,
            type: 'error',
            title: 'Duplicate Entry',
            message: 'A physician with this PHIC(PMA) NO. is already registered.'
          });
          setLoading(false);
          return;
        }
      }

      if (formData.birTan) {
        const isBirDuplicate = await checkDuplicate('doctors', 'birTan', formData.birTan, excludeId);
        if (isBirDuplicate) {
          setStatusModal({
            isOpen: true,
            type: 'error',
            title: 'Duplicate Entry',
            message: 'A physician with this BIR-TAN # is already registered.'
          });
          setLoading(false);
          return;
        }
      }

      let result;
      if (mode === 'edit' && initialData?.id) {
        // Use secure API for updates (A01, A03, A09)
        const token = await auth.currentUser?.getIdToken();
        const response = await fetch('/api/doctors', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({ id: initialData.id, ...formData })
        });
        result = await response.json();
      } else {
        // Generate reCAPTCHA token (A04)
        if (!executeRecaptcha) {
          setStatusModal({
            isOpen: true,
            type: 'error',
            title: 'System Error',
            message: 'reCAPTCHA not initialized. Please refresh the page.'
          });
          setLoading(false);
          return;
        }
        const captchaToken = await executeRecaptcha('register_doctor');

        // Use the new secure API for registration (A01, A03, A09, A04)
        const response = await fetch('/api/doctors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            CreatedFrom: isModal ? 'Manual Creation' : 'Form',
            captchaToken // Sent to server for verification
          })
        });
        result = await response.json();
      }

      if (result.success) {
        setStatusModal({
          isOpen: true,
          type: 'success',
          title: mode === 'edit' ? 'Updated Successfully' : 'Registration Complete',
          message: mode === 'edit'
            ? `Physician details for Dr. ${formData.surname} have been updated.`
            : `Thank you, Dr. ${formData.surname}. Your information has been securely transmitted and is being processed.`
        });

        if (onSuccess) {
          // Wait for modal to be acknowledged by user before closing parent
          // Actually, we'll let the user close the status modal.
        }

        if (mode === 'create') {
          // Clear form after success
          setFormData({
            surname: '',
            givenName: '',
            middleName: '',
            specialty: '',
            department: '',
            phicNo: '',
            birTan: '',
            contactNo: '',
            email: '',
            privacyAccepted: false,
          });
          setFieldErrors({});
        }
      } else {
        const errorMessage = result.error ||
          ((result.error as any)?.code === 'permission-denied'
            ? 'Firestore permission denied. Please check your security rules.'
            : `Failed to ${mode === 'edit' ? 'update' : 'submit'} form. Please try again later.`);

        setStatusModal({
          isOpen: true,
          type: 'error',
          title: 'Submission Failed',
          message: errorMessage
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatusModal({
        isOpen: true,
        type: 'error',
        title: 'Unexpected Error',
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseStatusModal = () => {
    setStatusModal(prev => ({ ...prev, isOpen: false }));
    if (statusModal.type === 'success' && onSuccess) {
      onSuccess();
    }
  };

  const formatFullDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    
    let date: Date;
    if (typeof timestamp === 'string') {
      date = new Date(timestamp);
    } else if (timestamp && typeof timestamp.toDate === 'function') {
      date = timestamp.toDate();
    } else if (timestamp && typeof timestamp.seconds === 'number') {
      date = new Date(timestamp.seconds * 1000);
    } else {
      date = new Date(timestamp);
    }

    if (isNaN(date.getTime())) return 'Invalid Date';

    return date.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`${styles.formWrapper} ${isModal ? styles.modalMode : ''}`}>
      {loading && <LoadingSpinner fullPage message={mode === 'edit' ? 'Updating details...' : 'Submitting registration...'} />}

      <StatusModal
        isOpen={statusModal.isOpen}
        onClose={handleCloseStatusModal}
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
        buttonText="Return"
      />

      {!isModal && (
        <div className={styles.formHeader}>
          <div className={styles.logoContainer}>
            <Image
              src="/Visayas Medical.png"
              alt="VisayasMed Hospital Logo"
              width={65}
              height={65}
              className={styles.hospitalLogo}
              priority
            />
          </div>
          <h1>VISAYASMED HOSPITAL</h1>
          <p className={styles.subtitle}>A MEMBER OF APPLEONE MEDICAL GROUP</p>
          <p className={styles.addressInfo}>85 Osmeña Blvd., Brgy. Sta. Cruz, Cebu City, Philippines 6000</p>
          <p className={styles.contactInfo}>Tel: (032) 253 1901 • www.visayasmedcebu.com.ph</p>
          <div className={styles.headerSeparator}></div>
        </div>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.sectionHeader}>Personal Information</div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="surname">SURNAME<span className={styles.required}>*</span></label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Enter Surname"
              className={fieldErrors.surname ? styles.invalid : ''}
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
            {fieldErrors.surname && <span className={styles.fieldErrorMessage}>This is a required field</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="givenName">GIVEN NAME<span className={styles.required}>*</span></label>
            <input
              type="text"
              id="givenName"
              name="givenName"
              value={formData.givenName}
              onChange={handleChange}
              placeholder="Enter Given Name"
              className={fieldErrors.givenName ? styles.invalid : ''}
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
            {fieldErrors.givenName && <span className={styles.fieldErrorMessage}>This is a required field</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="middleName">MIDDLE NAME</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Enter Middle Name"
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className={styles.sectionHeader}>Professional Details</div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="specialty">SPECIALTY<span className={styles.required}>*</span></label>
            <input
              type="text"
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              placeholder="e.g. Cardiology, Pediatrics"
              className={fieldErrors.specialty ? styles.invalid : ''}
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
            {fieldErrors.specialty && <span className={styles.fieldErrorMessage}>This is a required field</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="department">DEPARTMENT</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="e.g. Internal Medicine"
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
          </div>
        </div>

        <div className={styles.sectionHeader}>Regulatory Information</div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="phicNo">PHIC(PMA) NO.</label>
            <input
              type="text"
              id="phicNo"
              name="phicNo"
              value={formData.phicNo}
              onChange={handleChange}
              placeholder="00-000000000-0"
              className={fieldErrors.phicNo ? styles.invalid : ''}
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
            {fieldErrors.phicNo && <span className={styles.fieldErrorMessage}>This is a required field</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="birTan">BIR-TAN #</label>
            <input
              type="text"
              id="birTan"
              name="birTan"
              value={formData.birTan}
              onChange={handleChange}
              placeholder="000-000-000-000"
              className={fieldErrors.birTan ? styles.invalid : ''}
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
            {fieldErrors.birTan && <span className={styles.fieldErrorMessage}>This is a required field</span>}
          </div>
        </div>

        <div className={styles.sectionHeader}>Contact Information</div>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="contactNo">CONTACT NUMBER<span className={styles.required}>*</span></label>
            <input
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="+63 9XX XXX XXXX"
              className={fieldErrors.contactNo ? styles.invalid : ''}
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
            {fieldErrors.contactNo && <span className={styles.fieldErrorMessage}>This is a required field</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="email">EMAIL ADDRESS<span className={styles.required}>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. doctor@visayasmed.ph"
              className={fieldErrors.email ? styles.invalid : ''}
              readOnly={mode === 'view'}
              suppressHydrationWarning
            />
            {fieldErrors.email && <span className={styles.fieldErrorMessage}>This is a required field</span>}
          </div>
        </div>

        <div className={styles.privacySection}>
          <label className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              name="privacyAccepted"
              checked={formData.privacyAccepted}
              onChange={handleChange}
              disabled={mode === 'view'}
              suppressHydrationWarning
            />
            <span className={styles.checkboxLabel}>
              I hereby acknowledge that I have read and understood the <strong>Data Privacy Act of 2012</strong> and consent to the collection and processing of my personal data for VisayasMed Hospital's record-keeping purposes.
            </span>
          </label>
        </div>

        <div className={styles.submitRow}>
          {isModal && mode !== 'view' && (
            <button type="button" onClick={onCancel} className={styles.cancelBtn} disabled={loading}>
              Discard
            </button>
          )}
          {mode !== 'view' && (
            <button type="submit" className={styles.submitBtn} disabled={!formData.privacyAccepted || loading}>
              {loading ? 'Submitting...' : mode === 'edit' ? 'Update Details' : isModal ? 'Register Physician' : 'Finalize and Submit Registry'}
            </button>
          )}
        </div>

        {mode === 'view' && (
          <div style={{ marginTop: '2rem' }}>
            <div className={styles.sectionHeader}>Audit Information</div>
            <div className={styles.auditGrid}>
              <div className={styles.auditItem}>
                <span className={styles.auditLabel}>Created By</span>
                <span className={styles.auditValue}>{initialData?.CreatedBy || 'System'}</span>
              </div>
              <div className={styles.auditItem}>
                <span className={styles.auditLabel}>Created At ({initialData?.CreatedFrom || 'Form'})</span>
                <span className={styles.auditValue} suppressHydrationWarning>{formatFullDate(initialData?.CreatedAt)}</span>
              </div>
              <div className={styles.auditItem}>
                <span className={styles.auditLabel}>Last Updated By</span>
                <span className={styles.auditValue}>{initialData?.UpdatedBy || initialData?.CreatedBy || 'System'}</span>
              </div>
              <div className={styles.auditItem}>
                <span className={styles.auditLabel}>Last Updated At</span>
                <span className={styles.auditValue} suppressHydrationWarning>{formatFullDate(initialData?.UpdatedAt)}</span>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default DataEntryForm;
