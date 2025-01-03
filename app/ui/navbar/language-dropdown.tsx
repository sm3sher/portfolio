'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LanguageSkillIcon } from 'hugeicons-react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';

type Props = {
  usFlagDescription?: string | null;
  deFlagDescription?: string | null;
};

export default function LanguageDropdown({
  usFlagDescription,
  deFlagDescription,
}: Props) {
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
        onClick={() => setOpen((prevState) => !prevState)}
        onKeyDown={handleKeyDown}
        className="base-border hover-effect rounded-2xl p-2 backdrop-blur"
        aria-haspopup
        aria-expanded={open}
        aria-controls="dropdown"
      >
        <LanguageSkillIcon size={22} />
      </button>
      <div
        id="dropdown"
        hidden={!open}
        className="base-border absolute z-10 mt-2 w-32 rounded-2xl p-0 font-medium backdrop-blur"
      >
        <ul
          className="space-y-1 p-1 text-sm"
          role="menu"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          aria-labelledby="dropdownLanguageButton"
        >
          <li
            className={`flex items-center rounded-xl pl-3 ${locale === 'en' ? 'text-[--secondary]' : 'hover-effect'}`}
            role="menuitem"
            tabIndex={0}
            data-language="en"
            onClick={() => handleLocaleChange('en')}
            onKeyDown={handleKeyDown}
            aria-current={locale === 'en'}
          >
            <Image
              className="rounded-sm"
              src="/flag-us.svg"
              alt={usFlagDescription || ''}
              width={30}
              height={20}
            />
            <span className="block px-3 py-2">English</span>
          </li>
          <li
            className={`flex items-center rounded-xl pl-3 ${locale === 'de' ? 'text-[--secondary]' : 'hover-effect'}`}
            role="menuitem"
            tabIndex={0}
            data-language="de"
            onClick={() => handleLocaleChange('de')}
            onKeyDown={handleKeyDown}
            aria-current={locale === 'de'}
          >
            <Image
              className="rounded-sm"
              src="/flag-de.svg"
              alt={deFlagDescription || ''}
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
