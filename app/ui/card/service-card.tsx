import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  title: string;
  tags: string[];
  description: string;
};

export default function ServiceCard({ icon, title, tags, description }: Props) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl bg-(--background-color) px-4 py-6 shadow-lg transition-shadow duration-300 hover:shadow-xl md:px-6 md:py-8 dark:bg-(--banner-color)">
      <div className="animate-spin-slow absolute top-1/4 -left-1/2 h-36 w-[200%] bg-(--highlight) opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
      <div className="absolute inset-1 rounded-3xl bg-(--background-color) dark:bg-(--banner-color)" />
      <div className="absolute inset-0 rounded-3xl bg-linear-to-tr/oklch from-(--highlight-subtle) to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-(--highlight) text-white shadow-md sm:h-16 sm:w-16">
          {icon}
        </div>
        <h5 className="transition-colors duration-300 group-hover:text-(--highlight)">
          {title}
        </h5>
        <div className="my-4 flex flex-wrap justify-center gap-2 text-xs font-medium text-(--secondary) uppercase">
          {tags.map((tag) => (
            <span key={tag} className="base-border rounded-full px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-(--secondary) transition-colors duration-300 group-hover:text-(--primary)">
          {description}
        </p>
      </div>
    </div>
  );
}
