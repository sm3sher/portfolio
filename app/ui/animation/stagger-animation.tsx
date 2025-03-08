'use client';
import { type Variants, motion } from 'motion/react';
import type { ReactElement } from 'react';

type Props = {
  children?: ReactElement | ReactElement[];
  className?: string;
  itemClassName?: string;
  direction: 'fromRight' | 'fromLeft' | 'fromTop' | 'fromBottom';
  translation?: number;
  amount?: number;
  delay?: number;
};

export default function StaggerAnimation({
  children,
  className,
  itemClassName,
  direction,
  translation = 20,
  amount = 0.4,
  delay = 0,
}: Props) {
  const initialValues = {
    fromRight: { opacity: 0, x: translation },
    fromLeft: { opacity: 0, x: -translation },
    fromTop: { opacity: 0, y: -translation },
    fromBottom: { opacity: 0, y: translation },
  };

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
