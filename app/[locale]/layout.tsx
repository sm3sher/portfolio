import { type Locale, routing } from '@/i18n/routing';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import '@/app/ui/globals.css';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.MOCKS_ENABLED) {
  import('@/mocks/node').then(({ server }) =>
    server.listen({ onUnhandledRequest: 'error' }),
  );
}

// caching content for 24 hours
export const revalidate = 86400;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
