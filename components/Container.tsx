import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import Footer from './Footer';
import MobileNavbar from './MobileNavbar';
import DefaultNavbar from './DefaultNavbar';

export default function Container({ children }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [resolvedTheme])
  
  const router = useRouter();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 px-8">
      <Head>
        <title>Justin Peng</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="follow, index" />
        <meta property="og:url" content={`https://justinpeng13.vercel.app${router.asPath}`} />
        <link rel="canonical" href={`https://justinpeng13.vercel.app${router.asPath}`} />
        <meta property="og:site_name" content="Justin Peng" />
        <meta property="og:title" content="Justin Peng" />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <div className="flex flex-col font-consolas">
        <nav className="flex items-center justify-between w-full relative max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <div>
            <MobileNavbar />
            <DefaultNavbar />
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-full dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
            onClick={() =>
              setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </div>
      <main className="flex flex-col justify-center bg-gray-50 dark:bg-gray-900 max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}