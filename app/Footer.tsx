export default function Footer() {
  return (
    <footer className="m-4 mt-auto rounded-lg shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          @ {new Date().getFullYear()} - Roman Jumatov
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li>
            <a
              className="me-4 hover:underline hover:underline-offset-4 sm:me-6"
              href="https://github.com/sm3sher"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              className="me-4 hover:underline hover:underline-offset-4 sm:me-6"
              href="https://stackoverflow.com/users/8845480/sm3sher"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stackoverflow
            </a>
          </li>
          <li>
            <a
              className="me-4 hover:underline hover:underline-offset-4 sm:me-6"
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
