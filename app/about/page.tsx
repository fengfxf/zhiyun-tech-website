import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const teamMembers = [
  {
    name: '齐军',
    role: '创始人 & CEO',
    bio: '拥有10年互联网及AI领域经验，曾在多家知名科技公司担任技术领导职位。',
    image: '/images/team-member-1.jpg',
  },
  {
    name: '王健',
    role: 'CTO',
    bio: '人工智能专家,曾领导多个大型AI项目的研发。',
    image: '/images/team-member-2.jpg',
  },
  {
    name: '门男',
    role: '产品总监',
    bio: '10年产品管理经验，专注于AI产品的用户体验设计和产品策略。',
    image: '/images/team-member-3.jpg',
  },
  {
    name: '李策',
    role: '研发总监',
    bio: '计算机科学博士，专注于自然语言处理和机器学习算法研究。',
    image: '/images/team-member-4.jpg',
  },
];

const milestones = [
  {
    year: '2020',
    title: '公司成立',
    description: '上海栉云科技有限公司在上海张江高科技园区成立。',
  },
  {
    year: '2021',
    title: '首轮融资',
    description: '获得A轮融资1000万元，加速产品研发和团队扩张。',
  },
  {
    year: '2022',
    title: '产品发布',
    description: '成功发布第一款AI智能体产品，获得市场广泛关注。',
  },
  {
    year: '2023',
    title: '业务扩展',
    description: '客户数量突破100家，业务覆盖金融、制造、教育等多个行业。',
  },
  {
    year: '2024',
    title: '技术突破',
    description: '在智能体技术领域取得重大突破，发布新一代AI智能体平台。',
  },
];

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        {/* 公司介绍 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              关于我们
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              上海栉云科技有限公司是一家专注于AI应用和智能体开发的高科技企业，致力于为企业和个人提供先进的人工智能解决方案。
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  我们的使命
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  通过先进的AI技术，让智能体成为人类的得力助手，提高工作效率，创造更多价值。
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  我们的愿景
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  成为全球领先的AI智能体解决方案提供商，推动人工智能技术的普及和应用。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 发展历程 */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                发展历程
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                我们的成长足迹
              </p>
            </div>

            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold z-10">
                        {milestone.year}
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h3>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 团队介绍 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              我们的团队
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              由一群充满激情和创造力的专业人士组成
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card p-6 text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">
                    {member.name.charAt(0)}
                  </span>
                  {/* 实际项目中替换为真实图片 */}
                  {/* <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover"
                  /> */}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400">
                  {member.role}
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 公司文化 */}
        <div className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                公司文化
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                我们的核心价值观
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
                  创新
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  我们鼓励创新思维，不断探索AI技术的新可能性，推动行业发展。
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  协作
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  我们重视团队协作，相信集体智慧的力量，共同创造卓越的产品和服务。
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
                  责任
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  我们秉持负责任的态度开发AI技术，确保技术的安全、可靠和符合伦理标准。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 