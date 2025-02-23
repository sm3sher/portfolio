import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/routing';
import Footer from '@/app/ui/footer/footer';
import ScrollToTop from '@/app/ui/button/scroll-to-top';
import Navbar from '@/app/ui/navbar/navbar';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar locale={locale} />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer locale={locale} />
      <ScrollToTop />
    </div>
  );
}
