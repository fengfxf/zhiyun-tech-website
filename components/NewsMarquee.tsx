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

const NewsMarquee: React.FC<NewsMarqueeProps> = ({ speed = 200 }) => {
  const { theme } = useTheme();
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // 动态生成动画时长
  const [duration, setDuration] = useState(5); // 减少默认时长到15秒
  useEffect(() => {
    if (marqueeInnerRef.current) {
      const width = marqueeInnerRef.current.scrollWidth;
      setDuration(width / speed);
    }
  }, [speed, isPaused]);

  // 样式适配
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-900';
  const bgColor = theme === 'dark' ? 'bg-gray-800/30' : 'bg-gray-100/30';
  const iconColor = theme === 'dark' ? 'text-primary-400' : 'text-primary-600';
  const gradientColor = theme === 'dark' 
    ? 'from-gray-800 via-transparent to-gray-800' 
    : 'from-gray-100 via-transparent to-gray-100';

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div
        className={`relative overflow-hidden ${bgColor} backdrop-blur-sm rounded-lg border border-gray-200/10 dark:border-gray-700/10 shadow-lg`}
        style={{ 
          height: 48,
          perspective: '1000px',
          transform: 'translateZ(0)',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 渐变遮罩 - 调整渐变方向和透明度 */}
        <div className={`absolute inset-0 z-10 pointer-events-none bg-gradient-to-r ${gradientColor}`} 
             style={{
               background: theme === 'dark'
                 ? 'linear-gradient(to right, rgba(31,41,55,1) 0%, rgba(31,41,55,0) 15%, rgba(31,41,55,0) 85%, rgba(31,41,55,1) 100%)'
                 : 'linear-gradient(to right, rgba(243,244,246,1) 0%, rgba(243,244,246,0) 15%, rgba(243,244,246,0) 85%, rgba(243,244,246,1) 100%)'
             }}
        />
        
        {/* 科技感装饰 */}
        <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-dark/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
        
        <div className="relative w-full h-full">
          <div
            ref={marqueeInnerRef}
            className="flex items-center whitespace-nowrap h-full"
            style={{
              animation: isPaused
                ? 'none'
                : `marquee-scroll ${duration}s linear infinite`,
              willChange: 'transform',
              transformStyle: 'preserve-3d',
            }}
          >
            {[...newsList, ...newsList].map((news, idx) => (
              <a
                key={idx}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 mx-6 ${textColor} hover:text-primary-500 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-1px]`}
                style={{
                  transform: `translateZ(20px)`,
                }}
              >
                <div className={`${iconColor} transform transition-transform duration-300 group-hover:rotate-12`}>
                  {news.icon}
                </div>
                <span className="text-sm font-medium">{news.title}</span>
                {idx !== [...newsList, ...newsList].length - 1 && (
                  <span className="text-gray-400/40 dark:text-gray-500/40 ml-4">|</span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee-scroll {
          0% { 
            transform: translateX(0) translateZ(0);
          }
          100% { 
            transform: translateX(-50%) translateZ(0);
          }
        }
        
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
        }
        
        .bg-grid-dark {
          background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </div>
  );
};

export default NewsMarquee; 