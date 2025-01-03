import Stars from '@/app/ui/not-found/stars';
import Astronaut from '@/app/ui/not-found/astronaut';
import { Link } from '@/i18n/routing';
import Button from '@/app/ui/button/button';
import WithAnimation from '@/app/ui/animation/with-animation';
import { Rocket01Icon } from 'hugeicons-react';

export default function NotFound() {
  return (
    <div className="overflow-hidden py-4 md:py-12">
      <Stars />
      <Astronaut />
      <WithAnimation className="relative flex flex-col content-center text-center">
        <h1>Houston,</h1>
        <h2 className="mb-3">
          we have a <span className="text-[--highlight]">problem</span>
        </h2>
        <p className="mb-10">404: This page is off the map.</p>
        <Link href="/" tabIndex={-1}>
          <Button>
            Take Me Home
            <Rocket01Icon className="group-hover:animate-rocket-lift ml-2" />
          </Button>
        </Link>
      </WithAnimation>
    </div>
  );
}
