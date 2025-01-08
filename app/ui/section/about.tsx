import { calculateAge } from '@/app/lib/date-utils';
import Image from 'next/image';
import ExperienceCounter from '@/app/ui/counter/experience-counter';
import ViewAnimation from '@/app/ui/animation/view-animation';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  locale: Locale;
};

export default async function About({ locale }: Props) {
  const aboutContentQuery = await contentfulClient.aboutContent({ locale });
  const about = aboutContentQuery.aboutCollection?.items[0];

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-24 md:py-48">
      <div className="flex flex-col gap-8 md:flex-row md:gap-0">
        {about?.image &&
          about.image.url &&
          about.image.width &&
          about.image.height &&
          about.image.description && (
            <ViewAnimation className="flex w-full items-center justify-center md:w-1/3 md:justify-start lg:w-5/12">
              <Image
                className="w-2/3 rounded-2xl sm:w-1/2 md:w-10/12"
                src={about.image.url}
                width={about.image.width}
                height={about.image.height}
                alt={about.image.description}
              />
            </ViewAnimation>
          )}
        <ViewAnimation
          className="flex w-full items-center md:w-2/3 lg:w-7/12"
          delay={0.4}
        >
          <div className="space-y-7">
            <h6 className="uppercase tracking-wider text-[--highlight]">
              {about?.title}
            </h6>
            <h4>
              {about?.ageStatementPrefix} {calculateAge(about?.age)}
              {about?.ageStatementSuffix}{' '}
              <span className="font-light">{about?.professionalTitle}</span>{' '}
              {about?.locationStatement} {about?.passionStatement}
            </h4>
            <p>{about?.description}</p>
            <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 lg:space-x-32">
              {about?.experienceMetricsCollection?.items
                .filter((item) => item !== null)
                .map((item, index) => (
                  <ExperienceCounter
                    key={index}
                    startYear={item.startYear!}
                    labelPrefix={item.labelPrefix!}
                    labelSuffix={item.labelSuffix!}
                  />
                ))}
            </div>
          </div>
        </ViewAnimation>
      </div>
    </div>
  );
}
