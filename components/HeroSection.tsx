"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-secondary-200 dark:bg-secondary-900 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            <span className="block">{t('hero.title1')}</span>
            <span className="block mt-2 text-primary-600 dark:text-primary-400">
              {t('hero.title2')}
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            {t('hero.description')}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center gap-4"
          >
            <Link
              href="/products"
              className="hero-button primary-button"
            >
              {t('hero.exploreProducts')}
            </Link>
            <Link
              href="/demo"
              className="hero-button secondary-button"
            >
              {t('hero.freeTrial')}
            </Link>
          </motion.div>
        </motion.div>

        {/* 特性卡片 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="card p-6"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('features.efficiency')}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {t('features.efficiencyDesc')}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="card p-6"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('features.security')}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {t('features.securityDesc')}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="card p-6"
          >
            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t('features.customization')}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {t('features.customizationDesc')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 