import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './ui/globals.css';
import Footer from '@/app/ui/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} grid min-h-screen grid-rows-[1fr_auto] font-[family-name:var(--font-geist-sans)] antialiased`}
      >
        <ThemeProvider attribute="class">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
