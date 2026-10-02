import React from "react";

const projects = [
  {
    number: "01",
    title: "Amazon Clone",
    category: "E-Commerce",
    description:
      "A responsive e-commerce interface inspired by Amazon, focused on reusable components and a smooth shopping experience.",
    image: "/amazonclone.png",
    link: "https://amazonclone12x.netlify.app/",
  },
  {
    number: "02",
    title: "Form Validation",
    category: "Frontend Development",
    description:
      "A clean and responsive form validation project with client-side validation and user-friendly feedback.",
    image: "/formvalidation.jpg",
    link: "https://formvalidationx2.netlify.app/",
  },
  {
    number: "03",
    title: "Text to Speech",
    category: "JavaScript",
    description:
      "A browser-based text-to-speech application that converts written content into spoken audio.",
    image: "/text-to-speech.jpeg",
    link: "https://text-to-speech-converterx2.netlify.app/",
  },
];

const Project = () => {
  return (
    <section
  id="project"
  className="relative overflow-hidden bg-[#0b0b0b] px-5 pt-12 pb-24 text-white sm:px-10 sm:pt-16 sm:pb-32 lg:px-20 xl:px-28"
>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="reveal border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-rose-500">
                Selected Work / 02
              </p>

              <h2 className="text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Selected
                <br />
                <span className="text-white/30">work.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/40">
              A collection of projects built with a focus on clean interfaces,
              responsive design and practical user experiences.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-20 space-y-24">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={
                index % 2 === 0
                  ? "reveal"
                  : "reveal-right"
              }
            >
              <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                {/* Image */}
                <div
                  className={`image-hover group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${
                    index % 2 === 0
                      ? "lg:col-span-7"
                      : "lg:order-2 lg:col-span-7"
                  }`}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </a>
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "lg:col-span-5"
                      : "lg:order-1 lg:col-span-5"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                    {project.number}
                  </p>

                  <p className="mt-5 text-xs uppercase tracking-[0.25em] text-rose-500">
                    {project.category}
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-link mt-7 inline-block text-sm text-white"
                  >
                    View project ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-24 border-t border-white/10 pt-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-sm text-white/30">
              Interested in working together?
            </p>

            <a
              href="#contact"
              className="animated-link text-sm text-white"
            >
              Start a conversation ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;