import Image from 'next/image';
import { Link, Locale } from '@/i18n/routing';
import Button from '@/app/ui/button/button';
import contentfulClient from '@/app/lib/contentful/client';
import { ArrowDown01Icon } from 'hugeicons-react';
import ViewAnimation from '@/app/ui/animation/view-animation';

type Props = {
  locale: Locale;
};

export default async function Home({ locale }: Props) {
  const query = await contentfulClient.homeContent({ locale });
  const content = query.homeCollection?.items[0];

  return (
    <div className="relative pt-40 sm:pt-48">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,var(--radial-color)_0%,transparent_50%)] opacity-30 dark:opacity-50" />
      {content?.image &&
        content.image.url &&
        content.image.width &&
        content.image.height &&
        content.image.description && (
          <ViewAnimation
            className="absolute inset-0 -z-20 xl:mx-auto xl:max-w-screen-xl"
            axis="x"
            duration={0.5}
          >
            <Image
              className="absolute -right-32 bottom-0 max-h-[90%] w-auto object-contain brightness-110 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:scale-105 sm:-right-20 md:-right-12 lg:right-0 dark:brightness-95 dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]"
              src={content.image.url}
              width={content.image.width}
              height={content.image.height}
              alt={content.image.description}
              priority
            />
          </ViewAnimation>
        )}
      <div className="mx-auto max-w-screen-xl px-6">
        <ViewAnimation duration={0.5}>
          <h6 className="mb-5">
            <div className="flex space-x-2">
              <Image
                src="/waving-hand.svg"
                width={30}
                height={30}
                alt="Waving Hand"
              />
              <span>{content?.greeting}</span>
            </div>
          </h6>
          <h1 className="mb-3">
            {content?.introHeadingMain}{' '}
            <span className="text-[--highlight]">
              {content?.introHeadingHighlight}
            </span>
          </h1>
          <h3>{content?.introSubheading}</h3>
          <p className="mt-6 drop-shadow-[0_0_5px_rgba(255,255,255,1)] lg:w-5/12 dark:drop-shadow">
            {content?.introDescription}
          </p>
          <div className="flex items-center space-x-4 pb-16 pt-16 lg:pb-56">
            <Link href="#contact" tabIndex={-1}>
              <Button>{content?.ctaButtonLabel}</Button>
            </Link>
            <Link href="#about" className="rounded-full bg-[--highlight] p-2">
              <ArrowDown01Icon
                className="relative top-1.5 animate-bounce text-white"
                size={34}
              />
            </Link>
          </div>
        </ViewAnimation>
      </div>
    </div>
  );
}
