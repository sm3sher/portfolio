import Stars from '@/app/ui/not-found/stars';
import Astronaut from '@/app/ui/not-found/astronaut';
import WithAnimation from '@/app/ui/animation/with-animation';
import NotFoundContent from '@/app/ui/not-found/not-found-content';
import { useLocale } from 'next-intl';
import { Locale } from '@/i18n/routing';

export default function NotFound() {
  const locale = useLocale() as Locale;

  return (
    <div className="overflow-hidden py-4 md:py-12">
      <Stars />
      <Astronaut />
      <WithAnimation className="relative flex flex-col content-center text-center">
        <NotFoundContent locale={locale} />
      </WithAnimation>
    </div>
  );
}
