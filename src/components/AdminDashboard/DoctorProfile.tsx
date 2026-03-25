'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import DataEntryForm from '../DataEntryForm/DataEntryForm';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { auth } from '@/lib/firebase';
import styles from './AdminDashboard.module.css';
import { UserRound, Mail, ShieldCheck } from 'lucide-react';

const DoctorProfile = () => {
    const { user } = useAuth();
    const [doctorData, setDoctorData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchProfile = async () => {
        if (!user?.email) return;
        setLoading(true);
        try {
            const token = await auth.currentUser?.getIdToken();
            const response = await fetch(`/api/doctors?email=${encodeURIComponent(user.email)}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json();
            if (result.success) {
                setDoctorData(result.data);
            } else {
                setError(result.error || 'Failed to fetch profile');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred while fetching profile');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, [user]);

    if (loading) return <LoadingSpinner message="Loading your profile..." />;
    
    if (error) {
        return (
            <div className={styles.errorBox} style={{ margin: '2rem', padding: '2rem', textAlign: 'center' }}>
                <p>{error}</p>
                <button 
                    onClick={fetchProfile}
                    className={styles.submitBtn}
                    style={{ marginTop: '1rem' }}
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileHeader}>
                <div className={styles.profileIdentity}>
                    <div className={styles.profileAvatar}>
                        <UserRound size={40} color="#3b82f6" />
                    </div>
                    <div className={styles.profileTitle}>
                        <h2>My Professional Profile</h2>
                        <p>Manage your personal and professional information</p>
                    </div>
                </div>
                <div className={styles.accountBadge}>
                    <ShieldCheck size={16} />
                    <span>Doctor (Access) Verified</span>
                </div>
            </div>

            <div className={styles.profileContent}>
                <DataEntryForm 
                    mode="edit" 
                    initialData={doctorData} 
                    isModal={false} 
                    onSuccess={fetchProfile}
                    currentUserEmail={user?.email || 'System'}
                />
            </div>
        </div>
    );
};

export default DoctorProfile;
