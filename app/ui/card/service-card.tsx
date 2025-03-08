import type { Service } from '@/app/lib/contentful/generated/sdk';
import {
  IdeaIcon,
  MentoringIcon,
  SoftwareLicenseIcon,
  SystemUpdate01Icon,
  WebDesign01Icon,
} from 'hugeicons-react';

type Props = {
  content?: Service;
};

const iconMapping = {
  WebDesign01Icon: <WebDesign01Icon size={36} />,
  IdeaIcon: <IdeaIcon size={36} />,
  MentoringIcon: <MentoringIcon size={36} />,
  SoftwareLicenseIcon: <SoftwareLicenseIcon size={36} />,
  SystemUpdate01Icon: <SystemUpdate01Icon size={36} />,
};

export default function ServiceCard({ content }: Props) {
  return (
    <div className="group glow-effect relative h-full overflow-hidden rounded-3xl bg-(--surface-color) px-4 py-6 duration-300 sm:px-12 md:px-6 md:py-8 lg:px-12 xl:px-6">
      <div className="-left-1/2 absolute top-1/4 h-36 w-[200%] animate-spin-slow bg-(--highlight) opacity-0 transition-opacity duration-500 group-hover:opacity-80" />
      <div className="absolute inset-1 rounded-3xl bg-(--surface-color)" />
      <div className="absolute inset-0 rounded-3xl bg-linear-to-tr/oklch from-(--highlight) to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-15 dark:group-hover:opacity-20" />
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-(--highlight) text-white md:mb-6 md:h-16 md:w-16">
          {iconMapping[content?.iconName as keyof typeof iconMapping]}
        </div>
        <h5 className="transition-colors duration-300 group-hover:text-(--highlight)">
          {content?.title}
        </h5>
        <div className="my-4 flex flex-wrap justify-center gap-1 text-(--secondary) text-[0.7rem] uppercase md:gap-2 md:font-medium md:text-xs">
          {content?.tags?.map((tag) => (
            <span
              key={tag}
              className="subtle-border group-hover:base-border rounded-full px-3 py-1 duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-(--secondary) text-sm transition-colors duration-300 group-hover:text-(--primary)">
          {content?.description}
        </p>
      </div>
    </div>
  );
}
