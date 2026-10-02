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
  high-quality digital products, web applications and business solutions.
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

        {/* Social */}
        <div className="reveal stagger-3 mt-6 flex items-center gap-4 text-xs text-white/30 sm:mt-7 sm:gap-5 sm:text-sm">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-link transition-colors hover:text-white"
          >
            GitHub
          </a>

          <span className="text-white/10">/</span>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-link transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <span className="text-white/10">/</span>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="animated-link transition-colors hover:text-white"
          >
            Instagram
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