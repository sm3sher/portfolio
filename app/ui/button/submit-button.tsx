import { SentIcon } from 'hugeicons-react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SubmitButton({ children }: Props) {
  return (
    <button
      type="submit"
      className="base-border group font-(family-name:--font-geist-mono) relative w-full cursor-pointer overflow-hidden rounded-full bg-(--surface-color) px-5 py-3 font-bold"
    >
      <span />
      <span className="absolute inset-0 h-full w-0 rounded-full bg-(--hover-color) duration-400 group-hover:w-full" />
      <span className="flex items-center justify-center gap-2">
        <span className="duration-400 group-hover:translate-x-4">
          {children}
        </span>
        <SentIcon className="rotate-45 duration-400 ease-in group-hover:translate-x-70" />
      </span>
    </button>
  );
}
