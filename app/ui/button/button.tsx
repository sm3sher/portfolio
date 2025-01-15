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
      className="base-border hover-effect group overflow-hidden rounded-full px-6 py-3 font-[family-name:--font-geist-mono] font-bold"
    >
      <span className="flex">{children}</span>
    </button>
  );
}
