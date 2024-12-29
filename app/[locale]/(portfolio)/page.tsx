import type { Metadata } from 'next';
import contentfulClient from '@/app/lib/contentful/client';
import { Locale } from '@/i18n/routing';
import dynamic from 'next/dynamic';
import Home from '@/app/ui/section/home';
import ServiceBanner from '@/app/ui/banner/service-banner';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const metadataContentQuery = await contentfulClient.metadataContent({
    locale,
  });
  const metadata = metadataContentQuery.metaDataCollection?.items[0];
  return {
    title: metadata?.title,
    description: metadata?.description,
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  const About = dynamic(() => import('@/app/ui/section/about'));
  const Services = dynamic(() => import('@/app/ui/section/services'));
  const Contact = dynamic(() => import('@/app/ui/section/contact'));

  return (
    <main>
      <section id="home">
        <Home locale={locale} />
        <ServiceBanner locale={locale} />
      </section>
      <section id="about">
        <About locale={locale} />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
