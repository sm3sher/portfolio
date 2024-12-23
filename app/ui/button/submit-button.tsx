import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SubmitButton({ children }: Props) {
  return (
    <button
      type="submit"
      className="base-border group relative w-full overflow-hidden rounded-full bg-[--background-color] px-5 py-3 font-[family-name:--font-geist-mono] font-bold"
    >
      <span className="absolute inset-0 h-full w-0 rounded-full bg-[--primary] transition-all duration-500 group-hover:w-full" />
      <span className="relative flex justify-center gap-2 transition-colors duration-500 ease-in-out group-hover:text-[--background-color]">
        {children}
      </span>
    </button>
  );
}
