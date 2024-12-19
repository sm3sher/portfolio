import type { Metadata } from 'next';
import { fetchHomeContent } from '@/app/lib/contentful/home';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/ui/button/button';

export const metadata: Metadata = {
  title: 'Roman Jumatov',
  description:
    'Welcome to my portfolio. Discover my skills and expertise in web development.',
};

export default async function Page() {
  const home = await fetchHomeContent();

  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 md:h-full md:flex-row md:items-center lg:gap-12">
      <div className="flex w-5/6 justify-center md:w-5/12">
        {home?.image && (
          <Image
            className="rounded-2xl"
            src={`https:${home.image.src}`}
            alt={home.image.alt}
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
