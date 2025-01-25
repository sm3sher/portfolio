import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SubmitButton({ children }: Props) {
  return (
    <button
      type="submit"
      className="base-border group relative w-full cursor-pointer overflow-hidden rounded-full px-5 py-3 font-(family-name:--font-geist-mono) font-bold"
    >
      <span className="absolute inset-0 h-full w-0 rounded-full bg-(--hover-color) transition-all duration-500 group-hover:w-full" />
      <span className="flex items-center justify-center">{children}</span>
    </button>
  );
}
