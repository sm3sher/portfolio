import { Suspense } from 'react';
import { Locale } from '@/i18n/routing';
import contentfulClient from '@/app/lib/contentful/client';
import VerifyContent from '@/app/ui/verify/verify-content';
import { Verify } from '@/app/lib/contentful/generated/sdk';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const query = await contentfulClient.verifyContent({ locale });
  const content = query.verifyCollection?.items[0];

  return (
    <Suspense>
      <VerifyContent content={content as Verify} />
    </Suspense>
  );
}
