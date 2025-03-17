'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import { useEffect, useState } from 'react';

// 定义职位和福利的类型
interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  id: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Careers() {
  const { t, locale } = useLanguage();
  
  // 使用状态来存储翻译后的数据
  const [jobOpenings, setJobOpenings] = useState<JobOpening[]>([]);
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [career, setCareer] = useState({ title: '', description: '', image: '' });
  
  // 当语言变化时更新内容
  useEffect(() => {
    // 职位数据
    const jobData = [
      {
        titleKey: 'careers.jobs.job1.title',
        departmentKey: 'careers.jobs.job1.department',
        locationKey: 'careers.jobs.job1.location',
        typeKey: 'careers.jobs.job1.type',
        descriptionKey: 'careers.jobs.job1.description',
        requirementsKeys: [
          'careers.jobs.job1.requirements.req1',
          'careers.jobs.job1.requirements.req2',
          'careers.jobs.job1.requirements.req3',
          'careers.jobs.job1.requirements.req4',
          'careers.jobs.job1.requirements.req5',
        ],
        id: 'ai-researcher',
      },
      {
        titleKey: 'careers.jobs.job2.title',
        departmentKey: 'careers.jobs.job2.department',
        locationKey: 'careers.jobs.job2.location',
        typeKey: 'careers.jobs.job2.type',
        descriptionKey: 'careers.jobs.job2.description',
        requirementsKeys: [
          'careers.jobs.job2.requirements.req1',
          'careers.jobs.job2.requirements.req2',
          'careers.jobs.job2.requirements.req3',
          'careers.jobs.job2.requirements.req4',
          'careers.jobs.job2.requirements.req5',
        ],
        id: 'ai-engineer',
      },
      {
        titleKey: 'careers.jobs.job3.title',
        departmentKey: 'careers.jobs.job3.department',
        locationKey: 'careers.jobs.job3.location',
        typeKey: 'careers.jobs.job3.type',
        descriptionKey: 'careers.jobs.job3.description',
        requirementsKeys: [
          'careers.jobs.job3.requirements.req1',
          'careers.jobs.job3.requirements.req2',
          'careers.jobs.job3.requirements.req3',
          'careers.jobs.job3.requirements.req4',
          'careers.jobs.job3.requirements.req5',
        ],
        id: 'product-manager',
      },
      {
        titleKey: 'careers.jobs.job4.title',
        departmentKey: 'careers.jobs.job4.department',
        locationKey: 'careers.jobs.job4.location',
        typeKey: 'careers.jobs.job4.type',
        descriptionKey: 'careers.jobs.job4.description',
        requirementsKeys: [
          'careers.jobs.job4.requirements.req1',
          'careers.jobs.job4.requirements.req2',
          'careers.jobs.job4.requirements.req3',
          'careers.jobs.job4.requirements.req4',
          'careers.jobs.job4.requirements.req5',
        ],
        id: 'frontend-developer',
      },
    ];
    
    // 福利数据
    const benefitData = [
      {
        titleKey: 'careers.benefits.benefit1.title',
        descriptionKey: 'careers.benefits.benefit1.description',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        titleKey: 'careers.benefits.benefit2.title',
        descriptionKey: 'careers.benefits.benefit2.description',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      {
        titleKey: 'careers.benefits.benefit3.title',
        descriptionKey: 'careers.benefits.benefit3.description',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        ),
      },
      {
        titleKey: 'careers.benefits.benefit4.title',
        descriptionKey: 'careers.benefits.benefit4.description',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        ),
      },
      {
        titleKey: 'careers.benefits.benefit5.title',
        descriptionKey: 'careers.benefits.benefit5.description',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
      },
      {
        titleKey: 'careers.benefits.benefit6.title',
        descriptionKey: 'careers.benefits.benefit6.description',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ),
      },
    ];
    
    // 翻译职位数据
    const translatedJobs = jobData.map(job => ({
      title: t(job.titleKey) || job.titleKey.split('.').pop() || '职位',
      department: t(job.departmentKey) || job.departmentKey.split('.').pop() || '部门',
      location: t(job.locationKey) || job.locationKey.split('.').pop() || '地点',
      type: t(job.typeKey) || job.typeKey.split('.').pop() || '类型',
      description: t(job.descriptionKey) || job.descriptionKey.split('.').pop() || '职位描述',
      requirements: job.requirementsKeys.map(key => t(key) || key.split('.').pop() || '要求'),
      id: job.id
    }));
    
    // 翻译福利数据
    const translatedBenefits = benefitData.map(benefit => ({
      title: t(benefit.titleKey) || benefit.titleKey.split('.').pop() || '福利',
      description: t(benefit.descriptionKey) || benefit.descriptionKey.split('.').pop() || '福利描述',
      icon: benefit.icon
    }));
    
    // 翻译加入我们数据
    setCareer({
      title: t('careers.title') || '加入我们',
      description: t('careers.description') || '与我们一起探索AI的无限可能，创造改变世界的技术',
      image: '/images/careers-join-us.jpg'
    });
    
    setJobOpenings(translatedJobs);
    setBenefits(translatedBenefits);
  }, [t, locale]); // 添加locale作为依赖项，确保语言变化时重新执行
  
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        {/* 加入我们 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              {career.title}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {career.description}
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {t('careers.whyChoose.title') || '为什么选择栉云科技'}
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  {t('careers.whyChoose.description') || '栉云科技是一家充满活力和创新精神的AI公司，我们致力于打造最先进的智能体技术，为用户提供卓越的AI解决方案。在这里，你将有机会：'}
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-2"
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
                    <span className="text-gray-600 dark:text-gray-300">
                      {t('careers.whyChoose.reason1') || '参与前沿AI技术的研发和创新'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-2"
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
                    <span className="text-gray-600 dark:text-gray-300">
                      {t('careers.whyChoose.reason2') || '与行业顶尖人才共事和学习'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-2"
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
                    <span className="text-gray-600 dark:text-gray-300">
                      {t('careers.whyChoose.reason3') || '在开放、包容的环境中发挥你的创造力'}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-2"
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
                    <span className="text-gray-600 dark:text-gray-300">
                      {t('careers.whyChoose.reason4') || '获得丰富的职业发展和成长机会'}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                <Image
                  src={career.image}
                  alt={career.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 福利待遇 */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('careers.benefits.title') || '福利待遇'}
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('careers.benefits.subtitle') || '我们提供具有竞争力的薪资和全面的福利，关心员工的成长和发展'}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="card p-6">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary-600 dark:text-primary-400">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 职位列表 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {t('careers.jobs.title') || '职位列表'}
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('careers.jobs.subtitle') || '探索我们的职位机会，找到适合你的角色'}
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="card p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100">
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {job.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {t('careers.jobs.requirements') || '要求'}
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-1 mr-2"
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
                        <span className="text-gray-600 dark:text-gray-300">
                          {req}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 申请流程 */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t('careers.process.title') || '申请流程'}
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('careers.process.subtitle') || '了解我们的招聘流程，为你的申请做好准备'}
              </p>
            </div>

            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold z-10">
                      1
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('careers.process.step1.title') || '提交申请'}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t('careers.process.step1.description') || '在我们的职位列表中找到适合你的职位，点击"申请"按钮提交你的简历和申请信息。'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold z-10">
                      2
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('careers.process.step2.title') || '简历筛选'}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t('careers.process.step2.description') || '我们的招聘团队会仔细审核你的简历和申请材料，评估你是否符合职位要求。'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold z-10">
                      3
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('careers.process.step3.title') || '面试'}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t('careers.process.step3.description') || '通过初步筛选的候选人将被邀请参加面试，面试可能包括技术面试、行为面试和团队面试等环节。'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold z-10">
                      4
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('careers.process.step4.title') || '录用决定'}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t('careers.process.step4.description') || '面试结束后，我们会综合评估候选人的能力、经验和文化契合度，做出录用决定。'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold z-10">
                      5
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {t('careers.process.step5.title') || '入职'}
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        {t('careers.process.step5.description') || '接受录用的候选人将收到正式的录用通知，并开始入职流程，包括培训和团队融入等环节。'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 