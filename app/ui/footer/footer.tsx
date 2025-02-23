import type { Locale } from '@/i18n/routing';
import LogoGithub from '@/app/ui/footer/logo-github';
import LogoKofi from '@/app/ui/footer/logo-kofi';
import contentfulClient from '@/app/lib/contentful/client';
import Logo from '@/app/ui/footer/logo';
import ActiveStyledLink from '@/app/ui/footer/active-styled-link';

type Props = {
  locale: Locale;
};

export default async function Footer({ locale }: Props) {
  const query = await contentfulClient.footerContent({ locale });
  const content = query.footerCollection?.items[0];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-(--surface-color) drop-shadow-sm">
      <div className="mx-auto max-w-(--breakpoint-xl) px-6 py-8 sm:pt-10 sm:pb-16">
        <div className="gap-2 md:flex md:justify-between">
          <div className="mb-6 space-y-3 md:mb-0">
            <Logo title={content?.title} description={content?.description} />
          </div>
          <div className="grid grid-cols-2 gap-8 whitespace-nowrap sm:gap-16">
            <div>
              <h6 className="mb-4 text-sm uppercase">
                {content?.profileSection}
              </h6>
              <ul className="font-medium text-(--secondary)">
                <li className="mb-4">
                  <a
                    href={content?.profileGitHubHref || ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-effect"
                  >
                    {content?.profileGitHub}
                  </a>
                </li>
                <li>
                  <a
                    href={content?.profileStackOverflowHref || ''}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-effect"
                  >
                    {content?.profileStackOverflow}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="mb-4 text-sm uppercase">
                {content?.legalSection}
              </h6>
              <ul className="font-medium text-(--secondary)">
                <li className="mb-4">
                  <ActiveStyledLink href="/legal-notice">
                    {content?.legalNotice}
                  </ActiveStyledLink>
                </li>
                <li>
                  <ActiveStyledLink href="/privacy-policy">
                    {content?.legalPrivacyPolicy}
                  </ActiveStyledLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-(--border-color) sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-(--secondary) text-sm">
            &copy; {year} {content?.title}
          </span>
          <div className="mt-4 flex gap-5 sm:mt-0 sm:justify-center">
            <a
              href={content?.gitHubHref || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--secondary) hover:text-(--primary)"
              aria-label={content?.gitHubHrefLabel || ''}
            >
              <LogoGithub className="h-4 w-4" />
            </a>
            <a
              href={content?.kofiHref || ''}
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--secondary) hover:text-(--primary)"
              aria-label={content?.kofiHrefLabel || ''}
            >
              <LogoKofi
                className="h-4 w-auto"
                backgroundColor="var(--surface-color)"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
