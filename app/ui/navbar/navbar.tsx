import LanguageDropdown from '@/app/ui/navbar/language-dropdown';
import NavMenu from '@/app/ui/navbar/nav-menu';
import ThemeToggle from '@/app/ui/navbar/theme-toggle';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  locale: Locale;
};

export default async function Navbar({ locale }: Props) {
  const query = await contentfulClient.navbarContent({ locale });
  const content = query.navbarCollection?.items[0];

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto mt-6 flex w-full max-w-screen-xl items-center justify-between px-4">
      <LanguageDropdown
        usFlagDescription={content?.usFlagDescription}
        deFlagDescription={content?.deFlagDescription}
      />
      <NavMenu
        homeLabel={content?.homeLabel}
        aboutLabel={content?.aboutLabel}
        servicesLabel={content?.servicesLabel}
        contactLabel={content?.contactLabel}
      />
      <ThemeToggle switchThemeLabel={content?.switchThemeLabel} />
    </nav>
  );
}
