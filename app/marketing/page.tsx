// 标记为客户端组件
'use client';

import Navbar from '@/components/Navbar';
import BusinessMarketingComponent from '../../components/business_marketing';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

const MarketingPage: React.FC = () => {
  const { t, locale } = useLanguage();
  // 这里假设后续会添加逻辑来处理导航栏点击“市场”菜单的事件
  // 简单返回 business_marketing 组件
  return <div>
      <Navbar />
      <BusinessMarketingComponent />
      <Footer />
  </div>;
};

// 移除metadata导出部分

export default MarketingPage;
