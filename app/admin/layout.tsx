"use client";

import { AuthProvider } from '../../contexts/AuthContext';
import { usePathname } from 'next/navigation';
import '../../styles/globals.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {children}
      </div>
    </AuthProvider>
  );
} 