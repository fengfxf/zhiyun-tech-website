"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// 定义产品类型
interface Product {
  name: string;
  description: string;
  features: string[];
  image: string;
}

export default function Products() {
  const { t, locale } = useLanguage();
  
  // 使用状态来存储翻译后的数据
  const [products, setProducts] = useState<Product[]>([]);
  
  // 为标题和副标题创建视图引用
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // 当语言变化时更新内容
  useEffect(() => {
    // 产品数据
    const productData = [
      {
        nameKey: 'products.agent.name',
        descriptionKey: 'products.agent.description',
        featuresKeys: [
          'products.agent.features.nlp',
          'products.agent.features.multimodal',
          'products.agent.features.decision',
          'products.agent.features.automation',
          'products.agent.features.learning',
          'products.agent.features.integration',
        ],
        image: '/images/product-zhiagent.jpg',
      },
      {
        nameKey: 'products.assist.name',
        descriptionKey: 'products.assist.description',
        featuresKeys: [
          'products.assist.features.recommendation',
          'products.assist.features.qa',
          'products.assist.features.schedule',
          'products.assist.features.retrieval',
          'products.assist.features.generation',
          'products.assist.features.multilingual',
        ],
        image: '/images/product-zhiassist.jpg',
      },
      {
        nameKey: 'products.insight.name',
        descriptionKey: 'products.insight.description',
        featuresKeys: [
          'products.insight.features.visualization',
          'products.insight.features.trend',
          'products.insight.features.anomaly',
          'products.insight.features.prediction',
          'products.insight.features.report',
          'products.insight.features.api',
        ],
        image: '/images/product-zhiinsight.jpg',
      },
    ];
    
    // 翻译产品数据
    const translatedProducts = productData.map(product => ({
      name: t(product.nameKey) || product.nameKey.split('.').pop() || 'Product',
      description: t(product.descriptionKey) || '智能产品，提供先进的AI功能。',
      features: product.featuresKeys.map(key => t(key) || key.split('.').pop() || 'Feature'),
      image: product.image
    }));
    
    setProducts(translatedProducts);
  }, [t, locale]); // 添加locale作为依赖项，确保语言变化时重新执行
  
  // 定义动画变体
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            ref={titleRef}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('products.title') || '我们的产品'}
            </h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {t('products.subtitle') || '栉云科技提供一系列先进的AI产品和解决方案，满足不同行业和场景的需求'}
            </motion.p>
          </motion.div>

          <div className="mt-16 space-y-16">
            {products.map((product, index) => {
              // 为每个产品创建视图引用
              const [productRef, productInView] = useInView({
                triggerOnce: true,
                threshold: 0.1,
              });
              
              return (
                <motion.div
                  key={product.name}
                  ref={productRef}
                  initial="hidden"
                  animate={productInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <motion.div 
                    className="w-full lg:w-1/2"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div 
                      className="relative h-64 sm:h-80 rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-primary-600 opacity-20 dark:opacity-40"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                        {product.name} {t('products.image') || '图片'}
                      </div>
                      {/* 实际项目中替换为真实图片 */}
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="w-full lg:w-1/2"
                    variants={fadeInUp}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {product.name}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                      {product.description}
                    </p>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t('products.features') || '主要功能'}
                      </h3>
                      <motion.ul 
                        className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={productInView ? "visible" : "hidden"}
                      >
                        {product.features.map((feature: string) => (
                          <motion.li
                            key={feature}
                            variants={fadeInUp}
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
                            {feature}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                    <motion.div 
                      className="mt-8"
                      variants={fadeInUp}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        {t('common.learnMore') || '了解更多'}
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 