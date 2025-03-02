import contentfulClient from '@/app/lib/contentful/client';
import RevealAnimation from '@/app/ui/animation/reveal-animation';
import { Link, type Locale } from '@/i18n/routing';
import type { Metadata } from 'next';

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
      <RevealAnimation className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h3 className="mb-8 font-bold text-(--highlight) uppercase tracking-wide">
          {content?.title}
        </h3>

        <section className="mb-12 border-(--border-color) border-t pt-6">
          <h4 className="mb-4 font-semibold text-lg">
            {content?.subTitleInformation}
          </h4>
          <address className="text-(--secondary) not-italic">
            <p className="font-medium text-(--highlight-link)">
              {content?.addressName}
            </p>
            <p>{content?.addressJobTitle}</p>
            <p>{content?.addressStreet}</p>
            <p>
              {content?.addressPostalCode} {content?.addressCity}
            </p>
          </address>
        </section>

        <section className="mb-12 border-(--border-color) border-t pt-6">
          <h4 className="mb-4 font-semibold text-lg">
            {content?.subTitleContact}
          </h4>
          <div className="text-(--secondary)">
            <p>
              {content?.contactEmailLabel}{' '}
              <a
                href={`mailto:${content?.contactEmail}`}
                className="underline-effect text-(--highlight-link)"
              >
                {content?.contactEmail}
              </a>
            </p>
            <p>
              <Link
                href="/#contact"
                className="underline-effect text-(--highlight-link)"
              >
                {content?.contactFormLabel}
              </Link>
            </p>
          </div>
        </section>

        {content?.vatId && (
          <section className="mb-12 border-(--border-color) border-t pt-6">
            <h4 className="mb-4 font-semibold text-lg">
              {content?.subTitleVat}
            </h4>
            <p className="text-(--secondary)">{content?.vatLabel}</p>
            <p className="font-medium text-(--highlight)">{content?.vatId}</p>
          </section>
        )}

        <section className="border-(--border-color) border-t pt-6">
          <h4 className="mb-4 font-semibold text-lg">
            {content?.subTitleDispute}
          </h4>
          <p className="text-(--secondary)">{content?.disputeLabel}</p>
          <p className="text-(--secondary)">{content?.disputeStatement}</p>
        </section>
      </RevealAnimation>
    </div>
  );
}
