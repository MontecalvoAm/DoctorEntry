'use client';

import React, { useState } from 'react';
import { auth, getCollectionData } from '@/lib/firebase';
import bcrypt from 'bcryptjs';
import { Eye, EyeOff } from 'lucide-react';
import styles from './AdminLogin.module.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();
    setLoading(true);

    try {
      // Manual Firestore check as requested
      const result = await getCollectionData('M_Users');
      
      if (result.success) {
        const users = result.data as any[];
        const user = users.find(u => {
          if (!u.Email || u.Email.trim().toLowerCase() !== trimmedEmail) return false;
          
          // Check if password matches (handling both plaintext for legacy and hashed)
          try {
            return bcrypt.compareSync(trimmedPassword, u.Password) || u.Password === trimmedPassword;
          } catch (e) {
            return u.Password === trimmedPassword;
          }
        });
        
        if (user) {
          // Success - Set session in localStorage
          localStorage.setItem('admin_session', JSON.stringify({
            userId: user.id,
            email: user.Email,
            userName: user.UserName,
            role: user.Role || 'Administrator',
            timestamp: new Date().getTime()
          }));
          window.location.href = '/dashboard';
        } else {
          setError('Invalid email or password. Please try again.');
        }
      } else {
        setError('Failed to connect to the database.');
      }
    } catch (err: any) {
      console.error(err);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.loginCard}>
        <h2>Login</h2>
        {error && <div className={styles.error}>{error}</div>}
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
          <button type="submit" className={styles.loginBtn} disabled={loading} suppressHydrationWarning>
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
