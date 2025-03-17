"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from '../locales';

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => string;
  changeLocale: (newLocale: Locale) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 初始化时检查本地存储
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && (savedLocale === 'zh' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
    setIsLoading(false);
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // 翻译函数
  const t = (key: string): string => {
    if (isLoading) {
      return ''; // 加载中返回空字符串
    }

    const keys = key.split('.');
    let current: any = translations[locale];
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        console.warn(`Translation not found for key: ${key}`);
        return key; // 如果找不到翻译，返回原始键
      }
    }
    
    return typeof current === 'string' ? current : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, t, changeLocale, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 