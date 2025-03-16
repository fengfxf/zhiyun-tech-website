import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatInterface from '../../components/ChatInterface';

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              智能客服助手
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              我们的AI智能客服可以回答您关于栉云科技产品、服务和技术的问题，为您提供即时帮助和支持。
            </p>
          </div>
          
          <ChatInterface />
          
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              需要更多帮助？
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              如果您需要与人工客服联系，请发送邮件至 
              <a href="mailto:contact@zhiyun.tech" className="text-primary-600 dark:text-primary-400 hover:underline">
                contact@zhiyun.tech
              </a> 
              或拨打我们的客服热线 021-12345678
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 