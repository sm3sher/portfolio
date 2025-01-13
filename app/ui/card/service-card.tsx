import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  tags: string[];
  description: string;
};

export default function ServiceCard({ icon, title, tags, description }: Props) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl bg-[--banner-color] px-4 py-5">
      <div className="absolute -left-1/4 top-1/4 h-36 w-[150%] animate-spin-slow bg-[--highlight] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-80" />
      <div className="absolute inset-1 rounded-xl bg-[--banner-color]" />
      <div className="relative">
        <div className="transition-colors duration-300 ease-in-out group-hover:text-[--highlight]">
          {icon}
          <h5 className="mb-4 mt-3 md:mb-6 md:mt-4 lg:mb-8 lg:mt-6">{title}</h5>
        </div>
        <div className="mb-4 flex flex-wrap gap-2 text-xs uppercase">
          {tags.map((tag) => (
            <span key={tag} className="base-border rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-[--secondary] transition-colors duration-300 ease-in-out group-hover:text-[--primary]">
          {description}
        </p>
      </div>
    </div>
  );
}
