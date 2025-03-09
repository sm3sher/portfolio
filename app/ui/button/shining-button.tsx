import type { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ShiningButton({ children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="base-border hover-effect font-(family-name:--font-geist-mono) relative overflow-hidden rounded-full px-6 py-3 font-bold backdrop-blur-sm transition-all duration-300"
    >
      <span className="-skew-x-20 -left-full absolute top-0 h-full w-full animate-shine bg-gradient-to-r from-transparent via-black/10 to-transparent opacity-0 dark:via-white/40" />
      {children}
    </button>
  );
}
