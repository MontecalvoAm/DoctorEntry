import { NextResponse } from 'next/server';
import { adminDb, adminAuth, setCustomUserClaims } from '@/lib/firebaseAdmin';
import * as admin from 'firebase-admin';
import { z } from 'zod';
import { logSecurityEvent } from '@/lib/audit';
import { sensitiveActionLimiter } from '@/lib/ratelimit';
import crypto from 'crypto';

// Zod Schema for Doctor Registration (A03)
const DoctorSchema = z.object({
    surname: z.string().min(2),
    givenName: z.string().min(2),
    middleName: z.string().optional(),
    specialty: z.string().min(2),
    department: z.string().optional(),
    email: z.string().email(),
    phicNo: z.string().optional(),
    birTan: z.string().optional(),
    contactNo: z.string().optional(),
    prcNumber: z.string().min(1), // Mandatory (A03)
    prcExpiration: z.string().min(1), // Mandatory (A03)
    s2License: z.string().optional(),
    s2Expiration: z.string().optional(),
    captchaToken: z.string(), // Required for 10/10
});

const DoctorUpdateSchema = z.object({
    id: z.string().optional(),
    surname: z.string().min(2).optional(),
    givenName: z.string().min(2).optional(),
    middleName: z.string().optional(),
    specialty: z.string().min(2).optional(),
    department: z.string().optional(),
    email: z.string().email().optional(),
    phicNo: z.string().optional(),
    birTan: z.string().optional(),
    contactNo: z.string().optional(),
    prcNumber: z.string().min(1).optional(),
    prcExpiration: z.string().min(1).optional(),
    s2License: z.string().optional(),
    s2Expiration: z.string().optional(),
    IsActive: z.boolean().optional(),
});

// Helper to verify Firebase ID Token (A01)
async function verifyAuth(request: Request) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return { error: 'Unauthorized: Missing or invalid token', status: 401 };
    }

    const token = authHeader.split('Bearer ')[1];
    try {
        if (!adminAuth) return { error: 'Internal Server Error: Admin SDK not initialized', status: 500 };
        const decodedToken = await adminAuth.verifyIdToken(token);
        return { decodedToken, status: 200 };
    } catch (error) {
        console.error('Token verification failed:', error);
        return { error: 'Unauthorized: Token verification failed', status: 401 };
    }
}

async function verifyRecaptcha(token: string) {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
        console.warn("RECAPTCHA_SECRET_KEY not set. Skipping verification.");
        return { success: true, score: 1.0 };
    }

    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`, {
        method: 'POST',
    });
    return await response.json();
}

export async function GET(request: Request) {
    const { decodedToken, error, status } = await verifyAuth(request);
    if (error) return NextResponse.json({ success: false, error }, { status: status || 401 });

    try {
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email');

        // RBAC: Standard doctors can only fetch their own profile
        if (!decodedToken?.administrator && email && decodedToken?.email !== email) {
            return NextResponse.json({ success: false, error: 'Forbidden: You can only access your own profile' }, { status: 403 });
        }

        const targetEmail = email || decodedToken?.email;
        if (!targetEmail) return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });

        const snapshot = await adminDb.collection('doctors').where('email', '==', targetEmail).limit(1).get();

        if (snapshot.empty) {
            return NextResponse.json({ success: false, error: 'Doctor profile not found' }, { status: 404 });
        }

        const doctorData = { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
        return NextResponse.json({ success: true, data: doctorData });
    } catch (error: any) {
        console.error('Error fetching doctor:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    // 1. Rate Limiting (A04)
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    if (sensitiveActionLimiter) {
        const { success } = await sensitiveActionLimiter.limit(ip);
        if (!success) {
            return NextResponse.json({ success: false, error: 'Too many registration attempts. Please try again later.' }, { status: 429 });
        }
    }

    try {
        const body = await request.json();
        const validatedData = DoctorSchema.safeParse(body);

        if (!validatedData.success) {
            return NextResponse.json({
                success: false,
                error: 'Invalid form data',
                details: validatedData.error.issues
            }, { status: 400 });
        }

        const data = validatedData.data;

        // PRC Expiration Date Validation
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const prcExp = new Date(data.prcExpiration);
        if (prcExp < today) {
            return NextResponse.json({ 
                success: false, 
                error: 'The PRC Expiration Date cannot be in the past. Please provide a valid, current expiration date.' 
            }, { status: 400 });
        }

        // 2. CAPTCHA Verification (A04)
        const recaptcha = await verifyRecaptcha(data.captchaToken);
        if (!recaptcha.success || (recaptcha.score !== undefined && recaptcha.score < 0.5)) {
            await logSecurityEvent({
                action: 'UNAUTHORIZED_ACCESS',
                details: `Bot-like activity detected from ${ip}. Score: ${recaptcha.score || 'N/A'}`,
                performer: 'Guest',
                target: data.email,
            });
            return NextResponse.json({ success: false, error: 'Anti-bot verification failed.' }, { status: 403 });
        }

        // Duplicate checks (NoSQL injection safe via adminDb)
        const emailCheck = await adminDb.collection('doctors')
            .where('email', '==', data.email)
            .limit(1).get();
        if (!emailCheck.empty) {
            return NextResponse.json({ success: false, error: 'A physician with this email address is already registered.' }, { status: 400 });
        }

        if (data.phicNo) {
            const phicCheck = await adminDb.collection('doctors')
                .where('phicNo', '==', data.phicNo)
                .limit(1).get();
            if (!phicCheck.empty) {
                return NextResponse.json({ success: false, error: 'A physician with this PHIC(PMA) NO. is already registered.' }, { status: 400 });
            }
        }

        if (data.birTan) {
            const birCheck = await adminDb.collection('doctors')
                .where('birTan', '==', data.birTan)
                .limit(1).get();
            if (!birCheck.empty) {
                return NextResponse.json({ success: false, error: 'A physician with this BIR-TAN # is already registered.' }, { status: 400 });
            }
        }

        const docRef = await adminDb.collection('doctors').add({
            ...data,
            CreatedAt: admin.firestore.FieldValue.serverTimestamp(),
            UpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
            CreatedBy: 'Public Form',
            UpdatedBy: 'Public Form',
            IsActive: true,
            CreatedFrom: 'Web App',
        });

        // Auto-create system user account if possible
        try {
            // Use the email provided in the registration form
            const emailPart = data.email.toLowerCase();
            
            // Secure, non-predictable random password (A07)
            const generatedPassword = crypto.randomBytes(12).toString('base64');

            const userRecord = await adminAuth.createUser({
                email: emailPart,
                password: generatedPassword,
                displayName: `${data.givenName} ${data.surname}`,
            });

            await adminDb.collection('M_Users').doc(userRecord.uid).set({
                UserName: `${data.givenName} ${data.surname}`,
                Email: emailPart,
                Role: 'Doctor',
                IsActive: true,
                CreatedAt: admin.firestore.FieldValue.serverTimestamp(),
                UpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
                CreatedBy: 'System Auto-Create',
            });

            await setCustomUserClaims(userRecord.uid, 'Doctor');

            await logSecurityEvent({
                action: 'AUTO_CREATE_USER',
                details: `System automatically created account for doctor: ${data.givenName} ${data.surname}`,
                performer: 'System',
                target: emailPart,
            });
        } catch (authError: any) {
            console.error('Error auto-creating user account:', authError);
            await logSecurityEvent({
                action: 'AUTO_CREATE_USER_FAILED',
                details: `Failed to create auto-account for ${data.givenName} ${data.surname}. Reason: ${authError.message}`,
                performer: 'System',
                target: data.email,
            });
        }

        // Log the registration event (A09)
        await logSecurityEvent({
            action: 'CREATE_DOCTOR',
            details: `New doctor registration submitted via public form: ${data.givenName} ${data.surname}`,
            performer: 'Guest',
            target: data.email,
        });

        return NextResponse.json({ success: true, id: docRef.id });
    } catch (error: any) {
        console.error('Error saving doctor data:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    const { decodedToken, error, status } = await verifyAuth(request);
    if (error) return NextResponse.json({ success: false, error }, { status: status || 401 });

    try {
        const body = await request.json();
        const validatedData = DoctorUpdateSchema.safeParse(body);
        if (!validatedData.success) {
            return NextResponse.json({
                success: false,
                error: 'Invalid input data',
                details: validatedData.error.issues
            }, { status: 400 });
        }

        const { id, ...updateData } = validatedData.data;

        // PRC Expiration Date Validation
        if (updateData.prcExpiration) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const prcExp = new Date(updateData.prcExpiration);
            if (prcExp < today) {
                return NextResponse.json({ 
                    success: false, 
                    error: 'The PRC Expiration Date cannot be in the past. Please provide a valid, current expiration date.' 
                }, { status: 400 });
            }
        }

        if (!id) {
            return NextResponse.json({ success: false, error: 'Doctor ID is required' }, { status: 400 });
        }

        const docRef = adminDb.collection('doctors').doc(id);
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            return NextResponse.json({ success: false, error: 'Doctor profile not found' }, { status: 404 });
        }

        const currentDoctor = docSnap.data();

        // RBAC: Standard doctors can only update their own profile
        if (!decodedToken?.administrator && decodedToken?.email !== currentDoctor?.email) {
            await logSecurityEvent({
                action: 'UNAUTHORIZED_ACCESS',
                details: `User attempted to update another doctor's profile. ID: ${id}`,
                performer: decodedToken?.email || 'Unknown',
            });
            return NextResponse.json({ success: false, error: 'Forbidden: You can only update your own profile' }, { status: 403 });
        }

        await docRef.update({
            ...updateData,
            UpdatedAt: admin.firestore.FieldValue.serverTimestamp(),
            UpdatedBy: decodedToken?.email || 'System',
        });

        // Audit Log (A09)
        await logSecurityEvent({
            action: 'UPDATE_DOCTOR',
            details: `Doctor profile updated. Modified fields: ${Object.keys(body).filter(k => k !== 'id').join(', ')}`,
            performer: decodedToken?.email || 'System',
            target: currentDoctor?.email || id,
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Error updating doctor:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
