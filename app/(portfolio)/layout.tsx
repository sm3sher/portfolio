import { ReactNode } from 'react';
import LanguageDropdown from '@/app/ui/topbar/language-dropdown';
import Navbar from '@/app/ui/topbar/navbar';
import ThemeToggle from '@/app/ui/topbar/theme-toggle';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[auto,1fr]">
      <nav className="sticky top-0 z-10 mx-auto flex w-full max-w-screen-xl items-center justify-between px-6 py-6">
        <LanguageDropdown />
        <Navbar />
        <ThemeToggle />
      </nav>
      <div className="mx-auto w-full max-w-screen-xl p-6 pt-0">{children}</div>
    </div>
  );
}
