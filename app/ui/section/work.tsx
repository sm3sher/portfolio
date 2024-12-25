import Section from '@/app/ui/layout/section';
import { Link } from '@/i18n/routing';
import Button from '@/app/ui/button/button';
import Timeline from '@/app/ui/timeline';
import { timelineData } from '@/app/lib/timeline-data';

export default function Work() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-48">
      <div className="flex flex-col items-center justify-between gap-8 md:h-full md:flex-row lg:gap-16">
        <div className="flex flex-col items-center justify-center space-y-6 md:w-1/2">
          <h1 className="w-full text-center md:text-left">My Work.</h1>
          <p className="text-center md:text-left">
            I create solutions that combine modern design and efficient
            functionality. My concept of
            <strong> &#34;less is more&#34;</strong> ensures that every project
            is clean, impactful, and meaningful.
          </p>
          <Section title="What I Offer">
            <p>
              Tailored design, development, and consulting services to bring
              your ideas to life.
            </p>
          </Section>
          <Section title="What I Do">
            <p>
              I focus on building elegant, user-friendly websites and
              applications that align with your goals.
            </p>
          </Section>
          <Section title="Be Part of My Journey">
            <p>
              Let’s create something amazing together. Reach out to discuss your
              next big project.
            </p>
          </Section>
          <Link href="#contact" tabIndex={-1}>
            <Button>Contact Me</Button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Timeline data={timelineData} />
        </div>
      </div>
    </div>
  );
}
