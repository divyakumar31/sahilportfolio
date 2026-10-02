import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites designed around your brand, business goals and users. From landing pages to complete business websites.",
    technologies: [
      "React",
      "Angular",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Modern web applications with scalable interfaces, interactive dashboards, forms, authentication and business-focused functionality.",
    technologies: [
      "React",
      "Angular",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "UI / UX Development",
    description:
      "Clean and intuitive interfaces that turn complex ideas into simple, engaging digital experiences.",
    technologies: [
      "Figma",
      "UI Design",
      "Responsive Design",
      "Prototyping",
    ],
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "Transforming outdated websites into modern, responsive and conversion-focused digital experiences.",
    technologies: [
      "Modern UI",
      "Responsive",
      "Performance",
      "Accessibility",
    ],
  },
];

function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-24 text-white md:px-10 lg:px-16 lg:py-32"
    >
      <div className="pointer-events-none absolute left-[-150px] top-[30%] h-[350px] w-[350px] rounded-full bg-rose-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="reveal mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/40">
              What I Do
            </p>

            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
              Services<span className="text-rose-500">.</span>
            </h2>
          </div>

          <span className="text-sm uppercase tracking-[0.3em] text-white/30">
            02
          </span>
        </div>

        {/* Services */}
        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.number}
                className={`reveal stagger-${Math.min(index + 1, 5)} border-b border-white/10`}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveService(isActive ? -1 : index)
                  }
                  className="group flex w-full items-center gap-5 py-8 text-left md:py-10"
                >
                  <span className="w-10 text-sm text-white/30 md:w-16">
                    {service.number}
                  </span>

                  <span
                    className={`flex-1 text-2xl font-medium transition md:text-4xl ${
                      isActive
                        ? "text-white"
                        : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {service.title}
                  </span>

                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl transition duration-500 md:h-14 md:w-14 ${
                      isActive
                        ? "rotate-45 border-rose-500 bg-rose-500 text-white"
                        : "group-hover:border-white"
                    }`}
                  >
                    ↗
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isActive
                      ? "grid-rows-[1fr] pb-10"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pl-[3.75rem] md:grid-cols-[1fr_auto] md:pl-16">

                      <p className="max-w-2xl text-base leading-8 text-white/40 md:text-lg">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap content-start gap-2 md:max-w-sm md:justify-end">
                        {service.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wider text-white/40"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-24 flex flex-col justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              From idea to digital product
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-medium md:text-5xl">
              Let's build something meaningful.
            </h3>
          </div>

          <a
            href="#contact"
            className="magnetic inline-flex w-fit items-center gap-4 rounded-full border border-white/20 px-7 py-4 text-sm uppercase tracking-[0.15em] transition hover:bg-white hover:text-black"
          >
            Let's Work Together
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;