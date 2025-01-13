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
    <div className="relative flex h-full flex-col justify-between rounded-2xl bg-[--banner-color] px-8 py-6 sm:px-10 sm:py-8">
      {logo && logo.url && logo.width && logo.height && logo.description && (
        <Image
          className={`absolute right-4 top-2 h-16 w-auto sm:h-20 dark:brightness-125 ${invert ? 'dark:invert' : ''}`}
          src={logo.url}
          alt={logo.description}
          width={logo.width}
          height={logo.height}
        />
      )}
      <div>
        <QuoteDownIcon size={32} />
        <blockquote className="my-6">
          <p className="tracking-wider text-[--secondary]">{quote}</p>
        </blockquote>
      </div>
      <div className="base-border border-b-0 border-l-0 border-r-0 pt-4">
        <p className="text-lg">{author}</p>
        <p className="mt-2 h-10 text-sm text-[--secondary]">{jobTitle}</p>
      </div>
    </div>
  );
}
