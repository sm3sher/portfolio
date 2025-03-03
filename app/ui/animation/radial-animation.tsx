'use client';

import { motion } from 'motion/react';

type Props = {
  top: number | string;
  left: number | string;
  radius: number;
};

export default function RadialAnimation({ top, left, radius }: Props) {
  return (
    <motion.div
      className="-z-10 absolute inset-0 bg-radial from-(--radial-color) from-[1px] to-[1px] to-transparent [background-size:2px_2px]"
      initial={{
        opacity: 0,
        maskImage: `radial-gradient(circle at ${top} ${left}, black 0%, transparent 0%)`,
      }}
      whileInView={{
        opacity: 1,
        maskImage: `radial-gradient(circle at ${top} ${left}, black 0%, transparent ${radius}%)`,
      }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1,
        ease: 'easeOut',
      }}
    />
  );
}
