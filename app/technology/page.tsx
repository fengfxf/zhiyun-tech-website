"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useState } from 'react';

// 定义技术和研究领域的类型
interface Technology {
  name: string;
  description: string;
  features: string[];
  image: string;
}

interface ResearchArea {
  name: string;
  description: string;
}

export default function Technology() {
  const { t, locale } = useLanguage();
  
  // 使用状态来存储翻译后的数据
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [researchAreas, setResearchAreas] = useState<ResearchArea[]>([]);
  
  // 为标题和副标题创建视图引用
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [researchRef, researchInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [advantagesRef, advantagesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // 为每个技术创建视图引用
  const [techRef1, techInView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [techRef2, techInView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [techRef3, techInView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [techRef4, techInView4] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // 技术引用数组
  const techRefs = [techRef1, techRef2, techRef3, techRef4];
  const techInViews = [techInView1, techInView2, techInView3, techInView4];
  
  // 当语言变化时更新内容
  useEffect(() => {
    // 技术数据
    const techData = [
      {
        nameKey: 'technology.nlp.name',
        descriptionKey: 'technology.nlp.description',
        featuresKeys: [
          'technology.nlp.features.semanticUnderstanding',
          'technology.nlp.features.sentimentAnalysis',
          'technology.nlp.features.intentRecognition',
          'technology.nlp.features.multilingualSupport',
          'technology.nlp.features.contextualUnderstanding',
          'technology.nlp.features.naturalLanguageGeneration',
        ],
        image: '/images/tech-nlp.jpg',
      },
      {
        nameKey: 'technology.ml.name',
        descriptionKey: 'technology.ml.description',
        featuresKeys: [
          'technology.ml.features.supervisedLearning',
          'technology.ml.features.unsupervisedLearning',
          'technology.ml.features.reinforcementLearning',
          'technology.ml.features.transferLearning',
          'technology.ml.features.federatedLearning',
          'technology.ml.features.continuousLearning',
        ],
        image: '/images/tech-machine-learning.jpg',
      },
      {
        nameKey: 'technology.kg.name',
        descriptionKey: 'technology.kg.description',
        featuresKeys: [
          'technology.kg.features.entityRecognition',
          'technology.kg.features.relationExtraction',
          'technology.kg.features.knowledgeFusion',
          'technology.kg.features.knowledgeReasoning',
          'technology.kg.features.knowledgeUpdate',
          'technology.kg.features.multimodalKnowledge',
        ],
        image: '/images/tech-knowledge-graph.jpg',
      },
      {
        nameKey: 'technology.multimodal.name',
        descriptionKey: 'technology.multimodal.description',
        featuresKeys: [
          'technology.multimodal.features.speechRecognition',
          'technology.multimodal.features.imageRecognition',
          'technology.multimodal.features.videoAnalysis',
          'technology.multimodal.features.multimodalFusion',
          'technology.multimodal.features.contextAwareness',
          'technology.multimodal.features.adaptiveInteraction',
        ],
        image: '/images/tech-multimodal-interaction.jpg',
      },
    ];
    
    // 研究领域数据
    const researchData = [
      {
        nameKey: 'technology.research.llm.name',
        descriptionKey: 'technology.research.llm.description',
      },
      {
        nameKey: 'technology.research.multiagent.name',
        descriptionKey: 'technology.research.multiagent.description',
      },
      {
        nameKey: 'technology.research.xai.name',
        descriptionKey: 'technology.research.xai.description',
      },
      {
        nameKey: 'technology.research.safety.name',
        descriptionKey: 'technology.research.safety.description',
      },
    ];
    
    // 翻译技术数据
    const translatedTech = techData.map(tech => ({
      name: t(tech.nameKey) || '自然语言处理', // 提供默认值防止翻译缺失
      description: t(tech.descriptionKey) || '我们的技术能够理解和生成人类语言，支持多语言交互，准确把握用户意图。',
      features: tech.featuresKeys.map(key => t(key) || '功能'),
      image: tech.image
    }));
    
    // 翻译研究领域数据
    const translatedResearch = researchData.map(area => ({
      name: t(area.nameKey) || '研究领域',
      description: t(area.descriptionKey) || '我们持续投入研究，推动AI技术的发展和创新。',
    }));
    
    setTechnologies(translatedTech);
    setResearchAreas(translatedResearch);
  }, [t, locale]); // 添加locale作为依赖项，确保语言变化时重新执行
  
  // 定义动画变体
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
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
        {/* 技术概述 */}
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
              {t('technology.title') || '我们的技术'}
            </h1>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              {t('technology.subtitle') || '栉云科技拥有一系列先进的AI技术，为智能体提供强大的能力支持'}
            </motion.p>
          </motion.div>

          <div className="mt-16 space-y-16">
            {technologies.map((tech, index) => {
              // 使用预先创建的引用，确保index在范围内
              const techRef = index < techRefs.length ? techRefs[index] : techRefs[0];
              const techInView = index < techInViews.length ? techInViews[index] : false;
              
              return (
                <motion.div
                  key={tech.name}
                  ref={techRef}
                  initial="hidden"
                  animate={techInView ? "visible" : "hidden"}
                  variants={fadeInUp}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <motion.div 
                    className="w-full lg:w-1/2"
                    variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.div 
                      className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </motion.div>
                  <motion.div 
                    className="w-full lg:w-1/2"
                    variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {tech.name}
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                      {tech.description}
                    </p>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {t('technology.coreCapabilities') || '核心能力'}
                      </h3>
                      <motion.ul 
                        className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={techInView ? "visible" : "hidden"}
                      >
                        {tech.features.map((feature: string) => (
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
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 研究方向 */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <motion.div 
              ref={researchRef}
              initial="hidden"
              animate={researchInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('technology.researchAreas') || '研究方向'}
              </h2>
              <motion.p 
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              >
                {t('technology.researchDescription') || '我们持续投入研究，推动AI技术的发展和创新'}
              </motion.p>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate={researchInView ? "visible" : "hidden"}
            >
              {researchAreas.map((area, index) => (
                <motion.div 
                  key={area.name} 
                  className="card p-6"
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {area.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {area.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 技术优势 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            ref={advantagesRef}
            initial="hidden"
            animate={advantagesInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('technology.advantages') || '技术优势'}
            </h2>
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              {t('technology.advantagesDescription') || '我们的技术具有以下显著优势'}
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={advantagesInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="card p-6"
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('technology.advantagesItems.performance') || '高性能'}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t('technology.advantagesItems.performanceDesc') || '我们的技术经过优化，能够高效处理大规模数据和复杂任务，提供快速响应。'}
              </p>
            </motion.div>
            <motion.div 
              className="card p-6"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('technology.advantagesItems.reliability') || '高可靠性'}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t('technology.advantagesItems.reliabilityDesc') || '我们的技术经过严格测试和验证，确保在各种场景下稳定可靠地运行。'}
              </p>
            </motion.div>
            <motion.div 
              className="card p-6"
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('technology.advantagesItems.flexibility') || '灵活扩展'}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t('technology.advantagesItems.flexibilityDesc') || '我们的技术架构灵活可扩展，能够根据需求快速适应不同场景和规模的应用。'}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 