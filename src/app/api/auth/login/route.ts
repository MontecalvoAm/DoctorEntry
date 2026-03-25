import { adminAuth } from '@/lib/firebaseAdmin';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { globalRateLimiter } from '@/lib/ratelimit';
import { logSecurityEvent } from '@/lib/audit';

export async function POST(request: Request) {
    try {
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        
        // Rate Limiting (A04)
        if (globalRateLimiter) {
            const { success } = await globalRateLimiter.limit(ip);
            if (!success) {
                return NextResponse.json({ error: 'Too many login attempts. Please try again later.' }, { status: 429 });
            }
        }

        const { idToken } = await request.json();

        if (!idToken) {
            return NextResponse.json({ error: 'ID Token is required' }, { status: 400 });
        }

        // Set session expiration up to 5 days
        const expiresIn = 60 * 60 * 24 * 5 * 1000;

        if (!adminAuth) {
            console.error('Firebase Admin Auth not initialized. Check your credentials.');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        // Create the session cookie
        const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

        const cookieStore = await cookies();
        cookieStore.set('session', sessionCookie, {
            maxAge: expiresIn,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: '/',
            sameSite: 'lax',
        });

        // Audit Log (A09)
        const decodedToken = await adminAuth.verifySessionCookie(sessionCookie);
        await logSecurityEvent({
            action: 'LOGIN',
            performer: decodedToken.email || decodedToken.uid,
            details: 'Successful user login via Session Cookie',
            ip: ip
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Session cookie creation failed:', error);
        
        // Log failed attempt if it was a token issue (A09)
        const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
        await logSecurityEvent({
            action: 'UNAUTHORIZED_ACCESS',
            performer: 'Unknown',
            details: `Failed login attempt: ${error.message}`,
            ip: ip
        });

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
