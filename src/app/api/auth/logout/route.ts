import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { logSecurityEvent } from '@/lib/audit';

export async function POST(request: Request) {
    try {
        const cookieStore = await cookies();
        cookieStore.delete('session');
        
        await logSecurityEvent({
            action: 'UPDATE_USER', 
            details: 'User logged out',
            performer: 'User',
            ip: request.headers.get('x-forwarded-for') || '127.0.0.1'
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
