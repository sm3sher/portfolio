import type { Testimonial } from '@/app/lib/contentful/generated/sdk';
import { QuoteDownIcon } from 'hugeicons-react';
import Image from 'next/image';

type Props = {
  content?: Testimonial;
};

export default function QuoteCard({ content }: Props) {
  const logo = content?.logo;
  return (
    <div className="group hover:-translate-y-1 subtle-border flex h-full flex-col justify-between rounded-3xl bg-(--overlay-color) px-8 py-6 duration-300 hover:shadow-effect">
      <div>
        <div className="flex justify-center">
          <QuoteDownIcon className="mb-4 h-10 w-10 text-(--highlight) duration-200 group-hover:scale-110 sm:h-12 sm:w-12" />
        </div>
        <blockquote className="text-center text-(--secondary) text-sm leading-relaxed duration-200 group-hover:text-(--primary) sm:text-base">
          {content?.quote}
        </blockquote>
      </div>
      <div className="mt-4 flex justify-between border-(--border-color) border-t pt-4 sm:mt-6 sm:pt-6">
        <div>
          <p className="font-semibold text-(--primary) tracking-wide sm:text-lg">
            {content?.author}
          </p>
          <p className="text-(--secondary) text-sm sm:text-base">
            {content?.jobTitle}
          </p>
        </div>
        {logo?.url && logo.width && logo.height && logo.description && (
          <Image
            className={`h-12 w-auto sm:h-14 dark:brightness-125 ${content?.logoInvert && 'dark:invert'}`}
            src={logo.url}
            alt={logo.description}
            width={logo.width}
            height={logo.height}
          />
        )}
      </div>
    </div>
  );
}
