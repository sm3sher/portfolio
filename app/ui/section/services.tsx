import ServiceCard from '@/app/ui/card/service-card';
import {
  IdeaIcon,
  MentoringIcon,
  SoftwareLicenseIcon,
  SystemUpdate01Icon,
  WebDesign01Icon,
} from 'hugeicons-react';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';
import ViewAnimation from '@/app/ui/animation/view-animation';

type Props = {
  locale: Locale;
};

const iconMapping = {
  WebDesign01Icon: <WebDesign01Icon size={36} />,
  IdeaIcon: <IdeaIcon size={36} />,
  MentoringIcon: <MentoringIcon size={36} />,
  SoftwareLicenseIcon: <SoftwareLicenseIcon size={36} />,
  SystemUpdate01Icon: <SystemUpdate01Icon size={36} />,
};

export default async function Services({ locale }: Props) {
  const query = await contentfulClient.servicesContent({ locale });
  const content = query.servicesCollection?.items[0];

  return (
    <div className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_top] from-(--radial-color) to-transparent to-65%" />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <ViewAnimation
          className="mb-10 space-y-7 md:mb-16"
          direction="fromBottom"
        >
          <h6 className="font-bold tracking-wider text-(--highlight) uppercase">
            {content?.title}
          </h6>
          <h3 className="uppercase">
            {content?.subTitleMain}{' '}
            <span className="font-light">{content?.subTitleHighlight}</span>
          </h3>
        </ViewAnimation>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {content?.serviceEntriesCollection?.items
            .filter((item) => item !== null)
            .map((item, index) => (
              <ViewAnimation key={index} direction="fromLeft" delay={0.4}>
                <ServiceCard
                  icon={iconMapping[item.iconName as keyof typeof iconMapping]}
                  title={item.title!}
                  tags={item.tags as string[]}
                  description={item.description!}
                />
              </ViewAnimation>
            ))}
        </div>
      </div>
    </div>
  );
}
