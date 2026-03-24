import React from 'react';
import styles from './StatusModal.module.css';
import { CheckCircle, AlertCircle, XCircle, X } from 'lucide-react';

interface StatusModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'success' | 'error';
    title: string;
    message: string;
    buttonText?: string;
}

const StatusModal: React.FC<StatusModalProps> = ({
    isOpen,
    onClose,
    type,
    title,
    message,
    buttonText = 'Close'
}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <X size={20} />
                </button>

                <div className={styles.content}>
                    <div className={`${styles.iconWrapper} ${styles[type]}`}>
                        {type === 'success' ? (
                            <CheckCircle size={48} className={styles.icon} />
                        ) : (
                            <AlertCircle size={48} className={styles.icon} />
                        )}
                    </div>

                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.message}>{message}</p>

                    <button
                        className={`${styles.actionBtn} ${styles[type + 'Btn']}`}
                        onClick={onClose}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StatusModal;
