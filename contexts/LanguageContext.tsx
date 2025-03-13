"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Locale } from '../locales';

interface LanguageContextType {
  locale: Locale;
  t: (key: string) => string;
  changeLocale: (newLocale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('zh');

  useEffect(() => {
    // 初始化时检查本地存储
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && (savedLocale === 'zh' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  // 翻译函数
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // 如果找不到翻译，返回原始键
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, t, changeLocale }}>
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