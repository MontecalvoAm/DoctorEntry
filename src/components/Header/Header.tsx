import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 42C24 42 6 30 6 18C6 9.6 14.4 6 24 14.4C33.6 6 42 9.6 42 18C42 30 24 42 24 42Z" stroke="var(--accent-red)" strokeWidth="2.5" fill="none" />
              <path d="M24 14.4V28.8" stroke="var(--accent-green)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M18 21.6H30" stroke="var(--accent-green)" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M14.4 33.6C20.4 39.6 27.6 39.6 33.6 33.6" stroke="var(--neutral-grey)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <div className={styles.textWrapper}>
            <h1 className={styles.brandName}>VISAYASMED</h1>
            <span className={styles.tagline}>Leading with Care, Serving with Excellence</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
