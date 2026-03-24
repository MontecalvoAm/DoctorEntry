import { adminDb } from './firebaseAdmin';
import * as admin from 'firebase-admin';

export interface AuditLogEntry {
    action: 'CREATE_USER' | 'UPDATE_USER' | 'DELETE_USER' | 'LOGIN' | 'UNAUTHORIZED_ACCESS' | 'CREATE_DOCTOR' | 'AUTO_CREATE_USER' | 'AUTO_CREATE_USER_FAILED';
    details: string;
    performer: string; // Email or UID
    target?: string;   // Affected user/resource
    ip?: string;
    timestamp?: any;
}

/**
 * Logs a security or administrative event to Firestore for auditing.
 */
export const logSecurityEvent = async (entry: AuditLogEntry) => {
    try {
        await adminDb.collection('AuditLogs').add({
            ...entry,
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });
    } catch (error) {
        console.error('Failed to write audit log:', error);
    }
};
