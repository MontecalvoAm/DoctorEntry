import AdminLogin from '@/components/AdminLogin/AdminLogin';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login | VisayasMed Physician Registry',
  description: 'Sign in to access the Physician Registry admin dashboard.',
};

export default function AdminLoginPage() {
  return (
    <main>
      <AdminLogin />
    </main>
  );
}
