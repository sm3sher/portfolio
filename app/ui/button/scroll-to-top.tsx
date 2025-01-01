'use client';

import { useEffect, useState } from 'react';
import { ArrowUp01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';

export default function ScrollToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={showScrollButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      onClick={scrollToTop}
      className="base-border fixed bottom-4 right-4 z-30 flex items-center justify-center rounded-full p-2 xl:bottom-8 xl:right-10"
      aria-label="Scroll to top"
    >
      <ArrowUp01Icon className="relative bottom-0.5 text-[--secondary]" />
    </motion.button>
  );
}
