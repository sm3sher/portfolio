'use client';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { LanguageSkillIcon } from 'hugeicons-react';

export default function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  // TODO: replace with actual language switch
  const [isEnglish, setIsEnglish] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = (selectedLanguage: 'us' | 'de') => {
    if (
      (isEnglish && selectedLanguage === 'us') ||
      (!isEnglish && selectedLanguage === 'de')
    ) {
      setOpen(false);
      return;
    }
    setIsEnglish(selectedLanguage === 'us');
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
        toggleLanguage(target.dataset.language as 'us' | 'de');
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
          className="py-1.5 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownLanguageButton"
          role="menu"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
        >
          <li
            className={`flex cursor-pointer items-center rounded-t-md pl-3 ${isEnglish ? 'bg-[--background-active]' : 'hover:bg-[--background-hover]'}`}
            role="menuitem"
            tabIndex={0}
            data-language="us"
            onClick={() => toggleLanguage('us')}
            onKeyDown={handleKeyDown}
          >
            <Image
              src="/flag_us.svg"
              alt="American language flag"
              width={30}
              height={20}
            />
            <span className="block px-3 py-2">English</span>
          </li>
          <li
            className={`flex cursor-pointer items-center rounded-b-md pl-3 ${!isEnglish ? 'bg-[--background-active]' : 'hover:bg-[--background-hover]'}`}
            role="menuitem"
            tabIndex={0}
            data-language="de"
            onClick={() => toggleLanguage('de')}
            onKeyDown={handleKeyDown}
          >
            <Image
              src="/flag_de.svg"
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
