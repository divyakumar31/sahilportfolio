const steps = [
  {
    number: "01",
    title: "Discover",
    text: "Understand the idea, the problem and what the product actually needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    text: "Shape the structure, user flow and visual direction before turning the idea into code.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Build clean, responsive and scalable interfaces with attention to performance and details.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Test, refine and ship a polished experience that is ready for real users.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="reveal mb-14 flex flex-col justify-between gap-8 border-b border-white/[0.08] pb-8 sm:mb-20 lg:flex-row lg:items-end">

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-rose-400 sm:text-[10px]">
              05 — How I Work
            </p>

            <h2 className="mt-3 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              Process<span className="text-rose-500">.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/35 lg:pb-2">
            A simple process that keeps ideas clear, development focused and
            the final result purposeful.
          </p>

        </div>

        {/* PROCESS */}
        <div className="grid border-t border-white/[0.08] lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`process-step reveal group relative py-8 lg:px-7 lg:py-10 ${
                index !== 0
                  ? "border-t border-white/[0.08] lg:border-l lg:border-t-0"
                  : ""
              }`}
            >

              <div className="flex items-start justify-between">

                <span className="text-[9px] tracking-[0.25em] text-white/20 transition-colors duration-300 group-hover:text-rose-400">
                  {step.number}
                </span>

                <span className="text-lg text-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-rose-500">
                  ↗
                </span>

              </div>

              <div className="mt-20">

                <h3 className="text-2xl font-medium tracking-[-0.035em] transition-transform duration-500 group-hover:translate-x-1 sm:text-3xl">
                  {step.title}
                  <span className="text-rose-500">.</span>
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/30 transition-colors duration-300 group-hover:text-white/45">
                  {step.text}
                </p>

              </div>

              <div className="mt-12 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-16 group-hover:bg-rose-500" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Process;