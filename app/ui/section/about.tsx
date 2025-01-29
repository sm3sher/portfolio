import { calculateAge } from '@/app/lib/date-utils';
import Image from 'next/image';
import ExperienceCounter from '@/app/ui/counter/experience-counter';
import ViewAnimation from '@/app/ui/animation/view-animation';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';
import DotBackground from '@/app/ui/background/dot-background';

type Props = {
  locale: Locale;
};

export default async function About({ locale }: Props) {
  const query = await contentfulClient.aboutContent({ locale });
  const content = query.aboutCollection?.items[0];

  return (
    <div className="relative py-24 md:py-48">
      <DotBackground />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <div className="flex flex-col gap-8 md:flex-row md:gap-0">
          {content?.image &&
            content.image.url &&
            content.image.width &&
            content.image.height &&
            content.image.description && (
              <ViewAnimation className="flex w-full items-center justify-center md:w-1/3 md:justify-start lg:w-5/12">
                <Image
                  className="w-2/3 rounded-2xl sm:w-1/2 md:w-10/12"
                  src={content.image.url}
                  width={content.image.width}
                  height={content.image.height}
                  alt={content.image.description}
                />
              </ViewAnimation>
            )}
          <ViewAnimation
            className="flex w-full items-center md:w-2/3 lg:w-7/12"
            delay={0.4}
          >
            <div className="space-y-7">
              <h6 className="tracking-wider text-(--highlight) uppercase">
                {content?.title}
              </h6>
              <h4>
                {content?.ageStatementPrefix} {calculateAge(content?.age)}
                {content?.ageStatementSuffix}{' '}
                <span className="font-light">{content?.professionalTitle}</span>{' '}
                {content?.locationStatement}
              </h4>
              <p>{content?.description}</p>
              <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:space-y-0 sm:space-x-16 lg:space-x-32">
                {content?.experienceMetricsCollection?.items
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
    </div>
  );
}
