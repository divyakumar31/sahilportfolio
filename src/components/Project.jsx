import { useState } from "react";

const projects = [
  // =========================================================
  // ADD YOUR REAL PROJECTS HERE
  // =========================================================
  {
    number: "01",
    title: "Project One",
    category: "Web Application",
    description:
      "A modern web application focused on creating a clean, intuitive and reliable digital experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "",
    status: "Coming Soon",
  },
  {
    number: "02",
    title: "Project Two",
    category: "Business Solution",
    description:
      "A business-focused digital product designed to simplify workflows and create a better user experience.",
    technologies: ["Angular", "TypeScript", "REST API"],
    liveUrl: "",
    githubUrl: "",
    status: "Coming Soon",
  },
  {
    number: "03",
    title: "Project Three",
    category: "Creative Website",
    description:
      "A visually focused website combining thoughtful design, responsive development and smooth interactions.",
    technologies: ["React", "JavaScript", "Responsive UI"],
    liveUrl: "",
    githubUrl: "",
    status: "Coming Soon",
  },
];

const ProjectVisual = ({ project, active }) => {
  return (
    <div
      className={`project-visual relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#111] transition-all duration-700 ${
        active ? "project-visual-active" : ""
      }`}
    >
      {/* BACKGROUND GRID */}
      <div className="project-visual-grid absolute inset-0" />

      {/* AMBIENT LIGHT */}
      <div className="project-visual-glow absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full" />

      {/* MOCK PROJECT WINDOW */}
      <div className="absolute inset-[8%] overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0d0d0d] shadow-2xl transition-transform duration-700">

        {/* TOP BAR */}
        <div className="flex h-9 items-center justify-between border-b border-white/[0.08] px-4">

          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </div>

          <span className="text-[6px] uppercase tracking-[0.25em] text-white/20">
            {project.category}
          </span>

        </div>

        {/* CONTENT */}
        <div className="flex h-[calc(100%-2.25rem)] flex-col justify-between p-5 sm:p-7">

          <div>

            <p className="text-[7px] uppercase tracking-[0.3em] text-rose-400/70">
              Selected Work
            </p>

            <h3 className="mt-3 max-w-[80%] text-2xl font-semibold tracking-[-0.05em] text-white/90 sm:text-4xl">
              {project.title}
              <span className="text-rose-500">.</span>
            </h3>

            <div className="mt-5 h-px w-1/2 bg-white/[0.08]" />

          </div>

          <div className="grid grid-cols-3 gap-2">

            <div className="h-14 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
            <div className="h-14 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
            <div className="h-14 rounded-lg border border-white/[0.06] bg-white/[0.025]" />

          </div>

        </div>

      </div>

      {/* NUMBER */}
      <span className="absolute bottom-5 left-5 text-[8px] uppercase tracking-[0.25em] text-white/20">
        {project.number} / 03
      </span>

      {/* STATUS */}
      <span className="absolute right-5 top-5 rounded-full border border-white/[0.08] bg-black/30 px-3 py-1.5 text-[7px] uppercase tracking-[0.2em] text-white/30 backdrop-blur-md">
        {project.status}
      </span>
    </div>
  );
};

const Project = () => {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="reveal mb-14 flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-8 sm:mb-20 lg:flex-row lg:items-end">

          <div>

            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-rose-400 sm:text-[10px]">
              04 — Selected Work
            </p>

            <h2 className="mt-3 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Work<span className="text-rose-500">.</span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-6 text-white/35 lg:pb-2">
            A selection of digital experiences, applications and products
            built with purpose.
          </p>

        </div>

        {/* FEATURED PROJECT */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">

          {/* VISUAL */}
          <div className="reveal-scale lg:col-span-7">

            <ProjectVisual
              project={project}
              active
            />

          </div>

          {/* INFORMATION */}
          <div className="flex flex-col justify-between lg:col-span-5">

            <div className="reveal-right">

              <div className="flex items-center justify-between">

                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Featured project
                </span>

                <span className="text-[9px] tracking-[0.25em] text-rose-400">
                  {project.number}
                </span>

              </div>

              <p className="mt-10 text-[9px] uppercase tracking-[0.3em] text-rose-400">
                {project.category}
              </p>

              <h3 className="mt-4 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                {project.title}
                <span className="text-rose-500">.</span>
              </h3>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                {project.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-9">

                <p className="mb-4 text-[8px] uppercase tracking-[0.3em] text-white/20">
                  Built with
                </p>

                <div className="flex flex-wrap gap-2">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.1] px-3 py-2 text-[8px] uppercase tracking-[0.15em] text-white/35"
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

            </div>

            {/* LINKS */}
            <div className="reveal mt-12 flex flex-wrap gap-3 lg:mt-16">

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-full bg-white px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-rose-500 hover:text-white"
                >
                  Live Project
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              ) : (
                <span className="flex items-center gap-4 rounded-full border border-white/[0.1] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/25">
                  Coming Soon
                </span>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-full border border-white/[0.12] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/55 transition-all duration-300 hover:border-white/30 hover:text-white"
                >
                  GitHub
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              )}

            </div>

          </div>

        </div>

        {/* PROJECT SELECTOR */}
        <div className="mt-20 border-t border-white/[0.08] sm:mt-28">

          {projects.map((item, index) => {
            const active = activeProject === index;

            return (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveProject(index)}
                onMouseEnter={() => setActiveProject(index)}
                className={`group flex w-full items-center gap-5 border-b border-white/[0.08] py-6 text-left transition-all duration-500 sm:py-8 ${
                  active
                    ? "pl-2"
                    : "text-white/30 hover:pl-2 hover:text-white"
                }`}
              >

                <span
                  className={`text-[9px] tracking-[0.25em] ${
                    active ? "text-rose-400" : "text-white/20"
                  }`}
                >
                  {item.number}
                </span>

                <span
                  className={`flex-1 text-lg font-medium tracking-[-0.02em] sm:text-2xl ${
                    active ? "text-white" : ""
                  }`}
                >
                  {item.title}
                </span>

                <span className="hidden text-[8px] uppercase tracking-[0.25em] text-white/20 sm:block">
                  {item.category}
                </span>

                <span
                  className={`text-lg transition-all duration-300 ${
                    active
                      ? "translate-x-0 text-rose-500"
                      : "-translate-x-2 text-white/0 group-hover:translate-x-0 group-hover:text-white/40"
                  }`}
                >
                  ↗
                </span>

              </button>
            );
          })}

        </div>

        {/* FOOTNOTE */}
        <div className="reveal mt-6 flex items-center justify-between">

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/15">
            More projects in progress
          </span>

          <span className="text-[8px] uppercase tracking-[0.25em] text-white/15">
            2026
          </span>

        </div>

      </div>
    </section>
  );
};

export default Project;