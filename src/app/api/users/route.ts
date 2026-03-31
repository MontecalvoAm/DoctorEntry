import { NextResponse } from 'next/server';
import { adminAuth, adminDb, setCustomUserClaims } from '@/lib/firebaseAdmin';
import * as admin from 'firebase-admin';
import { z } from 'zod';
import { logSecurityEvent } from '@/lib/audit';
import { globalRateLimiter, sensitiveActionLimiter } from '@/lib/ratelimit';

// Zod Schemas for Input Validation (A03)
const UserCreateSchema = z.object({
    Email: z.string().email(),
    UserName: z.string().min(2),
    Role: z.enum(['Administrator', 'Staff', 'Doctor']),
    Password: z.string().min(8),
});

const UserUpdateSchema = z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
    Email: z.string().email().optional(),
    UserName: z.string().min(2).optional(),
    Role: z.enum(['Administrator', 'Staff', 'Doctor']).optional(),
    Password: z.string().min(8).optional(),
    IsActive: z.boolean().optional(),
});

// Helper to verify Firebase ID Token & Roles (A01)
async function verifyAuth(request: Request, requireAdmin: boolean = true) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { error: 'Unauthorized: Missing or invalid token', status: 401 };
    }

    const token = authHeader.split('Bearer ')[1];
    try {
        const decodedToken = await adminAuth.verifyIdToken(token);

        // RBAC Enforcement (A01)
        if (requireAdmin && !decodedToken.administrator) {
            await logSecurityEvent({
                action: 'UNAUTHORIZED_ACCESS',
                details: `Non-administrator user attempted access to restricted API.`,
                performer: decodedToken.email || 'Unknown',
            });
            return { error: 'Forbidden: Administrator privilege required', status: 403 };
        }

        return { decodedToken, status: 200 };
    } catch (error) {
        console.error('Token verification failed:', error);
        return { error: 'Unauthorized: Token verification failed', status: 401 };
    }
}

export async function GET(request: Request) {
    // Rate Limiting (A04)
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (globalRateLimiter) {
        const { success } = await globalRateLimiter.limit(ip);
        if (!success) {
            return NextResponse.json({ success: false, error: 'Too many requests. Please try again later.' }, { status: 429 });
        }
    }

    const { decodedToken, error, status } = await verifyAuth(request, true); // Require Admin
    if (error) return NextResponse.json({ success: false, error }, { status });

    try {
        const listUsersResult = await adminAuth.listUsers();
        const usersSnapshot = await adminDb.collection('M_Users').get();

        const firestoreUsers = usersSnapshot.docs.reduce((acc: any, doc: any) => {
            acc[doc.get('Email')?.toLowerCase()] = { id: doc.id, ...doc.data() };
            return acc;
        }, {});

        const mergedUsers = listUsersResult.users.map((userRecord: any) => {
            const email = userRecord.email?.toLowerCase() || '';
            const fUser = firestoreUsers[email] || {};
            const { Password, ...safeFUser } = fUser;

            // Normalize Firestore Timestamps to ISO strings (A09)
            const normalizeDate = (val: any) => {
                if (!val) return null;
                if (val.toDate) return val.toDate().toISOString();
                if (val._seconds) return new Date(val._seconds * 1000).toISOString();
                return val;
            };

            return {
                ...safeFUser,
                uid: userRecord.uid,
                Email: userRecord.email || fUser.Email || '',
                UserName: userRecord.displayName || fUser.UserName || 'System User',
                Role: fUser.Role || 'Administrator',
                IsActive: fUser.IsActive !== undefined ? fUser.IsActive : !userRecord.disabled,
                CreatedAt: normalizeDate(fUser.CreatedAt) || userRecord.metadata.creationTime,
                UpdatedAt: normalizeDate(fUser.UpdatedAt) || userRecord.metadata.lastSignInTime,
                _existsInFirestore: !!fUser.id // Flag to indicate it has a profile
            };
        }).filter((u: any) => u.Email && u._existsInFirestore); // Only show users with a registered profile

        return NextResponse.json({ success: true, data: mergedUsers });
    } catch (error: any) {
        console.error('Error fetching users:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    // Rate Limiting (A04)
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (sensitiveActionLimiter) {
        const { success } = await sensitiveActionLimiter.limit(ip);
        if (!success) {
            return NextResponse.json({ success: false, error: 'Too many attempts. Please try again later.' }, { status: 429 });
        }
    }

    const { decodedToken, error, status } = await verifyAuth(request, true); // Require Admin
    if (error) return NextResponse.json({ success: false, error }, { status });

    try {
        const body = await request.json();

        // Input Validation (A03)
        const validatedData = UserCreateSchema.safeParse(body);
        if (!validatedData.success) {
            return NextResponse.json({
                success: false,
                error: 'Invalid input data',
                details: validatedData.error.issues
            }, { status: 400 });
        }

        const { Email, UserName, Role, Password } = validatedData.data;

        const userRecord = await adminAuth.createUser({
            email: Email,
            password: Password,
            displayName: UserName,
        });

        const userData: any = {
            UserName,
            Email: Email.toLowerCase(),
            Role,
            IsActive: true,
            CreatedAt: admin.firestore.FieldValue.serverTimestamp(),
            UpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
            CreatedBy: decodedToken?.email || 'Admin',
        };

        await adminDb.collection('M_Users').doc(userRecord.uid).set(userData);

        await setCustomUserClaims(userRecord.uid, Role);

        // Audit Log (A09)
        await logSecurityEvent({
            action: 'CREATE_USER',
            details: `Admin created new user with role: ${Role}`,
            performer: decodedToken?.email || 'Admin',
            target: Email,
        });

        return NextResponse.json({ success: true, user: userRecord });
    } catch (error: any) {
        console.error('Error creating user:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    // Rate Limiting (A04)
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (sensitiveActionLimiter) {
        const { success } = await sensitiveActionLimiter.limit(ip);
        if (!success) {
            return NextResponse.json({ success: false, error: 'Too many attempts. Please try again later.' }, { status: 429 });
        }
    }

    const { decodedToken, error, status } = await verifyAuth(request, true); // Require Admin
    if (error) return NextResponse.json({ success: false, error }, { status });

    try {
        const body = await request.json();

        // Input Validation (A03)
        const validatedData = UserUpdateSchema.safeParse(body);
        if (!validatedData.success) {
            return NextResponse.json({
                success: false,
                error: 'Invalid input data',
                details: validatedData.error.issues
            }, { status: 400 });
        }

        const { id, uid, Email, UserName, Role, Password, IsActive } = validatedData.data;
        const targetUid = uid || id;

        if (!targetUid) {
            return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
        }

        const authUpdate: any = {};
        if (Email) authUpdate.email = Email.toLowerCase();
        if (Password) authUpdate.password = Password;
        if (UserName) authUpdate.displayName = UserName;
        if (IsActive !== undefined) authUpdate.disabled = !IsActive;

        if (Object.keys(authUpdate).length > 0) {
            await adminAuth.updateUser(targetUid, authUpdate);
        }

        const firestoreUpdate: any = {
            UpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
            UpdatedBy: decodedToken?.email || 'Admin',
        };
        if (Email) firestoreUpdate.Email = Email.toLowerCase();
        if (UserName) firestoreUpdate.UserName = UserName;
        if (Role) firestoreUpdate.Role = Role;
        if (IsActive !== undefined) firestoreUpdate.IsActive = IsActive;

        await adminDb.collection('M_Users').doc(targetUid).update(firestoreUpdate);

        if (Role) {
            await setCustomUserClaims(targetUid, Role);
        }

        // Audit Log (A09)
        await logSecurityEvent({
            action: 'UPDATE_USER',
            details: `Admin updated user. Modified fields: ${Object.keys(body).filter(k => k !== 'Password').join(', ')}`,
            performer: decodedToken?.email || 'Admin',
            target: Email || targetUid,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Error updating user:', error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
