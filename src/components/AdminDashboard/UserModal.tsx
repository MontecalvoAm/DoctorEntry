'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import bcrypt from 'bcryptjs';
import { saveFormData, updateFormData, checkDuplicate } from '@/lib/firebase';
import styles from './UserModal.module.css';

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
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Clear previous errors
    const isEdit = mode === 'edit';
    
    // Validation for password fields
    if (!isEdit || (isEdit && password)) { // Only validate if creating or if password is provided in edit mode
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }
    }

    setLoading(true);

    try {
      const trimmedEmail = formData.Email.trim().toLowerCase();
      
      // Check for duplicate email
      const excludeId = isEdit ? initialData?.id : undefined;
      const isDuplicate = await checkDuplicate('M_Users', 'Email', trimmedEmail, excludeId);
      
      if (isDuplicate) {
        setError('A user with this email address already exists.');
        setLoading(false);
        return;
      }

      const userData: any = {
        UserName: formData.UserName.trim(),
        Email: trimmedEmail,
        Role: formData.Role,
      };

      // Hash the password if provided (for create or password change in edit)
      if (password) {
        const trimmedPassword = password.trim();
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(trimmedPassword, salt);
        userData.Password = hashedPassword;
      }

      let result;
      if (isEdit && initialData?.id) {
        result = await updateFormData('M_Users', initialData.id, userData, currentUserEmail);
        
        // Update localStorage if the edited user is the current user
        const sessionStr = localStorage.getItem('admin_session');
        if (sessionStr) {
          const session = JSON.parse(sessionStr);
          if (session.userId === initialData.id) {
            const updatedSession = {
              ...session,
              userName: userData.UserName,
              email: userData.Email,
              role: userData.Role
            };
            localStorage.setItem('admin_session', JSON.stringify(updatedSession));
          }
        }
      } else {
        // Add creation source
        userData.CreatedFrom = 'Manual Creation';
        result = await saveFormData('M_Users', userData, currentUserEmail);
      }

      if (result.success) {
        onSuccess();
      } else {
        setError(`Failed to ${isEdit ? 'update' : 'create'} user. Please try again.`);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while processing the request.');
    } finally {
      setLoading(false);
    }
  };

  const formatFullDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
    return date.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
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
          <option value="Doctor">Doctor (Access)</option>
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

      {error && <div className={styles.errorMessage}>{error}</div>}

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
  );
};

export default UserModal;
