import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  content?: string | null;
  marginTop?: 'mt-1.5' | 'mt-2.5';
  hideAtSm?: boolean;
};

export default function Tooltip({
  children,
  content,
  marginTop = 'mt-1.5',
  hideAtSm,
}: Props) {
  return (
    <div className="group relative" aria-describedby={content || undefined}>
      {children}
      <span
        id={content || undefined}
        role="tooltip"
        className={`${marginTop} pointer-events-none absolute left-1/2 top-full -translate-x-1/2 transform rounded-xl bg-[--primary] px-2 py-1 text-center text-xs font-medium text-[--background-color] opacity-0 transition-opacity duration-300 group-hover:block group-hover:opacity-75 ${
          hideAtSm ? 'sm:group-hover:opacity-0' : ''
        }`}
      >
        {content}
      </span>
    </div>
  );
}
