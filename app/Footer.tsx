export default function Footer() {
  return (
    <footer className="m-4 mt-auto rounded-lg text-[--footer]">
      <div className="mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
        <span className="text-sm sm:text-center">
          @ {new Date().getFullYear()} - Roman Jumatov
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
          <li>
            <a
              className="me-4 hover:underline hover:underline-offset-4 sm:me-6"
              href="https://github.com/sm3sher"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="me-4 hover:underline hover:underline-offset-4 sm:me-6"
              href="https://stackoverflow.com/users/8845480/sm3sher"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stack Overflow
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-4"
              href="mailto:roman.jum99@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
