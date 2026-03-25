'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface AuthContextType {
    user: User | null;
    loading: boolean;
    isAdministrator: boolean;
    role: string | null;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    isAdministrator: false,
    role: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAdministrator, setIsAdministrator] = useState(false);
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            console.log('Auth state changed:', user ? 'User logged in' : 'No user');
            setUser(user);
            if (user) {
                // Check for custom claims for secure RBAC (10/10)
                const idTokenResult = await user.getIdTokenResult();
                setIsAdministrator(!!idTokenResult.claims.administrator);
                setRole(idTokenResult.claims.role as string || null);
            } else {
                setIsAdministrator(false);
                setRole(null);
            }
            setLoading(false);
            console.log('Auth loading finished');
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, isAdministrator, role }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
