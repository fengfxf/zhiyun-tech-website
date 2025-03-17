'use client';
import { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Message } from '../../types/chat';
import { sendMessage } from '../../services/ai';

export default function Demo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: '你好！我是栉云科技的AI智能体助手。我可以帮助你回答问题、提供信息、执行任务等。请问有什么我可以帮助你的吗？'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 保存对话历史到本地存储
  useEffect(() => {
    if (messages.length > 1) {
      localStorage.setItem('chatHistory', JSON.stringify(messages));
    }
  }, [messages]);

  // 从本地存储加载对话历史
  useEffect(() => {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
      try {
        const parsedHistory = JSON.parse(savedHistory);
        setMessages(parsedHistory);
      } catch (error) {
        console.error('Failed to parse chat history:', error);
      }
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      // Add AI typing indicator
      setMessages(prev => [...prev, { role: 'ai', content: '', isTyping: true }]);

      // Get AI response
      const response = await sendMessage(userMessage);

      // Remove typing indicator and add AI response
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { role: 'ai', content: response.content }];
      });

      if (response.error) {
        console.error('AI response error:', response.error);
      }
    } catch (error) {
      console.error('Failed to get AI response:', error);
      // Handle error
      setMessages(prev => {
        const filtered = prev.filter(msg => !msg.isTyping);
        return [...filtered, { role: 'ai', content: '抱歉，我遇到了一些问题。请稍后再试。' }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        role: 'ai',
        content: '你好！我是栉云科技的AI智能体助手。我可以帮助你回答问题、提供信息、执行任务等。请问有什么我可以帮助你的吗？'
      }
    ]);
    localStorage.removeItem('chatHistory');
    setConversationId(null);
  };

  return (
    <div>
      <Navbar />
      <div className="pt-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
              体验演示
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              亲身体验栉云科技的AI智能体，感受先进技术带来的便捷和效率
            </p>
          </div>

          <div className="mt-16">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="text-center flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    AI智能客服
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    与我们的AI智能客服进行对话，体验自然语言理解和智能决策能力
                  </p>
                </div>
                <button
                  onClick={handleClearHistory}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  清除历史记录
                </button>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-4 h-96 overflow-y-auto mb-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start ${
                        message.role === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      {message.role === 'ai' && (
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                          AI
                        </div>
                      )}
                      <div
                        className={`${
                          message.role === 'user'
                            ? 'mr-3 bg-primary-100 dark:bg-primary-900'
                            : 'ml-3 bg-gray-100 dark:bg-gray-800'
                        } rounded-lg p-3 max-w-md`}
                      >
                        {message.isTyping ? (
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                            <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                          </div>
                        ) : (
                          <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
                            {message.content}
                          </p>
                        )}
                      </div>
                      {message.role === 'user' && (
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 font-bold">
                          用户
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="flex">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="输入你的问题..."
                  className="flex-1 border border-gray-300 dark:border-gray-700 rounded-l-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className={`${
                    isLoading || !input.trim()
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700'
                  } text-white px-4 py-2 rounded-r-md transition-colors`}
                >
                  {isLoading ? '发送中...' : '发送'}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                更多演示
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                探索我们的其他产品演示
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  智能文档分析
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  体验我们的智能文档分析功能，自动提取关键信息，生成摘要和见解。
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    开始体验 &rarr;
                  </a>
                </div>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  数据可视化
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  体验我们的数据可视化功能，将复杂数据转化为直观、易懂的图表和仪表盘。
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    开始体验 &rarr;
                  </a>
                </div>
              </div>

              <div className="card p-6">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600 dark:text-primary-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  智能流程自动化
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  体验我们的智能流程自动化功能，自动执行重复性任务，提高工作效率。
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    开始体验 &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              想了解更多？
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              如果你对我们的产品感兴趣，或者想了解更多信息，请联系我们的销售团队。
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 