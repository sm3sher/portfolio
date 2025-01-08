'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  axis?: 'x' | 'y';
};

export default function ViewAnimation({
  children,
  className,
  duration = 1,
  delay,
  axis = 'y',
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, [axis]: 50 }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
