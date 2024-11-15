import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - Roman Jumatov',
  description:
    'Explore my projects showcasing my skills in React, Next.js, and other technologies.',
};

export default function Page() {
  return <h1 className="text-5xl font-extrabold">Projects</h1>;
}
