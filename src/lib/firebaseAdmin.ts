import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                projectId: process.env.FIREBASE_PROJECT_ID_ADMIN,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
        });
        console.log('Firebase Admin initialized successfully');
    } catch (error) {
        console.error('Firebase admin initialization error', error);
    }
}

// Safer exports to avoid crashing if initialization failed
export const adminAuth = admin.apps.length ? admin.auth() : null as any;
export const adminDb = admin.apps.length ? admin.firestore() : null as any;

export const setCustomUserClaims = async (uid: string, role: string) => {
    if (!adminAuth) {
        console.error('adminAuth not initialized');
        return;
    }
    try {
        await adminAuth.setCustomUserClaims(uid, {
            administrator: role === 'Administrator',
            role: role
        });
    } catch (error) {
        console.error('Error setting custom claims:', error);
    }
};
