import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const technologies = [
  {
    name: '自然语言处理',
    description:
      '我们的自然语言处理技术能够理解和生成人类语言，支持多语言交互，准确把握用户意图。',
    features: [
      '语义理解',
      '情感分析',
      '意图识别',
      '多语言支持',
      '上下文理解',
      '自然语言生成',
    ],
  },
  {
    name: '机器学习',
    description:
      '我们的机器学习技术能够从数据中学习规律和模式，不断优化和提升智能体的能力。',
    features: [
      '监督学习',
      '无监督学习',
      '强化学习',
      '迁移学习',
      '联邦学习',
      '持续学习',
    ],
  },
  {
    name: '知识图谱',
    description:
      '我们的知识图谱技术能够构建和管理结构化知识，为智能体提供丰富的背景知识和推理能力。',
    features: [
      '实体识别',
      '关系抽取',
      '知识融合',
      '知识推理',
      '知识更新',
      '多模态知识',
    ],
  },
  {
    name: '多模态交互',
    description:
      '我们的多模态交互技术支持文本、图像、语音等多种交互方式，提供更自然、便捷的用户体验。',
    features: [
      '语音识别',
      '图像识别',
      '视频分析',
      '多模态融合',
      '情境感知',
      '自适应交互',
    ],
  },
];

const researchAreas = [
  {
    name: '大型语言模型',
    description:
      '研究更高效、更可靠的大型语言模型，提升智能体的理解和生成能力。',
  },
  {
    name: '多智能体协作',
    description:
      '研究多个智能体之间的协作机制，实现复杂任务的分解和协同完成。',
  },
  {
    name: '可解释AI',
    description:
      '研究AI决策的可解释性，让用户理解智能体的决策过程和依据。',
  },
  {
    name: 'AI安全与伦理',
    description:
      '研究AI技术的安全性和伦理问题，确保技术的负责任应用。',
  },
];

export default function Technology() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        {/* 技术概述 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              我们的技术
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              栉云科技拥有一系列先进的AI技术，为智能体提供强大的能力支持
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
                    <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
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
                      核心能力
                    </h3>
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                      {tech.features.map((feature) => (
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
                研究方向
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                我们持续投入研究，推动AI技术的发展和创新
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
              技术优势
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              我们的技术具有以下显著优势
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
                高性能
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                我们的技术经过优化，能够高效处理大规模数据和复杂任务，提供快速响应。
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
                高可靠性
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                我们的技术经过严格测试和验证，确保在各种场景下稳定可靠地运行。
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
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                可扩展性
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                我们的技术架构支持灵活扩展，能够适应不同规模和复杂度的应用场景。
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 