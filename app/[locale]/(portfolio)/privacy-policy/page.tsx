import type { Metadata } from 'next';
import contentfulClient from '@/app/lib/contentful/client';
import { Locale } from '@/i18n/routing';
import { CircleArrowRight02Icon } from 'hugeicons-react';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metadataContentQuery = await contentfulClient.metadataPrivacyContent({
    locale,
  });
  const metadata = metadataContentQuery.metaDataPrivacyCollection?.items[0];
  return {
    title: metadata?.title,
    description: metadata?.description,
  };
}

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-24 md:py-32">
      <h3>Datenschutzerklärung</h3>
      <p className="mb-8 italic text-[--secondary]">Stand: Januar 2025</p>
      <p className="mb-8 text-[--secondary]">
        In dieser Datenschutzerklärung steht „wir“ für Roman Jumatov, den
        Betreiber dieser Website.
      </p>
      <article className="mb-12">
        <h4 className="mb-8">1. Datenschutz auf einen Blick</h4>

        <section className="mb-8">
          <h4 className="mb-4">Allgemeine Hinweise</h4>
          <p className="text-[--secondary]">
            Hier erhalten Sie einen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
            Personenbezogene Daten sind Informationen, mit denen Sie persönlich
            identifiziert werden können. Ausführliche Informationen dazu finden
            Sie in dieser Datenschutzerklärung.
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">Datenerfassung auf dieser Website</h4>
          <h5 className="mb-2 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Wer ist verantwortlich?
          </h5>
          <p className="mb-2 text-[--secondary]">
            Die Datenverarbeitung auf dieser Website erfolgt durch den Betreiber
            Roman Jumatov. Seine Kontaktdaten finden Sie im Abschnitt „Hinweis
            zur Verantwortlichen Stelle“.
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Wie erfassen wir Ihre Daten?
          </h5>
          <p className="mb-2 text-[--secondary]">
            Ein Teil der Daten wird erfasst, wenn Sie sie uns direkt mitteilen,
            z. B. durch Eingabe in ein Kontaktformular.
          </p>
          <p className="mb-2 text-[--secondary]">
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
            Besuch der Website durch unsere IT-Systeme erfasst, z. B. technische
            Daten wie Ihr Browser, Betriebssystem oder die Uhrzeit des
            Seitenaufrufs.
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Wofür nutzen wir Ihre Daten?
          </h5>
          <p className="mb-2 text-[--secondary]">
            Ein Teil der Daten dient der fehlerfreien Bereitstellung der
            Website. Andere Daten können zur Analyse des Nutzerverhaltens
            verwendet werden. Wenn Sie über die Website Anfragen stellen oder
            Verträge anbahnen, nutzen wir die übermittelten Daten zur
            Bearbeitung.
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Ihre Rechte
          </h5>
          <p className="mb-2 text-[--secondary]">Sie haben das Recht:</p>
          <ul className="mb-2 ml-4 list-disc space-y-1 text-[--secondary]">
            <li>
              Auskunft über die gespeicherten Daten und deren Verwendung zu
              erhalten.
            </li>
            <li>Die Berichtigung oder Löschung Ihrer Daten zu verlangen.</li>
            <li>
              Eine erteilte Einwilligung zur Datenverarbeitung jederzeit zu
              widerrufen.
            </li>
            <li>
              Unter bestimmten Umständen die Einschränkung der Datenverarbeitung
              zu fordern.
            </li>
            <li>Sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</li>
          </ul>
          <p className="mb-2 text-[--secondary]">
            Für Fragen oder Anliegen zum Datenschutz können Sie sich jederzeit
            an uns wenden.
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Analyse-Tools und Drittanbieter-Tools
          </h5>
          <p className="mb-2 text-[--secondary]">
            Beim Besuch dieser Website wird Ihr Surf-Verhalten möglicherweise
            statistisch ausgewertet. Dies geschieht hauptsächlich mit
            Analyseprogrammen.
          </p>
          <p className="mb-2 text-[--secondary]">
            Detaillierte Informationen dazu finden Sie weiter unten in dieser
            Datenschutzerklärung.
          </p>
        </section>
      </article>

      <article className="mb-12">
        <h4 className="mb-8">2. Hosting</h4>

        <section className="mb-8">
          <h4 className="mb-4">Netlify</h4>
          <p className="mb-2 text-[--secondary]">
            Unsere Website wird bei Netlify gehostet. Anbieter ist die Netlify
            Inc., 2325 3rd Street, Suite 29, San Francisco, CA 94104, USA.
          </p>
          <p className="mb-2 text-[--secondary]">
            Netlify verarbeitet personenbezogene Daten auch in den USA. Das
            Unternehmen ist Teilnehmer des EU-US Data Privacy Frameworks. Dieses
            Rahmenwerk regelt den sicheren und datenschutzkonformen Transfer von
            Daten aus der EU in die USA. Weitere Informationen dazu finden Sie
            unter{' '}
            <a
              href="https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              https://commission.europa.eu/document/fa09cbad-dd7d-4684-ae60-be03fcb0fddf_en
            </a>
            .
          </p>
          <p className="mb-2 text-[--secondary]">
            Darüber hinaus verwendet Netlify Standardvertragsklauseln gemäß Art.
            46 Abs. 2 und 3 DSGVO. Diese von der EU-Kommission bereitgestellten
            Musterverträge stellen sicher, dass Ihre Daten auch in Drittländern
            wie den USA europäische Datenschutzstandards erfüllen. Den
            entsprechenden Beschluss der EU-Kommission finden Sie hier:{' '}
            <a
              href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
            </a>
            .
          </p>
          <p className="mb-2 text-[--secondary]">
            Netlify bietet einen Vertrag zur Auftragsverarbeitung gemäß Art. 28
            DSGVO an, der auf den EU-Standardvertragsklauseln basiert. Weitere
            Informationen dazu finden Sie unter{' '}
            <a
              href="https://www.netlify.com/pdf/netlify-dpa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              https://www.netlify.com/pdf/netlify-dpa.pdf
            </a>
            .
          </p>
          <p className="mb-2 text-[--secondary]">
            Details zur Verarbeitung Ihrer Daten durch Netlify finden Sie in der
            Datenschutzerklärung von Netlify auf{' '}
            <a
              href="https://www.netlify.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-[--highlight] hover:underline hover:underline-offset-4"
            >
              https://www.netlify.com/privacy
            </a>
            .
          </p>
        </section>
      </article>

      <article className="mb-12">
        <h4 className="mb-8">
          3. Allgemeine Hinweise und Pflichtinformationen
        </h4>

        <section className="mb-8">
          <h4 className="mb-4">Datenschutz</h4>
          <p className="mb-2 text-[--secondary]">
            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
            Datenschutzerklärung.
          </p>
          <p className="mb-2 text-[--secondary]">
            Beim Besuch dieser Website werden verschiedene personenbezogene
            Daten erhoben. Personenbezogene Daten sind Informationen, mit denen
            Sie identifiziert werden können. Diese Datenschutzerklärung
            erläutert, welche Daten wir erheben, wie wir sie verwenden und zu
            welchem Zweck.
          </p>
          <p className="mb-2 text-[--secondary]">
            Bitte beachten Sie, dass die Datenübertragung im Internet (z. B. bei
            der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            vollständiger Schutz der Daten vor dem Zugriff Dritter ist nicht
            möglich.
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">Hinweis zur verantwortlichen Stelle</h4>
          <p className="mb-2 text-[--secondary]">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <address className="mb-2 not-italic text-[--secondary]">
            <p className="font-extrabold">Roman Jumatov</p>
            <p>Freiberuflicher Softwareentwickler</p>
            <p>Musterstraße 225</p>
            <p>40225 Düsseldorf</p>
          </address>
          <p className="mb-2 text-[--secondary]">
            Email:{' '}
            <a
              href={`mailto:${'privacy@mustermann.com'}`}
              className="text-[--highlight] hover:underline hover:underline-offset-4"
            >
              privacy@mustermann.com
            </a>
          </p>
          <p className="mb-2 text-[--secondary]">
            Verantwortliche Stelle ist die Person, die allein oder gemeinsam mit
            anderen über die Zwecke und Mittel der Verarbeitung
            personenbezogener Daten entscheidet.
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">Speicherdauer</h4>
          <p className="mb-2 text-[--secondary]">
            Sofern in dieser Datenschutzerklärung nicht anders angegeben,
            speichern wir Ihre personenbezogenen Daten nur so lange, wie der
            Zweck ihrer Verarbeitung besteht. Werden Daten nicht mehr benötigt
            oder widerrufen Sie Ihre Einwilligung, löschen wir diese, sofern
            keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">Rechtsgrundlagen der Datenverarbeitung</h4>
          <p className="mb-2 text-[--secondary]">
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt je nach
            Kontext auf Grundlage folgender Artikel der DSGVO:
          </p>
          <ul className="mb-2 ml-4 list-disc space-y-1 text-[--secondary]">
            <li>
              <span className="font-bold">Art. 6 Abs. 1 lit. a DSGVO:</span>{' '}
              Einwilligung (z. B. für Cookies).
            </li>
            <li>
              <span className="font-bold">Art. 6 Abs. 1 lit. b DSGVO:</span>{' '}
              Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen.
            </li>
            <li>
              <span className="font-bold">Art. 6 Abs. 1 lit. c DSGVO:</span>{' '}
              Erfüllung einer rechtlichen Verpflichtung.
            </li>
            <li>
              <span className="font-bold">Art. 6 Abs. 1 lit. f DSGVO:</span>{' '}
              Wahrung berechtigter Interessen.
            </li>
          </ul>
          <p className="mb-2 text-[--secondary]">
            Details zu den Rechtsgrundlagen finden Sie in den entsprechenden
            Abschnitten dieser Datenschutzerklärung.
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">Ihre Rechte</h4>
          <p className="mb-2 text-[--secondary]">
            Sie haben jederzeit folgende Rechte:
          </p>
          <p className="mb-2 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Recht auf Auskunft (Art. 15 DSGVO)
          </p>
          <p className="mb-2 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Recht auf Berichtigung (Art. 16 DSGVO)
          </p>
          <p className="mb-2 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Recht auf Löschung (Art. 17 DSGVO)
          </p>
          <p className="mb-2 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
          </p>
          <p className="mb-2 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
          </p>
          <p className="mb-2 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Widerspruchsrecht (Art. 21 DSGVO)
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">Beschwerderecht</h4>
          <p className="mb-2 text-[--secondary]">
            Bei Datenschutzverstößen haben Sie das Recht, sich bei einer
            Datenschutzbehörde zu beschweren. Zuständig ist in der Regel die
            Behörde Ihres Wohnorts oder Arbeitsplatzes.
          </p>
        </section>

        <section className="mb-8">
          <h4 className="mb-4">SSL-/TLS-Verschlüsselung</h4>
          <p className="mb-2 text-[--secondary]">
            Diese Website nutzt eine SSL-/TLS-Verschlüsselung, um Ihre Daten bei
            der Übertragung zu schützen. Eine verschlüsselte Verbindung erkennen
            Sie an „https://“ in der Browserzeile und einem Schloss-Symbol.{' '}
          </p>
          <p className="mb-2 text-[--secondary]">
            Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
            Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
            werden.
          </p>
        </section>
      </article>

      <article className="mb-12">
        <h4 className="mb-8">4. Datenerfassung auf dieser Website</h4>

        <section className="mb-8">
          <h4 className="mb-4">Cookies</h4>
          <p className="mb-2 text-[--secondary]">
            Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert
            werden, um Websites ordnungsgemäß oder effizienter funktionieren zu
            lassen. Sie enthalten keinen ausführbaren Code und beeinträchtigen
            Ihr Gerät nicht.
          </p>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Arten von Cookies
          </h5>
          <ul className="mb-2 ml-4 list-disc space-y-1 text-[--secondary]">
            <li>
              <span className="font-bold">Session-Cookies:</span> Temporär,
              werden gelöscht, sobald Sie die Website schließen.
            </li>
            <li>
              <span className="font-bold">Persistente Cookies:</span> Bleiben
              auf Ihrem Gerät gespeichert und ermöglichen z. B. die
              Wiedererkennung bei zukünftigen Besuchen oder den Zugriff auf
              zuvor personalisierte Inhalte.
            </li>
            <li>
              <span className="font-bold">First-Party-Cookies:</span> Von der
              besuchten Website selbst gesetzt.
            </li>
            <li>
              <span className="font-bold">Third-Party-Cookies:</span> Von
              Drittanbietern gesetzt, z. B. für Werbung oder eingebundene
              Dienste.
            </li>
          </ul>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Funktionen von Cookies
          </h5>
          <ul className="mb-2 ml-4 list-disc space-y-1 text-[--secondary]">
            <li>
              <span className="font-bold">Technisch notwendige Cookies:</span>{' '}
              Ermöglichen grundlegende Funktionen, wie die Navigation,
              Sitzungsverwaltung oder Zugriff auf geschützte Inhalte.
            </li>
            <li>
              <span className="font-bold">Präferenz-Cookies:</span> Speichern
              Einstellungen wie Sprache, Design oder regionale Konfiguration.
            </li>
            <li>
              <span className="font-bold">Marketing-Cookies:</span>{' '}
              Personalisieren Werbeinhalte, um relevante Anzeigen zu zeigen.
            </li>
            <li>
              <span className="font-bold">Statistik-Cookies:</span> Analysieren
              das Nutzerverhalten, um Website und Angebote zu optimieren.
            </li>
          </ul>

          <h5 className="mb-4 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Verwendete Cookies auf dieser Website
          </h5>

          <div className="base-border relative mb-6 overflow-x-auto rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-[--banner-color] text-xs">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Cookie
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cookie-Typ
                  </th>
                  <th scope="col" className="min-w-36 px-6 py-3">
                    Wann wird der Cookie gesetzt?
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Wie lang ist die Speicherdauer?
                  </th>
                  <th scope="col" className="min-w-64 px-6 py-3">
                    Nutzen des Cookies
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Link zur Datenschutzerklärung (falls Drittanbieter)
                  </th>
                </tr>
              </thead>
              <tbody className="text-[--secondary]">
                <tr>
                  <td className="px-6 py-4">Sprache</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    Präferenz-Cookie
                  </td>
                  <td className="px-6 py-4">Beim Initialaufruf der Website</td>
                  <td className="px-6 py-4">1 Jahr</td>
                  <td className="px-6 py-4">
                    Speichert die Sprachpräferenz (“de” oder “en”), um Inhalte
                    in der gewählten Sprache anzuzeigen.
                  </td>
                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h5 className="mb-2 mt-4 flex items-center gap-2">
            <CircleArrowRight02Icon className="text-[--highlight]" />
            Einstellungen und Einschränkungen
          </h5>
          <p className="mb-2 text-[--secondary]">
            Sie können Ihren Browser so konfigurieren, dass:
          </p>
          <ul className="mb-2 ml-4 list-disc space-y-1 text-[--secondary]">
            <li>Sie über das Setzen von Cookies informiert werden.</li>
            <li>Cookies individuell zugelassen oder abgelehnt werden.</li>
            <li>
              Cookies beim Schließen des Browsers automatisch gelöscht werden.
            </li>
          </ul>
          <p className="mb-2 text-[--secondary]">
            Hinweis: Bei deaktivierten Cookies kann die Funktionalität der
            Website eingeschränkt sein.
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
