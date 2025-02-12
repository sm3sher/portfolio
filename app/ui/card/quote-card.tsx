import { QuoteDownIcon } from 'hugeicons-react';
import Image from 'next/image';
import { Asset, Maybe } from '@/app/lib/contentful/generated/sdk';

type Props = {
  quote: string;
  author: string;
  jobTitle: string;
  logo?: Maybe<Asset>;
  invert?: boolean;
};

export default function QuoteCard({
  quote,
  author,
  jobTitle,
  logo,
  invert,
}: Props) {
  return (
    <div className="group relative flex h-full flex-col justify-between rounded-3xl bg-(--surface-color) p-6 drop-shadow-sm duration-300 hover:scale-[1.01] hover:drop-shadow-md sm:p-10">
      {logo && logo.url && logo.width && logo.height && logo.description && (
        <div className="absolute top-3 right-5 sm:top-4 sm:right-6">
          <Image
            className={`h-16 w-auto sm:h-20 dark:brightness-125 ${invert ? 'dark:invert' : ''}`}
            src={logo.url}
            alt={logo.description}
            width={logo.width}
            height={logo.height}
          />
        </div>
      )}
      <div>
        <QuoteDownIcon className="mb-4 h-10 w-10 text-(--highlight) sm:mb-6 sm:h-12 sm:w-12" />
        <blockquote className="text-sm leading-relaxed text-(--secondary) italic duration-300 group-hover:text-(--primary) sm:text-base">
          {quote}
        </blockquote>
      </div>
      <div className="mt-4 border-t border-(--border-color) pt-4 sm:mt-6 sm:pt-6">
        <p className="font-semibold text-(--primary) sm:text-lg">{author}</p>
        <p className="text-xs text-(--secondary) sm:text-sm">{jobTitle}</p>
      </div>
    </div>
  );
}
