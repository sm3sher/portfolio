import type { ReactNode } from 'react';

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
        className={`${marginTop} base-border -translate-x-1/2 pointer-events-none absolute top-full left-1/2 transform rounded-xl bg-(--surface-color) px-2 py-1 text-center font-medium text-(--secondary) text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          hideAtSm ? 'sm:group-hover:opacity-0' : ''
        }`}
      >
        {content}
      </span>
    </div>
  );
}
