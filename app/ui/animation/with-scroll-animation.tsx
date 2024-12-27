'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  id: string;
  delay?: number;
  axis?: 'x' | 'y';
};

export default function WithScrollAnimation({
  children,
  id,
  delay,
  axis = 'y',
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, [axis]: 50 }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  );
}
