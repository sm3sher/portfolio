import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/ui/button/button';

export const metadata: Metadata = {
  title: 'Roman Jumatov',
  description:
    'Welcome to my portfolio. Discover my skills and expertise in web development.',
};

export default function Page() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-8 md:h-full md:flex-row md:items-center lg:gap-12">
      <div className="flex w-5/6 justify-center md:w-5/12">
        <Image
          className="rounded-2xl"
          src="/side-profile.png"
          alt="Picture of Roman looking sideways"
          width={500}
          height={410}
          priority
        />
      </div>
      <div className="space-y-6 md:w-7/12">
        <h1 className="text-balance text-center md:text-left">
          Turning Ideas into Seamless Digital Experiences.
        </h1>
        <p className="text-pretty text-center text-lg sm:text-xl md:text-left">
          I specialize in developing user-centric web applications that blend
          innovation and functionality. Explore my work experience and skills,
          showcasing my expertise in web development.
        </p>
        <div className="flex justify-center space-x-3 md:justify-start">
          <Link href="/work" tabIndex={-1}>
            <Button>View My Work</Button>
          </Link>
          <Link href="/contact" tabIndex={-1}>
            <Button>Contact Me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
