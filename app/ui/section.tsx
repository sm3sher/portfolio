import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

export default function Section({ title, children }: Props) {
  return (
    <section className="mb-8 text-center last-of-type:mb-0 md:text-left">
      <h2>{title}</h2>
      <div className="mt-4 border border-[--secondary]" />
      <div className="mt-2 text-pretty text-lg sm:text-xl">{children}</div>
    </section>
  );
}
