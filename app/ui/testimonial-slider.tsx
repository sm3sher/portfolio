'use client';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import QuoteCard from '@/app/ui/card/quote-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-react';

export default function TestimonialSlider() {
  return (
    <>
      <div className="mb-7 flex items-center justify-between space-x-2">
        <h6 className="uppercase tracking-wider text-[--highlight]">
          What others say
        </h6>
        <div className="flex space-x-2">
          <button
            className="slide-prev rounded-full border border-[--highlight-subtle] p-1.5"
            aria-label="Previous slide"
          >
            <ArrowLeft01Icon
              className="relative right-0.5 text-[--highlight]"
              size={34}
            />
          </button>
          <button
            className="slide-next rounded-full border border-[--highlight-subtle] p-1.5"
            aria-label="Next slide"
          >
            <ArrowRight01Icon
              className="relative left-0.5 text-[--highlight]"
              size={34}
            />
          </button>
        </div>
      </div>
      <Swiper
        className="sm:[mask-image:linear-gradient(to_right,transparent,black_0,black_calc(100%-5rem),transparent)]"
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
        <SwiperSlide className="!h-auto">
          <QuoteCard
            quote="Sein Arbeitsstil ist konzentriert und effizient. Herr
                Jumatov zeugt bei der Aufgabenerledigung außergewöhnlichen
                Einsatz und gute Leistungen in qualitativer und quantitativer
                Hinsicht. Durch seine Arbeit erzielt er hervorragende
                Erfolge."
            from="Jörg B."
            jobTitle="Executive Board Member at Sparkassen DirektVersicherung AG"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <QuoteCard
            quote="Herr Jumatov verfügt über ein äußerst umfassendes und
                hervorragendes Fachwissen... Er hat sich
                innerhalb kürzester Zeit in den ihm gestellten Aufgabenbereich
                eingearbeitet und verfolgte die vereinbarten Ziele nachhaltig
                und mit höchstem Erfolg."
            from="Michael B."
            jobTitle="CTO at DGN Deutsches Gesundheitsnetz GmbH"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <QuoteCard
            quote="Aufgrund seiner sehr guten Auffassungsgabe arbeitete er
                sich äußerst schnell in jedes Aufgabenfeld ein. Herr Jumatov war
                zu jeder Zeit in hohem Maße belastbar und agierte selbst in
                Stresssituationen souverän."
            from="Oliver K."
            jobTitle="Managing Director at Ceyoniq Technology GmbH"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <QuoteCard
            quote="Die sehr guten Leistungen in der Heinrich-Heine
                Universität spiegeln seine technische Expertise wider. Weiterhin
                verfügt Herr Jumatov über eine sehr hohe Selbstlernkompetenz
                sowie Lernmotivation..."
            from="Lukas H."
            jobTitle="Team Lead at sipgate GmbH"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
