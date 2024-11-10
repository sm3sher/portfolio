'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navbarItems = [
  {
    href: '/me',
    label: 'About me',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/contact',
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
              className={`rounded-xl border border-transparent px-3 py-0.5 transition duration-300 ${pathname === item.href ? 'border-white/20 bg-neutral-600/60' : 'hover:border-white/10 hover:bg-neutral-600/15'}`}
            >
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
