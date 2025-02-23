import { SentIcon } from 'hugeicons-react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SubmitButton({ children }: Props) {
  return (
    <button
      type="submit"
      className="base-border group font-(family-name:--font-geist-mono) relative w-full cursor-pointer overflow-hidden rounded-full px-5 py-3 font-bold backdrop-blur-sm"
    >
      <span className="absolute inset-0 h-full w-0 rounded-full bg-(--hover-color) transition-all duration-300 group-hover:w-full" />
      <span className="flex items-center justify-center">
        <span className="transition-transform duration-500 group-hover:translate-x-4">
          {children}
        </span>
        <SentIcon className="ml-2 rotate-45 transition-transform duration-700 group-hover:translate-x-60" />
      </span>
    </button>
  );
}
