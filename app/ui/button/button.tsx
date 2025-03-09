import LoadingSpinner from '@/app/ui/loading/loading-spinner';
import type { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  fullWidth?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function Button({
  children,
  onClick,
  fullWidth,
  disabled,
  isLoading,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`base-border hover-effect group font-(family-name:--font-geist-mono) overflow-hidden rounded-full px-6 py-3 font-bold backdrop-blur-sm transition-all duration-300 ${fullWidth ? 'w-full' : ''}`}
    >
      <span
        className={`flex justify-center duration-500 ${isLoading ? 'text-transparent' : ''}`}
      >
        {children}
      </span>
      <span
        className={`-translate-1/2 absolute top-1/2 opacity-0 duration-500 ${isLoading ? 'opacity-100' : ''}`}
      >
        <LoadingSpinner size={24} />
      </span>
    </button>
  );
}
