import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  locale: Locale;
};

export default async function ServiceBanner({ locale }: Props) {
  const serviceBannerContentQuery = await contentfulClient.serviceBannerContent(
    { locale },
  );
  const services =
    serviceBannerContentQuery.serviceBannerCollection?.items[0]?.services;

  return (
    <div className="overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_5rem,black_calc(100%-5rem),transparent)]">
      <div className="animate-infinite-scroll flex w-max gap-12 pl-12">
        {services?.map((service, index) => (
          <h2
            key={index}
            className={
              index % 2 === 1
                ? 'text-transparent [-webkit-text-stroke:1px_var(--primary)]'
                : ''
            }
          >
            {service}
          </h2>
        ))}
        {services?.map((service, index) => (
          <h2
            key={`hidden-${index}`}
            aria-hidden="true"
            className={
              index % 2 === 1
                ? 'text-transparent [-webkit-text-stroke:1px_var(--primary)]'
                : ''
            }
          >
            {service}
          </h2>
        ))}
      </div>
    </div>
  );
}
