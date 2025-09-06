import type { Metadata } from 'next';

// 在服务器组件中导出metadata
export const metadata: Metadata = {
  title: '核心技术 - 栉云科技',
  description: '栉云科技拥有先进的AI技术栈，包括自然语言处理、机器学习、知识图谱和多模态交互等核心技术。',
  keywords: 'AI技术,自然语言处理,机器学习,知识图谱,多模态交互,栉云科技',
  // 添加规范链接
  alternates: {
    canonical: '/technology',
  },
};

// 简单的布局组件，只传递子组件
export default function TechnologyLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  return children;
}