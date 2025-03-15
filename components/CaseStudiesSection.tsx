"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function CaseStudiesSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 使用翻译键定义案例研究
  const caseStudies = [
    {
      key: 'finance',
      image: '/images/case-finance.jpg',
      stats: [
        { nameKey: 'satisfaction', valueKey: 'satisfactionValue' },
        { nameKey: 'responseTime', valueKey: 'responseTimeValue' },
        { nameKey: 'costSaving', valueKey: 'costSavingValue' },
      ],
    },
    {
      key: 'manufacturing',
      image: '/images/case-manufacturing.jpg',
      stats: [
        { nameKey: 'efficiency', valueKey: 'efficiencyValue' },
        { nameKey: 'inventory', valueKey: 'inventoryValue' },
        { nameKey: 'accuracy', valueKey: 'accuracyValue' },
      ],
    },
    {
      key: 'education',
      image: '/images/case-education.jpg',
      stats: [
        { nameKey: 'learningEfficiency', valueKey: 'learningEfficiencyValue' },
        { nameKey: 'engagement', valueKey: 'engagementValue' },
        { nameKey: 'workload', valueKey: 'workloadValue' },
      ],
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">{t('caseStudies.title')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            {t('caseStudies.subtitle')}
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.key}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-primary-600 opacity-20 dark:opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                    {t(`caseStudies.${caseStudy.key}.title`)} {t('caseStudies.image')}
                  </div>
                  {/* 实际项目中替换为真实图片 */}
                  <Image
                    src={caseStudy.image}
                    alt={t(`caseStudies.${caseStudy.key}.title`)}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t(`caseStudies.${caseStudy.key}.title`)}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {t(`caseStudies.${caseStudy.key}.description`)}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {caseStudy.stats.map((stat) => (
                    <div key={stat.nameKey} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {t(`caseStudies.${caseStudy.key}.stats.${stat.nameKey}`)}
                      </p>
                      <p className="mt-1 text-2xl font-semibold text-primary-600 dark:text-primary-400">
                        {t(`caseStudies.${caseStudy.key}.stats.${stat.valueKey}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 