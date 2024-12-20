import Stars from '@/app/ui/stars';
import Astronaut from '@/app/ui/astronaut';
import { Link } from '@/i18n/routing';
import Button from '@/app/ui/button/button';

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-screen-xl overflow-hidden p-6 pt-8">
      <Stars />
      <div className="flex flex-col-reverse items-center gap-6 md:h-full md:flex-row lg:gap-16">
        <div className="md:w-1/2">
          <Astronaut />
        </div>
        <div className="relative max-w-2xl space-y-6 md:w-1/2">
          <h1 className="text-center md:text-left">Lost in Space?</h1>
          <p className="text-center md:text-left">
            Uh oh! It seems like you’ve drifted off course. Don’t worry, we’ll
            help you navigate back to Earth.
          </p>
          <div className="flex justify-center space-x-3 md:justify-start">
            <Link href="/" tabIndex={-1}>
              <Button>Take Me Home</Button>
            </Link>
            <Link href="/contact" tabIndex={-1}>
              <Button>Contact Human</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
