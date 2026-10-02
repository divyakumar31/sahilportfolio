import React from "react";

const projects = [
  {
    number: "01",
    title: "Amazon Clone",
    category: "E-Commerce",
    description:
      "A modern e-commerce interface inspired by Amazon with responsive layouts and interactive shopping experiences.",
    image: "/amazonclone.png",
    link: "https://amazonclone12x.netlify.app/",
  },
  {
    number: "02",
    title: "Form Validation",
    category: "Frontend Development",
    description:
      "A clean and interactive form experience with real-time validation and user-friendly feedback.",
    image: "/formvalidation.jpg",
    link: "https://formvalidationx2.netlify.app/",
  },
  {
    number: "03",
    title: "Text To Speech",
    category: "JavaScript",
    description:
      "A browser-based text-to-speech application focused on accessibility and a simple interactive experience.",
    image: "/text-to-speech.jpeg",
    link: "https://text-to-speech-converterx2.netlify.app/",
  },

  // Add more projects here
  // {
  //   number: "04",
  //   title: "Your Project",
  //   category: "Web Application",
  //   description: "Your project description.",
  //   image: "/your-image.png",
  //   link: "https://your-project-link.com/",
  // },
];

const Project = () => {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-28 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between border-b border-white/10 pb-6">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-rose-400">
              02 — Selected Work
            </p>

            <h2 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Work<span className="text-rose-400">.</span>
            </h2>
          </div>

          <span className="hidden text-sm text-white/40 sm:block">
            Selected projects
          </span>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className="reveal group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:-translate-y-2 hover:border-rose-400/30 hover:bg-white/[0.045]"
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Image */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block overflow-hidden"
              >
                <div className="aspect-[16/10] overflow-hidden bg-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-80" />

                {/* Project Number */}
                <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  {project.number}
                </span>

                {/* View Button */}
                <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  ↗
                </span>
              </a>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                {/* Category */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />

                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-rose-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-rose-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 flex-1 text-sm leading-7 text-white/50">
                  {project.description}
                </p>

                {/* Bottom Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 border-b border-white/20 pb-1 text-xs font-medium uppercase tracking-[0.15em] text-white/70 transition-all duration-300 hover:border-rose-400 hover:text-rose-400"
                >
                  View Project
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-6 text-white/40">
            More projects and experiments are coming soon. I’m constantly
            building, learning and turning ideas into digital products.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-medium text-white"
          >
            Start a project
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-rose-400 group-hover:bg-rose-400 group-hover:text-black">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-rose-500/5 blur-3xl" />
    </section>
  );
};

export default Project;