import { Link, Locale } from '@/i18n/routing';
import Button from '@/app/ui/button/button';
import { Rocket01Icon } from 'hugeicons-react';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  locale: Locale;
};

export default async function NotFoundContent({ locale }: Props) {
  const notFoundContentQuery = await contentfulClient.notFoundContent({
    locale,
  });
  const content = notFoundContentQuery.notFoundCollection?.items[0];

  return (
    <>
      <h1>{content?.title}</h1>
      <h2 className="mb-3">
        {content?.subTitleMain}{' '}
        <span className="text-[--highlight]">{content?.subTitleHighlight}</span>
      </h2>
      <p className="mb-10">{content?.description}</p>
      <Link href="/" tabIndex={-1}>
        <Button>
          {content?.ctaButtonLabel}
          <Rocket01Icon className="group-hover:animate-rocket-lift ml-2" />
        </Button>
      </Link>
    </>
  );
}
