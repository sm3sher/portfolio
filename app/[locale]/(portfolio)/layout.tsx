import { ReactNode } from 'react';
import BaseLayout from '@/app/ui/layout/base-layout';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}
