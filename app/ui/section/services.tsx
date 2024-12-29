import ServiceCard from '@/app/ui/card/service-card';
import {
  MentoringIcon,
  SoftwareLicenseIcon,
  SystemUpdate01Icon,
  WebDesign01Icon,
} from 'hugeicons-react';

export default function Services() {
  return (
    <div className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,var(--radial-color)_0%,transparent_66%)] opacity-50" />
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mb-10 space-y-7 md:mb-16">
          <h6 className="uppercase tracking-wider text-[--highlight]">
            What I offer
          </h6>
          <h3 className="uppercase">
            Featured <span className="font-light">Services.</span>
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          <ServiceCard
            icon={<WebDesign01Icon size={36} />}
            title="Web Development"
            tags={['Frontend', 'Backend', 'Fullstack']}
            description="I build modern, scalable, and performant websites tailored to your business needs."
          />
          <ServiceCard
            icon={<SoftwareLicenseIcon size={36} />}
            title="Custom Software Solutions"
            tags={['API', 'Integration', 'Automation']}
            description="Crafting bespoke software to solve unique business challenges."
          />
          <ServiceCard
            icon={<MentoringIcon size={36} />}
            title="Technical Consulting"
            tags={['Architecture', 'Strategy', 'Mentoring']}
            description="Offering strategic advice to optimize your software systems and workflows."
          />
          <ServiceCard
            icon={<SystemUpdate01Icon size={36} />}
            title="Support & Maintenance"
            tags={['Monitoring', 'Updates', 'Debugging']}
            description="Ensuring your digital products are always up to date, secure, and running smoothly."
          />
        </div>
      </div>
    </div>
  );
}
