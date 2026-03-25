'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import styles from './AdminDashboard.module.css';
import { UserRound, Mail, ShieldCheck, Calendar, Clock } from 'lucide-react';

const AdminProfile = () => {
    const { user, role, isAdministrator } = useAuth();

    const formatDate = (dateStr: string | undefined) => {
        if (!dateStr) return 'N/A';
        const date = new Date(dateStr);
        return isNaN(date.getTime()) ? 'N/A' : date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className={styles.profileWrapper}>
            <div className={styles.profileHeader}>
                <div className={styles.profileIdentity}>
                    <div className={styles.profileAvatar}>
                        <UserRound size={40} color="#3b82f6" />
                    </div>
                    <div className={styles.profileTitle}>
                        <h2>My Admin Account Settings</h2>
                        <p>Manage your system user account information</p>
                    </div>
                </div>
                <div className={styles.accountBadge}>
                    <ShieldCheck size={16} />
                    <span>{role || 'System'} Account Verified</span>
                </div>
            </div>

            <div className={styles.profileContent}>
                <div className={styles.infoGrid} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', padding: '1rem' }}>
                    <div className={styles.infoCard} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#1e40af' }}>
                            <UserRound size={20} />
                            <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>Basic Information</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase' }}>Full Name / Username</label>
                                <div style={{ fontSize: '1rem', fontWeight: 500, color: '#1e293b' }}>{user?.displayName || 'N/A'}</div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase' }}>Email Address</label>
                                <div style={{ fontSize: '1rem', fontWeight: 500, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Mail size={16} color="#64748b" />
                                    {user?.email}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoCard} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#1e40af' }}>
                            <ShieldCheck size={20} />
                            <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>System Permissions</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase' }}>Account Role</label>
                                <div style={{ 
                                    display: 'inline-block',
                                    padding: '4px 12px',
                                    background: isAdministrator ? '#dcfce7' : '#f1f5f9',
                                    color: isAdministrator ? '#166534' : '#475569',
                                    borderRadius: '9999px',
                                    fontSize: '0.875rem',
                                    fontWeight: 600
                                }}>
                                    {role}
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase' }}>Account ID</label>
                                <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', color: '#64748b' }}>{user?.uid}</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoCard} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', color: '#1e40af' }}>
                            <Calendar size={20} />
                            <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>Session Details</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase' }}>Account Created</label>
                                <div style={{ fontSize: '0.875rem', color: '#1e293b' }}>{formatDate(user?.metadata.creationTime)}</div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', fontWeight: 600, marginBottom: '0.25rem', textTransform: 'uppercase' }}>Last Sign In</label>
                                <div style={{ fontSize: '0.875rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Clock size={14} color="#64748b" />
                                    {formatDate(user?.metadata.lastSignInTime)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1', textAlign: 'center' }}>
                    <p style={{ color: '#64748b', fontSize: '0.875rem' }}>To update your administrative account information, please contact the System Administrator.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
