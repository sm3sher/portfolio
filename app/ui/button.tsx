import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
};

export default function Button({
  children,
  type = 'button',
  onClick,
  fullWidth,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`base-border flex items-center justify-center gap-2 rounded-xl bg-[--background-hover] px-4 py-2 font-[family-name:--font-geist-mono] enabled:hover:bg-[--background-active] ${fullWidth && 'w-full'}`}
    >
      {children}
    </button>
  );
}
