import Sahil5 from "../assets/Sahil5.png";

const focusItems = [
  {
    number: "01",
    title: "Performance",
    text: "Fast, responsive interfaces that feel smooth across devices and screen sizes.",
  },
  {
    number: "02",
    title: "Design",
    text: "Clean visual systems with strong hierarchy, spacing and attention to detail.",
  },
  {
    number: "03",
    title: "Experience",
    text: "Interfaces that are intuitive, purposeful and enjoyable to use.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="reveal mb-12 flex items-end justify-between border-b border-white/[0.08] pb-5 sm:mb-16">
          <div>
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.35em] text-rose-400 sm:text-[10px]">
              01 — About
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              About<span className="text-rose-500">.</span>
            </h2>
          </div>

          <span className="hidden pb-2 text-[9px] uppercase tracking-[0.3em] text-white/25 sm:block">
            Who I am
          </span>
        </div>

        {/* INTRO */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* IMAGE */}
          <div className="reveal-scale lg:col-span-5">
            <div className="about-image group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#111]">
              <div className="aspect-[4/5]">
                <img
                  src={Sahil5}
                  alt="Sahil Darji"
                  className="h-full w-full object-contain object-center grayscale transition-all duration-1000 group-hover:scale-[1.025] group-hover:grayscale-0"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

              <div className="absolute bottom-6 left-6">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/45">
                  Sahil Darji
                </p>

                <p className="mt-2 text-sm font-medium text-white">
                  Software Developer
                </p>
              </div>

              <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur-md">
                <span className="text-[8px] uppercase tracking-[0.25em] text-white/40">
                  Ahmedabad / India
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-7 lg:pt-3">
            <div className="reveal-right">
              <p className="max-w-3xl text-3xl font-medium leading-[1.15] tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.4rem]">
                I don't just write code.
                <br />
                <span className="text-white/35">
                  I turn ideas into digital experiences.
                </span>
              </p>

              <div className="mt-8 max-w-2xl space-y-5 text-[15px] leading-7 text-white/45 sm:mt-9 sm:text-base">
                <p>
                  I'm Sahil, a software developer focused on building modern,
                  responsive and interactive digital experiences.
                </p>

                <p>
                  I enjoy turning ideas into real products — from business
                  websites and landing pages to dashboards and full web
                  applications.
                </p>

                <p>
                  My approach combines thoughtful design, clean frontend
                  architecture and attention to the small details that make a
                  product feel polished.
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="reveal mt-10 grid grid-cols-3 border-y border-white/[0.08] py-6 sm:mt-12">
              <div>
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  3<span className="text-rose-500">+</span>
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/25 sm:text-[9px]">
                  Projects
                </p>
              </div>

              <div className="border-l border-white/[0.08] pl-5 sm:pl-8">
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  ∞
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/25 sm:text-[9px]">
                  Ideas
                </p>
              </div>

              <div className="border-l border-white/[0.08] pl-5 sm:pl-8">
                <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  100<span className="text-rose-500">%</span>
                </p>

                <p className="mt-2 text-[8px] uppercase tracking-[0.25em] text-white/25 sm:text-[9px]">
                  Passion
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* WHAT I CARE ABOUT */}
        <div className="mt-16 border-t border-white/[0.08] pt-8 sm:mt-20">
          <div className="reveal mb-10 flex items-end justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-rose-400">
                What I care about
              </p>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
                Building things that matter.
              </h3>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/20 sm:block">
              Principles
            </span>
          </div>

          <div className="grid border-t border-white/[0.08] lg:grid-cols-3">
            {focusItems.map((item, index) => (
              <div
                key={item.number}
                className={`reveal group relative border-white/[0.08] py-7 lg:px-8 lg:py-9 ${
                  index !== 0
                    ? "border-t lg:border-l lg:border-t-0"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-[9px] tracking-[0.25em] text-white/20">
                    {item.number}
                  </span>

                  <span className="text-lg text-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rose-500">
                    ↗
                  </span>
                </div>

                <h4 className="mt-10 text-xl font-medium tracking-[-0.02em] transition-colors duration-300 group-hover:text-rose-400 sm:mt-12">
                  {item.title}
                </h4>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/35">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;