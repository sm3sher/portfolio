import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home - Roman Jumatov',
  description:
    'Welcome to my portfolio. Discover my projects, skills, and expertise in web development.',
};

export default function Page() {
  return <h1 className="text-5xl font-extrabold">Home</h1>;
}
