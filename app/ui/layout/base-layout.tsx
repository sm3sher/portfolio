import { ReactNode } from 'react';
import LanguageDropdown from '@/app/ui/topbar/language-dropdown';
import Navbar from '@/app/ui/topbar/navbar';
import ThemeToggle from '@/app/ui/topbar/theme-toggle';
import ScrollToTop from '@/app/ui/button/scroll-to-top';

type Props = {
  children: ReactNode;
};

export default function BaseLayout({ children }: Props) {
  return (
    <div>
      <nav className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-full max-w-screen-xl items-center justify-between px-3 py-6">
        <LanguageDropdown />
        <Navbar />
        <ThemeToggle />
      </nav>
      <div className="overflow-hidden">{children}</div>
      <ScrollToTop />
    </div>
  );
}
