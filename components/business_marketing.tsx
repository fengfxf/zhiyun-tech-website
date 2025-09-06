'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';

// 动画变体定义
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const BusinessMarketing: React.FC = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [productRef, productInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [compareRef, compareInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [devRef, devInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [whyUsRef, whyUsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // 设置页面标题和元数据
  useEffect(() => {
    document.title = "企业数字化转型解决方案 - 智能体与低代码开发专家 | 栉云科技";
    
    // 添加元描述
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '栉云科技提供定制化企业数字化转型解决方案，融合AI智能体、低代码PAAS平台、CRM/ERP/MES系统/小程序/APP开发，助力企业全链路智能升级。');
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', '栉云科技提供定制化企业数字化转型解决方案，融合AI智能体、低代码PAAS平台、CRM/ERP/MES系统/小程序/APP开发，助力企业全链路智能升级。');
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-900 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-60 h-60 bg-secondary-200 dark:bg-secondary-900 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* 顶部横幅 */}
        <motion.section 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="hero-section mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8"
          >
            <span className="text-primary-600 dark:text-primary-400">企业数字化转型解决方案</span>
          </motion.h1>
          <motion.div 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl"
          >
            <p className="mb-4">公司定位：我们不仅是软件开发者，更是您企业的<strong>数字化战略合作伙伴</strong>。</p>
            <p>我们整合<strong>Agent（智能体）、AI助手、数据洞察（Insight）</strong>与<strong>核心业务系统（CRM/ERP/MES）</strong>，基于强大的<strong>低代码PAAS平台</strong>，为您快速构建定制化的<strong>小程序与APP</strong>，驱动业务全链路智能升级。</p>
          </motion.div>
        </motion.section>

        {/* 产品矩阵部分 */}
        <motion.section 
          ref={productRef}
          variants={containerVariants}
          initial="hidden"
          animate={productInView ? 'visible' : 'hidden'}
          className="product-matrix mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-primary-200 dark:border-primary-800"
          >
            一、全能产品矩阵 - 满足您的全方位数字化需求
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">1. 智能核心（AI Core）</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>AI智能助手与Agent：</strong>部署于您业务流中的"数字员工"，能自主处理任务、跨系统协调、提供预测性建议。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>数据洞察（Insight）：</strong>打通所有系统数据孤岛，通过机器学习模型，将历史数据转化为前瞻性的<strong>业务洞察</strong>。</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">2. 业务基石（Business Foundation）</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>CRM（客户关系管理）：</strong>智能型CRM，集成AI助手，自动评分线索、推荐最佳跟进策略。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>ERP（企业资源计划）：</strong>现代化云ERP，强调流程自动化与实时数据，助力精准决策。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>MES（制造执行系统）：</strong>连接管理层与车间层，实现生产全流程透明化管理。</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">3. 开发引擎（Development Engine）</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>低代码开发平台：</strong>允许您的业务人员通过拖拽方式构建简单应用，极大释放IT资源。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>PAAS平台：</strong>提供强大的后端即服务（BaaS）、数据库、中间件和API管理，是所有定制化开发的<strong>技术基石</strong>。</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">4. 前端触达（Front-End Touch）</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>小程序 & APP开发：</strong>基于强大平台，以更快的速度、更低的成本，开发出体验卓越的移动端应用。</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* 对比表格部分 */}
        <motion.section 
          ref={compareRef}
          variants={containerVariants}
          initial="hidden"
          animate={compareInView ? 'visible' : 'hidden'}
          className="comparison-section mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-primary-200 dark:border-primary-800"
          >
            二、客户最关心的参数对比
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-300 mb-8 italic"
          >
            为了让您更清晰地评估我们的价值，我们提供以下权威对比分析：
          </motion.p>
          
          <motion.div variants={itemVariants} className="overflow-x-auto">
            <div className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <table className="w-full text-left">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="py-4 px-6 rounded-tl-xl">项目</th>
                    <th className="py-4 px-6">我们的定制化方案</th>
                    <th className="py-4 px-6">传统外包开发</th>
                    <th className="py-4 px-6 rounded-tr-xl">标准SaaS产品</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-850' : 'bg-white dark:bg-gray-800'}>
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">{row.title}</td>
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                        <div dangerouslySetInnerHTML={{ __html: row.ourSolution || '' }} />
                        {row.ourRating && (
                          <div className="mt-2 text-yellow-500">
                            {'★'.repeat(row.ourRating)}{'☆'.repeat(5 - row.ourRating)}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                        <div dangerouslySetInnerHTML={{ __html: row.traditional || '' }} />
                        {row.traditionalRating && (
                          <div className="mt-2 text-yellow-500">
                            {'★'.repeat(row.traditionalRating)}{'☆'.repeat(5 - row.traditionalRating)}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">
                        <div dangerouslySetInnerHTML={{ __html: row.standardSaaS || '' }} />
                        {row.standardSaaSRating && (
                          <div className="mt-2 text-yellow-500">
                            {'★'.repeat(row.standardSaaSRating)}{'☆'.repeat(5 - row.standardSaaSRating)}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">权威结论：</h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>选择<strong>标准SaaS</strong>适用于通用、简单的业务场景，追求快速上线和最低成本，但牺牲了定制性和数据控制权。</p>
              <p>选择<strong>传统外包</strong>适用于有巨额预算且需求极其复杂稳定的超大型项目，但面临周期长、风险高、后期运维难的挑战。</p>
              <p>选择<strong>我们的方案</strong>，您是在投资一个<strong>"活"的数字化生态系统</strong>。它兼具<strong>定制化的深度</strong>与<strong>平台化的效率</strong>，尤其适合追求<strong>长期数字化转型、希望用数据智能驱动业务增长</strong>的中大型企业。</p>
            </div>
          </motion.div>
        </motion.section>

        {/* 开发与运维详情部分 */}
        <motion.section 
          ref={devRef}
          variants={containerVariants}
          initial="hidden"
          animate={devInView ? 'visible' : 'hidden'}
          className="development-section mb-20"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-primary-200 dark:border-primary-800"
          >
            三、开发与运维详情
          </motion.h2>
          
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">1. 开发流程与周期（典型项目）</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>需求调研与方案设计（1-2个月）：</strong>与您的业务团队深度协作，明确痛点，输出权威的《业务蓝图与技术方案》。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>敏捷开发与迭代（2-4个月）：</strong>基于低代码PAAS平台，以2周为一个冲刺周期，持续交付可用的功能模块。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>测试与上线（1个月）：</strong>进行UAT（用户验收测试）、压力测试及数据迁移，确保平稳上线。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>总周期：</strong><strong>4-7个月</strong>，即可完成一个从CRM到小程序端的全面数字化转型项目。</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">2. 开发费用构成</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">费用并非模糊报价，而是基于透明的模块化结构：</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>PAAS平台授权费：</strong>一次性或年费，是效率的基石。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>业务模块开发费：</strong>（如：CRM模块、MES模块、AI助手功能），按人天计算。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>第三方服务费：</strong>（如：短信、云服务器、特定AI接口）。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>项目实施费：</strong>项目经理、架构师等高阶资源投入。</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-700 dark:text-gray-300">我们提供<strong>固定总价合同</strong>或<strong>时间与材料合同</strong>，最大限度控制您的预算风险。</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">3. 运维维护（成功上线后的保障）</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>运维周期：</strong>通常以<strong>年</strong>为单位签订服务协议，提供7x24小时不同等级的技术支持。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>运维费用：</strong>约为<strong>项目初开发成本的15%-20%/年</strong>。</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span><strong>服务内容包含：</strong>
                    <ul className="ml-8 mt-2 space-y-1 list-disc">
                      <li><strong>系统监控与保障：</strong>保证系统99.9%的可用性。</li>
                      <li><strong>定期安全更新与漏洞修补：</strong>抵御外部威胁。</li>
                      <li><strong>日常问题解答与故障排除：</strong>专属技术支持渠道。</li>
                      <li><strong>小幅业务优化与升级：</strong>适应业务的微调。</li>
                      <li><strong>技术运营报告：</strong>定期提供系统健康度和性能报告。</li>
                    </ul>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* 为什么选择我们部分 */}
        <motion.section 
          ref={whyUsRef}
          variants={containerVariants}
          initial="hidden"
          animate={whyUsInView ? 'visible' : 'hidden'}
          className="why-us-section"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 pb-2 border-b border-primary-200 dark:border-primary-800"
          >
            四、为什么选择我们？权威性的基石
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">1. 方法论权威</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">我们遵循国际先进的<strong>敏捷开发（Agile）</strong>与<strong>DevOps</strong>理念，确保项目高质量交付。</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">2. 技术栈权威</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">我们采用业界主流且前沿的技术（如：Kubernetes, Docker, React, Spring Cloud, TensorFlow等），保证系统未来5-10年的技术生命力。</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">3. 案例权威</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">我们已为多个行业的领先企业成功交付了整合项目，并取得了显著效益——我们有详细的<strong>案例研究（Case Study）</strong>可供您参考。</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mr-3">
                  <svg className="h-5 w-5 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400">4. 合作模式权威</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">我们倡导<strong>"共建共营"</strong>模式，不仅是卖给您的软件，更是派驻专家团队，将我们的技术能力和您的业务知识深度融合，共同成长。</p>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30 p-8 rounded-xl text-center"
          >
            <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">下一步行动建议</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto">
              我们诚挚邀请您参与一场为期半天的<strong>【数字化转型工作坊】</strong>。我们将派架构师和业务顾问团队，与您一同梳理核心需求，并为您输出一份初步的、具有高度可行性的《技术方案与投资回报率（ROI）分析报告》——<strong>这一切都是免费的</strong>，旨在让您毫无压力地评估我们的价值。
            </p>
          </motion.div>
        </motion.section>

        {/* 页脚 */}
        <motion.footer 
          variants={itemVariants}
          className="mt-20 text-center text-gray-500 dark:text-gray-400 text-sm"
        >
          <p>最后修订日期：2023年10月27日</p>
          <p className="mt-2">注意：本文档中所有费用和周期均为基于中等复杂度项目的估算，最终价格需根据您的具体需求进行评估。所有技术名称和商标均归于其各自所有者。</p>
        </motion.footer>
      </div>
    </div>
  );
};

// 对比表格数据
const comparisonData = [
  {
    title: "核心优势",
    ourSolution: "<strong>量身定制、高度集成、数据驱动、AI赋能</strong>",
    traditional: "功能满足度高",
    standardSaaS: "<strong>开箱即用、成本最低</strong>"
  },
  {
    title: "开发周期",
    ourSolution: "<strong>中速 (2-6个月)</strong><br/>（得益于低代码PAAS平台，效率提升50%+）",
    traditional: "<strong>漫长 (6-18个月+)</strong><br/>（从零开始，风险不可控）",
    standardSaaS: "<strong>极速 (1-4周)</strong><br/>（仅需配置和培训）"
  },
  {
    title: "一次性开发费用",
    ourSolution: "<strong>中高 (20万 - 200万+ RMB)</strong><br/>（分阶段付费，价值与投入成正比）",
    traditional: "<strong>极高 (50万 - 500万+ RMB)</strong><br/>（人力成本高，需求变更代价大）",
    standardSaaS: "<strong>低 (几千 - 几十万/年)</strong><br/>（按年订阅，无初始开发费）"
  },
  {
    title: "运维费用（年）",
    ourSolution: "<strong>合同额的15%-20%</strong><br/>（含系统维护、安全升级、技术支持、小功能优化）",
    traditional: "<strong>不确定，高昂</strong><br/>（需自行组建团队或高价购买服务）",
    standardSaaS: "<strong>订阅费的10%-20%</strong><br/>（或已包含在订阅费中）"
  },
  {
    title: "灵活性/扩展性",
    ourSolution: "完全可定制，随业务发展灵活扩展",
    traditional: "修改成本高，扩展周期长",
    standardSaaS: "功能固定，难以满足个性化需求",
    ourRating: 5,
    traditionalRating: 2,
    standardSaaSRating: 2
  },
  {
    title: "数据所有权与安全",
    ourSolution: "数据完全归客户所有，提供企业级安全保障",
    traditional: "数据归客户所有，但需自行负责安全",
    standardSaaS: "数据存储在服务商服务器，存在隐私风险",
    ourRating: 5,
    traditionalRating: 5,
    standardSaaSRating: 1
  },
  {
    title: "与现有系统集成度",
    ourRating: 5,
    traditionalRating: 3,
    standardSaaSRating: 2
  },
  {
    title: "AI与自动化能力",
    ourRating: 5,
    traditionalRating: 1,
    standardSaaSRating: 2
  }
];

export default BusinessMarketing;