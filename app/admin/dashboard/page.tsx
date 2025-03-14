"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProtectedRoute from '../../../components/ProtectedRoute';
import AdminNavbar from '../../../components/AdminNavbar';
import { getContactMessages } from '../../../lib/supabase-admin';
import { ContactFormData } from '../../../types/contact';

export default function AdminDashboard() {
  const [recentMessages, setRecentMessages] = useState<ContactFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    unprocessed: 0,
    processed: 0,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error, count } = await getContactMessages(1, 5);
        if (error) {
          console.error('Error fetching messages:', error);
          setError('获取留言数据失败');
        } else {
          setRecentMessages(data || []);
          
          // 计算统计数据
          if (data) {
            const processed = data.filter(msg => msg.processed).length;
            const unprocessed = data.filter(msg => !msg.processed).length;
            setStats({
              total: count || data.length,
              processed,
              unprocessed: count ? (count - processed) : unprocessed
            });
          }
        }
      } catch (err) {
        console.error('Exception fetching messages:', err);
        setError('获取留言数据时发生错误');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <ProtectedRoute>
      <AdminNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
              管理员仪表盘
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <Link
              href="/admin/messages"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              查看所有留言
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  总留言数
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                  {loading ? '...' : stats.total}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  未处理留言
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                  {loading ? '...' : stats.unprocessed}
                </dd>
              </dl>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                  已处理留言
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">
                  {loading ? '...' : stats.processed}
                </dd>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
            最近留言
          </h3>
          <div className="mt-4 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
            {loading ? (
              <div className="py-12 flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            ) : error ? (
              <div className="py-8 text-center text-red-600 dark:text-red-400">{error}</div>
            ) : recentMessages.length === 0 ? (
              <div className="py-8 text-center text-gray-500 dark:text-gray-400">暂无留言数据</div>
            ) : (
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {recentMessages.map((message) => (
                  <li key={message.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-primary-600 dark:text-primary-400 truncate">
                          {message.name}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              message.processed
                                ? 'bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100'
                                : 'bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100'
                            }`}
                          >
                            {message.processed ? '已处理' : '未处理'}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                            {message.email}
                          </p>
                          {message.company && (
                            <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300 sm:mt-0 sm:ml-6">
                              {message.company}
                            </p>
                          )}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
                          <p>
                            {new Date(message.created_at!).toLocaleString('zh-CN')}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                          {message.message}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 