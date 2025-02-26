'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  direction: 'fromRight' | 'fromLeft' | 'fromTop' | 'fromBottom';
  translation?: number;
  duration?: number;
  delay?: number;
};

export default function ViewAnimation({
  children,
  className,
  direction,
  translation = 20,
  duration = 0.3,
  delay,
}: Props) {
  const initialValues = {
    fromRight: { opacity: 0, x: translation },
    fromLeft: { opacity: 0, x: -translation },
    fromTop: { opacity: 0, y: -translation },
    fromBottom: { opacity: 0, y: translation },
  };

  return (
    <motion.div
      className={className}
      initial={initialValues[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
