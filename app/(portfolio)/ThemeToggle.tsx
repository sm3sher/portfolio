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
    <button className="rounded-full p-1">
      <Loading03Icon />
    </button>
  ) : (
    <button
      onClick={toggleTheme}
      className="rounded-full p-1 duration-300 hover:scale-110 hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-20"
    >
      {isDark ? <Sun03Icon /> : <Moon02Icon />}
    </button>
  );
}
