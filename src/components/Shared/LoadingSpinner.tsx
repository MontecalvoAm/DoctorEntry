import React from 'react';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
    message?: string;
    fullPage?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    message = 'Processing...',
    fullPage = false
}) => {
    return (
        <div className={`${styles.spinnerWrapper} ${fullPage ? styles.fullPage : ''}`}>
            <div className={styles.spinner}></div>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default LoadingSpinner;
