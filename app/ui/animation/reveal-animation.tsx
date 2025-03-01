'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function RevealAnimation({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        filter: 'blur(0.5rem)',
        maskPosition: '100% 0%',
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0)',
        maskPosition: '0% 0%',
        transitionEnd: { maskImage: 'none', filter: 'initial' },
      }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
      style={{
        maskImage:
          'linear-gradient(to right, black 0%, black 25%, transparent 50%)',
        maskSize: '300% 100%',
      }}
    >
      {children}
    </motion.div>
  );
}
