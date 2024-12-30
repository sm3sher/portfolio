import { QuoteDownIcon } from 'hugeicons-react';

type Props = {
  quote: string;
  author: string;
  jobTitle: string;
};

export default function QuoteCard({ quote, author, jobTitle }: Props) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-[--banner-color] px-10 py-8">
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
