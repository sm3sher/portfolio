'use client';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import QuoteCard from '@/app/ui/card/quote-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { Testimonials } from '@/app/lib/contentful/generated/sdk';

type Props = {
  content: Testimonials;
};

export default function TestimonialSlider({ content }: Props) {
  return (
    <>
      <div className="mb-7 flex items-center justify-between space-x-2">
        <h6 className="uppercase tracking-wider text-[--highlight]">
          {content?.title}
        </h6>
        <div className="flex space-x-2">
          <button
            className="slide-prev rounded-full border border-[--highlight-subtle] p-1.5"
            aria-label={content?.prevSlideLabel || undefined}
          >
            <ArrowLeft01Icon
              className="relative right-0.5 text-[--highlight]"
              size={34}
            />
          </button>
          <button
            className="slide-next rounded-full border border-[--highlight-subtle] p-1.5"
            aria-label={content?.nextSlideLabel || undefined}
          >
            <ArrowRight01Icon
              className="relative left-0.5 text-[--highlight]"
              size={34}
            />
          </button>
        </div>
      </div>
      <Swiper
        className="md:[mask-image:linear-gradient(to_right,transparent,black_0,black_calc(100%-5rem),transparent)]"
        loop
        modules={[A11y, Navigation]}
        navigation={{
          prevEl: '.slide-prev',
          nextEl: '.slide-next',
        }}
        spaceBetween={24}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.5 },
        }}
      >
        {content?.quotesCollection?.items
          .filter((item) => item !== null)
          .map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <QuoteCard
                quote={item.quote!}
                author={item.author!}
                jobTitle={item.jobTitle!}
                logo={item.logo}
                invert={item.logoInvert || false}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
