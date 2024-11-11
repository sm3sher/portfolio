'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import {
  ContractsIcon,
  GridViewIcon,
  Home09Icon,
  UserCircleIcon,
} from 'hugeicons-react';
import Link from 'next/link';
import ThemeToggle from '@/app/(portfolio)/ThemeToggle';

const navbarItems = [
  {
    href: '/',
    icon: <Home09Icon size={20} />,
    label: 'Home',
  },
  {
    href: '/about',
    icon: <UserCircleIcon size={20} />,
    label: 'About',
  },
  {
    href: '/projects',
    icon: <GridViewIcon size={20} />,
    label: 'Projects',
  },
  {
    href: '/contact',
    icon: <ContractsIcon size={20} />,
    label: 'Contact',
  },
];

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div>
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-6">
        <button>EN/DE</button>
        <div className="flex space-x-1 rounded-2xl border border-black/20 p-1 dark:border-white/20">
          {navbarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-xl border border-transparent font-medium transition duration-300 ${
                pathname === item.href
                  ? 'border-black/35 bg-neutral-400/30 dark:border-white/20 dark:bg-neutral-600/60'
                  : 'hover:border-black/15 hover:bg-neutral-400/10 dark:hover:border-white/15 dark:hover:bg-neutral-600/20'
              }`}
            >
              <span className="px-3 py-1">{item.icon}</span>
              <span className="hidden pr-3 leading-7 sm:block">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        <ThemeToggle />
      </nav>
      <div className="mx-auto max-w-screen-xl p-6">{children}</div>
    </div>
  );
}
