import contentfulClient from '@/app/lib/contentful/client';
import type {
  Form,
  ProjectStep,
  Testimonials,
} from '@/app/lib/contentful/generated/sdk';
import RadialAnimation from '@/app/ui/animation/radial-animation';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ContactForm from '@/app/ui/form/contact-form';
import TestimonialSlider from '@/app/ui/slider/testimonial-slider';
import ProjectSteps from '@/app/ui/steps/project-steps';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
};

export default async function ContactSection({ locale }: Props) {
  const query = await contentfulClient.contactContent({ locale });
  const content = query.contactCollection?.items[0];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <RadialAnimation top={0} left="100%" radius={50} />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h6 className="mb-7 font-bold text-(--highlight) uppercase tracking-wider">
          {content?.title}
        </h6>
        <ViewAnimation className="mb-10 lg:mb-16" direction="fromBottom">
          <h3 className="uppercase">
            {content?.subTitleMain}{' '}
            <span className="font-light">{content?.subTitleHighlight}</span>
          </h3>
        </ViewAnimation>
        <div className="flex flex-col gap-10 lg:flex-row xl:gap-12">
          <ViewAnimation className="lg:w-1/2" duration={0.5} delay={0.1}>
            <ContactForm content={query.formCollection?.items[0] as Form} />
          </ViewAnimation>
          <div className="lg:w-1/2">
            <ProjectSteps
              content={content?.projectStepsCollection?.items as ProjectStep[]}
            />
          </div>
        </div>
        <div className="pt-32">
          <TestimonialSlider
            content={query.testimonialsCollection?.items[0] as Testimonials}
          />
        </div>
      </div>
    </section>
  );
}
