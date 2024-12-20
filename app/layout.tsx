import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { fetchFooterContent } from '@/app/lib/contentful/footer';
import Footer from '@/app/ui/footer';
import '@/app/ui/globals.css';

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const footerItems = await fetchFooterContent();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} grid min-h-screen grid-rows-[1fr_auto] font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider attribute="class">
          {children}
          <Footer items={footerItems || []} />
        </ThemeProvider>
      </body>
    </html>
  );
}
