import Button from '@/app/ui/button/button';
import { MouseEventHandler, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  icon: ReactNode;
  title?: string | null;
  button: {
    label?: string | null;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
  };
};

export default function StatusCard({ children, icon, title, button }: Props) {
  return (
    <div className="rounded-3xl bg-[--background-color] px-8 py-6 drop-shadow sm:px-10 sm:py-8 dark:bg-[--banner-color]">
      <div className="flex flex-col items-center text-[--highlight]">
        {icon}
        <h5 className="mb-2 mt-4">{title}</h5>
      </div>
      {children}
      <div className="mt-4 flex justify-center">
        <Button onClick={button.onClick} disabled={button.disabled}>
          {button.label}
        </Button>
      </div>
    </div>
  );
}
