import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or fallback to system preference
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-14 h-8 flex items-center cursor-pointer rounded-full px-1 bg-gray-300 dark:bg-gray-700 transition-colors duration-300"
    >
      <div
        className={`w-6 h-6 bg-white dark:bg-yellow-400 rounded-full transform transition-transform duration-300 ${
          darkMode ? 'translate-x-6' : ''
        } flex items-center justify-center relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 transition-all duration-300"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* ☀️ Sun path */}
          <path
            className={`transition-all duration-300 absolute ${
              darkMode ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
            d="M12 4.5a1 1 0 011 1V7a1 1 0 11-2 0V5.5a1 1 0 011-1zm0 12a1 1 0 011 1v1.5a1 1 0 11-2 0V17.5a1 1 0 011-1zm7.5-6a1 1 0 011 1h1.5a1 1 0 110 2H20.5a1 1 0 01-1-1 1 1 0 011-1zM4.5 12a1 1 0 011-1H7a1 1 0 110 2H5.5a1 1 0 01-1-1zm10.6-5.1a1 1 0 011.4 0l1.06 1.06a1 1 0 11-1.42 1.42L15.1 8.3a1 1 0 010-1.4zM6.44 15.66a1 1 0 010-1.42L7.5 13.18a1 1 0 111.42 1.42L7.86 16.1a1 1 0 01-1.42 0zm0-9.22a1 1 0 011.42 0l1.06 1.06A1 1 0 117.5 9.92L6.44 8.86a1 1 0 010-1.42zm9.22 9.22a1 1 0 011.42 0 1 1 0 010 1.42l-1.06 1.06a1 1 0 11-1.42-1.42l1.06-1.06z"
          />
          {/* 🌙 Moon path */}
          <path
            className={`transition-all duration-300 absolute ${
              darkMode ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        </svg>
      </div>
    </button>
  );
}
