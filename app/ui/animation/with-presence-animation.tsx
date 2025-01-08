'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Props = {
  children: ReactNode;
  show: boolean;
  className?: string;
  withTranslation?: boolean;
};

export default function WithPresenceAnimation({
  children,
  show,
  className,
  withTranslation,
}: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={className}
          initial={{ opacity: 0, x: withTranslation ? 50 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: withTranslation ? 30 : 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
