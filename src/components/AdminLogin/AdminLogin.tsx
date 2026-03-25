'use client';

import React, { useState } from 'react';
import { auth, getCollectionData } from '@/lib/firebase';
import { Eye, EyeOff } from 'lucide-react';
import styles from './AdminLogin.module.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import StatusModal from '../Shared/StatusModal';
import LoadingSpinner from '../Shared/LoadingSpinner';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // Status Modal State
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: 'error' as 'success' | 'error',
    title: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password; // Do not trim passwords as spaces are valid
    setLoading(true);

    try {
      // Use Firebase Auth instead of manual Firestore check
      const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);

      // Success - Firebase Auth maintains the session
      // Also set the server-side session cookie for middleware protection
      const idToken = await userCredential.user.getIdToken();
      await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      });

      window.location.href = '/dashboard';
    } catch (err: any) {
      console.error(err);
      let errorMessage = 'An unexpected error occurred. Please try again later.';
      let errorTitle = 'Login Failed';

      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        errorMessage = 'Invalid email or password. Please check your credentials and try again.';
      } else if (err.code === 'auth/user-disabled') {
        errorMessage = 'This account has been deactivated. Please contact your system administrator.';
        errorTitle = 'Account Disabled';
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = 'Too many failed login attempts. Please try again later.';
        errorTitle = 'Account Locked';
      }

      setStatusModal({
        isOpen: true,
        type: 'error',
        title: errorTitle,
        message: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      {loading && <LoadingSpinner fullPage message="Authenticating credentials..." />}

      <StatusModal
        isOpen={statusModal.isOpen}
        onClose={() => setStatusModal(prev => ({ ...prev, isOpen: false }))}
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />

      <div className={styles.backgroundOverlay}></div>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <div className={styles.logoWrapper}>
            <img
              src="/Visayas Medical.png"
              alt="VisayasMed Logo"
              className={styles.brandLogo}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.brandInfo}>
            <h1 className={styles.brandName}>VISAYASMED HOSPITAL</h1>
            <span className={styles.groupAffiliation}>A MEMBER OF APPLEONE MEDICAL GROUP</span>
            <div className={styles.contactDetails}>
              <p>85 Osmeña Blvd., Brgy. Sta. Cruz, Cebu City, Philippines 6000</p>
              <p>Tel: (032) 253 1901 • www.visayasmedcebu.com.ph</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="visayasmed@hospital.com"
              required
              suppressHydrationWarning
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">PASSWORD</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                suppressHydrationWarning
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className={styles.optionsRow}>
            <label className={styles.rememberMe}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember Me
            </label>
            <a href="#" className={styles.forgotPassword} onClick={(e) => {
              e.preventDefault();
              setStatusModal({
                isOpen: true,
                type: 'error',
                title: 'Password Reset',
                message: 'Please contact your system administrator to reset your password.'
              });
            }}>
              Forgot Password?
            </a>
          </div>
          <button type="submit" className={styles.loginBtn} disabled={loading} suppressHydrationWarning>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
        <div className={styles.registerPrompt}>
          Don't have an account yet?
          <span className={styles.adminContact}>
            Please contact VisayasMed Hospital Administrator
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
