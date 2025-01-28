import type { Metadata } from 'next';
import contentfulClient from '@/app/lib/contentful/client';
import { Locale } from '@/i18n/routing';
import { CircleArrowRight02Icon } from 'hugeicons-react';
import DotBackground from '@/app/ui/background/dot-background';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const query = await contentfulClient.metadataPrivacyContent({ locale });
  const metadata = query.metaDataPrivacyCollection?.items[0];
  return {
    title: metadata?.title,
    description: metadata?.description,
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const query = await contentfulClient.privacyPolicyContent({ locale });
  const content = query.privacyPolicyCollection?.items[0];

  return (
    <div className="relative px-6 py-24 md:py-32">
      <DotBackground />
      <div className="mx-auto max-w-(--breakpoint-xl)">
        <h3>{content?.title}</h3>
        <p className="mb-8 text-(--secondary) italic">
          {content?.lastModified}
        </p>
        <p className="mb-8 text-(--secondary)">{content?.introDescription}</p>
        <article className="mb-12">
          <h4 className="mb-8">{content?.privacyOverview?.title}</h4>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.privacyOverview?.generalInfoTitle}
            </h4>
            <p className="text-(--secondary)">
              {content?.privacyOverview?.generalInfoDescription}
            </p>
          </section>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.privacyOverview?.dataCollectionTitle}
            </h4>
            <h5 className="mb-2 flex items-center gap-2">
              <CircleArrowRight02Icon className="text-(--highlight)" />
              {content?.privacyOverview?.responsiblePartyTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.responsiblePartyDescription}
            </p>

            <h5 className="mt-4 mb-2 flex items-center gap-2">
              <CircleArrowRight02Icon className="text-(--highlight)" />
              {content?.privacyOverview?.dataCaptureTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataDirectCaptureText}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataAutomaticCaptureText}
            </p>

            <h5 className="mt-4 mb-2 flex items-center gap-2">
              <CircleArrowRight02Icon className="text-(--highlight)" />
              {content?.privacyOverview?.dataPurposeTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataPurposeDescription}
            </p>

            <h5 className="mt-4 mb-2 flex items-center gap-2">
              <CircleArrowRight02Icon className="text-(--highlight)" />
              {content?.privacyOverview?.userRightsTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.userRightsIntroText}
            </p>
            <ul className="mb-2 ml-4 list-disc space-y-1 text-(--secondary)">
              {content?.privacyOverview?.userRightsList?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.userRightsContactText}
            </p>

            <h5 className="mt-4 mb-2 flex items-center gap-2">
              <CircleArrowRight02Icon className="text-(--highlight)" />
              {content?.privacyOverview?.analysisToolsTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.analysisToolsIntroText}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.analysisToolsDetailsText}
            </p>
          </section>
        </article>

        <article className="mb-12">
          <h4 className="mb-8">{content?.hosting?.title}</h4>

          <section className="mb-8">
            <h4 className="mb-4">{content?.hosting?.netlifyTitle}</h4>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyHostingInfo}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyDataProcessing}{' '}
              <a
                href={content?.hosting?.netlifyDataProcessingLink || ''}
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-(--highlight) hover:underline hover:underline-offset-4"
              >
                {content?.hosting?.netlifyDataProcessingLink}
              </a>
              .
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyContractualClauses}{' '}
              <a
                href={content?.hosting?.netlifyContractualClausesLink || ''}
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-(--highlight) hover:underline hover:underline-offset-4"
              >
                {content?.hosting?.netlifyContractualClausesLink}
              </a>
              .
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyDataProcessingAgreement}{' '}
              <a
                href={
                  content?.hosting?.netlifyDataProcessingAgreementLink || ''
                }
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-(--highlight) hover:underline hover:underline-offset-4"
              >
                {content?.hosting?.netlifyDataProcessingAgreementLink}
              </a>
              .
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyPrivacyPolicy}{' '}
              <a
                href={content?.hosting?.netlifyPrivacyPolicyLink || ''}
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-(--highlight) hover:underline hover:underline-offset-4"
              >
                {content?.hosting?.netlifyPrivacyPolicyLink}
              </a>
              .
            </p>
          </section>
        </article>

        <article className="mb-12">
          <h4 className="mb-8">{content?.notesAndLegalInformation?.title}</h4>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.notesAndLegalInformation?.dataProtectionTitle}
            </h4>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionDetails}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionNotice}
            </p>
          </section>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.notesAndLegalInformation?.responsiblePartyTitle}
            </h4>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.responsiblePartyIntro}
            </p>
            <address className="mb-2 text-(--secondary) not-italic">
              <p className="font-extrabold">
                {content?.notesAndLegalInformation?.responsiblePartyName}
              </p>
              <p>{content?.notesAndLegalInformation?.responsiblePartyRole}</p>
              <p>{content?.notesAndLegalInformation?.responsiblePartyStreet}</p>
              <p>
                {content?.notesAndLegalInformation?.responsiblePartyPostalCode}{' '}
                {content?.notesAndLegalInformation?.responsiblePartyCity}
              </p>
            </address>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.responsiblePartyEmailLabel}{' '}
              <a
                href={`mailto:${content?.notesAndLegalInformation?.responsiblePartyEmail}`}
                className="text-(--highlight) hover:underline hover:underline-offset-4"
              >
                {content?.notesAndLegalInformation?.responsiblePartyEmail}
              </a>
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.responsiblePartyInfo}
            </p>
          </section>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.notesAndLegalInformation?.dataStorageDurationTitle}
            </h4>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataStorageDurationDetails}
            </p>
          </section>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.notesAndLegalInformation?.legalBasisTitle}
            </h4>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisIntro}
            </p>
            <ul className="mb-2 ml-4 list-disc space-y-1 text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisList
                ?.filter((item) => item !== null)
                .map((item, index) => {
                  const [boldText, normalText] = item.split(':', 2);
                  return (
                    <li key={index}>
                      <span className="font-bold">{boldText}:</span>{' '}
                      {normalText}
                    </li>
                  );
                })}
            </ul>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisDetails}
            </p>
          </section>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.notesAndLegalInformation?.userRightsTitle}
            </h4>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.userRightsIntro}
            </p>
            {content?.notesAndLegalInformation?.userRightsList?.map(
              (item, index) => (
                <p key={index} className="mb-2 flex items-center gap-2">
                  <CircleArrowRight02Icon className="text-(--highlight)" />
                  {item}
                </p>
              ),
            )}
          </section>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.notesAndLegalInformation?.complaintRightTitle}
            </h4>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.complaintRightDetails}
            </p>
          </section>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.notesAndLegalInformation?.sslTlsEncryptionTitle}
            </h4>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.sslTlsEncryptionIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.sslTlsEncryptionDetails}
            </p>
          </section>
        </article>

        <article className="mb-12">
          <h4 className="mb-8">{content?.dataCollection?.title}</h4>

          <section className="mb-8">
            <h4 className="mb-4">{content?.dataCollection?.cloudflareTitle}</h4>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.cloudflareIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.cloudflareDetails}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.cloudflarePrivacyPolicy}{' '}
              <a
                href={
                  content?.dataCollection?.cloudflarePrivacyPolicyLink || ''
                }
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-(--highlight) hover:underline hover:underline-offset-4"
              >
                {content?.dataCollection?.cloudflarePrivacyPolicyLink}
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h4 className="mb-4">
              {content?.dataCollection?.contactFormTitle}
            </h4>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormSupabase}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormSupabasePrivacyPolicy}{' '}
              <a
                href={
                  content?.dataCollection
                    ?.contactFormSupabasePrivacyPolicyLink || ''
                }
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-(--highlight) hover:underline hover:underline-offset-4"
              >
                {content?.dataCollection?.contactFormSupabasePrivacyPolicyLink}
              </a>
              .
            </p>
            <h5 className="mt-4 mb-2 flex items-center gap-2">
              <CircleArrowRight02Icon className="text-(--highlight)" />
              {content?.dataCollection?.legalBasisTitle}
            </h5>
            <ul className="mb-2 ml-4 list-disc space-y-1 text-(--secondary)">
              {content?.dataCollection?.legalBasisList
                ?.filter((item) => item !== null)
                .map((item, index) => {
                  const [boldText, normalText] = item.split(':', 2);
                  return (
                    <li key={index}>
                      <span className="font-bold">{boldText}:</span>{' '}
                      {normalText}
                    </li>
                  );
                })}
            </ul>

            <h5 className="mt-4 mb-2 flex items-center gap-2">
              <CircleArrowRight02Icon className="text-(--highlight)" />
              {content?.dataCollection?.storageDurationTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.storageDurationDetails}
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
