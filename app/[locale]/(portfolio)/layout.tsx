import { ReactNode } from 'react';
import BaseLayout from '@/app/ui/base-layout';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <BaseLayout>{children}</BaseLayout>;
}
