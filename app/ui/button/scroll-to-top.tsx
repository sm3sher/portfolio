'use client';

import { useEffect, useState } from 'react';
import { ArrowUp01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';
import { useLocale } from 'next-intl';
import { Locale } from '@/i18n/routing';

export default function ScrollToTop() {
  const locale = useLocale() as Locale;
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollButton(scrollTop > 150);

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / scrollHeight) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const progressStyle = {
    background: `conic-gradient(var(--border-color) ${scrollProgress}%, transparent ${scrollProgress}%)`,
    mask: 'linear-gradient(#000 0 0) exclude, linear-gradient(#000 0 0) content-box',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={showScrollButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.5 }}
      className={`fixed right-4 bottom-4 xl:right-10 xl:bottom-8 ${
        showScrollButton
          ? 'pointer-events-auto z-10'
          : 'pointer-events-none -z-10'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="relative aspect-square rounded-full p-2.5"
        aria-label={locale === 'en' ? 'Scroll to top' : 'Nach oben scrollen'}
      >
        <div
          className="absolute inset-0 cursor-pointer rounded-full p-0.5"
          style={progressStyle}
        />
        <ArrowUp01Icon strokeWidth={2} className="pb-0.5 text-(--secondary)" />
      </button>
    </motion.div>
  );
}
