import type { Metadata } from 'next';
import { Link, Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const query = await contentfulClient.legalMetadataContent({ locale });
  const metadata = query.metadataCollection?.items[0];
  return {
    title: metadata?.legalTitle,
    description: metadata?.legalDescription,
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const query = await contentfulClient.legalNoticeContent({ locale });
  const content = query.legalNoticeCollection?.items[0];

  return (
    <div className="py-24 md:py-32">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h3 className="mb-8 font-bold">{content?.title}</h3>

        <section className="mb-12">
          <h4 className="mb-4">{content?.subTitleInformation}</h4>
          <address className="text-(--secondary) not-italic">
            <p>{content?.addressName}</p>
            <p>{content?.addressJobTitle}</p>
            <p>{content?.addressStreet}</p>
            <p>
              {content?.addressPostalCode} {content?.addressCity}
            </p>
          </address>
        </section>

        <section className="mb-12">
          <h4 className="mb-4">{content?.subTitleContact}</h4>
          <div className="text-(--secondary)">
            <p>
              {content?.contactEmailLabel}{' '}
              <a
                href={`mailto:${content?.contactEmail}`}
                className="underline-effect text-(--highlight)"
              >
                {content?.contactEmail}
              </a>
            </p>
            <p>
              <Link
                href="/#contact"
                className="underline-effect text-(--highlight)"
              >
                {content?.contactFormLabel}
              </Link>
            </p>
          </div>
        </section>

        {content?.vatId && (
          <section className="mb-12">
            <h4 className="mb-4">{content?.subTitleVat}</h4>
            <p className="text-(--secondary)">{content?.vatLabel}</p>
            <p className="font-medium text-(--secondary)">{content?.vatId}</p>
          </section>
        )}

        <section>
          <h4 className="mb-4 break-words hyphens-auto">
            {content?.subTitleDispute}
          </h4>
          <p className="text-(--secondary)">{content?.disputeLabel}</p>
          <p className="text-(--secondary)">{content?.disputeStatement}</p>
        </section>
      </div>
    </div>
  );
}
