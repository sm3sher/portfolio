'use client';

import { useActiveSection, useScrolled } from '@/app/lib/hooks/use-scroll';
import Tooltip from '@/app/ui/tooltip/tooltip';
import { Link, usePathname } from '@/i18n/routing';
import {
  ContractsIcon,
  GridViewIcon,
  Home09Icon,
  UserCircleIcon,
} from 'hugeicons-react';
import { useEffect, useState } from 'react';

type Props = {
  homeLabel?: string | null;
  aboutLabel?: string | null;
  servicesLabel?: string | null;
  contactLabel?: string | null;
};

export default function NavMenu({
  homeLabel,
  aboutLabel,
  servicesLabel,
  contactLabel,
}: Props) {
  const pathname = usePathname();
  const [elements, setElements] = useState<HTMLElement[]>([]);
  const scrolled = useScrolled();
  const activeSection = useActiveSection(elements);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional dependency on pathname to reset activeSection when switching pages
  useEffect(() => {
    setElements(
      navbarItems
        .map((item) => document.getElementById(item.id))
        .filter((element) => !!element),
    );
  }, [pathname]);

  const navbarItems = [
    {
      id: 'home',
      icon: <Home09Icon size={20} />,
      label: homeLabel,
    },
    {
      id: 'about',
      icon: <UserCircleIcon size={20} />,
      label: aboutLabel,
    },
    {
      id: 'services',
      icon: <GridViewIcon size={20} />,
      label: servicesLabel,
    },
    {
      id: 'contact',
      icon: <ContractsIcon size={20} />,
      label: contactLabel,
    },
  ];

  const basePath = pathname === '/' ? '' : '/';

  return (
    <div
      className={`base-border flex space-x-1 rounded-2xl p-1 backdrop-blur duration-1000 ${
        scrolled ? 'bg-(--overlay-color)' : ''
      }`}
    >
      {navbarItems.map((item) => (
        <Tooltip key={item.id} content={item.label} hideAtSm>
          <Link
            href={`${basePath}#${item.id}`} // Adjust href to include "/" if not on main page
            className={`flex items-center rounded-xl border border-transparent font-medium transition duration-300 ${
              activeSection === item.id
                ? 'border-(--border-color)! bg-(--hover-color)'
                : 'hover-effect'
            }`}
            aria-current={activeSection === item.id ? 'page' : undefined}
            aria-label={item.label || undefined}
          >
            <span className="px-3 py-1">{item.icon}</span>
            <span className="hidden pr-3 text-sm leading-7 sm:block">
              {item.label}
            </span>
          </Link>
        </Tooltip>
      ))}
    </div>
  );
}
