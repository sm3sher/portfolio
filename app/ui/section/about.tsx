import contentfulClient from '@/app/lib/contentful/client';
import type { Metric } from '@/app/lib/contentful/generated/sdk';
import { calculateAge } from '@/app/lib/date-utils';
import TypingAnimation from '@/app/ui/animation/typing-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ExperienceCounter from '@/app/ui/counter/experience-counter';
import type { Locale } from '@/i18n/routing';
import Image from 'next/image';

type Props = {
  locale: Locale;
};

export default async function About({ locale }: Props) {
  const query = await contentfulClient.aboutContent({ locale });
  const content = query.aboutCollection?.items[0];

  return (
    <div className="relative py-24 md:py-48">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <div className="flex flex-col gap-8 md:flex-row md:gap-0">
          {content?.image?.url &&
            content.image.width &&
            content.image.height &&
            content.image.description && (
              <div className="flex w-full items-center justify-center md:w-1/3 md:justify-start lg:w-5/12">
                <Image
                  className="w-2/3 rounded-2xl sm:w-1/2 md:w-10/12"
                  src={content.image.url}
                  width={content.image.width}
                  height={content.image.height}
                  alt={content.image.description}
                />
              </div>
            )}
          <div className="flex w-full items-center md:w-2/3 lg:w-7/12">
            <div className="space-y-7">
              <h6 className="font-bold text-(--highlight) uppercase tracking-wider">
                {content?.title}
              </h6>
              <h4>
                <TypingAnimation>
                  {content?.ageStatementPrefix}
                  {`${calculateAge(content?.age)}${content?.ageStatementSuffix}`}
                  <span className="font-light">
                    {content?.professionalTitle}
                  </span>
                  {content?.locationStatement}
                </TypingAnimation>
              </h4>
              <ViewAnimation
                translation={10}
                delay={0.5}
                duration={0.6}
                direction="fromBottom"
              >
                <p>{content?.description}</p>
              </ViewAnimation>
              <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:space-x-16 sm:space-y-0 lg:space-x-32">
                {content?.experienceMetricsCollection?.items
                  .filter((item) => item !== null)
                  .map((item, index) => (
                    <ViewAnimation
                      key={`${item.labelPrefix}${item.labelSuffix}`}
                      translation={30}
                      delay={0.8}
                      direction={index === 0 ? 'fromLeft' : 'fromRight'}
                    >
                      <ExperienceCounter content={item as Metric} />
                    </ViewAnimation>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
