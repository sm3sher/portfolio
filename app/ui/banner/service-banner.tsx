import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  locale: Locale;
};

export default async function ServiceBanner({ locale }: Props) {
  const query = await contentfulClient.serviceBannerContent({ locale });
  const content = query.serviceBannerCollection?.items[0]?.services;

  return (
    <div className="drop-shadow-sm">
      <div className="overflow-hidden bg-(--banner-color) py-4 [mask-image:linear-gradient(to_right,transparent,black_5rem,black_calc(100%-5rem),transparent)]">
        <div className="animate-infinite-scroll flex w-max gap-12 pl-12">
          {content?.map((service, index) => (
            <h2 key={index} className={index % 2 === 1 ? 'text-stroke' : ''}>
              {service}
            </h2>
          ))}
          {content?.map((service, index) => (
            <h2
              key={`hidden-${index}`}
              aria-hidden="true"
              className={index % 2 === 1 ? 'text-stroke' : ''}
            >
              {service}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
}
