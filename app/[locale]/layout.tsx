import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Locale, routing } from '@/i18n/routing';
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

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider attribute="class">
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
