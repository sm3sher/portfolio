const footerItems = [
  {
    href: 'https://github.com/sm3sher',
    label: 'GitHub',
  },
  {
    href: 'https://stackoverflow.com/users/8845480',
    label: 'Stack Overflow',
  },
  {
    href: 'mailto:roman.jum99@gmail.com',
    label: 'Email',
  },
];

export default function Footer() {
  return (
    <footer className="m-4 rounded-lg text-sm font-medium text-[--secondary]">
      <div className="mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
        <span className="sm:text-center">
          &copy; {new Date().getFullYear()} - Roman Jumatov
        </span>
        <ul className="mt-3 flex flex-wrap items-center sm:mt-0">
          {footerItems.map((item) => (
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
