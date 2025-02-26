'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function TypingAnimation({ children }: Props) {
  return (
    <>
      {(Array.isArray(children) ? children : [children]).map((child, index) => (
        <motion.span
          // biome-ignore lint/suspicious/noArrayIndexKey: index is used safely for static text with no dynamic changes
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            duration: 0.4,
            delay: index / 10,
          }}
        >
          {child}{' '}
        </motion.span>
      ))}
    </>
  );
}
