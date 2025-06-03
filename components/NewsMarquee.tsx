import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Newspaper, Bot, ShieldCheck, Brain, Globe, Activity, Cloud, UserCheck, HeartPulse, Sparkles } from 'lucide-react';

// 模拟AI新闻数据（用图标代替图片）
const newsList = [
  { title: 'OpenAI发布GPT-5最新进展', url: 'https://openai.com/blog/gpt-5-update', icon: <Bot className="w-5 h-5 flex-shrink-0" /> },
  { title: 'Google推出全新AI芯片', url: 'https://ai.googleblog.com/ai-chip', icon: <Brain className="w-5 h-5 flex-shrink-0" /> },
  { title: '微软Copilot集成更多办公场景', url: 'https://blogs.microsoft.com/copilot-news', icon: <UserCheck className="w-5 h-5 flex-shrink-0" /> },
  { title: '百度文心大模型能力升级', url: 'https://baidu.com/ai-news', icon: <Cloud className="w-5 h-5 flex-shrink-0" /> },
  { title: 'AI安全治理成为行业焦点', url: 'https://aithoughts.com/ai-safety', icon: <ShieldCheck className="w-5 h-5 flex-shrink-0" /> },
  { title: 'Anthropic发布Claude 3模型', url: 'https://www.anthropic.com/news/claude-3', icon: <Sparkles className="w-5 h-5 flex-shrink-0" /> },
  { title: '阿里云通义千问API开放', url: 'https://tongyi.aliyun.com/', icon: <Globe className="w-5 h-5 flex-shrink-0" /> },
  { title: 'Meta推出Llama 3大模型', url: 'https://ai.meta.com/llama/', icon: <Activity className="w-5 h-5 flex-shrink-0" /> },
  { title: '清华发布ChatGLM4', url: 'https://chatglm.cn/', icon: <Newspaper className="w-5 h-5 flex-shrink-0" /> },
  { title: 'AI助力医疗影像诊断新突破', url: 'https://medicalai.example.com/', icon: <HeartPulse className="w-5 h-5 flex-shrink-0" /> },
];

interface NewsMarqueeProps {
  speed?: number; // px/s
}

const NewsMarquee: React.FC<NewsMarqueeProps> = ({ speed = 40 }) => {
  const { theme } = useTheme();
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // 动态生成动画时长
  const [duration, setDuration] = useState(30); // 秒
  useEffect(() => {
    if (marqueeInnerRef.current) {
      const width = marqueeInnerRef.current.scrollWidth;
      setDuration(width / speed);
    }
  }, [speed, isPaused]);

  // 样式适配
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const bgColor = theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-100/50';
  const iconColor = theme === 'dark' ? 'text-primary-400' : 'text-primary-600';

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div
        className={`overflow-hidden ${bgColor} backdrop-blur-sm rounded-lg border border-gray-200/20 dark:border-gray-700/20`}
        style={{ height: 48 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full h-full">
          <div
            ref={marqueeInnerRef}
            className="flex items-center whitespace-nowrap h-full"
            style={{
              animation: isPaused
                ? 'none'
                : `marquee-scroll ${duration}s linear infinite`,
              willChange: 'transform',
            }}
          >
            {[...newsList, ...newsList].map((news, idx) => (
              <a
                key={idx}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 mx-6 ${textColor} hover:text-primary-500 transition-colors duration-200`}
              >
                <div className={iconColor}>
                  {news.icon}
                </div>
                <span className="text-sm font-medium">{news.title}</span>
                {idx !== [...newsList, ...newsList].length - 1 && (
                  <span className="text-gray-400 dark:text-gray-500 ml-4">|</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default NewsMarquee; 