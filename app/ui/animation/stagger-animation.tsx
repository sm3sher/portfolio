'use client';
import { motion } from 'motion/react';
import type { ReactElement } from 'react';

type Props = {
  children?: ReactElement | ReactElement[];
  className?: string;
  itemClassName?: string;
};

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function StaggerAnimation({
  children,
  className,
  itemClassName,
}: Props) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      {(Array.isArray(children) ? children : [children]).map((child) => (
        <motion.div
          key={child?.key}
          className={itemClassName}
          variants={staggerItem}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
