import type { Metadata } from 'next';
import Image from 'next/image';
import ExperienceMetric from '@/app/ui/experience-metric';

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
        <div className="flex flex-col items-center lg:flex-row lg:items-center">
          <Image
            className="w-1/2 rounded-2xl lg:w-7/12"
            src="/front-profile.png"
            alt="Picture of Roman Jumatov"
            width={384}
            height={405}
          />
          <div className="mt-4 lg:ml-4 lg:mt-0 lg:self-center">
            <p className="text-pretty text-center text-lg sm:text-xl lg:text-left">
              Hi, I’m Roman Jumatov - a software developer who believes that
              great code should not only work but feel effortless to the user.
              I’m driven by curiosity and a passion for creating modern,
              intuitive web experiences that leave a lasting impression.
            </p>
          </div>
        </div>
        <div className="flex justify-center space-x-8 text-center lg:space-x-32">
          <ExperienceMetric startYear={2017} label="Years of Coding" />
          <ExperienceMetric startYear={2020} label="Years of Work" />
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <section className="mb-8 text-center md:text-left">
          <h2>Preferred Toolkit</h2>
          <div className="mt-4 border border-[--secondary]" />
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
              <span
                key={skill}
                className="base-border rounded-full bg-[--background-color] px-3 py-1 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section className="mb-8 text-center md:text-left">
          <h2>Education</h2>
          <div className="mt-4 border border-[--secondary]" />
          <h3 className="mt-2 text-lg font-semibold">
            B.Sc. in Computer Science, 2017 - 2020
          </h3>
          <p className="text-[--secondary]">
            @Heinrich-Heine University Duesseldorf
          </p>
          <p className="text-lg">
            With a focus on full-stack applications and machine learning.
          </p>
        </section>
        <section className="mb-8 text-center md:text-left">
          <h2>Beyond Coding</h2>
          <div className="mt-4 border border-[--secondary]" />
          <p className="mt-2 text-lg">
            When I’m not immersed in code, I enjoy exploring the great outdoors,
            engaging in strength training to stay fit, or experimenting with new
            tools and frameworks to stay ahead in the ever-evolving tech world.
          </p>
        </section>
      </div>
    </div>
  );
}
