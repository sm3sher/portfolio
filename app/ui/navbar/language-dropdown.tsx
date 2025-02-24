'use client';

import useScrolled from '@/app/lib/hooks/use-scrolled';
import PresenceAnimation from '@/app/ui/animation/presence-animation';
import { type Locale, usePathname, useRouter } from '@/i18n/routing';
import { LanguageSkillIcon } from 'hugeicons-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { type KeyboardEvent, useEffect, useRef, useState } from 'react';

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
  const scrolled = useScrolled();
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
    e: KeyboardEvent<HTMLButtonElement | HTMLDivElement>,
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
      <div
        className={`rounded-2xl backdrop-blur duration-1000 ${
          scrolled && 'bg-(--overlay-color)'
        }`}
      >
        <button
          type="button"
          id="dropdownLanguageButton"
          onClick={() => setOpen((prevState) => !prevState)}
          onKeyDown={handleKeyDown}
          className="base-border hover-effect rounded-2xl p-2"
          aria-haspopup
          aria-expanded={open}
          aria-controls="dropdown"
          aria-label={switchLanguageLabel || ''}
        >
          <LanguageSkillIcon size={22} />
        </button>
      </div>
      <PresenceAnimation
        id="dropdown"
        show={open}
        className={`base-border absolute z-10 mt-2 w-32 rounded-2xl p-0 font-medium backdrop-blur duration-1000 ${
          scrolled && 'bg-(--overlay-color)'
        }`}
        duration={0.2}
      >
        <div
          className="space-y-1 p-1 text-sm"
          role="menu"
          aria-labelledby="dropdownLanguageButton"
        >
          <div
            className={`flex items-center rounded-xl pl-3 ${locale === 'en' ? 'text-(--secondary)' : 'hover-effect'}`}
            role="menuitem"
            tabIndex={0}
            data-language="en"
            onClick={() => handleLocaleChange('en')}
            onKeyDown={handleKeyDown}
            aria-current={locale === 'en'}
          >
            <Image
              className={`drop-shadow-md dark:drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] ${
                locale === 'en' && 'grayscale-75'
              }`}
              src="/flag-us.svg"
              alt={usFlagDescription || ''}
              width={30}
              height={30}
            />
            <span className="block px-3 py-2">{englishLabel}</span>
          </div>
          <hr className="mx-2 border-(--border-color)" />
          <div
            className={`flex items-center rounded-xl pl-3 ${locale === 'de' ? 'text-(--secondary)' : 'hover-effect'}`}
            role="menuitem"
            tabIndex={0}
            data-language="de"
            onClick={() => handleLocaleChange('de')}
            onKeyDown={handleKeyDown}
            aria-current={locale === 'de'}
          >
            <Image
              className={`drop-shadow-md dark:drop-shadow-[0_0_2px_rgba(255,255,255,0.5)] ${
                locale === 'de' && 'grayscale-75'
              }`}
              src="/flag-de.svg"
              alt={deFlagDescription || ''}
              width={30}
              height={30}
            />
            <span className="block px-3 py-2">{germanLabel}</span>
          </div>
        </div>
      </PresenceAnimation>
    </div>
  );
}
