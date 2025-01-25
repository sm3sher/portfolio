'use client';

import { useCallback } from 'react';
import QuoteCard from '@/app/ui/card/quote-card';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { Testimonials } from '@/app/lib/contentful/generated/sdk';

type Props = {
  content: Testimonials;
};

export default function TestimonialSlider({ content }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="mb-7 flex items-center justify-between space-x-2">
        <h6 className="tracking-wider text-(--highlight) uppercase">
          {content?.title}
        </h6>
        <div className="flex space-x-2">
          <button
            onClick={scrollPrev}
            className="hover-effect base-border rounded-full p-1.5"
            aria-label={content?.prevSlideLabel || undefined}
          >
            <ArrowLeft01Icon
              className="relative right-0.5 text-(--secondary)"
              size={34}
            />
          </button>
          <button
            onClick={scrollNext}
            className="hover-effect base-border rounded-full p-1.5"
            aria-label={content?.nextSlideLabel || undefined}
          >
            <ArrowRight01Icon
              className="relative left-0.5 text-(--secondary)"
              size={34}
            />
          </button>
        </div>
      </div>
      <div
        className="overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,black_0,black_calc(100%-5rem),transparent)]"
        ref={emblaRef}
      >
        <div className="flex" aria-live="polite">
          {content?.quotesCollection?.items
            .filter((item) => item !== null)
            .map((item, index) => (
              <div
                key={index}
                className="my-1 mr-4 min-w-0 flex-none basis-full cursor-grab px-1 select-none active:cursor-grabbing md:basis-2/3 lg:basis-5/12"
                role="group"
                aria-label={`${index + 1} / ${content?.quotesCollection?.items.length}`}
              >
                <QuoteCard
                  quote={item.quote!}
                  author={item.author!}
                  jobTitle={item.jobTitle!}
                  logo={item.logo}
                  invert={item.logoInvert || false}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
