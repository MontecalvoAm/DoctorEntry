import AdminDashboard from '@/components/AdminDashboard/AdminDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard | VisayasMed Physician Registry',
  description: 'Manage doctor registrations and system users.',
};

export default function AdminPage() {
  return (
    <main>
      <AdminDashboard />
    </main>
  );
}
