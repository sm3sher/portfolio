import { Metadata } from 'next';
import Image from 'next/image';
import { SentIcon } from 'hugeicons-react';

export const metadata: Metadata = {
  title: 'Contact - Roman Jumatov',
  description:
    'Get in touch with me for collaborations, inquiries, or networking opportunities.',
};

export default function Page() {
  // TODO: add form handling
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:h-full md:flex-row md:items-center lg:gap-16">
      <div className="relative max-w-2xl space-y-6 md:w-1/2">
        <h1 className="text-center md:text-left">Get in touch! </h1>
        <p className="text-center text-lg sm:text-xl md:text-left">
          You can send me a message here. If you’re proposing a collaboration on
          a specific project, please describe the project’s goals and the tasks
          as clearly as possible. The more details you provide, the better I can
          assess if the collaboration would be a good fit!
        </p>
        <div className="flex items-center justify-center gap-4 md:justify-normal">
          <Image
            src="/avatar.png"
            className="rounded-full"
            alt="Picture of Roman looking diagonally"
            width={100}
            height={100}
          />
          <div className="font-medium">
            <div>Roman Jumatov</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Senior full-stack developer
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <form className="space-y-4">
          <div>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="base-border mt-1 block w-full rounded-lg px-4 py-2"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="base-border mt-1 block w-full rounded-lg px-4 py-2"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              type="text"
              id="company"
              name="company"
              className="base-border mt-1 block w-full rounded-lg px-4 py-2"
              placeholder="Company (optional)"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="base-border mt-1 block w-full rounded-lg px-4 py-2"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            className="base-border flex w-full items-center justify-center gap-2 rounded-lg bg-[--background-hover] px-4 py-2 font-[family-name:--font-geist-mono] hover:bg-[--background-active]"
          >
            <SentIcon size={20} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
