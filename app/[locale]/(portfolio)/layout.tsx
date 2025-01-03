import { ReactNode } from 'react';
import { Locale } from '@/i18n/routing';
import Footer from '@/app/ui/footer';
import ScrollToTop from '@/app/ui/button/scroll-to-top';
import Navbar from '@/app/ui/navbar/navbar';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <>
      <Navbar locale={locale} />
      {children}
      <Footer locale={locale} />
      <ScrollToTop />
    </>
  );
}
