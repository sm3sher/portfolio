import contentfulClient from '@/app/lib/contentful/client';
import ViewAnimation from '@/app/ui/animation/view-animation';
import Button from '@/app/ui/button/button';
import { Link, type Locale } from '@/i18n/routing';
import { ArrowDown01Icon } from 'hugeicons-react';
import Image from 'next/image';

type Props = {
  locale: Locale;
};

export default async function Home({ locale }: Props) {
  const query = await contentfulClient.homeContent({ locale });
  const content = query.homeCollection?.items[0];

  return (
    <div className="relative pt-40 sm:pt-48">
      <div className="-z-10 absolute inset-0 bg-radial-[circle_at_top_left] from-(--radial-color) to-50% to-transparent" />
      {content?.image?.url &&
        content.image.width &&
        content.image.height &&
        content.image.description && (
          <ViewAnimation
            className="-z-20 absolute inset-0 xl:mx-auto xl:max-w-(--breakpoint-xl)"
            direction="fromRight"
            duration={0.5}
          >
            <Image
              className="-right-32 sm:-right-20 md:-right-12 absolute bottom-0 max-h-[90%] w-auto object-contain opacity-95 brightness-110 contrast-[1.1] drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] saturate-[1.25] lg:right-0 dark:opacity-100 dark:brightness-95 dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.2)]"
              src={content.image.url}
              width={content.image.width}
              height={content.image.height}
              alt={content.image.description}
              priority
            />
          </ViewAnimation>
        )}
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <ViewAnimation direction="fromLeft" duration={0.5}>
          <h6 className="mb-5">
            <div className="flex space-x-2">
              <Image
                src="/waving-hand.svg"
                width={30}
                height={30}
                alt={content?.greetingDescription || ''}
              />
              <span>{content?.greeting}</span>
            </div>
          </h6>
          <h1 className="mb-3">
            {content?.introHeadingMain}{' '}
            <span className="text-(--highlight)">
              {content?.introHeadingHighlight}
            </span>
          </h1>
          <h3>{content?.introSubheading}</h3>
          <p className="mt-6 drop-shadow-[0_0_6px_white] md:w-2/3 lg:w-5/12 dark:drop-shadow-[0_0_6px_black]">
            {content?.introDescription}
          </p>
          <div className="flex items-center space-x-4 pt-16 pb-16 lg:pb-56">
            <Link href="#contact" tabIndex={-1}>
              <Button>{content?.ctaButtonLabel}</Button>
            </Link>
            <Link
              href="#about"
              className="rounded-full bg-(--highlight) p-2"
              aria-label={content?.scrollDownLabel || ''}
            >
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
