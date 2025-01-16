import ViewAnimation from '@/app/ui/animation/view-animation';
import ContactForm from '@/app/ui/form/contact-form';
import TestimonialSlider from '@/app/ui/slider/testimonial-slider';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';
import { Form, Testimonials } from '@/app/lib/contentful/generated/sdk';
import Image from 'next/image';

type Props = {
  locale: Locale;
};

export default async function Contact({ locale }: Props) {
  const query = await contentfulClient.contactContent({ locale });
  const content = query.contactCollection?.items[0];

  return (
    <div className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,var(--radial-color)_0%,transparent_50%)] opacity-30 dark:opacity-50" />
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10 lg:gap-16">
          <ViewAnimation className="space-y-7 md:w-1/2">
            <h6 className="uppercase tracking-wider text-[--highlight]">
              {content?.title}
            </h6>
            <h3 className="uppercase">
              {content?.subTitleMain}{' '}
              <span className="font-light">{content?.subTitleHighlight}</span>
            </h3>
            <p>{content?.description}</p>
            {content?.avatarImage &&
              content.avatarImage.url &&
              content.avatarImage.width &&
              content.avatarImage.height &&
              content.avatarImage.description && (
                <div className="flex items-center gap-6 py-2">
                  <Image
                    className="h-24 w-24 rounded-full object-cover brightness-110 drop-shadow-lg dark:brightness-100"
                    src={content.avatarImage.url}
                    width={content.avatarImage.width}
                    height={content.avatarImage.height}
                    alt={content.avatarImage.description}
                  />
                  <div className="space-y-1">
                    <p className="text-lg font-bold">{content?.avatarTitle}</p>
                    <p className="text-sm text-[--secondary]">
                      {content?.avatarDescription}
                    </p>
                  </div>
                </div>
              )}
          </ViewAnimation>
          <ViewAnimation className="w-full md:w-1/2" delay={0.4}>
            <ContactForm content={query.formCollection?.items[0] as Form} />
          </ViewAnimation>
        </div>
        <ViewAnimation className="pt-32" delay={0.6} axis="x">
          <TestimonialSlider
            content={query.testimonialsCollection?.items[0] as Testimonials}
          />
        </ViewAnimation>
      </div>
    </div>
  );
}
