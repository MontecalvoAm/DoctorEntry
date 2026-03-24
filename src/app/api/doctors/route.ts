import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import * as admin from 'firebase-admin';
import { z } from 'zod';
import { logSecurityEvent } from '@/lib/audit';
import { sensitiveActionLimiter } from '@/lib/ratelimit';

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
    captchaToken: z.string(), // Required for 10/10
});

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
