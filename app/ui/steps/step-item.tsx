'use client';

import { motion } from 'motion/react';

type Props = {
  index: number;
  title?: string | null;
  description?: string | null;
  delay: number;
};

export default function StepItem({ index, title, description, delay }: Props) {
  return (
    <li className="flex items-start gap-4 sm:gap-6">
      <motion.span
        className="flex min-h-7 min-w-7 items-center justify-center rounded-lg border border-(--highlight) font-semibold backdrop-blur sm:min-h-8 sm:min-w-8 sm:text-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay,
          ease: 'easeOut',
        }}
      >
        {index + 1}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay,
          ease: 'easeOut',
        }}
      >
        <p className="font-semibold sm:text-lg">{title}</p>
        <span className="text-(--secondary) text-sm sm:text-base">
          {description}
        </span>
      </motion.span>
    </li>
  );
}
