'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  direction: 'fromRight' | 'fromLeft' | 'fromTop' | 'fromBottom';
  duration?: number;
  delay?: number;
};

export default function ViewAnimation({
  children,
  className,
  direction,
  duration = 0.8,
  delay,
}: Props) {
  const initialValues = {
    fromRight: { opacity: 0, x: 50 },
    fromLeft: { opacity: 0, x: -50 },
    fromTop: { opacity: 0, y: -50 },
    fromBottom: { opacity: 0, y: 50 },
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
