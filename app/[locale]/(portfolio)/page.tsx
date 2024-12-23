import type { Metadata } from 'next';
import contentfulClient from '@/app/lib/contentful/client';
import Image from 'next/image';
import { Link, Locale } from '@/i18n/routing';
import Button from '@/app/ui/button/button';

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
  const homeContentQuery = await contentfulClient.homeContent({ locale });
  const home = homeContentQuery.homeCollection?.items[0];

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 md:h-full md:flex-row md:items-center lg:gap-12">
      <div className="flex w-5/6 justify-center md:w-5/12">
        {home?.image && home.image.url && home.image.description && (
          <Image
            className="rounded-2xl"
            src={home.image.url}
            alt={home.image.description}
            width={500}
            height={410}
            priority
          />
        )}
      </div>
      <div className="space-y-6 md:w-7/12">
        <h1 className="text-balance text-center md:text-left">{home?.title}</h1>
        <p className="text-center md:text-left">{home?.description}</p>
        <div className="flex justify-center space-x-3 md:justify-start">
          <Link href="/about" tabIndex={-1}>
            <Button>{home?.aboutButton}</Button>
          </Link>
          <Link href="/work" tabIndex={-1}>
            <Button>{home?.workButton}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
