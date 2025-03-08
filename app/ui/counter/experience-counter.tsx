'use client';

import type { Metric } from '@/app/lib/contentful/generated/sdk';
import { getYearsSince } from '@/app/lib/date-utils';
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from 'motion/react';
import { useEffect, useRef } from 'react';

type Props = {
  content?: Metric;
};

export default function ExperienceCounter({ content }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => `${Math.round(value)}+`);

  useEffect(() => {
    if (isInView && content?.startYear) {
      const controls = animate(count, getYearsSince(content.startYear), {
        duration: 1.2,
        delay: 0.5,
      });
      return controls.stop;
    }
  }, [isInView, count, content?.startYear]);

  return (
    <div ref={ref} className="relative w-full pt-6 pb-2 pl-0.5 md:py-7 lg:py-7">
      <div className="absolute top-0 left-0 w-full border-(--highlight) border-t [mask-image:linear-gradient(to_right,black,black_calc(100%-5rem),transparent)]" />
      <motion.h3 className="flex justify-between font-medium lg:mb-1">
        {rounded}
      </motion.h3>
      <h6 className="text-(--secondary) text-base uppercase tracking-wide">
        <span className="whitespace-nowrap">{content?.labelPrefix}</span>{' '}
        <span className="whitespace-nowrap">{content?.labelSuffix}</span>
      </h6>
    </div>
  );
}
