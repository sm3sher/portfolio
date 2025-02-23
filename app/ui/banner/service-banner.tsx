import contentfulClient from '@/app/lib/contentful/client';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
};

export default async function ServiceBanner({ locale }: Props) {
  const query = await contentfulClient.serviceBannerContent({ locale });
  const content = query.serviceBannerCollection?.items[0]?.services;

  return (
    <div className="drop-shadow-sm">
      <div className="overflow-hidden bg-(--surface-color) py-4 [mask-image:linear-gradient(to_right,transparent,black_5rem,black_calc(100%-5rem),transparent)]">
        <div className="flex w-max animate-infinite-scroll gap-12 pl-12">
          {content?.map((service, index) => (
            <h2 key={service} className={index % 2 === 1 ? 'text-stroke' : ''}>
              {service}
            </h2>
          ))}
          {content?.map((service, index) => (
            // biome-ignore lint/a11y/useHeadingContent: hidden intentionally to avoid duplicate headings
            <h2
              key={`hidden-${service}`}
              aria-hidden={true}
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
