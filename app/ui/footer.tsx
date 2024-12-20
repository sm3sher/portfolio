import { FooterItem } from '@/app/lib/contentful/footer';

type Props = {
  items: FooterItem[];
};

export default function Footer({ items }: Props) {
  return (
    <footer className="m-4 rounded-lg text-sm font-medium text-[--secondary]">
      <div className="mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
        <span className="sm:text-center">
          &copy; {new Date().getFullYear()} - Roman Jumatov
        </span>
        <ul className="mt-3 flex flex-wrap items-center sm:mt-0">
          {items.map((item) => (
            <li
              key={item.href}
              className="me-4 last:me-0 hover:underline hover:underline-offset-4 sm:me-6"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
