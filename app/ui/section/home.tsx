import Image from 'next/image';
import { Link, Locale } from '@/i18n/routing';
import Button from '@/app/ui/button/button';
import contentfulClient from '@/app/lib/contentful/client';
import { ArrowDown01Icon } from 'hugeicons-react';
import WithAnimation from '@/app/ui/animation/with-animation';

type Props = {
  locale: Locale;
};

export default async function Home({ locale }: Props) {
  const homeContentQuery = await contentfulClient.homeContent({ locale });
  const home = homeContentQuery.homeCollection?.items[0];

  return (
    <div className="relative pt-48">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--radial-color)_0%,transparent_50%)] opacity-50" />
      {home?.image &&
        home.image.url &&
        home.image.width &&
        home.image.height &&
        home.image.description && (
          <WithAnimation
            className="absolute inset-0 -z-20 xl:mx-auto xl:max-w-screen-xl"
            axis="x"
          >
            <Image
              className="absolute -right-32 bottom-0 max-h-[90%] w-auto object-contain brightness-110 hover:scale-105 sm:-right-20 md:-right-12 lg:right-0 dark:brightness-90"
              src={home.image.url}
              width={home.image.width}
              height={home.image.height}
              alt={home.image.description}
              priority
            />
          </WithAnimation>
        )}
      <div className="mx-auto max-w-screen-xl px-4">
        <WithAnimation>
          <h6 className="mb-5">
            <div className="flex space-x-2">
              <Image
                src="/waving-hand.svg"
                width={30}
                height={30}
                alt="Waving Hand"
              />
              <span>{home?.greeting}</span>
            </div>
          </h6>
          <h1 className="mb-3">
            {home?.introHeadingMain}{' '}
            <span className="text-[--highlight]">
              {home?.introHeadingHighlight}
            </span>
          </h1>
          <h3>{home?.introSubheading}</h3>
          <p className="mt-6 text-[--secondary] mix-blend-multiply lg:w-5/12 dark:mix-blend-normal">
            {home?.introDescription}
          </p>
          <div className="flex items-center space-x-4 pb-16 pt-16 lg:pb-56">
            <Link href="#contact" tabIndex={-1}>
              <Button>{home?.ctaButtonLabel}</Button>
            </Link>
            <Link href="#about" className="rounded-full bg-[--highlight] p-2">
              <ArrowDown01Icon
                className="relative top-1.5 animate-bounce"
                size={34}
              />
            </Link>
          </div>
        </WithAnimation>
      </div>
    </div>
  );
}
