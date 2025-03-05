import contentfulClient from '@/app/lib/contentful/client';
import HeroAnimation from '@/app/ui/animation/hero/hero-animation';
import RadialAnimation from '@/app/ui/animation/radial-animation';
import RevealAnimation from '@/app/ui/animation/reveal-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ShiningButton from '@/app/ui/button/shining-button';
import { Link, type Locale } from '@/i18n/routing';
import { ArrowDown01Icon } from 'hugeicons-react';
import Image from 'next/image';

type Props = {
  locale: Locale;
};

export default async function HomeSection({ locale }: Props) {
  const query = await contentfulClient.homeContent({ locale });
  const content = query.homeCollection?.items[0];

  return (
    <section id="home" className="relative py-40 sm:py-56">
      <RadialAnimation top={0} left={0} radius={50} />
      <ViewAnimation
        direction="fromBottom"
        delay={0.4}
        className="absolute inset-0 xl:mx-auto xl:max-w-(--breakpoint-xl)"
      >
        <div className="-bottom-2/12 pointer-events-none absolute left-2/12 max-h-3/4 opacity-50 sm:pointer-events-auto sm:left-1/3 sm:opacity-100 md:left-1/2 dark:opacity-40 dark:sm:opacity-100">
          <HeroAnimation floatingLabel={content?.floatingLabel} />
        </div>
      </ViewAnimation>
      <RevealAnimation className="mx-auto max-w-(--breakpoint-xl) px-6">
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
        <p className="mt-6 drop-shadow-[0_0_6px_white] sm:w-2/3 lg:w-5/12 dark:drop-shadow-[0_0_6px_black]">
          {content?.introDescription}
        </p>
        <div className="flex items-center space-x-4 pt-16">
          <Link href="#contact" tabIndex={-1}>
            <ShiningButton>{content?.ctaButtonLabel}</ShiningButton>
          </Link>
          <Link
            href="#about"
            className="z-0 rounded-full bg-(--highlight) p-2"
            aria-label={content?.scrollDownLabel || ''}
          >
            <ArrowDown01Icon
              className="relative top-1.5 animate-bounce text-white"
              size={34}
            />
          </Link>
        </div>
      </RevealAnimation>
    </section>
  );
}
