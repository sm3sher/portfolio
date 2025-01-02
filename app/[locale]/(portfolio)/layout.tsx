import { ReactNode } from 'react';
import BaseLayout from '@/app/ui/layout/base-layout';
import { Locale } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
