import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work - Roman Jumatov',
  description:
    'Explore my work showcasing my skills in React, Next.js, and other technologies.',
};

export default function Page() {
  return <h1 className="text-5xl font-extrabold">Work</h1>;
}