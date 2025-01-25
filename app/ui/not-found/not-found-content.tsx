import { Link, Locale } from '@/i18n/routing';
import Button from '@/app/ui/button/button';
import { StartUp01Icon } from 'hugeicons-react';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  locale: Locale;
};

export default async function NotFoundContent({ locale }: Props) {
  const query = await contentfulClient.notFoundContent({ locale });
  const content = query.notFoundCollection?.items[0];

  return (
    <>
      <h1>{content?.title}</h1>
      <h2 className="mb-3">
        {content?.subTitleMain}{' '}
        <span className="text-(--highlight)">{content?.subTitleHighlight}</span>
      </h2>
      <p className="mb-10">{content?.description}</p>
      <Link href="/" tabIndex={-1}>
        <Button>
          <span className="transition-transform duration-500 group-hover:translate-x-4">
            {content?.ctaButtonLabel}
          </span>
          <StartUp01Icon className="ml-2 transition-transform duration-500 group-hover:-translate-y-9" />
        </Button>
      </Link>
    </>
  );
}
