'use client';

import {
  ContractsIcon,
  GridViewIcon,
  Home09Icon,
  UserCircleIcon,
} from 'hugeicons-react';
import { Link, usePathname } from '@/i18n/routing';
import { useEffect, useState } from 'react';

const navbarItems = [
  {
    id: 'home',
    icon: <Home09Icon size={20} />,
    label: 'Home',
  },
  {
    id: 'about',
    icon: <UserCircleIcon size={20} />,
    label: 'About',
  },
  {
    id: 'services',
    icon: <GridViewIcon size={20} />,
    label: 'Services',
  },
  {
    id: 'contact',
    icon: <ContractsIcon size={20} />,
    label: 'Contact',
  },
];

export default function NavigationMenu() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>();

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

  const basePath = pathname === '/' ? '' : '/';

  return (
    <div className="base-border flex space-x-1 rounded-2xl p-1 backdrop-blur">
      {navbarItems.map((item) => (
        <Link
          key={item.id}
          href={`${basePath}#${item.id}`} // Adjust href to include "/" if not on main page
          className={`flex items-center rounded-xl border border-transparent font-medium transition duration-300 ${
            activeSection === item.id
              ? '!border-[--border-color] bg-neutral-700/10 dark:bg-neutral-200/20'
              : 'hover-effect'
          }`}
        >
          <span className="px-3 py-1">{item.icon}</span>
          <span className="hidden pr-3 leading-7 sm:block">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
