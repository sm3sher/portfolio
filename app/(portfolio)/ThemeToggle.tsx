'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Loading03Icon, Moon02Icon, Sun03Icon } from 'hugeicons-react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark');

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return !mounted ? (
    <button className="rounded-2xl border border-black/20 p-2 backdrop-blur backdrop-brightness-125 duration-200 dark:border-white/20 dark:backdrop-brightness-90">
      <Loading03Icon size={22} />
    </button>
  ) : (
    <button
      onClick={toggleTheme}
      className="rounded-2xl border border-black/20 p-2 backdrop-blur backdrop-brightness-125 duration-200 hover:bg-[--background-hover] dark:border-white/20 dark:backdrop-brightness-90"
    >
      {isDark ? <Sun03Icon size={22} /> : <Moon02Icon size={22} />}
    </button>
  );
}
