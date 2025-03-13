"use client";

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageToggle() {
  const { locale, changeLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (newLocale: 'zh' | 'en') => {
    changeLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
        aria-label={t('common.language')}
        title={t('common.language')}
      >
        <GlobeAltIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50">
          <div className="py-1">
            <button
              onClick={() => handleLanguageChange('zh')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                locale === 'zh'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              中文
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${
                locale === 'en'
                  ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 