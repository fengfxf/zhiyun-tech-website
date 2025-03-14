"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { signIn, signOut, getCurrentUser } from '../lib/supabase-admin';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const { user, error } = await getCurrentUser();
        if (error) {
          console.error('Error loading user:', error);
          setUser(null);
        } else {
          setUser(user || null);
        }
      } catch (err) {
        console.error('Exception loading user:', err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  async function login(email: string, password: string) {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await signIn(email, password);
      if (error) {
        setError(error.message);
        setUser(null);
      } else {
        setUser(data.user);
      }
    } catch (err) {
      console.error('Exception during login:', err);
      setError('登录过程中发生错误');
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    try {
      const { error } = await signOut();
      if (error) {
        console.error('Error during logout:', error);
      }
      setUser(null);
    } catch (err) {
      console.error('Exception during logout:', err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 