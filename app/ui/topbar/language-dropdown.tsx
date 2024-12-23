'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LanguageSkillIcon } from 'hugeicons-react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function LanguageDropdown() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace({ pathname }, { locale: newLocale });
    setOpen(false);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement | HTMLUListElement | HTMLLIElement>,
  ) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
    if (e.key === 'Enter') {
      const target = e.target as HTMLElement;
      if (target.dataset.language) {
        handleLocaleChange(target.dataset.language as Locale);
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownLanguageButton"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((prevState) => !prevState)}
        onKeyDown={handleKeyDown}
        className="backdrop base-border rounded-2xl p-2 duration-200 hover:bg-[--background-hover]"
      >
        <LanguageSkillIcon size={22} />
      </button>
      <div
        id="dropdown"
        hidden={!open}
        className="backdrop base-border absolute z-10 mt-1 w-32 rounded-2xl p-0 font-medium duration-200"
      >
        <ul
          className="py-1.5 text-sm"
          aria-labelledby="dropdownLanguageButton"
          role="menu"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          <li
            className={`flex cursor-pointer items-center rounded-t-md pl-3 ${locale === 'en' ? 'bg-[--background-active]' : 'hover:bg-[--background-hover]'}`}
            role="menuitem"
            tabIndex={0}
            data-language="en"
            onClick={() => handleLocaleChange('en')}
            onKeyDown={handleKeyDown}
          >
            <Image
              src="/flag-us.svg"
              alt="American language flag"
              width={30}
              height={20}
            />
            <span className="block px-3 py-2">English</span>
          </li>
          <li
            className={`flex cursor-pointer items-center rounded-b-md pl-3 ${locale === 'de' ? 'bg-[--background-active]' : 'hover:bg-[--background-hover]'}`}
            role="menuitem"
            tabIndex={0}
            data-language="de"
            onClick={() => handleLocaleChange('de')}
            onKeyDown={handleKeyDown}
          >
            <Image
              src="/flag-de.svg"
              alt="German language flag"
              width={30}
              height={20}
            />
            <span className="block px-3 py-2">Deutsch</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
