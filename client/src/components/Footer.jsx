import React from "react";
import "../index.css"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    // <footer className="d-flex justify-content-center fixed-bottom bg-dark">
    //     <div className="d-flex align-items-center">
    //     &copy; 2024 Developed by Dusty Gray.
    //     </div>
    //     <div className="">
    //         <a className="mx-3" href="https://github.com/RickiBobbii">
    //         <i className="social-links">
    //             <FaGithub />
    //             </i>
    //         </a>
    //         <a className="" href="mailto:rickibobbiii@gmail.com" >
    //           <i className="social-links">
    //             <FaEnvelope />
    //           </i>
    //         </a>
    //         <a className="mx-3" href="https://www.linkedin.com/in/dustin-gray-517920a7/">
    //         <i className="social-links">
    //             <FaLinkedin />
    //             </i>
    //         </a>
    //     </div>
    // </footer>
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          @ 2024 Endeavor.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li className="p-3">
                  <a className="" href="https://github.com/nephh/project-3">
            <i className="social-links">
               <FaGithub />
                </i>
            </a>
          </li>
          <li>
            <a
              href="https://opensource.org/licenses/MIT"
              className="me-4 hover:underline md:me-6"
            >
              MIT Licensing
            </a>
          </li>
          <li>
            <a
              href="https://github.com/RickiBobbii/ChatSpace"
              className="hover:underline"
            >
              Contact Developers
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
