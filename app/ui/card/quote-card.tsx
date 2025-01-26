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
    <div className="relative flex h-full flex-col justify-between rounded-3xl bg-(--banner-color) p-8 drop-shadow-sm sm:p-10">
      {logo && logo.url && logo.width && logo.height && logo.description && (
        <div className="absolute top-4 right-6">
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
        <QuoteDownIcon className="mb-6 text-(--highlight)" size={40} />
        <blockquote className="leading-relaxed text-(--secondary) italic">
          {quote}
        </blockquote>
      </div>
      <div className="mt-4 border-t border-(--border-color) pt-6">
        <p className="text-lg font-semibold text-(--primary)">{author}</p>
        <p className="mt-2 text-sm text-(--secondary)">{jobTitle}</p>
      </div>
    </div>
  );
}
