import type { Metadata } from 'next';
import contentfulClient from '@/app/lib/contentful/client';
import { Locale } from '@/i18n/routing';
import dynamic from 'next/dynamic';

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

  const Home = dynamic(() => import('@/app/ui/section/home'));
  const About = dynamic(() => import('@/app/ui/section/about'));
  const Work = dynamic(() => import('@/app/ui/section/work'));
  const Contact = dynamic(() => import('@/app/ui/section/contact'));

  return (
    <main>
      <section
        id="home"
        className="flex flex-col pt-20 md:min-h-screen md:justify-center md:pt-0"
      >
        <Home locale={locale} />
      </section>
      <section
        id="about"
        className="flex flex-col pt-20 md:min-h-screen md:justify-center md:pt-0"
      >
        <About />
      </section>
      <section
        id="work"
        className="flex flex-col pt-20 md:min-h-screen md:justify-center md:pt-0"
      >
        <Work />
      </section>
      <section
        id="contact"
        className="flex flex-col pt-20 md:min-h-screen md:justify-center md:pt-0"
      >
        <Contact />
      </section>
    </main>
  );
}
