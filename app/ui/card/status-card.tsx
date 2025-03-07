import Button from '@/app/ui/button/button';
import type { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon: ReactNode;
  title?: string | null;
  button: {
    label?: string | null;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    isLoading?: boolean;
  };
  attemptsLeft: number;
  attemptsLabel?: string | null;
  attemptLabel?: string | null;
};

export default function StatusCard({
  children,
  icon,
  title,
  button,
  attemptsLeft,
  attemptsLabel,
  attemptLabel,
}: Props) {
  return (
    <div className="subtle-border rounded-3xl bg-(--overlay-color) px-8 pt-6 pb-4 shadow-effect sm:px-10 sm:pt-8 sm:pb-6">
      <div className="flex flex-col items-center text-(--highlight)">
        {icon}
        <h5 className="mt-4 mb-2">{title}</h5>
      </div>
      {children}
      <div className="mt-5 flex justify-center">
        <Button
          fullWidth
          onClick={button.onClick}
          disabled={button.disabled}
          isLoading={button.isLoading}
        >
          {button.label}
        </Button>
      </div>
      <span className="mt-2 flex justify-center text-(--text-secondary) text-sm">
        {attemptsLeft} {attemptsLeft === 1 ? attemptLabel : attemptsLabel}
      </span>
    </div>
  );
}
