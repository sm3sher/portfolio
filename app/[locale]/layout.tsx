import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import contentfulClient from '@/app/lib/contentful/client';
import { FooterItem } from '@/app/lib/contentful/generated/sdk';
import { Locale, routing } from '@/i18n/routing';
import Footer from '@/app/ui/footer';
import '@/app/ui/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const footerContentQuery = await contentfulClient.footerContent({ locale });
  const footerItems =
    footerContentQuery.footerCollection?.items[0]?.footerItemCollection?.items;

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} grid min-h-screen grid-rows-[1fr_auto] font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider attribute="class">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <Footer
            items={(footerItems || []).filter(
              (item): item is FooterItem => item !== null,
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
