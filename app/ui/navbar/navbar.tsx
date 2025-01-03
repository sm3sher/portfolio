import LanguageDropdown from '@/app/ui/navbar/language-dropdown';
import NavigationMenu from '@/app/ui/navbar/navigation-menu';
import ThemeToggle from '@/app/ui/navbar/theme-toggle';

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto flex w-full max-w-screen-xl items-center justify-between px-3 py-6">
      <LanguageDropdown />
      <NavigationMenu />
      <ThemeToggle />
    </nav>
  );
}
