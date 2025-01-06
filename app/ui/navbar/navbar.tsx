import LanguageDropdown from '@/app/ui/navbar/language-dropdown';
import NavMenu from '@/app/ui/navbar/nav-menu';
import ThemeToggle from '@/app/ui/navbar/theme-toggle';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';

type Props = {
  locale: Locale;
};

export default async function Navbar({ locale }: Props) {
  const navbarContentQuery = await contentfulClient.navbarContent({ locale });
  const navbar = navbarContentQuery.navbarCollection?.items[0];

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 py-6">
      <LanguageDropdown
        usFlagDescription={navbar?.usFlagDescription}
        deFlagDescription={navbar?.deFlagDescription}
      />
      <NavMenu
        homeLabel={navbar?.homeLabel}
        aboutLabel={navbar?.aboutLabel}
        servicesLabel={navbar?.servicesLabel}
        contactLabel={navbar?.contactLabel}
      />
      <ThemeToggle switchThemeLabel={navbar?.switchThemeLabel} />
    </nav>
  );
}
