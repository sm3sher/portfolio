import { MouseEventHandler, ReactNode } from 'react';
import LoadingSpinner from '@/app/ui/loading/loading-spinner';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isLoading?: boolean;
};

export default function Button({
  children,
  onClick,
  disabled,
  isLoading,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isLoading}
      className="base-border hover-effect group overflow-hidden rounded-full px-6 py-3 font-(family-name:--font-geist-mono) font-bold backdrop-blur-sm transition-all duration-300"
    >
      <span className={`flex duration-500 ${isLoading && 'text-transparent'}`}>
        {children}
      </span>
      <span
        className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 duration-500 ${isLoading && 'opacity-100'}`}
      >
        <LoadingSpinner size={24} />
      </span>
    </button>
  );
}
