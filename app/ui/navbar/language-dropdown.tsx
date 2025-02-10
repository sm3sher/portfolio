'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LanguageSkillIcon } from 'hugeicons-react';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import PresenceAnimation from '@/app/ui/animation/presence-animation';

type Props = {
  usFlagDescription?: string | null;
  deFlagDescription?: string | null;
  englishLabel?: string | null;
  germanLabel?: string | null;
  switchLanguageLabel?: string | null;
};

export default function LanguageDropdown({
  usFlagDescription,
  deFlagDescription,
  englishLabel,
  germanLabel,
  switchLanguageLabel,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale() as Locale;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>(null);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace({ pathname }, { locale: newLocale, scroll: false });
    setOpen(false);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement | HTMLLIElement>,
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

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
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
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        id="dropdownLanguageButton"
        onClick={() => setOpen((prevState) => !prevState)}
        onKeyDown={handleKeyDown}
        className="base-border hover-effect rounded-2xl p-2 backdrop-blur-sm"
        aria-haspopup
        aria-expanded={open}
        aria-controls="dropdown"
        aria-label={switchLanguageLabel || ''}
      >
        <LanguageSkillIcon size={22} />
      </button>
      <PresenceAnimation
        id="dropdown"
        show={open}
        className="base-border absolute z-10 mt-2 w-32 rounded-2xl p-0 font-medium backdrop-blur-sm"
        duration={0.2}
      >
        <ul
          className="space-y-1 p-1 text-sm"
          role="menu"
          tabIndex={-1}
          aria-labelledby="dropdownLanguageButton"
        >
          <li
            className={`flex items-center rounded-xl pl-3 ${locale === 'en' ? 'text-(--secondary)' : 'hover-effect'}`}
            role="menuitem"
            tabIndex={0}
            data-language="en"
            onClick={() => handleLocaleChange('en')}
            onKeyDown={handleKeyDown}
            aria-current={locale === 'en'}
          >
            <Image
              className="rounded-xs"
              src="/flag-us.svg"
              alt={usFlagDescription || ''}
              width={30}
              height={20}
            />
            <span className="block px-3 py-2">{englishLabel}</span>
          </li>
          <hr className="mx-2 border-(--border-color)" />
          <li
            className={`flex items-center rounded-xl pl-3 ${locale === 'de' ? 'text-(--secondary)' : 'hover-effect'}`}
            role="menuitem"
            tabIndex={0}
            data-language="de"
            onClick={() => handleLocaleChange('de')}
            onKeyDown={handleKeyDown}
            aria-current={locale === 'de'}
          >
            <Image
              className="rounded-xs"
              src="/flag-de.svg"
              alt={deFlagDescription || ''}
              width={30}
              height={20}
            />
            <span className="block px-3 py-2">{germanLabel}</span>
          </li>
        </ul>
      </PresenceAnimation>
    </div>
  );
}
