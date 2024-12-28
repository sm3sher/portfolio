import { calculateAge } from '@/app/lib/date-utils';
import Image from 'next/image';
import ExperienceMetric from '@/app/ui/experience-metric';

export default function About() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-24 md:py-48">
      <div className="flex flex-col gap-8 md:flex-row md:gap-0">
        <div className="flex w-full items-center justify-center md:w-1/3 md:justify-start lg:w-5/12">
          <Image
            className="w-2/3 rounded-2xl sm:w-1/2 md:w-10/12"
            src="/front-profile.png"
            alt="Picture of Roman Jumatov"
            width={1395}
            height={1473}
          />
        </div>
        <div className="flex w-full items-center md:w-2/3 lg:w-7/12">
          <div className="space-y-7">
            <h6 className="uppercase tracking-wider text-[--highlight]">
              About Me
            </h6>
            <h4>
              I&#39;m a {calculateAge('1999-04-02')}-year-old{' '}
              <span className="font-light">freelance software developer</span>{' '}
              based in western Germany, passionate about building modern,
              intuitive web experiences.
            </h4>
            <p>
              Driven by curiosity and a commitment to quality, I partner with
              clients to create engaging digital projects that leave a lasting
              impression. My goal is to design innovative solutions that
              resonate and inspire.
            </p>
            <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 lg:space-x-32">
              <ExperienceMetric startYear={2017} label="Coding Excellence" />
              <ExperienceMetric startYear={2020} label="Professional Impact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
