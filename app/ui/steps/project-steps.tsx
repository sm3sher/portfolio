import { ProjectStep } from '@/app/lib/contentful/generated/sdk';

interface Props {
  content?: ProjectStep[];
}

export default function ProjectSteps({ content }: Props) {
  return (
    <ul className="space-y-2 sm:space-y-4 md:space-y-6">
      {content?.map(({ title, description }, index) => (
        <li
          key={index}
          className="relative flex items-start gap-4 before:absolute before:top-7 before:left-3.5 before:h-full before:w-px before:bg-(--highlight) last:before:hidden sm:gap-6 sm:before:top-8 sm:before:left-4"
        >
          <span className="flex min-h-7 min-w-7 items-center justify-center rounded-lg border border-(--highlight) font-semibold backdrop-blur sm:min-h-8 sm:min-w-8 sm:text-lg">
            {index + 1}
          </span>
          <span>
            <p className="font-semibold sm:text-lg">{title}</p>
            <span className="text-sm text-(--secondary) sm:text-base">
              {description}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
