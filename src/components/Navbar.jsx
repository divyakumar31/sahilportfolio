import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Work", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 md:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl md:px-7">

        {/* Logo */}
        <a
          href="#"
          className="group text-xl font-bold tracking-tight text-white md:text-2xl"
        >
          sahil
          <span className="text-rose-500 transition-colors group-hover:text-white">
            .
          </span>
          dev
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="relative text-sm text-white/60 transition-colors duration-300 hover:text-white"
            >
              {item.name}

              <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden rounded-full border border-white/20 bg-white px-5 py-2 text-sm font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-rose-500 hover:text-white md:block"
        >
          Let's Talk
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-px w-5 bg-white transition-all ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "max-h-[400px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 p-5">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={handleLinkClick}
              className="rounded-xl px-4 py-3 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 rounded-xl bg-rose-500 px-4 py-3 text-center font-medium text-white"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;