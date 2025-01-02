'use client';

import { useEffect, useState } from 'react';
import { ArrowUp01Icon } from 'hugeicons-react';
import { motion } from 'motion/react';

export default function ScrollToTop() {
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
      initial={{ opacity: 0, y: 50 }}
      animate={showScrollButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-4 right-4 z-10 mix-blend-difference xl:bottom-8 xl:right-10"
    >
      <button
        onClick={scrollToTop}
        className="relative aspect-square rounded-full p-2.5"
        aria-label="Scroll to top"
      >
        <div
          className="absolute inset-0 rounded-full p-0.5"
          style={progressStyle}
        />
        <ArrowUp01Icon strokeWidth={2} className="pb-0.5 text-[--secondary]" />
      </button>
    </motion.div>
  );
}
