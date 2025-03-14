"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../contexts/LanguageContext';
import { submitContactForm } from '../services/contactService';
import { ContactFormData } from '../types/contact';

export default function ContactSection() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const result = await submitContactForm(formState);
      
      if (result.success) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          company: '',
          message: '',
        });
      } else {
        setSubmitError(result.error || t('contact.errorGeneric'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(t('contact.errorGeneric'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              {t('contact.info')}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 dark:text-white font-medium">{t('contact.address')}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('contact.addressValue')}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 dark:text-white font-medium">{t('contact.phone')}</p>
                  <p className="text-gray-600 dark:text-gray-300">{t('contact.phoneValue')}</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 dark:text-white font-medium">{t('contact.email')}</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('contact.emailValue')}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                {t('contact.followUs')}
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span className="sr-only">微信</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.5,4C5.36,4,2,6.69,2,10c0,1.89,1.08,3.56,2.78,4.66l-0.8,2.32l2.96-1.5c0.84,0.28,1.66,0.52,2.56,0.52c0.34,0,0.68-0.03,1-0.07C10.96,15.27,11,14.64,11,14c0-3.31-3.13-6-7-6L9.5,4z M6.5,8C7.33,8,8,8.67,8,9.5S7.33,11,6.5,11S5,10.33,5,9.5S5.67,8,6.5,8z M12.5,8C13.33,8,14,8.67,14,9.5S13.33,11,12.5,11S11,10.33,11,9.5S11.67,8,12.5,8z M22,14.5c0-2.76-2.69-5-6-5s-6,2.24-6,5s2.69,5,6,5c0.71,0,1.37-0.12,2-0.34L21,21l-0.67-2.03C21.32,17.76,22,16.21,22,14.5z M13.5,13.5c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S14.05,13.5,13.5,13.5z M18.5,13.5c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S19.05,13.5,18.5,13.5z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span className="sr-only">微博</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.096 18.857c-3.882.476-7.227-1.381-7.478-4.153-.252-2.772 2.686-5.488 6.567-5.964 3.883-.476 7.229 1.38 7.479 4.153.252 2.773-2.685 5.489-6.568 5.964zm.28-9.2c-3.737.458-6.173 2.932-5.952 5.317.222 2.384 3.322 3.89 7.06 3.432 3.736-.458 6.172-2.932 5.95-5.316-.22-2.385-3.32-3.89-7.058-3.432zm7.389-3.93c-.829-.257-1.673.207-1.929 1.036-.256.827.208 1.673 1.036 1.928.803.25 1.342 1.042 1.284 1.883-.06.842-.69 1.557-1.498 1.698l-.005.001c-.847.145-1.415.95-1.27 1.795.145.846.95 1.414 1.796 1.27l.012-.003c1.879-.325 3.295-1.956 3.44-3.954.146-1.998-1.09-3.815-2.866-4.654zM16.62 7.06c-.405-.125-.82.101-.945.505-.125.404.101.819.506.944.392.121.654.51.627.92-.027.41-.336.76-.73.83-.414.07-.69.465-.618.878.071.414.465.69.879.618.916-.158 1.61-.957 1.68-1.93.07-.975-.532-1.864-1.4-2.275z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900 p-8 rounded-xl text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-green-500 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {t('contact.messageSent')}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {t('contact.thankYou')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  {t('contact.newMessage')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-50 dark:bg-red-900 p-4 rounded-md">
                    <p className="text-red-600 dark:text-red-300">{submitError}</p>
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t('contact.company')}
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t('contact.message')}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : null}
                    {t('contact.send')}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
} 