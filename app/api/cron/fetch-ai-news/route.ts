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

export async function GET() {
  try {
    // 检查环境变量
    if (!process.env.COZE_API_TOKEN) {
      throw new Error('COZE_API_TOKEN is not configured');
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

    // 如果没有新闻数据，返回空数组而不是错误
    if (formattedNews.length === 0) {
      return NextResponse.json({ success: true, data: [] });
    }

    return NextResponse.json({ success: true, data: formattedNews });
  } catch (error) {
    console.error('Error fetching AI news:', error);
    // 返回一个友好的错误响应
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch news',
        data: [] // 返回空数组作为后备数据
      },
      { status: 500 }
    );
  }
} 