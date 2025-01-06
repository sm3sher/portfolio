import WithScrollAnimation from '@/app/ui/animation/with-scroll-animation';
import ContactForm from '@/app/ui/form/contact-form';
import TestimonialSlider from '@/app/ui/testimonial-slider';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';
import { Testimonials } from '@/app/lib/contentful/generated/sdk';

type Props = {
  locale: Locale;
};

export default async function Contact({ locale }: Props) {
  const contactContentQuery = await contentfulClient.contactContent({ locale });
  const contact = contactContentQuery.contactCollection?.items[0];

  return (
    <div className="py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row lg:gap-16">
          <WithScrollAnimation className="space-y-7 md:mb-20 md:w-1/2">
            <h6 className="uppercase tracking-wider text-[--highlight]">
              {contact?.title}
            </h6>
            <h3 className="uppercase">
              {contact?.subTitleMain}{' '}
              <span className="font-light">{contact?.subTitleHighlight}</span>
            </h3>
            <p>{contact?.description}</p>
          </WithScrollAnimation>
          <WithScrollAnimation className="w-full md:w-1/2" delay={0.4}>
            <ContactForm />
          </WithScrollAnimation>
        </div>
        <WithScrollAnimation className="pt-16" delay={0.6} axis="x">
          <TestimonialSlider
            content={
              contactContentQuery.testimonialsCollection
                ?.items[0] as Testimonials
            }
          />
        </WithScrollAnimation>
      </div>
    </div>
  );
}
