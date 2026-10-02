import React from "react";

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
      className="relative overflow-hidden bg-[#111114] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between border-b border-white/15 pb-5">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-rose-400">
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
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <div className="reveal-scale lg:col-span-5">
            <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
              <img
                src="/user.png"
                alt="Sahil Darji"
                className="aspect-[5/4] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs uppercase tracking-[0.25em] text-white/80">
                  Sahil Darji
                </p>

                <p className="mt-1 text-sm font-medium text-white">
                  Software Developer
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7">
            <div className="reveal-right">
              {/* Main Statement */}
              <p className="max-w-2xl text-2xl font-medium leading-relaxed text-white sm:text-3xl">
                I build digital experiences that combine clean design, modern
                technology and meaningful user experiences.
              </p>

              {/* Description */}
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-white/90">
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
            <div className="reveal mt-8 grid grid-cols-3 border-y border-white/15 py-5">
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

        {/* Technology Marquee */}
        <div className="reveal mt-12 overflow-hidden border-y border-white/15 py-5">
          <div className="skill-marquee-track flex w-max items-center">
            {[...technologies, ...technologies].map((technology, index) => (
              <React.Fragment key={`${technology}-${index}`}>
                <span className="mx-5 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 hover:text-rose-400 sm:mx-7">
                  {technology}
                </span>

                <span className="text-sm font-medium text-rose-400/80">
                  ✦
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;