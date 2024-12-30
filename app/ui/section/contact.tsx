import WithScrollAnimation from '@/app/ui/animation/with-scroll-animation';
import ContactForm from '@/app/ui/form/contact-form';

export default function Contact() {
  return (
    <div className="py-24 md:py-32">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center gap-6 md:flex-row lg:gap-16">
          <WithScrollAnimation className="mb-10 space-y-7 md:mb-16 md:w-1/2">
            <h6 className="uppercase tracking-wider text-[--highlight]">
              Get in Touch!
            </h6>
            <h3 className="uppercase">
              Send a <span className="font-light">Message.</span>
            </h3>
            <p>
              Do you have a project idea or a collaboration in mind? I’d be
              delighted to hear from you! Please share the details of your
              project, including its goals and requirements, so I can assess how
              I might assist you best. I’ll respond promptly to discuss further
              steps.
            </p>
          </WithScrollAnimation>
          <WithScrollAnimation className="w-full md:w-1/2" delay={0.4}>
            <ContactForm />
          </WithScrollAnimation>
        </div>
      </div>
    </div>
  );
}
