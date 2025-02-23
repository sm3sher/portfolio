import ViewAnimation from '@/app/ui/animation/view-animation';
import Astronaut from '@/app/ui/not-found/astronaut';
import NotFoundContent from '@/app/ui/not-found/not-found-content';
import Stars from '@/app/ui/not-found/stars';
import type { Locale } from '@/i18n/routing';
import { useLocale } from 'next-intl';

export default function NotFound() {
  const locale = useLocale() as Locale;

  return (
    <div className="overflow-hidden py-4 md:py-12">
      <Stars />
      <Astronaut />
      <ViewAnimation
        className="relative flex flex-col content-center text-center"
        direction="fromBottom"
        duration={0.5}
      >
        <NotFoundContent locale={locale} />
      </ViewAnimation>
    </div>
  );
}
