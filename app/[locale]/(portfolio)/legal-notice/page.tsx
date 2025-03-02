import contentfulClient from '@/app/lib/contentful/client';
import RevealAnimation from '@/app/ui/animation/reveal-animation';
import MailLink from '@/app/ui/link/mail-link';
import TitledSection from '@/app/ui/section/titled-section';
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

        <TitledSection title={content?.subTitleInformation}>
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
        </TitledSection>

        <TitledSection title={content?.subTitleContact}>
          <div className="text-(--secondary)">
            <p>
              {content?.contactEmailLabel}{' '}
              <MailLink mail={content?.contactEmail} />
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
        </TitledSection>

        {content?.vatId && (
          <TitledSection title={content?.subTitleVat}>
            <p className="text-(--secondary)">{content?.vatLabel}</p>
            <p className="font-medium text-(--highlight)">{content?.vatId}</p>
          </TitledSection>
        )}

        <TitledSection title={content?.subTitleDispute}>
          <p className="text-(--secondary)">{content?.disputeLabel}</p>
          <p className="text-(--secondary)">{content?.disputeStatement}</p>
        </TitledSection>
      </RevealAnimation>
    </div>
  );
}
