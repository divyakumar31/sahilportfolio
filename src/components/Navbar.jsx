import React, { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Services",
      link: "#service",
    },
    {
      name: "Project",
      link: "#project",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center px-4 md:px-20 lg:px-36 top-0 relative">
        {/* LOGO */}
        <div className="select-none text-3xl md:text-5xl font-bold py-4">
          port<span className="text-rose-500">folio</span>
        </div>
        {/* NavLinks */}
        {/* For Big Screen */}
        <div
          className={`md:bg-transparent ${
            toggleMenu
              ? "fixed top-0 right-0 bg-rose-200 flex flex-col w-1/2 px-5 pt-10 h-screen gap-4"
              : "hidden"
          } md:flex md:flex-row md:gap-6 lg:gap-8 md:items-center md:px-0 md:relative md:w-auto md:top-0 md:h-auto md:pt-0`}
        >
          {navLinks.map((item, index) => (
            <div key={index} className="w-fit">
              <a
                href={item.link}
                className="cursor-pointer hover:text-rose-500 group text-lg"
                onClick={() => setToggleMenu(false)}
              >
                {item.name}
                <span className="block w-0 transition-all duration-500 delay-100 h-0.5 bg-rose-600 group-hover:w-full"></span>
              </a>
            </div>
          ))}
        </div>

        {/* Toogle button */}
        <div
          className={`menu flex flex-col gap-[4.5px] md:hidden ${
            toggleMenu ? "close-btn fixed top-6 right-4" : ""
          }`}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <div
            className={`w-6 h-1 bg-rose-500 rounded-md ease-in-out duration-300 ${
              toggleMenu ? "rotate-45 origin-left" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-rose-500 rounded-md ease-in-out duration-300 ${
              toggleMenu ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-rose-500 rounded-md ease-in-out duration-300 ${
              toggleMenu ? "-rotate-45 origin-left" : ""
            }`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
