import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  content?: string | null;
  hideAtSm?: boolean;
};

export default function Tooltip({ children, content, hideAtSm }: Props) {
  return (
    <div className="group relative" aria-describedby={content || undefined}>
      {children}
      <span
        id={content || undefined}
        role="tooltip"
        className={`base-border -translate-x-1/2 pointer-events-none absolute top-full left-1/2 mt-3 transform rounded-xl bg-(--surface-color) px-2 py-1 text-center font-medium text-(--secondary) text-xs opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          hideAtSm ? 'sm:group-hover:opacity-0' : ''
        }`}
      >
        {content}
      </span>
    </div>
  );
}
