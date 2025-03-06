import contentfulClient from '@/app/lib/contentful/client';
import AboutSection from '@/app/ui/section/about-section';
import ContactSection from '@/app/ui/section/contact-section';
import HomeSection from '@/app/ui/section/home-section';
import ServicesSection from '@/app/ui/section/services-section';
import type { Locale } from '@/i18n/routing';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const query = await contentfulClient.mainMetadataContent({ locale });
  const metadata = query.metadataCollection?.items[0];
  return {
    title: metadata?.mainTitle,
    description: metadata?.mainDescription,
    keywords: metadata?.mainKeywords?.filter((keyword) => keyword !== null),
    openGraph: metadata?.openGraphImage?.url
      ? {
          title: metadata?.mainTitle || undefined,
          description: metadata?.mainDescription || undefined,
          images: {
            url: metadata?.openGraphImage?.url,
            width: metadata?.openGraphImage?.width || undefined,
            height: metadata?.openGraphImage?.height || undefined,
          },
        }
      : undefined,
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="overflow-hidden">
      <HomeSection locale={locale} />
      <AboutSection locale={locale} />
      <ServicesSection locale={locale} />
      <ContactSection locale={locale} />
    </div>
  );
}
