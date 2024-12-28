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
    <div className="base-border w-full border-b-0 border-l-0 border-r-0 pl-0.5 pt-7">
      <motion.h3 className="mb-1 font-light">{rounded}</motion.h3>
      <h6 className="text-base uppercase tracking-wide text-[--secondary]">
        <span className="whitespace-nowrap">Years of</span>{' '}
        <span className="whitespace-nowrap">{label}</span>
      </h6>
    </div>
  );
}
