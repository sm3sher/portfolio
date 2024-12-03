import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

export default function Section({ title, children }: Props) {
  return (
    <section className="mb-8 text-center md:text-left">
      <h2>{title}</h2>
      <div className="mt-4 border border-[--secondary]" />
      {children}
    </section>
  );
}
