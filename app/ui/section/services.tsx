import contentfulClient from '@/app/lib/contentful/client';
import type { Service } from '@/app/lib/contentful/generated/sdk';
import StaggerAnimation from '@/app/ui/animation/stagger-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ServiceCard from '@/app/ui/card/service-card';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
};

export default async function Services({ locale }: Props) {
  const query = await contentfulClient.servicesContent({ locale });
  const content = query.servicesCollection?.items[0];

  return (
    <div className="relative py-24 md:py-32">
      <div className="-z-10 absolute inset-0 bg-radial-[circle_at_top] from-(--radial-color) to-65% to-transparent" />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <ViewAnimation
          className="mb-10 space-y-7 lg:mb-16"
          direction="fromBottom"
        >
          <h6 className="font-bold text-(--highlight) uppercase tracking-wider">
            {content?.title}
          </h6>
          <h3 className="uppercase">
            {content?.subTitleMain}{' '}
            <span className="font-light">{content?.subTitleHighlight}</span>
          </h3>
        </ViewAnimation>
        <StaggerAnimation className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {content?.serviceEntriesCollection?.items
            .filter((item) => item !== null)
            .map((item) => (
              <ServiceCard key={item.title} content={item as Service} />
            ))}
        </StaggerAnimation>
      </div>
    </div>
  );
}
