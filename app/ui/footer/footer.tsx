import { Link, Locale } from '@/i18n/routing';
import LogoGithub from './logo-github';
import LogoKofi from '@/app/ui/footer/logo-kofi';
import LogoStackOverflow from '@/app/ui/footer/logo-stack-overflow';
import contentfulClient from '@/app/lib/contentful/client';
import { SourceCodeIcon } from 'hugeicons-react';

type Props = {
  locale: Locale;
};

export default async function Footer({ locale }: Props) {
  const footerContentQuery = await contentfulClient.footerContent({ locale });
  const content = footerContentQuery.footerCollection?.items[0];

  return (
    <footer className="bg-[--banner-color]">
      <div className="mx-auto max-w-screen-xl p-4 py-8 sm:pb-16 sm:pt-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 space-y-3 md:mb-0">
            <h5 className="flex items-center gap-2 font-semibold">
              <SourceCodeIcon /> {content?.title}
            </h5>
            <p className="tracking-wide text-[--secondary]">
              {content?.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h6 className="mb-6 text-sm uppercase">
                {content?.followSection}
              </h6>
              <ul className="font-medium text-[--secondary]">
                <li className="mb-4">
                  <a
                    href={content?.gitHubHref || ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:underline-offset-4"
                  >
                    {content?.followGithub}
                  </a>
                </li>
                <li>
                  <a
                    href={content?.stackOverflowHref || ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:underline-offset-4"
                  >
                    {content?.followStackOverflow}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-6 text-sm uppercase">
                {content?.legalSection}
              </h6>
              <ul className="font-medium text-[--secondary]">
                <li className="mb-4">
                  <Link
                    href="/legal-notice"
                    className="hover:underline hover:underline-offset-4"
                  >
                    {content?.legalNotice}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:underline hover:underline-offset-4"
                  >
                    {content?.legalPrivacyPolicy}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[--border-color] sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[--secondary]">
            &copy; {new Date().getFullYear()} {content?.title}
          </span>
          <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center">
            <a
              href={content?.gitHubHref || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--secondary] hover:text-[--primary]"
              aria-label={content?.gitHubHrefLabel || ''}
            >
              <LogoGithub className="h-4 w-4" />
            </a>
            <a
              href={content?.stackOverflowHref || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--secondary] hover:text-[--primary]"
              aria-label={content?.stackOverflowHrefLabel || ''}
            >
              <LogoStackOverflow className="h-4 w-4" />
            </a>
            <a
              href={content?.kofiHref || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--secondary] hover:text-[--primary]"
              aria-label={content?.kofiHrefLabel || ''}
            >
              <LogoKofi
                className="h-4 w-auto"
                backgroundColor="var(--banner-color)"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
