import contentfulClient from '@/app/lib/contentful/client';
import RevealAnimation from '@/app/ui/animation/reveal-animation';
import ExternalLink from '@/app/ui/link/external-link';
import MailLink from '@/app/ui/link/mail-link';
import TitledSection from '@/app/ui/section/titled-section';
import type { Locale } from '@/i18n/routing';
import { CircleArrowRight02Icon } from 'hugeicons-react';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const query = await contentfulClient.privacyMetadataContent({ locale });
  const metadata = query.metadataCollection?.items[0];
  return {
    title: metadata?.privacyTitle,
    description: metadata?.privacyDescription,
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const query = await contentfulClient.privacyPolicyContent({ locale });
  const content = query.privacyPolicyCollection?.items[0];

  const arrowIcon = (
    <CircleArrowRight02Icon size={22} className="text-(--highlight)" />
  );

  return (
    <div className="py-24 md:py-32">
      <RevealAnimation className="mx-auto max-w-(--breakpoint-xl) px-6">
        <h3 className="mb-2 hyphens-auto font-bold text-(--highlight) uppercase tracking-wide">
          {content?.title}
        </h3>
        <p className="mb-8 text-(--secondary) italic">
          {content?.lastModified}
        </p>
        <article className="mb-12">
          <h4 className="mb-8">{content?.privacyOverview?.title}</h4>

          <TitledSection title={content?.privacyOverview?.generalInfoTitle}>
            <p className="text-(--secondary)">
              {content?.privacyOverview?.generalInfoDescription}
            </p>
          </TitledSection>

          <TitledSection title={content?.privacyOverview?.dataCollectionTitle}>
            <h5 className="mb-2 flex items-center gap-2 font-semibold text-lg">
              {arrowIcon}
              {content?.privacyOverview?.responsiblePartyTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.responsiblePartyDescription}
            </p>

            <h5 className="mb-2 flex items-center gap-2 font-semibold text-lg">
              {arrowIcon}
              {content?.privacyOverview?.dataCaptureTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataDirectCaptureText}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataAutomaticCaptureText}
            </p>

            <h5 className="mb-2 flex items-center gap-2 font-semibold text-lg">
              {arrowIcon}
              {content?.privacyOverview?.dataPurposeTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.dataPurposeDescription}
            </p>

            <h5 className="mb-2 flex items-center gap-2 font-semibold text-lg">
              {arrowIcon}
              {content?.privacyOverview?.userRightsTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.userRightsIntroText}
            </p>
            <ul className="mb-2 ml-4 list-disc space-y-1 text-(--secondary)">
              {content?.privacyOverview?.userRightsList?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.userRightsContactText}
            </p>

            <h5 className="mb-2 flex items-center gap-2 font-semibold text-lg">
              {arrowIcon}
              {content?.privacyOverview?.analysisToolsTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.analysisToolsIntroText}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.privacyOverview?.analysisToolsDetailsText}
            </p>
          </TitledSection>
        </article>

        <article className="mb-12">
          <h4 className="mb-8">{content?.hosting?.title}</h4>

          <TitledSection title={content?.hosting?.netlifyTitle}>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyHostingInfo}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyDataProcessing}{' '}
              <ExternalLink
                href={content?.hosting?.netlifyDataProcessingLink}
                highlight
              />
              .
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyContractualClauses}{' '}
              <ExternalLink
                href={content?.hosting?.netlifyContractualClausesLink}
                highlight
              />
              .
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyDataProcessingAgreement}{' '}
              <ExternalLink
                href={content?.hosting?.netlifyDataProcessingAgreementLink}
                highlight
              />
              .
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.hosting?.netlifyPrivacyPolicy}{' '}
              <ExternalLink
                href={content?.hosting?.netlifyPrivacyPolicyLink}
                highlight
              />
              .
            </p>
          </TitledSection>
        </article>

        <article className="mb-12">
          <h4 className="mb-8">{content?.notesAndLegalInformation?.title}</h4>

          <TitledSection
            title={content?.notesAndLegalInformation?.dataProtectionTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionDetails}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataProtectionNotice}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.responsiblePartyTitle}
          >
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
              <MailLink
                mail={content?.notesAndLegalInformation?.responsiblePartyEmail}
              />
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.responsiblePartyInfo}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.dataStorageDurationTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.dataStorageDurationDetails}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.legalBasisTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisIntro}
            </p>
            <ul className="mb-2 ml-4 list-disc space-y-1 text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisList
                ?.filter((item) => item !== null)
                .map((item) => {
                  const [boldText, normalText] = item.split(':', 2);
                  return (
                    <li key={item}>
                      <span className="font-bold">{boldText}:</span>{' '}
                      {normalText}
                    </li>
                  );
                })}
            </ul>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.legalBasisDetails}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.userRightsTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.userRightsIntro}
            </p>
            {content?.notesAndLegalInformation?.userRightsList?.map((item) => (
              <p key={item} className="mb-2 flex items-center gap-2">
                {arrowIcon}
                {item}
              </p>
            ))}
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.complaintRightTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.complaintRightDetails}
            </p>
          </TitledSection>

          <TitledSection
            title={content?.notesAndLegalInformation?.sslTlsEncryptionTitle}
          >
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.sslTlsEncryptionIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.notesAndLegalInformation?.sslTlsEncryptionDetails}
            </p>
          </TitledSection>
        </article>

        <article>
          <h4 className="mb-8">{content?.dataCollection?.title}</h4>

          <TitledSection title={content?.dataCollection?.cloudflareTitle}>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.cloudflareIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.cloudflareDetails}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.cloudflarePrivacyPolicy}{' '}
              <ExternalLink
                href={content?.dataCollection?.cloudflarePrivacyPolicyLink}
                highlight
              />
              .
            </p>
          </TitledSection>

          <TitledSection title={content?.dataCollection?.contactFormTitle}>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormIntro}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormSupabase}
            </p>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.contactFormSupabasePrivacyPolicy}{' '}
              <ExternalLink
                href={
                  content?.dataCollection?.contactFormSupabasePrivacyPolicyLink
                }
                highlight
              />
              .
            </p>
            <h5 className="mb-2 flex items-center gap-2 font-semibold text-lg">
              {arrowIcon}
              {content?.dataCollection?.legalBasisTitle}
            </h5>
            <ul className="mb-2 ml-4 list-disc space-y-1 text-(--secondary)">
              {content?.dataCollection?.legalBasisList
                ?.filter((item) => item !== null)
                .map((item) => {
                  const [boldText, normalText] = item.split(':', 2);
                  return (
                    <li key={item}>
                      <span className="font-bold">{boldText}:</span>{' '}
                      {normalText}
                    </li>
                  );
                })}
            </ul>

            <h5 className="mb-2 flex items-center gap-2 font-semibold text-lg">
              {arrowIcon}
              {content?.dataCollection?.storageDurationTitle}
            </h5>
            <p className="mb-2 text-(--secondary)">
              {content?.dataCollection?.storageDurationDetails}
            </p>
          </TitledSection>
        </article>
      </RevealAnimation>
    </div>
  );
}
