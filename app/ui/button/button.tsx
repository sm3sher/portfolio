import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative inline-flex justify-start overflow-hidden rounded-full bg-[--background-color] px-5 py-3 font-[family-name:--font-geist-mono] font-bold"
    >
      <span className="absolute left-0 top-0 h-44 w-44 -translate-y-2 translate-x-20 rotate-45 bg-[--primary] opacity-[3%]" />
      <span className="absolute left-0 top-0 -mt-1 h-60 w-60 -translate-x-72 -translate-y-36 rotate-45 bg-[--primary] opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8" />
      <span className="relative flex w-full items-center justify-center gap-2 text-center transition-colors duration-200 ease-in-out group-hover:text-[--background-color]">
        {children}
      </span>
      <span className="base-border absolute inset-0 rounded-full" />
    </button>
  );
}
