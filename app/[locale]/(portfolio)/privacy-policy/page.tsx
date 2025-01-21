import type { Metadata } from 'next';
import contentfulClient from '@/app/lib/contentful/client';
import { Locale } from '@/i18n/routing';
import { CircleArrowRight02Icon } from 'hugeicons-react';

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
    <div className="mx-auto max-w-screen-xl px-6 py-24 md:py-32">
      <h3>{content?.title}</h3>
      <p className="mb-8 italic text-[--secondary]">{content?.lastModified}</p>
      <p className="mb-8 text-[--secondary]">{content?.introDescription}</p>
      <article className="mb-12">
        <h4 className="mb-8">{content?.privacyOverview?.title}</h4>

        <section className="mb-8">
          <h4 className="mb-4">{content?.privacyOverview?.generalInfoTitle}</h4>
          <p className="text-[--secondary]">
            {content?.privacyOverview?.generalInfoDescription}
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">
            {content?.privacyOverview?.dataCollectionTitle}
          </h4>
          <h5 className="mb-2 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            {content?.privacyOverview?.responsiblePartyTitle}
          </h5>
          <p className="mb-2 text-[--secondary]">
            {content?.privacyOverview?.responsiblePartyDescription}
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            {content?.privacyOverview?.dataCaptureTitle}
          </h5>
          <p className="mb-2 text-[--secondary]">
            {content?.privacyOverview?.dataDirectCaptureText}
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.privacyOverview?.dataAutomaticCaptureText}
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            {content?.privacyOverview?.dataPurposeTitle}
          </h5>
          <p className="mb-2 text-[--secondary]">
            {content?.privacyOverview?.dataPurposeDescription}
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            {content?.privacyOverview?.userRightsTitle}
          </h5>
          <p className="mb-2 text-[--secondary]">
            {content?.privacyOverview?.userRightsIntroText}
          </p>
          <ul className="mb-2 ml-4 list-disc space-y-1 text-[--secondary]">
            {content?.privacyOverview?.userRightsList?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mb-2 text-[--secondary]">
            {content?.privacyOverview?.userRightsContactText}
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            {content?.privacyOverview?.analysisToolsTitle}
          </h5>
          <p className="mb-2 text-[--secondary]">
            {content?.privacyOverview?.analysisToolsIntroText}
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.privacyOverview?.analysisToolsDetailsText}
          </p>
        </section>
      </article>

      <article className="mb-12">
        <h4 className="mb-8">{content?.hosting?.title}</h4>

        <section className="mb-8">
          <h4 className="mb-4">{content?.hosting?.netlifyTitle}</h4>
          <p className="mb-2 text-[--secondary]">
            {content?.hosting?.netlifyHostingInfo}
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.hosting?.netlifyDataProcessing}{' '}
            <a
              href={content?.hosting?.netlifyDataProcessingLink || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              {content?.hosting?.netlifyDataProcessingLink}
            </a>
            .
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.hosting?.netlifyContractualClauses}{' '}
            <a
              href={content?.hosting?.netlifyContractualClausesLink || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              {content?.hosting?.netlifyContractualClausesLink}
            </a>
            .
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.hosting?.netlifyDataProcessingAgreement}{' '}
            <a
              href={content?.hosting?.netlifyDataProcessingAgreementLink || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              {content?.hosting?.netlifyDataProcessingAgreementLink}
            </a>
            .
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.hosting?.netlifyPrivacyPolicy}{' '}
            <a
              href={content?.hosting?.netlifyPrivacyPolicyLink || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
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
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.dataProtectionIntro}
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.dataProtectionDetails}
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.dataProtectionNotice}
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">
            {content?.notesAndLegalInformation?.responsiblePartyTitle}
          </h4>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.responsiblePartyIntro}
          </p>
          <address className="mb-2 not-italic text-[--secondary]">
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
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.responsiblePartyEmailLabel}{' '}
            <a
              href={`mailto:${content?.notesAndLegalInformation?.responsiblePartyEmail}`}
              className="text-[--highlight] hover:underline hover:underline-offset-4"
            >
              {content?.notesAndLegalInformation?.responsiblePartyEmail}
            </a>
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.responsiblePartyInfo}
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">
            {content?.notesAndLegalInformation?.dataStorageDurationTitle}
          </h4>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.dataStorageDurationDetails}
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">
            {content?.notesAndLegalInformation?.legalBasisTitle}
          </h4>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.legalBasisIntro}
          </p>
          <ul className="mb-2 ml-4 list-disc space-y-1 text-[--secondary]">
            {content?.notesAndLegalInformation?.legalBasisList
              ?.filter((item) => item !== null)
              .map((item, index) => {
                const [boldText, normalText] = item.split(':', 2); // Split into two parts
                return (
                  <li key={index}>
                    <span className="font-bold">{boldText}:</span> {normalText}
                  </li>
                );
              })}
          </ul>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.legalBasisDetails}
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">
            {content?.notesAndLegalInformation?.userRightsTitle}
          </h4>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.userRightsIntro}
          </p>
          {content?.notesAndLegalInformation?.userRightsList?.map(
            (item, index) => (
              <p key={index} className="mb-2 flex items-center gap-2">
                <CircleArrowRight02Icon className="text-[--highlight]" />
                {item}
              </p>
            ),
          )}
        </section>

        <section className="mb-8">
          <h4 className="mb-4">
            {content?.notesAndLegalInformation?.complaintRightTitle}
          </h4>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.complaintRightDetails}
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">
            {content?.notesAndLegalInformation?.sslTlsEncryptionTitle}
          </h4>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.sslTlsEncryptionIntro}
          </p>
          <p className="mb-2 text-[--secondary]">
            {content?.notesAndLegalInformation?.sslTlsEncryptionDetails}
          </p>
        </section>
      </article>

      <article className="mb-12">
        <h4 className="mb-8">4. Datenerfassung auf dieser Website</h4>

        <section className="mb-8">
          <h4 className="mb-4">Cloudflare Web Analytics</h4>
          <p className="mb-2 text-[--secondary]">
            Wir nutzen für unsere Website das Analyse-Tool Cloudflare Web
            Analytics. Dienstanbieter ist Cloudflare Inc., 101 Townsend St., San
            Francisco, CA 94107, USA.
          </p>

          <p className="mb-2 text-[--secondary]">
            Cloudflare verarbeitet Daten unter anderem in den USA und ist
            Teilnehmer des EU-US Data Privacy Frameworks, welches den sicheren
            und datenschutzkonformen Datentransfer personenbezogener Daten
            regelt. Darüber hinaus werden Standardvertragsklauseln gemäß Art. 46
            DSGVO verwendet, um europäische Datenschutzstandards bei der
            Datenverarbeitung in Drittländern sicherzustellen.
          </p>

          <p className="mb-2 text-[--secondary]">
            Weitere Informationen finden Sie in der Datenschutzerklärung von
            Cloudflare:{' '}
            <a
              href="https://www.cloudflare.com/de-de/privacypolicy/"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              https://www.cloudflare.com/de-de/privacypolicy/
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">Kontaktformular und Anfragen per E-Mail</h4>
          <p className="mb-2 text-[--secondary]">
            Die Nutzung des Kontaktformulars sowie das Senden von E-Mails
            erfordert die Angabe personenbezogener Daten (z. B. Name,
            E-Mail-Adresse, Nachricht). Diese Daten werden ausschließlich zur
            Bearbeitung Ihrer Anfrage gespeichert und nicht ohne Ihre
            Einwilligung weitergegeben.
          </p>

          <p className="mb-2 text-[--secondary]">
            Zur Verarbeitung von Kontaktanfragen mittels Kontaktformular nutzen
            wir die Datenbank-Infrastruktur von Supabase Inc., 970 Toa Payoh N,
            #07-04, Singapur. Dabei können Daten nach Singapur übertragen
            werden, die Datenübertragung in ein Drittland (Singapur) erfolgt auf
            Grundlage der Standardvertragsklauseln der EU gemäß Art. 46 Abs. 2
            lit. c DSGVO.
          </p>
          <p className="mb-2 text-[--secondary]">
            Mehr Informationen:{' '}
            <a
              href="https://supabase.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              https://supabase.com/privacy
            </a>
            .
          </p>
          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Rechtsgrundlagen
          </h5>
          <ul className="mb-2 ml-4 list-disc space-y-1 text-[--secondary]">
            <li>
              <span className="font-bold">Art. 6 Abs. 1 lit. b DSGVO:</span> Zur
              Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen.
            </li>
            <li>
              <span className="font-bold">Art. 6 Abs. 1 lit. f DSGVO:</span>{' '}
              Berechtigtes Interesse an der effektiven Bearbeitung.
            </li>
            <li>
              <span className="font-bold">Art. 6 Abs. 1 lit. a DSGVO:</span> Auf
              Basis Ihrer Einwilligung (widerrufbar).
            </li>
          </ul>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Speicherdauer
          </h5>
          <p className="mb-2 text-[--secondary]">
            Die Daten werden gespeichert, bis der Zweck entfällt oder Sie die
            Löschung verlangen. Gesetzliche Aufbewahrungsfristen bleiben
            unberührt.
          </p>
        </section>
      </article>
    </div>
  );
}
