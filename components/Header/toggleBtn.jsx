'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeTheme, setActiveTheme] = useState('system');
  const [activeOption, setActiveOption] = useState('system');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'system' || !savedTheme) {
      applySystemTheme();
      setActiveTheme('system');
    } else {
      applyTheme(savedTheme);
      setActiveTheme(savedTheme);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = () => {
      if (!savedTheme || savedTheme === 'system') {
        applySystemTheme();
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleThemeChange = (newTheme) => {
      setActiveTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      if (newTheme === 'system') {
        applySystemTheme();
      } else {
        applyTheme(newTheme);
      }
    };

    handleThemeChange(activeOption);
  }, [activeOption]);

  const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <main className='flex items-center justify-center '>
      <div>
        <select
          className='flex items-center  mr-5 px-2 py-1  gap-2  bg-blue-300 border rounded border-black'
          // border rounded border-black
          value={activeOption}
          onChange={(e) => setActiveOption(e.target.value)}
        >
          <option
            value='light'
            className={`flex justify-center items-center m-auto text-lg w-fit transition-color duration-200 ease-in-out py-3 px-2 rounded-lg font-semibold mt-5 ${
              activeTheme === 'dark'
                ? 'bg-cyan-800  active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-slate-600 text-gray-50'
                : 'bg-slate-500 dark:bg-slate-600 hover:bg-cyan-800 text-gray-50 dark:text-gray-400'
            }`}
            // className='bg-white'
          >
            Light Theme
          </option>
          <option
            value='dark'
            className={`flex justify-center items-center m-auto text-lg w-fit transition-color duration-200 ease-in-out py-3 px-10 rounded-lg font-semibold  ${
              activeTheme === 'dark'
                ? 'bg-cyan-800  active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-slate-600 text-gray-50'
                : 'bg-slate-500 dark:bg-slate-600 hover:bg-cyan-800 text-gray-50 dark:text-gray-400'
            }`}
          >
            Dark Theme
          </option>
          <option
            value='system'
            className={`flex justify-center items-center m-auto text-lg w-fit transition-color duration-200 ease-in-out py-3 px-10 rounded-lg font-semibold ${
              activeTheme === 'system'
                ? 'bg-cyan-800 text-gray-50 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 hover:bg-slate-600 text-gray-50'
                : 'bg-slate-500 dark:bg-slate-600 hover:bg-cyan-800 text-gray-50 dark:text-gray-400'
            }`}
          >
            Use System Theme
          </option>
        </select>
      </div>
    </main>
  );
}
