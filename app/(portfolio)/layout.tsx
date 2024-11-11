'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { ContractsIcon, GridViewIcon, UserCircleIcon } from 'hugeicons-react';
import Link from 'next/link';

const navbarItems = [
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
        <div>Language toggle</div>
        <div className="flex space-x-1 rounded-2xl border border-white/20 p-1">
          {navbarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-xl border border-transparent px-3 py-0.5 font-medium transition duration-300 ${pathname === item.href ? 'border-white/20 bg-neutral-600/60' : 'hover:border-white/10 hover:bg-neutral-600/15'}`}
            >
              <span className="mb-0.5 mr-2">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
        <div>Darkmode toggle</div>
      </nav>
      <div className="mx-auto max-w-screen-xl p-6">{children}</div>
    </div>
  );
}
