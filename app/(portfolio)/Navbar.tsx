'use client';

import Link from 'next/link';
import {
  ContractsIcon,
  GridViewIcon,
  Home09Icon,
  UserCircleIcon,
} from 'hugeicons-react';
import { usePathname } from 'next/navigation';

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
    href: '/work',
    icon: <GridViewIcon size={20} />,
    label: 'Work',
  },
  {
    href: '/contact',
    icon: <ContractsIcon size={20} />,
    label: 'Contact',
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="backdrop flex space-x-1 rounded-2xl border border-black/20 p-1 dark:border-white/20">
      {navbarItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`flex items-center rounded-xl border border-transparent font-medium transition duration-300 ${
            pathname === item.href
              ? 'border-[--background-active] bg-[--background-active]'
              : 'hover:border-[--background-hover] hover:bg-[--background-hover]'
          }`}
        >
          <span className="px-3 py-1">{item.icon}</span>
          <span className="hidden pr-3 leading-7 sm:block">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
