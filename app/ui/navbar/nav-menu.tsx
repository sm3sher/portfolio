'use client';

import {
  ContractsIcon,
  GridViewIcon,
  Home09Icon,
  UserCircleIcon,
} from 'hugeicons-react';
import { Link, usePathname } from '@/i18n/routing';
import { useEffect, useState } from 'react';
import Tooltip from '@/app/ui/tooltip/tooltip';
import useScrolled from '@/app/ui/hook/use-scrolled';

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
  const [activeSection, setActiveSection] = useState<string>();
  const scrolled = useScrolled();

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'contact'];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = undefined;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection);
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

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
        scrolled && 'bg-(--overlay-color)'
      }`}
    >
      {navbarItems.map((item) => (
        <Tooltip key={item.id} content={item.label} marginTop="mt-2.5" hideAtSm>
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
