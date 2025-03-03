import contentfulClient from '@/app/lib/contentful/client';
import type { Service } from '@/app/lib/contentful/generated/sdk';
import RadialAnimation from '@/app/ui/animation/radial-animation';
import StaggerAnimation from '@/app/ui/animation/stagger-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ServiceCard from '@/app/ui/card/service-card';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
};

export default async function ServicesSection({ locale }: Props) {
  const query = await contentfulClient.servicesContent({ locale });
  const content = query.servicesCollection?.items[0];

  return (
    <section id="services" className="relative py-24 md:py-32">
      <RadialAnimation top="50%" left={0} radius={65} />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h6 className="mb-7 font-bold text-(--highlight) uppercase tracking-wider">
          {content?.title}
        </h6>
        <ViewAnimation className="mb-10 lg:mb-16" direction="fromBottom">
          <h3 className="uppercase">
            {content?.subTitleMain}{' '}
            <span className="font-light">{content?.subTitleHighlight}</span>
          </h3>
        </ViewAnimation>
        <StaggerAnimation
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          direction="fromBottom"
          amount={0.1}
          delay={0.2}
        >
          {content?.serviceEntriesCollection?.items
            .filter((item) => item !== null)
            .map((item) => (
              <ServiceCard key={item.title} content={item as Service} />
            ))}
        </StaggerAnimation>
      </div>
    </section>
  );
}
