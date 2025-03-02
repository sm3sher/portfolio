import contentfulClient from '@/app/lib/contentful/client';
import type {
  Form,
  ProjectStep,
  Testimonials,
} from '@/app/lib/contentful/generated/sdk';
import ViewAnimation from '@/app/ui/animation/view-animation';
import ContactForm from '@/app/ui/form/contact-form';
import TestimonialSlider from '@/app/ui/slider/testimonial-slider';
import ProjectSteps from '@/app/ui/steps/project-steps';
import type { Locale } from '@/i18n/routing';

type Props = {
  locale: Locale;
};

export default async function Contact({ locale }: Props) {
  const query = await contentfulClient.contactContent({ locale });
  const content = query.contactCollection?.items[0];

  return (
    <div className="relative py-24 md:py-32">
      <div className="-z-10 absolute inset-0 bg-radial-[circle_at_bottom_left] from-(--radial-color) to-50% to-transparent" />
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
        <div className="flex flex-col gap-10 md:flex-row md:gap-6 lg:gap-16">
          <div className="md:w-1/2">
            <ContactForm content={query.formCollection?.items[0] as Form} />
          </div>
          <div className="md:w-1/2">
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
    </div>
  );
}
