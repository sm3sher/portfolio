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
  labelPrefix: string;
  labelSuffix: string;
};

export default function ExperienceCounter({
  startYear,
  labelPrefix,
  labelSuffix,
}: Props) {
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
      className="base-border w-full border-r-0 border-b-0 border-l-0 pt-7 pl-0.5"
    >
      <motion.h3 className="mb-1 font-light">{rounded}</motion.h3>
      <h6 className="text-base tracking-wide text-(--secondary) uppercase">
        <span className="whitespace-nowrap">{labelPrefix}</span>{' '}
        <span className="whitespace-nowrap">{labelSuffix}</span>
      </h6>
    </div>
  );
}
