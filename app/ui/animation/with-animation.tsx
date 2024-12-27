'use client';

import { motion } from 'motion/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function WithAnimtation({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
