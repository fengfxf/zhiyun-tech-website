import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    name: 'Agent',
    description: '智能体平台，能够自主完成复杂任务，提高工作效率。',
    features: [
      '自然语言理解',
      '多模态交互',
      '智能决策',
      '自动化执行',
      '持续学习',
      '系统集成',
    ],
    image: '/images/product-zhiagent.jpg',
  },
  {
    name: 'Assist',
    description: '智能助手，为企业和个人提供全方位的智能服务。',
    features: [
      '个性化推荐',
      '智能问答',
      '日程管理',
      '信息检索',
      '内容生成',
      '多语言支持',
    ],
    image: '/images/product-zhiassist.jpg',
  },
  {
    name: 'Insight',
    description: '数据分析平台，从海量数据中挖掘有价值的信息和洞察。',
    features: [
      '数据可视化',
      '趋势分析',
      '异常检测',
      '预测分析',
      '报告生成',
      'API集成',
    ],
    image: '/images/product-zhiinsight.jpg',
  },
];

export default function Products() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              我们的产品
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              栉云科技提供一系列先进的AI产品和解决方案，满足不同行业和场景的需求
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {products.map((product, index) => (
              <div
                key={product.name}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-primary-600 opacity-20 dark:opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium">
                      {product.name} 图片
                    </div>
                    {/* 实际项目中替换为真实图片 */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {product.name}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      主要功能
                    </h3>
                    <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                      {product.features.map((feature) => (
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
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      了解更多
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 