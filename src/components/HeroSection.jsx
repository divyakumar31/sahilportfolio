import React from "react";
import Typewriter from "./writer/Typewriter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#0b0b0b] px-5 text-white sm:px-10 lg:px-20 xl:px-28"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-220px] top-[-180px] h-[650px] w-[650px] rounded-full bg-rose-600/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-250px] right-[-180px] h-[650px] w-[650px] rounded-full bg-violet-600/[0.07] blur-[170px]" />

      <div className="pointer-events-none absolute left-[45%] top-[35%] h-[350px] w-[350px] rounded-full bg-rose-500/[0.025] blur-[140px]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center pb-8 pt-24 sm:pb-10 sm:pt-28 lg:pb-12 lg:pt-28">

        {/* Availability */}
        <div className="reveal mb-5 flex items-center gap-3 sm:mb-6">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>

          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 sm:text-xs md:text-sm">
            Available for new projects
          </span>
        </div>

        {/* Heading */}
        <h1 className="reveal max-w-6xl text-[clamp(4.3rem,8.3vw,8.2rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
          I build
          <br />
          <span className="text-rose-500">digital</span>
          <br />
          experiences.
        </h1>

        {/* Description */}
        <div className="reveal stagger-1 mt-5 max-w-2xl sm:mt-6">
          <p className="max-w-2xl text-sm leading-relaxed text-white/50 sm:text-base lg:text-lg">
            I'm{" "}
            <span className="font-semibold text-rose-400">
              Sahil Darji
            </span>
            , a software developer focused on turning ideas into reliable,
            high-quality digital products, web applications and business
            solutions.
          </p>

          <div className="mt-4 text-xs sm:text-sm">
            <Typewriter />
          </div>
        </div>

        {/* Buttons */}
        <div className="reveal stagger-2 mt-5 flex flex-wrap gap-3 sm:mt-6 sm:gap-4">
          <a
            href="#project"
            className="magnetic rounded-full bg-rose-500 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-rose-400 sm:px-7 sm:py-4"
          >
            View my work ↗
          </a>

          <a
            href="#contact"
            className="magnetic rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition-all duration-300 hover:border-rose-500 hover:text-rose-500 sm:px-7 sm:py-4"
          >
            Let's talk
          </a>
        </div>

        {/* Social Icons */}
        <div className="reveal stagger-3 mt-6 flex items-center gap-3 sm:mt-7">

          {/* GitHub */}
          {/* <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[18px] w-[18px]"
              aria-hidden="true"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.682-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.682 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
            </svg>
          </a> */}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[18px] w-[18px]"
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
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/50 hover:bg-rose-500/10 hover:text-rose-400"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-[19px] w-[19px]"
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

        </div>

        {/* Scroll */}
        <a
          href="#about"
          className="reveal stagger-4 mt-7 flex w-fit items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/25 transition-colors hover:text-white/60 sm:mt-8 sm:text-xs"
        >
          <span className="h-px w-8 bg-white/20 sm:w-10" />
          Scroll to explore
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
