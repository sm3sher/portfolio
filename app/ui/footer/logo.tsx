import { SourceCodeIcon } from 'hugeicons-react';

type Props = {
  title?: string | null;
  description?: string | null;
};

export default function Logo({ title, description }: Props) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <div className="rounded-[1.15rem] bg-radial-[circle_at_top_left] from-(--highlight) to-black text-white md:rounded-[1.25rem] lg:rounded-[1.45rem]">
        <SourceCodeIcon className="size-11 stroke-2 p-0.5 md:size-12 lg:size-14" />
      </div>
      <div className="flex flex-col">
        <h5 className="text-">{title}</h5>
        <span className="text-xs font-semibold tracking-wide text-(--secondary) sm:text-sm">
          {description}
        </span>
      </div>
    </div>
  );
}
