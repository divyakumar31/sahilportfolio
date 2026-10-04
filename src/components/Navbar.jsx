import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

const navLinks = [
  { name: "Home", link: "#home", id: "home" },
  { name: "About", link: "#about", id: "about" },
  { name: "Stack", link: "#stack", id: "stack" },
  { name: "Services", link: "#services", id: "services" },
  { name: "Work", link: "#work", id: "work" },
  { name: "Contact", link: "#contact", id: "contact" },
];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-[999] w-full px-4 transition-all duration-500 md:px-8 lg:px-12 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ${
          scrolled
            ? "rounded-2xl border border-white/[0.12] bg-[#0b0b0b]/85 px-4 py-2.5 shadow-2xl shadow-black/20 backdrop-blur-2xl md:px-5"
            : "rounded-2xl border border-white/[0.07] bg-black/20 px-5 py-3 backdrop-blur-md md:rounded-full md:px-7"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLinkClick}
          className="group relative flex items-center text-[19px] font-semibold tracking-[-0.04em] text-white md:text-[21px]"
        >
          <span>sahil</span>

          <span className="relative text-rose-500 transition-colors duration-300 group-hover:text-white">
            .
          </span>

          <span>dev</span>

          {/* Small active line */}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose-500 transition-all duration-500 group-hover:w-full" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.name}
                href={item.link}
                className={`group relative rounded-full px-3.5 py-2 text-[13px] transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-white/45 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.name}</span>

                {/* Active background */}
                <span
                  className={`absolute inset-0 -z-0 rounded-full bg-white/[0.06] transition-all duration-300 ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                  }`}
                />

                {/* Active indicator */}
                <span
                  className={`absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-rose-500 transition-all duration-300 ${
                    isActive
                      ? "w-1"
                      : "w-0 group-hover:w-1"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-semibold text-black transition-all duration-300 hover:bg-rose-500 hover:text-white md:flex"
        >
          <span>Let's Talk</span>

          <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 md:hidden ${
            menuOpen
              ? "border-white/20 bg-white text-black"
              : "border-white/10 bg-white/[0.04] text-white"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`absolute h-px w-4 transition-all duration-300 ${
              menuOpen
                ? "rotate-45 bg-black"
                : "-translate-y-1.5 bg-white"
            }`}
          />

          <span
            className={`absolute h-px w-4 transition-all duration-300 ${
              menuOpen
                ? "rotate-45 bg-black"
                : "bg-white"
            }`}
          />

          <span
            className={`absolute h-px w-4 transition-all duration-300 ${
              menuOpen
                ? "-rotate-45 bg-black"
                : "translate-y-1.5 bg-white"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0b0b0b]/95 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          menuOpen
            ? "max-h-[520px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="p-4">
          {/* Mobile menu label */}
          <div className="mb-3 flex items-center justify-between px-3">
            <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
              Navigation
            </span>

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
              Sahil.dev
            </span>
          </div>

          {/* Links */}
          <div className="space-y-1">
            {navLinks.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={handleLinkClick}
                  className={`group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-300 ${
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-white/55 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[9px] tracking-widest text-white/20">
                      0{index + 1}
                    </span>

                    <span className="text-sm">
                      {item.name}
                    </span>
                  </div>

                  <span
                    className={`text-sm transition-all duration-300 ${
                      isActive
                        ? "translate-x-0 text-rose-500"
                        : "-translate-x-2 text-white/0 group-hover:translate-x-0 group-hover:text-white/40"
                    }`}
                  >
                    ↗
                  </span>
                </a>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="group mt-3 flex items-center justify-between rounded-2xl bg-white px-4 py-4 text-sm font-semibold text-black transition-all duration-300 hover:bg-rose-500 hover:text-white"
          >
            <span>Let's work together</span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;