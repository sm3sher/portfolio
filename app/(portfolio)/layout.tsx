import { ReactNode } from 'react';
import Navbar from '@/app/(portfolio)/Navbar';
import ThemeToggle from '@/app/(portfolio)/ThemeToggle';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <nav className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-6">
        <button>EN/DE</button>
        <Navbar />
        <ThemeToggle />
      </nav>
      <div className="mx-auto max-w-screen-xl p-6">{children}</div>
    </div>
  );
}
