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
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_bottom_left] from-(--radial-color) to-transparent to-50%" />
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10 lg:gap-16">
          <ViewAnimation className="space-y-7 md:w-1/2" direction="fromBottom">
            <h6 className="font-bold tracking-wider text-(--highlight) uppercase">
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
                    <p className="text-sm text-(--secondary)">
                      {content?.avatarDescription}
                    </p>
                  </div>
                </div>
              )}
          </ViewAnimation>
          <ViewAnimation className="w-full md:w-1/2" direction="fromRight">
            <ContactForm content={query.formCollection?.items[0] as Form} />
          </ViewAnimation>
        </div>
        <ViewAnimation className="pt-32" direction="fromRight">
          <TestimonialSlider
            content={query.testimonialsCollection?.items[0] as Testimonials}
          />
        </ViewAnimation>
      </div>
    </div>
  );
}
