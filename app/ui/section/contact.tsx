import Image from 'next/image';
import ContactForm from '@/app/ui/form/contact-form';

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 md:h-full md:flex-row lg:gap-16">
      <div className="relative max-w-2xl space-y-6 md:w-1/2">
        <h1 className="text-center md:text-left">Get in Touch!</h1>
        <p className="text-center md:text-left">
          You can send me a message here. If you’re proposing a collaboration on
          a specific project, please describe the project’s goals and the tasks
          as clearly as possible. The more details you provide, the better I can
          assess if the collaboration would be a good fit!
        </p>
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <Image
            src="/avatar.png"
            className="rounded-full"
            alt="Picture of Roman looking diagonally"
            width={100}
            height={100}
          />
          <div className="font-medium">
            <div>Roman Jumatov</div>
            <div className="text-sm text-[--secondary]">
              Senior full-stack developer
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}
