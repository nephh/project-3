import React from "react";
import "../index.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 sticky bottom-0">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-evenly">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          @ 2024 Endeavor.
        </span>
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li className="p-3">
            <a className="" href="https://github.com/nephh/project-3">
              <i className="social-links">
                <FaGithub />
              </i>
            </a>
          </li>
          <li>{/* Icon link */}</li>
          <li>{/* Icon link */}</li>
        </ul>
        <a
          href="https://opensource.org/licenses/MIT"
          className="text-sm font-medium text-gray-500 hover:underline"
        >
          MIT Licensing
        </a>
      </div>
    </footer>
  );
};

export default Footer;
