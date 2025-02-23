'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function SpringAnimation({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 150 }}
    >
      {children}
    </motion.div>
  );
}
