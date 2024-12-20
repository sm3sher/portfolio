import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { fetchFooterContent } from '@/app/lib/contentful/footer';
import { Locale, routing } from '@/i18n/routing';
import Footer from '@/app/ui/footer';
import '@/app/ui/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const footerItems = await fetchFooterContent(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} grid min-h-screen grid-rows-[1fr_auto] font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider attribute="class">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
          <Footer items={footerItems || []} />
        </ThemeProvider>
      </body>
    </html>
  );
}
