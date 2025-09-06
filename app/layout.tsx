import '../styles/globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import CozeChat from '../components/CozeChat';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: false, // 仅在需要时加载
});

// 优化元数据配置
export const metadata: Metadata = {
  title: '栉云科技 - 企业数字化转型解决方案提供商 | AI智能体与低代码开发专家',
  description: '栉云科技专注于企业数字化转型，提供AI智能体、低代码PAAS平台、CRM/ERP/MES系统、小程序/APP开发等一站式解决方案，助力企业全链路智能升级。',
  keywords: '数字化转型,AI智能体,低代码PAAS平台,CRM系统,ERP系统,MES系统,小程序开发,APP开发,智能客服,数据分析,栉云科技',
  icons: {
    icon: '/favicon.svg',
  },
  // 添加Open Graph和Twitter元数据
  openGraph: {
    title: '栉云科技 - 企业数字化转型解决方案提供商',
    description: '栉云科技专注于企业数字化转型，提供AI智能体、低代码PAAS平台等一站式解决方案。',
    type: 'website',
    url: 'https://www.zhiyunllm.com/',
    images: [
      {
        url: '/images/logo.png',
        alt: '栉云科技',
      },
    ],
  },
  twitter: {
    title: '栉云科技 - 企业数字化转型解决方案提供商',
    description: '栉云科技专注于企业数字化转型，提供AI智能体、低代码PAAS平台等一站式解决方案。',
    card: 'summary_large_image',
  },
  // 添加语言标记
alternates: {
    languages: {
      'zh-CN': 'https://www.zhiyunllm.com/',
      'x-default': 'https://www.zhiyunllm.com/',
    },
  },
  // 添加结构化数据
  other: {
    'application/ld+json': [
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': '栉云科技',
        'url': 'https://www.zhiyunllm.com/',
        'logo': 'https://www.zhiyunllm.com/images/logo.png',
        'description': '栉云科技专注于企业数字化转型，提供AI智能体、低代码PAAS平台等一站式解决方案。',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+86-400-123-4567',
          'contactType': 'customer service',
          'areaServed': 'CN',
          'availableLanguage': ['zh-CN', 'en-US']
        },
        'sameAs': [
          'https://www.linkedin.com/company/zhiyun-tech',
          'https://twitter.com/zhiyun-tech',
          'https://github.com/zhiyun-tech'
        ]
      }),
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body>
        <Providers>
          {children}
          <CozeChat />
        </Providers>
      </body>
    </html>
  );
}

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </LanguageProvider>
  );
}