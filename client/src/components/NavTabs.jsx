import { Link, useLocation } from "react-router-dom";
import Auth from "../utils/auth";
import { useState } from "react";

function NavTabs() {
  const currentPage = useLocation().pathname.split("/")[1];

  let style =
    "block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500";

  //TEST burger function
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    // TEST Navbar
    <>
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link to={Auth.loggedIn() ? "/dashboard" : "/login"} className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src="" className="h-8" alt="Endeveor image" /> */}
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Endeavor
          </span>
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {Auth.loggedIn() ? (
            <Link to={"/login"}>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => Auth.logout()}
              >
                Logout
              </button>
            </Link>
          ) : (
            <Link to={"/login"}>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </Link>
          )}
          {/* Mobile Burger Menu*/}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
            onClick={toggleNavbar}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link
                to={Auth.loggedIn() ? "/dashboard" : "/login"}
                className={`${currentPage === "dashboard" ? "text-cyan-600" : "text-zinc-300"} 
                  block rounded px-3 py-2 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-cyan-700`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/communities"
                className={`${currentPage === "communities" ? "text-cyan-600" : "text-zinc-300"} 
                block rounded px-3 py-2  hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-cyan-700`}
              >
                Communities
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                className={`${currentPage === "create" ? "text-cyan-600" : "text-zinc-300"} 
                block rounded px-3 py-2  hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-cyan-700`}
              >
                Create
              </Link>
            </li>
            <li>
              <Link
                className={`${currentPage === "browse" ? "text-cyan-600" : "text-zinc-300"} 
                block rounded px-3 py-2  hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-cyan-700`}
                to="/browse"
              >
                Browse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Mobile menu */}
    {isOpen && (
      <div className="py-4 flex flex-col basis-full flex-wrap items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Link
          to={Auth.loggedIn() ? "/dashboard" : "/login"}
          className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
          aria-current="page"
        >
          Home
        </Link>
        <Link
          to="/communities"
          className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
        >
          Communities
        </Link>
        <Link
          to="/create"
          className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
        >
          Create
        </Link>
        <Link
          to="/browse"
          className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
        >
          Browse
        </Link>
      </div>
    )}
    </>
  );
}

export default NavTabs;
