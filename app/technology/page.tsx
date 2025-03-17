"use client";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
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
  
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        {/* 技术概述 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {t('technology.title') || '我们的技术'}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('technology.subtitle') || '栉云科技拥有一系列先进的AI技术，为智能体提供强大的能力支持'}
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                    {/* <h3 className="text-2xl font-bold text-white">{tech.name}</h3> */}
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
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
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                      {tech.features.map((feature: string) => (
                        <li
                          key={feature}
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
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 研究方向 */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('technology.researchAreas') || '研究方向'}
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('technology.researchDescription') || '我们持续投入研究，推动AI技术的发展和创新'}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {researchAreas.map((area) => (
                <div key={area.name} className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {area.name}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 技术优势 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('technology.advantages') || '技术优势'}
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('technology.advantagesDescription') || '我们的技术具有以下显著优势'}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
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
                {t('technology.advantages.performance') || '高性能'}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t('technology.advantages.performanceDesc') || '我们的技术经过优化，能够高效处理大规模数据和复杂任务，提供快速响应。'}
              </p>
            </div>
            <div className="card p-6">
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
                {t('technology.advantages.reliability') || '高可靠性'}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t('technology.advantages.reliabilityDesc') || '我们的技术经过严格测试和验证，确保在各种场景下稳定可靠地运行。'}
              </p>
            </div>
            <div className="card p-6">
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
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {t('technology.advantages.flexibility') || '灵活扩展'}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t('technology.advantages.flexibilityDesc') || '我们的技术架构灵活可扩展，能够根据需求快速适应不同场景和规模的应用。'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 