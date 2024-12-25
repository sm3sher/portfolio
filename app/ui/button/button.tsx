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
      className="base-border group relative cursor-pointer overflow-hidden rounded-full px-6 py-3 font-[family-name:--font-geist-mono] font-bold"
    >
      <span className="absolute inset-0 skew-x-[-45deg] scale-x-0 transform bg-[--primary] transition-transform duration-500 group-hover:scale-x-125" />
      <span className="relative flex items-center justify-center transition-colors duration-500 ease-in-out group-hover:text-[--background-color]">
        {children}
      </span>
    </button>
  );
}
