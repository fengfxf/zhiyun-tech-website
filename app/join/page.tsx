'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// 定义类型
interface Position {
  title: string;
  department: string;
  location: string;
  requirements: string[];
}

interface Benefit {
  title: string;
  description: string;
}

export default function Join() {
  const { t, locale } = useLanguage();
  
  // 使用状态来存储翻译后的数据
  const [positions, setPositions] = useState<Position[]>([]);
  const [benefits, setBenefits] = useState<Benefit[]>([]);

  // 当语言变化时更新内容
  useEffect(() => {
    // 职位数据
    const positionData = [
      {
        titleKey: 'join.positions.position1.title',
        departmentKey: 'join.positions.position1.department',
        locationKey: 'join.positions.position1.location',
        requirementsKeys: [
          'join.positions.position1.requirements.req1',
          'join.positions.position1.requirements.req2',
          'join.positions.position1.requirements.req3',
          'join.positions.position1.requirements.req4',
        ],
      },
      {
        titleKey: 'join.positions.position2.title',
        departmentKey: 'join.positions.position2.department',
        locationKey: 'join.positions.position2.location',
        requirementsKeys: [
          'join.positions.position2.requirements.req1',
          'join.positions.position2.requirements.req2',
          'join.positions.position2.requirements.req3',
          'join.positions.position2.requirements.req4',
        ],
      },
    ];

    // 福利数据
    const benefitData = [
      {
        titleKey: 'join.benefits.benefit1.title',
        descriptionKey: 'join.benefits.benefit1.description',
      },
      {
        titleKey: 'join.benefits.benefit2.title',
        descriptionKey: 'join.benefits.benefit2.description',
      },
      {
        titleKey: 'join.benefits.benefit3.title',
        descriptionKey: 'join.benefits.benefit3.description',
      },
    ];

    // 翻译职位数据
    const translatedPositions = positionData.map(position => ({
      title: t(position.titleKey) || '职位名称',
      department: t(position.departmentKey) || '部门',
      location: t(position.locationKey) || '地点',
      requirements: position.requirementsKeys.map(key => t(key) || '要求'),
    }));

    // 翻译福利数据
    const translatedBenefits = benefitData.map(benefit => ({
      title: t(benefit.titleKey) || '福利标题',
      description: t(benefit.descriptionKey) || '福利描述',
    }));

    setPositions(translatedPositions);
    setBenefits(translatedBenefits);
  }, [t, locale]);

  // 添加视图引用
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [benefitsRef, benefitsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [positionsRef, positionsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 定义动画变体
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardHoverEffect = {
    rest: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 }
    },
    tap: { scale: 0.98 }
  };

  const iconHoverEffect = {
    rest: { rotate: 0 },
    hover: { 
      rotate: 360,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const buttonHoverEffect = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        {/* 页面标题 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
            >
              {t('join.title') || '加入我们'}
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {t('join.description') || '与我们一起探索AI的无限可能，创造改变世界的产品'}
            </motion.p>
          </motion.div>
        </div>

        {/* 福利待遇 */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <motion.div 
              ref={benefitsRef}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 dark:text-white"
              >
                {t('join.benefits.title') || '福利待遇'}
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {t('join.benefits.subtitle') || '我们为员工提供具有竞争力的薪酬和福利'}
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit.title} 
                  className="card p-6 bg-white dark:bg-gray-800 rounded-lg"
                  variants={fadeInUp}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  animate="rest"
                  custom={index}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4"
                    variants={iconHoverEffect}
                  >
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 职位列表 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            ref={positionsRef}
            initial="hidden"
            animate={positionsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 dark:text-white"
            >
              {t('join.positions.title') || '开放职位'}
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {t('join.positions.subtitle') || '寻找适合你的职位'}
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-12 space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate={positionsInView ? "visible" : "hidden"}
          >
            {positions.map((position, index) => (
              <motion.div 
                key={position.title} 
                className="card p-6 bg-white dark:bg-gray-800 rounded-lg"
                variants={cardHoverEffect}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                custom={index}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {position.title}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      {position.department} · {position.location}
                    </p>
                  </div>
                  <motion.button
                    variants={buttonHoverEffect}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    className="mt-4 md:mt-0 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {t('join.positions.apply') || '立即申请'}
                  </motion.button>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {t('join.positions.requirements') || '职位要求'}
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <motion.li 
                        key={reqIndex}
                        variants={fadeInLeft}
                        custom={reqIndex}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {requirement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 
