'use client';

import { useEffect } from 'react';
import { animate, motion, useMotionValue, useTransform } from 'motion/react';
import { getYearsSince } from '@/app/lib/date-utils';

type Props = {
  startYear: number;
  label: string;
};

export default function ExperienceMetric({ startYear, label }: Props) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => `${Math.round(value)}+`);

  useEffect(() => {
    const controls = animate(count, getYearsSince(startYear), {
      duration: 1,
    });
    return controls.stop;
  }, [count, startYear]);

  return (
    <div>
      <motion.h1>{rounded}</motion.h1>
      <h3>{label}</h3>
    </div>
  );
}
