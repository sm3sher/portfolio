import { ReactNode } from 'react';
import { Locale } from '@/i18n/routing';
import LanguageDropdown from '@/app/ui/topbar/language-dropdown';
import Navbar from '@/app/ui/topbar/navbar';
import ThemeToggle from '@/app/ui/topbar/theme-toggle';
import Footer from '@/app/ui/footer';
import ScrollToTop from '@/app/ui/button/scroll-to-top';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-full max-w-screen-xl items-center justify-between px-3 py-6">
        <LanguageDropdown />
        <Navbar />
        <ThemeToggle />
      </nav>
      {children}
      <Footer locale={locale} />
      <ScrollToTop />
    </>
  );
}
