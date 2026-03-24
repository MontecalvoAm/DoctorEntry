import { adminAuth, adminDb } from './firebaseAdmin';
import * as admin from 'firebase-admin';

/**
 * Creates the initial admin user in Firebase Auth and Firestore.
 * Run this once to set up the system.
 */
export const seedAdminUser = async (email: string, password: string, userName: string) => {
    console.log(`Seeding admin user: ${email}...`);

    try {
        // 1. Create in Firebase Auth
        const userRecord = await adminAuth.createUser({
            email,
            password,
            displayName: userName,
        });

        // 2. Create metadata in Firestore
        await adminDb.collection('M_Users').doc(userRecord.uid).set({
            UserName: userName,
            Email: email.toLowerCase(),
            Role: 'Administrator',
            IsActive: true,
            CreatedAt: admin.firestore.FieldValue.serverTimestamp(),
            UpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
            CreatedBy: 'System Seed',
        });

        // 3. Set Custom Claims for RBAC (10/10 OWASP)
        await adminAuth.setCustomUserClaims(userRecord.uid, {
            administrator: true,
            role: 'Administrator'
        });

        console.log('Admin user seeded and claims set successfully!');
        return { success: true, uid: userRecord.uid };
    } catch (error: any) {
        if (error.code === 'auth/email-already-exists') {
            console.log('Admin user already exists in Firebase Auth.');
            return { success: true, message: 'Already exists' };
        }
        console.error('Error seeding admin user:', error);
        return { success: false, error: error.message };
    }
};
