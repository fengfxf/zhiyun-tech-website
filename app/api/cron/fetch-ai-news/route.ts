import { NextResponse } from 'next/server';
import { Bot, Brain, ShieldCheck, Sparkles, Globe, Activity, Cloud, UserCheck, HeartPulse, Newspaper } from 'lucide-react';

// 图标映射表
const iconMap = {
  'coding': Bot,
  'chip': Brain,
  'security': ShieldCheck,
  'model': Sparkles,
  'global': Globe,
  'performance': Activity,
  'cloud': Cloud,
  'user': UserCheck,
  'health': HeartPulse,
  'default': Newspaper,
};

const iconKeys = [
  'bot', 'brain', 'shieldCheck', 'sparkles', 'globe', 'activity', 'cloud', 'userCheck', 'heartPulse', 'newspaper'
];
const getRandomIconKey = () => iconKeys[Math.floor(Math.random() * iconKeys.length)];

// 模拟新闻数据
const mockNewsData = [
  {
    title: "大型语言模型在医疗领域取得突破性进展",
    url: "#",
    icon: "heartPulse"
  },
  {
    title: "AI驱动的自动驾驶技术进入商业化阶段",
    url: "#",
    icon: "activity"
  },
  {
    title: "量子计算与AI融合研究发表重要成果",
    url: "#",
    icon: "sparkles"
  },
  {
    title: "新一代多模态大模型实现跨领域知识迁移",
    url: "#",
    icon: "brain"
  },
  {
    title: "企业级AI应用市场规模预计年内翻倍",
    url: "#",
    icon: "cloud"
  },
  {
    title: "AI安全与伦理研究成为行业关注焦点",
    url: "#",
    icon: "shieldCheck"
  },
  {
    title: "生成式AI在创意产业的应用场景不断拓展",
    url: "#",
    icon: "newspaper"
  }
];

export async function GET() {
  try {
    // 检查环境变量
    if (!process.env.COZE_API_TOKEN) {
      console.log('COZE_API_TOKEN is not configured, using mock data');
      // 直接返回模拟数据，而不是抛出错误
      return new NextResponse(
        JSON.stringify({ success: true, data: mockNewsData }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    console.log('Fetching news from Coze API...');
    
    const response = await fetch('https://api.coze.cn/v1/workflow/run', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.COZE_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        workflow_id: "7512661918118346791"
      }),
    });

    if (!response.ok) {
      console.error('API response not OK:', response.status, response.statusText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Coze API response:', JSON.stringify(data, null, 2));
    
    if (!data || typeof data !== 'object') {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format from Coze API');
    }

    if (data.code !== 0) {
      console.error('API error:', data.msg);
      throw new Error(data.msg || 'Failed to fetch news');
    }

    if (!data.data) {
      console.error('No data in response:', data);
      throw new Error('No data received from Coze API');
    }

    let parsedData;
    try {
      parsedData = JSON.parse(data.data);
      console.log('Parsed data:', JSON.stringify(parsedData, null, 2));
    } catch (e) {
      console.error('Error parsing data:', data.data);
      throw new Error('Failed to parse response data');
    }

    if (!parsedData.output || !Array.isArray(parsedData.output)) {
      console.error('Invalid data format:', parsedData);
      throw new Error('Invalid data format: missing or invalid output array');
    }
    
    // 转换数据格式
    const formattedNews = parsedData.output.map((news: any) => ({
      title: news.intro || news.title || 'No title available',
      url: news.link || '#',
      icon: getRandomIconKey(),
    }));

    console.log('Formatted news:', JSON.stringify(formattedNews, null, 2));

    // 如果没有新闻数据，使用模拟数据
    if (formattedNews.length === 0) {
      console.log('No news data available, using mock data');
      return new NextResponse(
        JSON.stringify({ success: true, data: mockNewsData }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Surrogate-Control': 'no-store'
          }
        }
      );
    }

    // 返回带有禁用缓存头的响应
    return new NextResponse(
      JSON.stringify({ success: true, data: formattedNews }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  } catch (error) {
    console.error('Error fetching AI news:', error);
    // 出错时返回模拟数据作为后备
    return new NextResponse(
      JSON.stringify({ 
        success: true, 
        data: mockNewsData, // 返回模拟数据而不是空数组
        message: 'Using mock data due to API error'
      }),
      {
        status: 200, // 即使出错也返回200状态码，确保页面能正常显示
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Surrogate-Control': 'no-store'
        }
      }
    );
  }
}