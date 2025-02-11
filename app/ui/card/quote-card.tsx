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
    <div className="relative flex h-full flex-col justify-between rounded-3xl bg-(--surface-color) p-6 drop-shadow-sm sm:p-10">
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
        <QuoteDownIcon className="mb-4 text-(--highlight) sm:mb-6" size={40} />
        <blockquote className="leading-relaxed text-(--secondary) italic">
          {quote}
        </blockquote>
      </div>
      <div className="mt-4 border-t border-(--border-color) pt-4 sm:pt-4">
        <p className="font-semibold text-(--primary) sm:text-lg">{author}</p>
        <p className="text-xs text-(--secondary) sm:text-sm">{jobTitle}</p>
      </div>
    </div>
  );
}
