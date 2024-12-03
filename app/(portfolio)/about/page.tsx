import type { Metadata } from 'next';
import Section from '@/app/ui/section';
import ExperienceMetric from '@/app/ui/experience-metric';
import Chip from '@/app/ui/chip';
import AboutMe from '@/app/ui/about-me';

export const metadata: Metadata = {
  title: 'Roman Jumatov - About',
  description:
    'Discover Roman Jumatov’s journey and expertise in web development and technology.',
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:h-full md:flex-row md:items-center lg:gap-16">
      <div className="relative max-w-2xl space-y-6 md:w-1/2">
        <h1 className="text-center lg:text-left">About Me.</h1>
        <AboutMe />
        <div className="flex justify-center space-x-8 text-center lg:space-x-32">
          <ExperienceMetric startYear={2017} label="Years of Coding" />
          <ExperienceMetric startYear={2020} label="Years of Work" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Section title="Preferred Toolkit">
          <div className="mt-3 flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              'Kotlin',
              'TypeScript',
              'React',
              'Vite',
              'Next.js',
              'Spring Boot',
              'Node.js',
              'Contentful',
              'Vitest',
              'Tailwind CSS',
              'Datadog',
              'Docker',
            ].map((skill) => (
              <Chip key={skill} label={skill} />
            ))}
          </div>
        </Section>
        <Section title="Education">
          <h3 className="mt-2 text-lg font-semibold">
            B.Sc. in Computer Science, 2017 - 2020
          </h3>
          <p className="text-[--secondary]">
            @Heinrich-Heine University Duesseldorf
          </p>
          <p className="text-lg">
            With a focus on full-stack applications and machine learning.
          </p>
        </Section>
        <Section title="Beyond Coding">
          <p className="mt-2 text-lg">
            When I’m not immersed in code, I enjoy exploring the great outdoors,
            engaging in strength training to stay fit, or experimenting with new
            tools and frameworks to stay ahead in the ever-evolving tech world.
          </p>
        </Section>
      </div>
    </div>
  );
}
