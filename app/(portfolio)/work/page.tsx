import type { Metadata } from 'next';
import Timeline from '@/app/ui/timeline';
import { timelineData } from '@/app/lib/timeline-data';

export const metadata: Metadata = {
  title: 'Roman Jumatov - Work',
  description:
    'Explore my work showcasing my skills in React, Next.js, and other technologies.',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between gap-8 md:h-full md:flex-row md:items-center lg:gap-12">
      <div className="flex flex-col justify-center space-y-6 md:w-5/12">
        <h1 className="text-center md:text-left">My Work.</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
      <div className="md:w-7/12">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}
