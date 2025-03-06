import { ArrowRight04Icon } from 'hugeicons-react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ArrowItem({ children }: Props) {
  return (
    <li className="mb-2 flex gap-2 leading-snug">
      <ArrowRight04Icon className="shrink-0 text-(--highlight)" />
      {children}
    </li>
  );
}
