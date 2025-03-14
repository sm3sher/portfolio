'use client';

import type { ProjectStep } from '@/app/lib/contentful/generated/sdk';
import StepItem from '@/app/ui/steps/step-item';
import { motion } from 'motion/react';

type Props = {
  content?: ProjectStep[];
};

export default function ProjectSteps({ content }: Props) {
  if (!content || content.length === 0) return null;

  const steps = content.slice(0, -1);
  const lastStep = content[content.length - 1];

  return (
    <>
      <div className="relative">
        <motion.span
          className="absolute top-6 left-3.5 w-px bg-(--highlight) sm:top-7 sm:left-4"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        <ul className="space-y-2 sm:space-y-4 md:space-y-6">
          {steps.map(({ title, description }, index) => (
            <StepItem
              key={title}
              index={index}
              title={title}
              description={description}
              delay={index * 0.3}
            />
          ))}
        </ul>
      </div>
      {lastStep && (
        <ul className="mt-4">
          <StepItem
            index={steps.length}
            title={lastStep.title}
            description={lastStep.description}
            delay={steps.length * 0.3}
          />
        </ul>
      )}
    </>
  );
}
