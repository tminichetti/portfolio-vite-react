import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar sticky top-0 z-10 flex w-full flex-wrap items-center justify-between bg-gray-800 p-6">
      <Link
        to="/"
        className="mr-6 flex flex-shrink-0 cursor-pointer items-center text-white"
      >
        <span className="title text-xl font-semibold tracking-tight">TM</span>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center rounded border border-gray-400 px-3 py-2 text-gray-200 hover:border-white hover:text-white">
          <svg
            className="h-3 w-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="block w-full flex-grow content-end text-end lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <Link
            to="#"
            className="mt-4 mr-4 block cursor-pointer text-gray-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Accueil
          </Link>
          <Link
            to="#about"
            className="mt-4 mr-4 block cursor-pointer text-gray-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            A propos
          </Link>
          <Link
            to="#projects"
            className="mt-4 mr-4 block cursor-pointer text-gray-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Mes projets
          </Link>
          <Link
            to="#contact"
            className="mt-4 block cursor-pointer text-gray-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
