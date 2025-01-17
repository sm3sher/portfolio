import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function Button({ children, onClick, disabled }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="base-border hover-effect group overflow-hidden rounded-full px-6 py-3 font-[family-name:--font-geist-mono] font-bold"
    >
      <span className="flex">{children}</span>
    </button>
  );
}
