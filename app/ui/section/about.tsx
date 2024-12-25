import AboutMe from '@/app/ui/about-me';
import ExperienceMetric from '@/app/ui/experience-metric';
import Section from '@/app/ui/layout/section';
import { skills } from '@/app/lib/skills';
import Chip from '@/app/ui/chip';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-12">
      <div className="flex flex-col items-center justify-between gap-6 md:h-full md:flex-row lg:gap-16">
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
              {skills.map((skill) => (
                <Chip key={skill} label={skill} />
              ))}
            </div>
          </Section>
          <Section title="Education">
            <div className="space-y-1">
              <h3 className="flex flex-col flex-wrap justify-center text-xl font-semibold sm:flex-row md:justify-start">
                <span>B.Sc. in Computer Science</span>
                <span className="mx-2 hidden sm:inline">|</span>
                <span>2017 - 2020</span>
              </h3>
              <p className="text-md text-[--secondary]">
                <a
                  href="https://www.hhu.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[--secondary] hover:text-[--primary] hover:underline hover:underline-offset-4"
                >
                  @Heinrich-Heine University Düsseldorf
                </a>
              </p>
              <p>
                Specialized in full-stack applications and machine learning.
              </p>
            </div>
          </Section>
          <Section title="Beyond Coding">
            <p>
              When I’m not immersed in code, I enjoy exploring the great
              outdoors, engaging in strength training, or capturing moments
              through photography to express my creativity and unwind.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
