import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    short: "Websites that feel as good as they look.",
    description:
      "High-performance websites designed around your brand, business goals and users. From landing pages to complete business websites.",
    technologies: ["React", "Angular", "JavaScript", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "Web Applications",
    short: "Interfaces built for real-world functionality.",
    description:
      "Modern web applications with scalable interfaces, interactive dashboards, forms, authentication and business-focused functionality.",
    technologies: ["React", "Angular", "TypeScript", "REST APIs"],
  },
  {
    number: "03",
    title: "UI / UX Development",
    short: "Turning complex ideas into simple experiences.",
    description:
      "Clean and intuitive interfaces that turn complex ideas into simple, engaging digital experiences across desktop, tablet and mobile.",
    technologies: ["UI Design", "Responsive Design", "Figma", "Prototyping"],
  },
  {
    number: "04",
    title: "Website Redesign",
    short: "Giving existing products a modern direction.",
    description:
      "Transforming outdated websites into modern, responsive and conversion-focused digital experiences with better usability and visual hierarchy.",
    technologies: ["Modern UI", "Responsive", "Performance", "Accessibility"],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (index) => {
    setActiveService((current) => (current === index ? null : index));
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="reveal mb-12 flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-8 sm:mb-16 lg:flex-row lg:items-end">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-rose-400 sm:text-[10px]">
              03 — Services
            </p>

            <h2 className="mt-3 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              What I do<span className="text-rose-500">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/35 lg:pb-2">
            From the first idea to the final interface, I build digital
            experiences that are useful, scalable and thoughtfully crafted.
          </p>
        </div>

        {/* SERVICES LIST */}
        <div className="border-t border-white/[0.08]">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveService(index)}
                className={`service-row group border-b border-white/[0.08] transition-all duration-500 ${
                  isActive
                    ? "service-row-active"
                    : "service-row-inactive"
                }`}
              >
                {/* MAIN ROW */}
                <button
                  type="button"
                  onClick={() => handleServiceClick(index)}
                  className="flex w-full items-center gap-4 py-7 text-left sm:gap-6 sm:py-9 lg:py-10"
                  aria-expanded={isActive}
                >
                  {/* NUMBER */}
                  <span
                    className={`w-8 shrink-0 text-[9px] tracking-[0.25em] transition-colors duration-300 sm:w-12 ${
                      isActive ? "text-rose-400" : "text-white/20"
                    }`}
                  >
                    {service.number}
                  </span>

                  {/* TITLE */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className={`text-[clamp(1.7rem,4vw,4.2rem)] font-medium leading-none tracking-[-0.055em] transition-all duration-500 ${
                        isActive
                          ? "translate-x-1 text-white"
                          : "text-white/35"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`mt-3 text-xs transition-all duration-500 sm:text-sm ${
                        isActive
                          ? "translate-x-1 text-white/35"
                          : "text-white/0"
                      }`}
                    >
                      {service.short}
                    </p>
                  </div>

                  {/* ARROW */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 sm:h-12 sm:w-12 ${
                      isActive
                        ? "rotate-45 border-rose-500 bg-rose-500 text-white"
                        : "border-white/10 text-white/20 group-hover:border-white/30 group-hover:text-white/50"
                    }`}
                  >
                    ↗
                  </span>
                </button>

                {/* EXPANDED CONTENT */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 pb-9 pl-12 sm:pl-[4.5rem] lg:grid-cols-12 lg:gap-12 lg:pb-12 lg:pl-[4.5rem]">
                      {/* DESCRIPTION */}
                      <div className="lg:col-span-7">
                        <p className="max-w-2xl text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                          {service.description}
                        </p>
                      </div>

                      {/* TECHNOLOGIES */}
                      <div className="lg:col-span-5">
                        <p className="mb-4 text-[8px] uppercase tracking-[0.3em] text-white/20">
                          Technologies
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/[0.1] px-3.5 py-2 text-[9px] uppercase tracking-[0.15em] text-white/35 transition-colors duration-300 hover:border-rose-500/40 hover:text-white"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="reveal mt-16 border-t border-white/[0.08] pt-8 sm:mt-20 sm:pt-10">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                Have something in mind?
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Let's turn your idea into something people remember.
              </h3>
            </div>

            <a
              href="#contact"
              className="magnetic group flex w-fit shrink-0 items-center gap-5 rounded-full bg-white px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-rose-500 hover:text-white sm:px-7 sm:py-4"
            >
              <span>Let's work together</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;