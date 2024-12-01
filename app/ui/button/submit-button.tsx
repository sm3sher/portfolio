import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SubmitButton({ children }: Props) {
  return (
    <button
      type="submit"
      className="base-border group relative w-full overflow-hidden rounded-full bg-[--background-color] px-5 py-3 font-[family-name:--font-geist-mono] font-bold shadow-inner"
    >
      <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-[--secondary] transition-all duration-300 group-hover:w-full"></span>
      <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-[--secondary] transition-all duration-300 group-hover:w-full"></span>
      <span className="ease absolute left-0 top-0 h-0 w-full bg-[--secondary] transition-all delay-200 duration-500 group-hover:h-full"></span>
      <span className="ease absolute bottom-0 left-0 h-0 w-full bg-[--secondary] transition-all delay-200 duration-500 group-hover:h-full"></span>
      <span className="absolute inset-0 h-full w-full bg-[--primary] opacity-0 delay-300 duration-500 group-hover:opacity-100"></span>
      <span className="ease relative flex justify-center gap-2 transition-colors delay-200 duration-500 group-hover:text-[--background-color]">
        {children}
      </span>
    </button>
  );
}
