const Footer = () => {
  return (
    <footer className="bg-zinc-950 shadow">
      <div className="text-base mx-auto w-full max-w-screen-xl py-[2rem] px-[2rem] md:flex md:items-center md:justify-between">
        <span className="text-gray-500 sm:text-center">
          © 2024 Bibliotheca
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/landing/about" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
