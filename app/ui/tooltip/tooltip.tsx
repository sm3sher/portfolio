import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tooltip?: string | null;
  hideAtSm?: boolean;
};

export default function Tooltip({ children, tooltip, hideAtSm }: Props) {
  return (
    <div className="group relative">
      {children}
      <span
        className={`absolute left-1/2 mt-2 -translate-x-1/2 transform rounded-xl bg-[--banner-color] px-2 py-0.5 text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-80 ${
          hideAtSm ? 'sm:hidden' : ''
        }`}
      >
        {tooltip}
      </span>
    </div>
  );
}
