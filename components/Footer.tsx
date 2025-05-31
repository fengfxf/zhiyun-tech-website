"use client";

import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext'

const navigation = {
  main: [
    { nameKey: 'common.home', href: '/' },
    { nameKey: 'common.products', href: '/products' },
    { nameKey: 'common.technology', href: '/technology' },
    { nameKey: 'common.about', href: '/about' },
    { nameKey: 'common.careers', href: '/careers' },
    // { nameKey: 'common.contact', href: '/contact' },
  ],
  social: [
    {
      name: '微信',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M9.5,4C5.36,4,2,6.69,2,10c0,1.89,1.08,3.56,2.78,4.66l-0.8,2.32l2.96-1.5c0.84,0.28,1.66,0.52,2.56,0.52c0.34,0,0.68-0.03,1-0.07C10.96,15.27,11,14.64,11,14c0-3.31-3.13-6-7-6L9.5,4z M6.5,8C7.33,8,8,8.67,8,9.5S7.33,11,6.5,11S5,10.33,5,9.5S5.67,8,6.5,8z M12.5,8C13.33,8,14,8.67,14,9.5S13.33,11,12.5,11S11,10.33,11,9.5S11.67,8,12.5,8z M22,14.5c0-2.76-2.69-5-6-5s-6,2.24-6,5s2.69,5,6,5c0.71,0,1.37-0.12,2-0.34L21,21l-0.67-2.03C21.32,17.76,22,16.21,22,14.5z M13.5,13.5c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S14.05,13.5,13.5,13.5z M18.5,13.5c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S19.05,13.5,18.5,13.5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: '微博',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M10.096 18.857c-3.882.476-7.227-1.381-7.478-4.153-.252-2.772 2.686-5.488 6.567-5.964 3.883-.476 7.229 1.38 7.479 4.153.252 2.773-2.685 5.489-6.568 5.964zm.28-9.2c-3.737.458-6.173 2.932-5.952 5.317.222 2.384 3.322 3.89 7.06 3.432 3.736-.458 6.172-2.932 5.95-5.316-.22-2.385-3.32-3.89-7.058-3.432zm7.389-3.93c-.829-.257-1.673.207-1.929 1.036-.256.827.208 1.673 1.036 1.928.803.25 1.342 1.042 1.284 1.883-.06.842-.69 1.557-1.498 1.698l-.005.001c-.847.145-1.415.95-1.27 1.795.145.846.95 1.414 1.796 1.27l.012-.003c1.879-.325 3.295-1.956 3.44-3.954.146-1.998-1.09-3.815-2.866-4.654zM16.62 7.06c-.405-.125-.82.101-.945.505-.125.404.101.819.506.944.392.121.654.51.627.92-.027.41-.336.76-.73.83-.414.07-.69.465-.618.878.071.414.465.69.879.618.916-.158 1.61-.957 1.68-1.93.07-.975-.532-1.864-1.4-2.275z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                {t('common.companyName')}
              </span>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-base">
                {t('hero.description')}
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900 dark:text-white">{t('footer.solutions') || '解决方案'}</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      {t('footer.smartCustomerService') || '智能客服'}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      {t('footer.dataAnalysis') || '数据分析'}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      {t('footer.smartAssistant') || '智能助手'}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      {t('footer.customDevelopment') || '定制开发'}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900 dark:text-white">{t('footer.support') || '支持'}</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      {t('footer.docs') || '文档'}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      {t('footer.api') || 'API'}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      {t('footer.faq') || '常见问题'}
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                      {t('footer.community') || '社区'}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-gray-900 dark:text-white">{t('footer.company') || '公司'}</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.nameKey}>
                      <Link href={item.href} className="text-base text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                        {t(item.nameKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-gray-900 dark:text-white">{t('footer.contactUs') || t('contact.title') || '联系我们'}</h3>
                <ul className="mt-4 space-y-4">
                  <li className="text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium">{t('contact.address') || '地址'}：</span>{t('contact.addressValue')}
                  </li>
                  <li className="text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium">{t('contact.phone') || '电话'}：</span>{t('contact.phoneValue')}
                  </li>
                  <li className="text-base text-gray-600 dark:text-gray-300">
                    <span className="font-medium">{t('contact.email') || '邮箱'}：</span>{t('contact.emailValue')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-base text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} {t('common.companyName')}. {t('footer.copyright') || '保留所有权利.'}
          </p>
        </div>
      </div>
    </footer>
  );
} 