import { useEffect, useState } from "react";
import Typewriter from "./writer/Typewriter";

const HeroSection = () => {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="hero-section relative min-h-[100svh] overflow-hidden bg-[#0b0b0b] px-5 text-white sm:px-10 lg:px-20 xl:px-28"
    >
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main mouse-following glow */}
        <div
          className="hero-mouse-glow absolute h-[520px] w-[520px] rounded-full"
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
          }}
        />

        {/* Static ambient glows */}
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        {/* Grid */}
        <div className="hero-grid absolute inset-0" />

        {/* Vignette */}
        <div className="hero-vignette absolute inset-0" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center pb-20 pt-28 sm:pb-16 sm:pt-32 lg:pb-20">
        {/* Small top metadata */}
        <div className="reveal mb-7 flex items-center justify-between sm:mb-9">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-white/45 sm:text-[10px]">
              Available for new projects
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/20 sm:block">
            01 / 04
          </span>
        </div>

        {/* ===================================================
            MAIN HEADING
        =================================================== */}

        <h1 className="hero-title reveal max-w-6xl text-[clamp(4.25rem,9.2vw,9.2rem)] font-semibold leading-[0.8] tracking-[-0.075em]">
          <span className="block">I build</span>

          <span className="hero-title-accent block">
            digital
          </span>

          <span className="block">
            experiences<span className="text-rose-500">.</span>
          </span>
        </h1>

        {/* ===================================================
            CONTENT BELOW HEADING
        =================================================== */}

        <div className="mt-8 grid gap-8 sm:mt-10 lg:grid-cols-12 lg:gap-10">
          {/* Description */}
          <div className="reveal stagger-1 lg:col-span-7">
            <p className="max-w-2xl text-[15px] leading-[1.8] text-white/45 sm:text-lg sm:leading-[1.75]">
              I'm{" "}
              <span className="font-medium text-white">
                Sahil Darji
              </span>
              , a software developer focused on turning ideas into
              reliable, high-quality digital products, web applications
              and business solutions.
            </p>

            {/* Typewriter */}
            <div className="mt-5 text-xs text-rose-400 sm:text-sm">
              <Typewriter />
            </div>
          </div>

          {/* Side metadata */}
          <div className="reveal stagger-2 hidden lg:col-span-5 lg:flex lg:justify-end">
            <div className="max-w-[250px] border-l border-white/10 pl-6">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Currently focused on
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white/45">
                Building clean interfaces, thoughtful experiences
                and scalable frontend applications.
              </p>
            </div>
          </div>
        </div>

        {/* ===================================================
            CTA
        =================================================== */}

        <div className="reveal stagger-2 mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
          {/* Temporary: Work section is not enabled yet */}
          <a
            href="#work"
            className="hero-primary-button magnetic group relative flex items-center gap-5 overflow-hidden rounded-full bg-rose-500 px-6 py-3.5 text-sm font-medium text-white sm:px-7 sm:py-4"
          >
            <span className="relative z-10">
              View my work
            </span>

            <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>

            <span className="hero-button-shine" />
          </a>

          <a
            href="#contact"
            className="hero-secondary-button magnetic group flex items-center gap-3 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/75 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.04] hover:text-white sm:px-7 sm:py-4"
          >
            <span>Let's talk</span>

            <span className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-rose-400">
              →
            </span>
          </a>
        </div>

        {/* ===================================================
            SOCIALS
        =================================================== */}

        <div className="reveal stagger-3 mt-8 flex items-center gap-2 sm:mt-10">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hero-social group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.997h3.414v1.561h.046c.477-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.37 4.267 5.455v6.288ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 8.997h3.564v11.455H3.555V8.997Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hero-social group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:bg-rose-500/[0.06] hover:text-rose-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-[17px] w-[17px]"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle cx="12" cy="12" r="4.2" />

              <circle
                cx="17.4"
                cy="6.6"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          <span className="ml-2 h-px w-8 bg-white/10" />

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/20 sm:text-[9px]">
            Connect
          </span>
        </div>

        {/* ===================================================
            BOTTOM METADATA
        =================================================== */}

        <div className="reveal stagger-4 absolute bottom-8 left-0 right-0 hidden items-end justify-between border-t border-white/[0.07] pt-4 md:flex">
          <div className="flex items-center gap-5 text-[8px] uppercase tracking-[0.28em] text-white/20">
            <span>Frontend Developer</span>
            <span className="h-1 w-1 rounded-full bg-rose-500/60" />
            <span>React / Angular</span>
          </div>

          <div className="flex items-center gap-4 text-[8px] uppercase tracking-[0.28em] text-white/20">
            <span>Ahmedabad</span>
            <span>India</span>
          </div>
        </div>

        {/* ===================================================
            MOBILE BOTTOM
        =================================================== */}

        <div className="reveal stagger-4 mt-14 flex items-center justify-between border-t border-white/[0.07] pt-4 md:hidden">
          <div>
            <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
              Frontend Developer
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/20">
              React / Angular
            </p>
          </div>

          <div className="text-right">
            <p className="text-[8px] uppercase tracking-[0.25em] text-white/20">
              Ahmedabad
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/20">
              India
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="hero-scroll-indicator group absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-white/20 transition-colors hover:text-white/50 md:flex"
        >
          <span className="hero-scroll-line relative h-8 w-px overflow-hidden bg-white/10">
            <span className="absolute left-0 top-0 h-3 w-full bg-rose-500" />
          </span>

          <span>Scroll</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;