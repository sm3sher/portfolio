'use client';
import { type Variants, motion } from 'motion/react';
import type { ReactElement } from 'react';

type Props = {
  children?: ReactElement | ReactElement[];
  className?: string;
  itemClassName?: string;
  direction: 'fromRight' | 'fromLeft' | 'fromTop' | 'fromBottom';
  amount?: number;
  delay?: number;
};

const initialValues = {
  fromRight: { opacity: 0, x: 20 },
  fromLeft: { opacity: 0, x: -20 },
  fromTop: { opacity: 0, y: -20 },
  fromBottom: { opacity: 0, y: 20 },
};

export default function StaggerAnimation({
  children,
  className,
  itemClassName,
  direction,
  amount = 0.4,
  delay = 0,
}: Props) {
  const staggerContainer: Variants = {
    hidden: { opacity: 1 },
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: delay,
      },
    },
  };

  const staggerItem: Variants = {
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
      viewport={{ once: true, amount }}
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
