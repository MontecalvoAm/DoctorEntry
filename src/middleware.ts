import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const session = request.cookies.get('session')?.value;
    console.log(`Middleware path: ${request.nextUrl.pathname}, session: ${session ? 'present' : 'missing'}`);

    // Protect the dashboard
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!session) {
            console.log('Redirecting to /login (no session)');
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // Redirect to dashboard if logged in and trying to access login
    if (request.nextUrl.pathname.startsWith('/login')) {
        if (session) {
            console.log('Redirecting to /dashboard (session exists)');
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*', '/login'],
};
