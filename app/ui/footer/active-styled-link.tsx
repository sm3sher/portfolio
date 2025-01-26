'use client';

import { Link, usePathname } from '@/i18n/routing';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href: string;
};

export default function ActiveStyledLink({ children, href }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`hover:underline hover:underline-offset-4 ${pathname === href ? 'pointer-events-none text-(--highlight)' : ''}`}
      aria-current={pathname === href ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}
