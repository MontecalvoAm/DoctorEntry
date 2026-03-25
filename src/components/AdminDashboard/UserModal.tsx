import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { auth } from '@/lib/firebase';
import styles from './UserModal.module.css';
import StatusModal from '../Shared/StatusModal';
import LoadingSpinner from '../Shared/LoadingSpinner';

interface UserModalProps {
  onSuccess: () => void;
  onCancel: () => void;
  currentUserEmail: string;
  mode?: 'create' | 'edit' | 'view';
  initialData?: any;
}

const UserModal: React.FC<UserModalProps> = ({
  onSuccess,
  onCancel,
  currentUserEmail,
  mode = 'create',
  initialData
}) => {
  const [formData, setFormData] = useState({
    UserName: initialData?.UserName || '',
    Email: initialData?.Email || '',
    Role: initialData?.Role || 'Staff',
  });

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Status Modal State
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: 'success' as 'success' | 'error',
    title: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    const isEdit = mode === 'edit';

    // Validation for password fields
    if (!isEdit || (isEdit && password)) { // Only validate if creating or if password is provided in edit mode
      if (password !== confirmPassword) {
        setStatusModal({
          isOpen: true,
          type: 'error',
          title: 'Validation Error',
          message: 'Passwords do not match.'
        });
        return;
      }

      if (password.length < 6) {
        setStatusModal({
          isOpen: true,
          type: 'error',
          title: 'Validation Error',
          message: 'Password must be at least 6 characters long.'
        });
        return;
      }
    }

    setLoading(true);

    try {
      const isEdit = mode === 'edit';
      const url = '/api/users';
      const method = isEdit ? 'PATCH' : 'POST';

      const payload: any = {
        Email: formData.Email.trim().toLowerCase(),
        UserName: formData.UserName.trim(),
        Role: formData.Role,
      };

      if (isEdit) {
        payload.uid = initialData?.id || initialData?.uid;
      }

      if (password) {
        payload.Password = password;
      }

      const token = await auth.currentUser?.getIdToken();
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatusModal({
          isOpen: true,
          type: 'success',
          title: isEdit ? 'User Updated' : 'User Created',
          message: isEdit
            ? `Account for ${formData.UserName} has been updated successfully.`
            : `System account for ${formData.UserName} has been created.`
        });
      } else {
        setStatusModal({
          isOpen: true,
          type: 'error',
          title: 'Action Failed',
          message: result.error || `Failed to ${isEdit ? 'update' : 'create'} user account.`
        });
      }
    } catch (err) {
      console.error(err);
      setStatusModal({
        isOpen: true,
        type: 'error',
        title: 'Unexpected Error',
        message: 'An error occurred while processing the request.'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseStatusModal = () => {
    setStatusModal(prev => ({ ...prev, isOpen: false }));
    if (statusModal.type === 'success') {
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
    <div className={styles.modalWrapper}>
      {loading && <LoadingSpinner fullPage message={mode === 'edit' ? 'Updating user...' : 'Creating account...'} />}

      <StatusModal
        isOpen={statusModal.isOpen}
        onClose={handleCloseStatusModal}
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />

      <form className={styles.userForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="UserName">FULL NAME / USERNAME</label>
          <input
            type="text"
            id="UserName"
            name="UserName"
            value={formData.UserName}
            onChange={handleChange}
            placeholder="e.g. Jane Smith"
            required
            readOnly={mode === 'view'}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Email">EMAIL ADDRESS</label>
          <input
            type="email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder="e.g. jane@visayasmed.ph"
            required
            readOnly={mode === 'view'}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="Role">ACCOUNT ROLE</label>
          <select
            id="Role"
            name="Role"
            value={formData.Role}
            onChange={handleChange}
            required
            disabled={mode === 'view'}
          >
            <option value="Staff">Staff</option>
            <option value="Administrator">Administrator</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        {mode !== 'view' && (
          <div className={styles.passwordRow}>
            <div className={styles.formGroup}>
              <label htmlFor="password">PASSWORD {mode === 'edit' && '(LEAVE BLANK TO KEEP CURRENT)'}</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'edit' ? "Enter new password" : "••••••••"}
                  required={mode === 'create'}
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder={mode === 'edit' ? "Confirm new password" : "••••••••"}
                  required={mode === 'create' || password.length > 0}
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={styles.formActions}>
          {mode !== 'view' && (
            <>
              <button type="button" onClick={onCancel} className={styles.cancelBtn} disabled={loading}>
                Cancel
              </button>
              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? 'Processing...' : mode === 'edit' ? 'Update User Account' : 'Create User Account'}
              </button>
            </>
          )}
        </div>

        {mode === 'view' && (
          <div style={{ marginTop: '1.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem' }}>
            <div style={{
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#3b82f6',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '0.75rem'
            }}>
              Audit Information
            </div>
            <div className={styles.auditGrid}>
              <div className={styles.auditItem}>
                <span className={styles.auditLabel}>Created By</span>
                <span className={styles.auditValue}>{initialData?.CreatedBy || 'System'}</span>
              </div>
              <div className={styles.auditItem}>
                <span className={styles.auditLabel}>Created At ({initialData?.CreatedFrom || 'Manual Creation'})</span>
                <span className={styles.auditValue}>{formatFullDate(initialData?.CreatedAt)}</span>
              </div>
              <div className={styles.auditItem}>
                <span className={styles.auditLabel}>Last Updated By</span>
                <span className={styles.auditValue}>{initialData?.UpdatedBy || initialData?.CreatedBy || 'System'}</span>
              </div>
              <div className={styles.auditItem}>
                <span className={styles.auditLabel}>Last Updated At</span>
                <span className={styles.auditValue}>{formatFullDate(initialData?.UpdatedAt)}</span>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default UserModal;
