/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'example.com'], // 添加实际图片域名
    unoptimized: true, // 必须设置为true以兼容静态导出模式
    formats: ['image/avif', 'image/webp'], // 支持现代图片格式
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/images/**',
      },
    ],
  },
  // 添加其他优化配置
  trailingSlash: true,
  output: 'export'
};

module.exports = nextConfig;