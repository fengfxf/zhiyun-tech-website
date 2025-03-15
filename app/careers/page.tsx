import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

const jobOpenings = [
  {
    title: '高级AI研究员',
    department: '研发部',
    location: '上海',
    type: '全职',
    description:
      '负责前沿AI技术研究，包括大型语言模型、多智能体协作等方向，推动技术创新和突破。',
    requirements: [
      '计算机科学、人工智能或相关领域博士学位',
      '3年以上AI研究经验，有顶级会议或期刊发表论文',
      '熟悉深度学习框架和工具',
      '良好的编程能力和问题解决能力',
      '优秀的沟通和团队协作能力',
    ],
    id: 'ai-researcher',
  },
  {
    title: '资深AI工程师',
    department: '工程部',
    location: '上海',
    type: '全职',
    description:
      '负责AI模型的开发、优化和部署，将研究成果转化为实际产品和应用。',
    requirements: [
      '计算机科学或相关领域硕士及以上学位',
      '5年以上AI开发经验',
      '精通Python、TensorFlow/PyTorch等AI开发工具',
      '有大规模AI系统开发和部署经验',
      '良好的团队协作和沟通能力',
    ],
    id: 'ai-engineer',
  },
  {
    title: '产品经理',
    department: '产品部',
    location: '上海',
    type: '全职',
    description:
      '负责AI产品的规划、设计和管理，确保产品满足市场需求和用户期望。',
    requirements: [
      '3年以上AI或技术产品管理经验',
      '深入理解AI技术和应用场景',
      '优秀的产品思维和用户体验意识',
      '出色的沟通和协调能力',
      '良好的数据分析能力',
    ],
    id: 'product-manager',
  },
  {
    title: '前端开发工程师',
    department: '工程部',
    location: '上海',
    type: '全职',
    description:
      '负责公司产品的前端开发，创建直观、易用的用户界面和交互体验。',
    requirements: [
      '3年以上前端开发经验',
      '精通HTML、CSS、JavaScript等前端技术',
      '熟悉React、Vue等前端框架',
      '有响应式设计和移动端开发经验',
      '良好的审美和用户体验意识',
    ],
    id: 'frontend-developer',
  },
];

const benefits = [
  {
    title: '有竞争力的薪资',
    description: '我们提供行业领先的薪资待遇，认可和奖励优秀人才。',
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
    title: '灵活工作制度',
    description: '我们提供弹性工作时间和远程工作选项，帮助员工平衡工作和生活。',
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
    title: '职业发展',
    description: '我们提供丰富的培训和发展机会，支持员工不断学习和成长。',
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
    title: '健康福利',
    description: '我们提供全面的健康保险和福利计划，关心员工的身心健康。',
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
    title: '团队活动',
    description: '我们定期组织各种团队活动，增强团队凝聚力和员工归属感。',
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
    title: '创新环境',
    description: '我们鼓励创新和尝试，为员工提供发挥创造力的空间和资源。',
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

const career = 
  {
    title: '加入我们',
    description: '与我们一起探索AI的无限可能，创造改变世界的技术',
    image: '/images/careers-join-us.jpg',
  }

export default function Careers() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        {/* 加入我们 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              加入我们
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              与我们一起探索AI的无限可能，创造改变世界的技术
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  为什么选择栉云科技
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  栉云科技是一家充满活力和创新精神的AI公司，我们致力于打造最先进的智能体技术，为用户提供卓越的AI解决方案。在这里，你将有机会：
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
                      参与前沿AI技术的研发和创新
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
                      与行业顶尖人才共事和学习
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
                      在开放、包容的环境中发挥你的创造力
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
                      获得丰富的职业发展和成长机会
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                {/* <h3 className="text-2xl font-bold text-white">加入我们的团队</h3>
                 */}
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
                福利待遇
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                我们提供具有竞争力的薪资和全面的福利，关心员工的成长和发展
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
              职位列表
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              探索我们的职位机会，找到适合你的角色
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
                  <div className="mt-4 md:mt-0">
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      查看详情
                    </Link>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {job.description}
                </p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    要求
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
                申请流程
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                了解我们的招聘流程，为你的申请做好准备
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
                        提交申请
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        在我们的职位列表中找到适合你的职位，点击"申请"按钮提交你的简历和申请信息。
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
                        简历筛选
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        我们的招聘团队会仔细审核你的简历和申请材料，评估你是否符合职位要求。
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
                        面试
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        通过初步筛选的候选人将被邀请参加面试，面试可能包括技术面试、行为面试和团队面试等环节。
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
                        录用决定
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        面试结束后，我们会综合评估候选人的能力、经验和文化契合度，做出录用决定。
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
                        入职
                      </h3>
                      <p className="mt-1 text-gray-600 dark:text-gray-300">
                        接受录用的候选人将收到正式的录用通知，并开始入职流程，包括培训和团队融入等环节。
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