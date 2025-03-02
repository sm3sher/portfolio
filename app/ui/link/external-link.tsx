import { LinkSquare02Icon } from 'hugeicons-react';
import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  href?: string | null;
  highlight?: boolean;
  icon?: boolean;
};

export default function ExternalLink({
  children,
  href,
  highlight,
  icon,
}: Props) {
  return (
    <a
      href={href || ''}
      target="_blank"
      rel="noopener noreferrer"
      className={`underline-effect inline-flex items-center gap-1 ${highlight && 'text-(--highlight-link)'}`}
    >
      {children || href}
      {icon && <LinkSquare02Icon size={16} />}
    </a>
  );
}
