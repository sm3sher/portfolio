'use client';
import { motion } from 'motion/react';
import type { ReactElement } from 'react';

type Props = {
  children?: ReactElement | ReactElement[];
  className?: string;
  itemClassName?: string;
  direction: 'fromRight' | 'fromLeft' | 'fromTop' | 'fromBottom';
};

const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function StaggerAnimation({
  children,
  className,
  itemClassName,
  direction,
}: Props) {
  const initialValues = {
    fromRight: { opacity: 0, x: 20 },
    fromLeft: { opacity: 0, x: -20 },
    fromTop: { opacity: 0, y: -20 },
    fromBottom: { opacity: 0, y: 20 },
  };

  const staggerItem = {
    hidden: initialValues[direction],
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };
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
