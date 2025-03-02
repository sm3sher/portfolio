import contentfulClient from '@/app/lib/contentful/client';
import ServiceBanner from '@/app/ui/banner/service-banner';
import About from '@/app/ui/section/about';
import Contact from '@/app/ui/section/contact';
import Home from '@/app/ui/section/home';
import Services from '@/app/ui/section/services';
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
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="overflow-hidden">
      <section id="home">
        <Home locale={locale} />
        <ServiceBanner locale={locale} />
      </section>
      <section id="about">
        <About locale={locale} />
      </section>
      <section id="services">
        <Services locale={locale} />
      </section>
      <section id="contact">
        <Contact locale={locale} />
      </section>
    </div>
  );
}
