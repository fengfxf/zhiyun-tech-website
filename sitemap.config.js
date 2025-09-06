/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.zhiyunllm.com',
  generateRobotsTxt: true,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin/' },
    ],
  },
};

module.exports = config;