import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Demo() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              体验演示
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              亲身体验栉云科技的AI智能体，感受先进技术带来的便捷和效率
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  AI智能客服
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  与我们的AI智能客服进行对话，体验自然语言理解和智能决策能力
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 h-96 overflow-y-auto mb-4">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="ml-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-md">
                      <p className="text-gray-800 dark:text-gray-200">
                        你好！我是栉云科技的AI智能体助手。我可以帮助你回答问题、提供信息、执行任务等。请问有什么我可以帮助你的吗？
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start justify-end">
                    <div className="mr-3 bg-primary-100 dark:bg-primary-900 rounded-lg p-3 max-w-md">
                      <p className="text-gray-800 dark:text-gray-200">
                        你能介绍一下栉云科技的主要产品吗？
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold">
                      用户
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div className="ml-3 bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-md">
                      <p className="text-gray-800 dark:text-gray-200">
                        栉云科技的主要产品包括：
                      </p>
                      <ol className="list-decimal pl-5 mt-2 space-y-1">
                        <li>
                          ZhiAgent：智能体平台，能够自主完成复杂任务，提高工作效率。
                        </li>
                        <li>
                          ZhiAssist：智能助手，为企业和个人提供全方位的智能服务。
                        </li>
                        <li>
                          ZhiInsight：数据分析平台，从海量数据中挖掘有价值的信息和洞察。
                        </li>
                      </ol>
                      <p className="mt-2 text-gray-800 dark:text-gray-200">
                        这些产品都基于我们先进的AI技术，包括自然语言处理、机器学习、知识图谱和多模态交互等。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex">
                <input
                  type="text"
                  placeholder="输入你的问题..."
                  className="flex-1 border border-gray-300 dark:border-gray-700 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                />
                <button className="bg-primary-600 text-white px-4 py-2 rounded-r-md hover:bg-primary-700 transition-colors">
                  发送
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                更多演示
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                探索我们的其他产品演示
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  智能文档分析
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  体验我们的智能文档分析功能，自动提取关键信息，生成摘要和见解。
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    开始体验 &rarr;
                  </a>
                </div>
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
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  数据可视化
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  体验我们的数据可视化功能，将复杂数据转化为直观、易懂的图表和仪表盘。
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    开始体验 &rarr;
                  </a>
                </div>
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
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  智能流程自动化
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  体验我们的智能流程自动化功能，自动执行重复性任务，提高工作效率。
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    开始体验 &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              想了解更多？
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              如果你对我们的产品感兴趣，或者想了解更多信息，请联系我们的销售团队。
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 