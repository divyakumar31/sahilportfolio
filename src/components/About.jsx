import React from "react";
// import Sahil2 from "../assets/Sahil2.png";
// import Sahil3 from "../assets/Sahil3.png";
import Sahil5 from "../assets/Sahil5.png";

const technologies = [
  "React",
  "Angular",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "UI/UX",
  "Frontend Development",
  "Web Applications",
  "Responsive Design",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-8 sm:px-10 sm:py-10 lg:px-16 lg:py-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-6 flex items-end justify-between border-b border-white/15 pb-4">
          <div>
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.3em] text-rose-400">
              01 — About
            </p>

            <h2 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              About<span className="text-rose-400">.</span>
            </h2>
          </div>

          <span className="hidden text-sm font-medium text-white/80 sm:block">
            Who I am
          </span>
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-6 lg:grid-cols-12 lg:gap-8">

          {/* IMAGE */}
          {/* IMAGE */}
          <div className="reveal-scale lg:col-span-4">
            <div className="group relative h-[500px] overflow-hidden rounded-2xl border border-white/15 bg-[#151515]">

              <img
                src={Sahil5}
                alt="Sahil Darji"
                className="absolute inset-0 h-full w-full object-contain object-center grayscale transition duration-700 group-hover:grayscale-0"
              />

              {/* Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              {/* Name */}
              <div className="absolute bottom-5 left-5 z-10">
                <p className="text-xs uppercase tracking-[0.25em] text-white/80">
                  Sahil Darji
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Software Developer
                </p>
              </div>

            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-7">
            <div className="reveal-right">

              <p className="max-w-2xl text-2xl font-medium leading-relaxed text-white sm:text-3xl">
                I build digital experiences that combine clean design, modern
                technology and meaningful user experiences.
              </p>

              <div className="mt-5 max-w-2xl space-y-3 text-base leading-7 text-white/90">
                <p>
                  I'm Sahil, a frontend developer focused on building modern,
                  responsive and interactive web experiences.
                </p>

                <p>
                  I enjoy turning ideas into real products — from landing
                  pages and business websites to dashboards and web
                  applications.
                </p>

                <p>
                  My goal is not just to make a website look good, but to
                  create interfaces that feel fast, intuitive and professional.
                </p>
              </div>

            </div>

            {/* Stats */}
            {/* Stats */}
<div className="reveal mt-6 grid grid-cols-3 border-y border-white/15 py-4">
  <div>
    <p className="text-2xl font-semibold text-white sm:text-3xl">
      3<span className="text-rose-400">+</span>
    </p>

    <p className="mt-1 text-xs uppercase tracking-wider text-white/65">
      Projects
    </p>
  </div>

  <div className="border-l border-white/15 pl-5">
    <p className="text-2xl font-semibold text-white sm:text-3xl">
      ∞
    </p>

    <p className="mt-1 text-xs uppercase tracking-wider text-white/65">
      Ideas
    </p>
  </div>

  <div className="border-l border-white/15 pl-5">
    <p className="text-2xl font-semibold text-white sm:text-3xl">
      100<span className="text-rose-400">%</span>
    </p>

    <p className="mt-1 text-xs uppercase tracking-wider text-white/65">
      Passion
    </p>
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;