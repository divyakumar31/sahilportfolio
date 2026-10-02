import { useState } from "react";

const skills = [
  {
    name: "React",
    level: "Frontend",
  },
  {
    name: "JavaScript",
    level: "Development",
  },
  {
    name: "Tailwind CSS",
    level: "UI Development",
  },
  {
    name: "HTML / CSS",
    level: "Web Development",
  },
  {
    name: "Angular",
    level: "Frontend",
  },
  {
    name: "TypeScript",
    level: "Development",
  },
];

const education = [
  {
    year: "2021 — 2025",
    title: "B.Tech Computer Engineering",
    institute: "Silveroak University",
    result: "8.23 SPI",
  },
  {
    year: "2021",
    title: "Higher Secondary Certificate",
    institute: "Gayatri Vidhyalaya",
    result: "85.90%",
  },
  {
    year: "2019",
    title: "Secondary School Certificate",
    institute: "Ankur Vidhyalaya",
    result: "74.86%",
  },
];

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section
  id="about"
  className="relative overflow-hidden bg-[#0b0b0b] px-5 pt-12 pb-24 text-white sm:px-10 sm:pt-16 sm:pb-32 lg:px-20 xl:px-28"
>
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-120px] top-[20%] h-[300px] w-[300px] rounded-full bg-rose-500/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="reveal mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/40">
              About Me
            </p>

            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
              About<span className="text-rose-500">.</span>
            </h2>
          </div>

          <span className="text-sm uppercase tracking-[0.3em] text-white/30">
            01
          </span>
        </div>

        {/* Main content */}
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

          {/* Image */}
          <div className="reveal-left">
            <div className="image-hover relative overflow-hidden rounded-[2rem] bg-white/5">
              <img
                src="/user.png"
                alt="Sahil Darji"
                className="h-[420px] w-full object-cover grayscale transition duration-700 hover:grayscale-0 sm:h-[480px] md:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-xs uppercase tracking-[0.25em] backdrop-blur-md">
                Sahil Darji
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal-right">

            <div className="max-w-3xl">
              <p className="text-2xl font-medium leading-relaxed text-white md:text-4xl">
                I build digital experiences that combine clean design,
                modern technology and meaningful user experiences.
              </p>

              <div className="mt-10 space-y-5 text-base leading-8 text-white/50 md:text-lg">
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
            <div className="mt-14 grid grid-cols-3 border-y border-white/10 py-8">
              <div>
                <p className="text-3xl font-semibold md:text-5xl">3+</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                  Projects
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold md:text-5xl">∞</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                  Ideas
                </p>
              </div>

              <div>
                <p className="text-3xl font-semibold md:text-5xl">100%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/30">
                  Passion
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-14">

              <div className="flex gap-8 border-b border-white/10">
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`pb-4 text-sm uppercase tracking-[0.2em] transition ${
                    activeTab === "skills"
                      ? "text-white"
                      : "text-white/30 hover:text-white"
                  }`}
                >
                  Skills
                </button>

                <button
                  onClick={() => setActiveTab("education")}
                  className={`pb-4 text-sm uppercase tracking-[0.2em] transition ${
                    activeTab === "education"
                      ? "text-white"
                      : "text-white/30 hover:text-white"
                  }`}
                >
                  Education
                </button>
              </div>

              {/* Skills */}
              {activeTab === "skills" && (
                <div className="grid gap-x-8 md:grid-cols-2">
                  {skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`reveal stagger-${Math.min(
                        index + 1,
                        5
                      )} flex items-center justify-between border-b border-white/10 py-6`}
                    >
                      <span className="text-lg">{skill.name}</span>

                      <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Education */}
              {activeTab === "education" && (
                <div>
                  {education.map((item, index) => (
                    <div
                      key={item.title}
                      className={`reveal stagger-${Math.min(
                        index + 1,
                        5
                      )} border-b border-white/10 py-7`}
                    >
                      <div className="flex flex-col justify-between gap-3 md:flex-row">
                        <div>
                          <h3 className="text-lg font-medium">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm text-white/40">
                            {item.institute}
                          </p>
                        </div>

                        <div className="md:text-right">
                          <p className="text-sm text-white/50">
                            {item.year}
                          </p>

                          <p className="mt-1 text-sm text-rose-400">
                            {item.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Technology strip */}
        <div className="reveal mt-28 overflow-hidden border-y border-white/10 py-7">
          <div className="flex min-w-max gap-10 text-xs uppercase tracking-[0.3em] text-white/30 md:gap-16">
            <span>React</span>
            <span>Angular</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
            <span>UI / UX</span>
            <span>Frontend</span>
            <span>Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;