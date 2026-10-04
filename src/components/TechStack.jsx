import { useState } from "react";

const categories = {
  Frontend: [
    {
      name: "React",
      description:
        "Building component-driven interfaces and scalable frontend applications.",
    },
    {
      name: "Angular",
      description:
        "Developing structured enterprise applications with reusable architecture.",
    },
    {
      name: "JavaScript",
      description:
        "Creating interactive experiences and powerful browser-side functionality.",
    },
    {
      name: "TypeScript",
      description:
        "Writing safer, maintainable and scalable frontend code.",
    },
    {
      name: "HTML / CSS",
      description:
        "Building semantic structure, responsive layouts and polished interfaces.",
    },
  ],

  Tools: [
    {
      name: "Tailwind CSS",
      description:
        "Creating responsive interfaces quickly while maintaining visual consistency.",
    },
    {
      name: "Git",
      description:
        "Managing source code, branches and collaborative development workflows.",
    },
    {
      name: "GitHub",
      description:
        "Version control, project collaboration and deployment workflows.",
    },
    {
      name: "REST APIs",
      description:
        "Connecting frontend applications with reliable backend services.",
    },
  ],

  Focus: [
    {
      name: "UI / UX",
      description:
        "Designing interfaces around clarity, hierarchy and user experience.",
    },
    {
      name: "Responsive Design",
      description:
        "Creating experiences that work naturally across desktop, tablet and mobile.",
    },
    {
      name: "Web Applications",
      description:
        "Building practical applications that solve real business problems.",
    },
    {
      name: "Performance",
      description:
        "Keeping interfaces fast, lightweight and pleasant to interact with.",
    },
  ],
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [activeTech, setActiveTech] = useState("React");

  const currentItems = categories[activeCategory];

  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="reveal flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-rose-400 sm:text-[10px]">
              02 — Tech Stack
            </p>

            <h2 className="mt-3 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Tools<span className="text-rose-500">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/35 lg:pb-2">
            The technologies and principles I use to transform ideas into
            reliable, modern digital products.
          </p>
        </div>

        {/* CATEGORY NAV */}
        <div className="reveal mt-10 flex gap-2 overflow-x-auto border-b border-white/[0.08] pb-3 scrollbar-hide">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setActiveTech(categories[category][0].name);
              }}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "border border-white/[0.08] text-white/35 hover:border-white/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* TECH CONTENT */}
        <div className="mt-10 grid lg:grid-cols-12 lg:gap-16">
          {/* LIST */}
          <div className="lg:col-span-7">
            {currentItems.map((tech, index) => {
              const active = activeTech === tech.name;

              return (
                <button
                  key={tech.name}
                  type="button"
                  onMouseEnter={() => setActiveTech(tech.name)}
                  onFocus={() => setActiveTech(tech.name)}
                  onClick={() => setActiveTech(tech.name)}
                  className={`group flex w-full items-center justify-between border-b border-white/[0.08] py-5 text-left opacity-100 transition-all duration-300 sm:py-7 ${
                    active
                      ? "pl-2"
                      : "text-white/30 hover:pl-2 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[9px] tracking-[0.2em] text-white/15">
                      0{index + 1}
                    </span>

                    <span
                      className={`text-2xl font-medium tracking-[-0.04em] transition-colors duration-300 sm:text-3xl ${
                        active ? "text-white" : ""
                      }`}
                    >
                      {tech.name}
                    </span>
                  </div>

                  <span
                    className={`text-lg transition-all duration-300 ${
                      active
                        ? "translate-x-0 text-rose-500"
                        : "-translate-x-2 text-white/0"
                    }`}
                  >
                    ↗
                  </span>
                </button>
              );
            })}
          </div>

          {/* DESCRIPTION */}
          <div className="mt-10 lg:col-span-5 lg:mt-0">
            <div className="sticky top-32">
              <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-7 opacity-100 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                    Currently exploring
                  </span>

                  <span className="h-2 w-2 rounded-full bg-rose-500 shadow-[0_0_18px_rgba(244,63,94,0.7)]" />
                </div>

                <div className="mt-20">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-rose-400">
                    {activeCategory}
                  </p>

                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                    {activeTech}
                    <span className="text-rose-500">.</span>
                  </h3>

                  <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
                    {
                      currentItems.find(
                        (item) => item.name === activeTech
                      )?.description
                    }
                  </p>
                </div>

                <div className="mt-16 border-t border-white/[0.08] pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                      Approach
                    </span>

                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/30">
                      Clean / Scalable / Fast
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM MARQUEE */}
        <div className="mt-16 overflow-hidden border-y border-white/[0.06] py-5 sm:mt-20">
          <div className="skill-marquee-track flex w-max items-center gap-8 whitespace-nowrap">
            {[...Array(2)].flatMap((_, groupIndex) =>
              [
                "React",
                "Angular",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "UI / UX",
                "Responsive Design",
                "Web Applications",
              ].map((item, index) => (
                <span
                  key={`${groupIndex}-${index}`}
                  className="flex items-center gap-8 text-[9px] uppercase tracking-[0.25em] text-white/20"
                >
                  {item}

                  <span className="h-1 w-1 rounded-full bg-rose-500/50" />
                </span>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;