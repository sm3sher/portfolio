'use client';

import type { ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Props = {
  children: ReactNode;
  show: boolean;
  id?: string;
  className?: string;
  withTranslation?: boolean;
  duration?: number;
};

export default function PresenceAnimation({
  children,
  show,
  id,
  className,
  withTranslation,
  duration,
}: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id={id}
          className={className}
          initial={{ opacity: 0, x: withTranslation ? 50 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: withTranslation ? 30 : 0 }}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
