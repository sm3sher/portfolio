import ServiceCard from '@/app/ui/card/service-card';
import {
  MentoringIcon,
  SoftwareLicenseIcon,
  SystemUpdate01Icon,
  WebDesign01Icon,
} from 'hugeicons-react';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  locale: Locale;
};

const icons = [
  <WebDesign01Icon key={0} size={36} />,
  <SoftwareLicenseIcon key={1} size={36} />,
  <MentoringIcon key={2} size={36} />,
  <SystemUpdate01Icon key={3} size={36} />,
];

export default async function Services({ locale }: Props) {
  const servicesContentQuery = await contentfulClient.servicesContent({
    locale,
  });
  const servives = servicesContentQuery.servicesCollection?.items[0];

  return (
    <div className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--radial-color)_0%,transparent_66%)] opacity-50" />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-10 space-y-7 md:mb-16">
          <h6 className="uppercase tracking-wider text-[--highlight]">
            {servives?.title}
          </h6>
          <h3 className="uppercase">
            {servives?.subTitleMain}{' '}
            <span className="font-light">{servives?.subTitleHighlight}</span>
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {servives?.serviceEntriesCollection?.items
            .filter((item) => item !== null)
            .map((item, index) => (
              <ServiceCard
                key={index}
                icon={icons[index]}
                title={item.title!}
                tags={item.tags as string[]}
                description={item.description!}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
