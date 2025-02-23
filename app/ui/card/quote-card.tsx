import type { Testimonial } from '@/app/lib/contentful/generated/sdk';
import { QuoteDownIcon } from 'hugeicons-react';
import Image from 'next/image';

type Props = {
  content?: Testimonial;
};

export default function QuoteCard({ content }: Props) {
  const logo = content?.logo;
  return (
    <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-(--surface-color) p-8 drop-shadow-sm duration-300 hover:scale-[1.01] hover:drop-shadow-md sm:p-10">
      {logo?.url && logo.width && logo.height && logo.description && (
        <div className="absolute top-3 right-5 sm:top-4 sm:right-6">
          <Image
            className={`h-16 w-auto sm:h-20 dark:brightness-125 ${content?.logoInvert && 'dark:invert'}`}
            src={logo.url}
            alt={logo.description}
            width={logo.width}
            height={logo.height}
          />
        </div>
      )}
      <div>
        <QuoteDownIcon className="mb-4 h-10 w-10 text-(--highlight) sm:mb-6 sm:h-12 sm:w-12" />
        <blockquote className="text-(--secondary) text-sm leading-relaxed duration-300 group-hover:text-(--primary) sm:text-base">
          {content?.quote}
        </blockquote>
      </div>
      <div className="mt-4 border-(--border-color) border-t pt-4 sm:mt-6 sm:pt-6">
        <p className="font-semibold text-(--primary) tracking-wide sm:text-lg">
          {content?.author}
        </p>
        <p className="text-(--secondary) text-xs sm:text-sm">
          {content?.jobTitle}
        </p>
      </div>
    </div>
  );
}
