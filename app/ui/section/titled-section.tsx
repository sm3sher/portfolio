import type { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string | null;
};

export default function TitledSection({ children, title }: Props) {
  return (
    <section className="mb-12 border-(--border-color) border-t pt-6 last-of-type:mb-0">
      <h4 className="mb-4 font-semibold text-lg">{title}</h4>
      {children}
    </section>
  );
}
