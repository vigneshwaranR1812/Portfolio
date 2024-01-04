// Navbar.js

import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-white p-4  fixed w-full top-0 py-4 max-md:hidden">
      <div className="container mx-auto md:flex justify-center">
        <a
          href="#home"
          className="text-black mr-6 transition-all duration-400 ease-in-out hover:bg-secondary hover:text-white  px-4 py-2 rounded-full"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-black mr-6 transition-all duration-400 ease-in-out hover:bg-secondary  hover:text-white px-4 py-2 rounded-full"
        >
          About Me
        </a>
        <a
          href="#certificate"
          className="text-black mr-6 transition-all duration-400 ease-in-out hover:bg-secondary  hover:text-white  px-4 py-2 rounded-full"
        >
          Certification
        </a>
        <a
          href="#project"
          className="text-black mr-6 transition-all duration-400 ease-in-out hover:bg-secondary  hover:text-white  px-4 py-2 rounded-full"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-black transition-all duration-400 ease-in-out hover:bg-secondary  hover:text-white px-4 py-2 rounded-full"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
