import type { Metadata } from 'next';
import contentfulClient from '@/app/lib/contentful/client';
import { Locale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metadataContentQuery = await contentfulClient.metadataPrivacyContent({
    locale,
  });
  const metadata = metadataContentQuery.metaDataPrivacyCollection?.items[0];
  return {
    title: metadata?.title,
    description: metadata?.description,
  };
}

export default function Page() {
  return <h1>Privacy Policy</h1>;
}
