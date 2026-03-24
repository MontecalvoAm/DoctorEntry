import { adminAuth } from '@/lib/firebaseAdmin';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
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

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Session cookie creation failed:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
