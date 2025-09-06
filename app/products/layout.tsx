import type { Metadata } from 'next';

// 在服务器组件中导出metadata
export const metadata: Metadata = {
  title: 'AI产品与解决方案 - 栉云科技',
  description: '栉云科技提供Agent智能体平台、Assist智能助手、Insight数据分析平台等AI产品，助力企业实现智能化、自动化运营。',
  keywords: 'AI产品,智能体平台,智能助手,数据分析平台,Agent,Assist,Insight,栉云科技',
  // 添加规范链接
  alternates: {
    canonical: '/products',
  },
};

// 简单的布局组件，只传递子组件
export default function ProductsLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return children;
}