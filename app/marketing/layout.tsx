import type { Metadata } from 'next';

// 在服务器组件中导出metadata
export const metadata: Metadata = {
  title: '企业数字化转型解决方案 - 智能体与低代码开发专家 | 栉云科技',
  description: '栉云科技提供定制化企业数字化转型解决方案，融合AI智能体、低代码PAAS平台、CRM/ERP/MES系统/小程序/APP开发，助力企业全链路智能升级。',
  keywords: '企业数字化转型,低代码PAAS平台,CRM系统,ERP系统,MES系统,小程序开发,APP开发,智能客服,数据分析,栉云科技',
  openGraph: {
    title: '企业数字化转型解决方案 - 智能体与低代码开发专家',
    description: '栉云科技提供定制化企业数字化转型解决方案，融合AI智能体、低代码PAAS平台等技术。',
    type: 'website',
    url: 'https://www.zhiyunllm.com/marketing',
    images: [
      {
        url: 'https://www.zhiyunllm.com/images/logo.png',
        alt: '栉云科技logo'
      }
    ]
  },
  // 添加规范链接
  alternates: {
    canonical: '/marketing',
  },
};

// 简单的布局组件，只传递子组件
export default function MarketingLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return children;
}