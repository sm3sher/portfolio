'use client';

import { useEffect, useRef } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'motion/react';
import { getYearsSince } from '@/app/lib/date-utils';

type Props = {
  startYear: number;
  label: string;
};

export default function ExperienceMetric({ startYear, label }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => `${Math.round(value)}+`);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, getYearsSince(startYear), {
        duration: 1.5,
        delay: 0.5,
      });
      return controls.stop;
    }
  }, [isInView, count, startYear]);

  return (
    <div
      ref={ref}
      className="base-border w-full border-b-0 border-l-0 border-r-0 pl-0.5 pt-7"
    >
      <motion.h3 className="mb-1 font-light">{rounded}</motion.h3>
      <h6 className="text-base uppercase tracking-wide text-[--secondary]">
        <span className="whitespace-nowrap">Years of</span>{' '}
        <span className="whitespace-nowrap">{label}</span>
      </h6>
    </div>
  );
}
