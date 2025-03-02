import { LinkSquare02Icon } from 'hugeicons-react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  href?: string | null;
};

export default function ExternalLink({ children, href }: Props) {
  return (
    <a
      href={href || ''}
      target="_blank"
      rel="noopener noreferrer"
      className="underline-effect flex items-center gap-1"
    >
      {children}
      <LinkSquare02Icon size={16} />
    </a>
  );
}
