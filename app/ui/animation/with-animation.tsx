'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  axis?: 'x' | 'y';
};

export default function WithAnimation({
  children,
  className,
  delay,
  axis = 'y',
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, [axis]: 30 }}
      animate={{ opacity: 1, [axis]: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
