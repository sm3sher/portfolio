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
    <button className="backdrop base-border rounded-2xl duration-200">
      <Loading03Icon size={22} />
    </button>
  ) : (
    <button
      onClick={toggleTheme}
      className="backdrop base-border rounded-2xl p-2 duration-200 hover:bg-[--background-hover]"
    >
      {isDark ? <Sun03Icon size={22} /> : <Moon02Icon size={22} />}
    </button>
  );
}
