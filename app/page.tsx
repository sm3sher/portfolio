import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <main className="w-96">
        <Image
          className="m-4 dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <Link
          className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          href="/me"
        >
          Enter my page
        </Link>
      </main>
    </div>
  );
}
