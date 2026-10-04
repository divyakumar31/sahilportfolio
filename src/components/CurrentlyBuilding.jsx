const CurrentlyBuilding = () => {
  return (
    <section
      id="building"
      className="relative overflow-hidden bg-[#0b0b0b] px-5 pb-12 text-white sm:px-10 sm:pb-16 lg:px-16 lg:pb-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-white/[0.08] pt-6">
          {/* LABEL */}
          <div className="reveal flex items-center justify-between">
            <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-rose-400 sm:text-[10px]">
              Currently Building
            </p>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute h-full w-full animate-ping rounded-full bg-rose-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-rose-500" />
              </span>

              <span className="text-[8px] uppercase tracking-[0.25em] text-white/25">
                In Progress
              </span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-14">
            {/* VISUAL */}
            <div className="reveal-scale lg:col-span-7">
              <div className="building-visual relative aspect-[16/10] overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#111]">
                <div className="building-grid absolute inset-0" />

                <div className="building-glow absolute left-[25%] top-[20%] h-[50%] w-[50%] rounded-full" />

                {/* DASHBOARD PREVIEW */}
                <div className="absolute inset-[7%] overflow-hidden rounded-xl border border-white/[0.1] bg-[#0d0d0d] shadow-2xl">
                  <div className="flex h-8 items-center justify-between border-b border-white/[0.07] px-3">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                    </div>

                    <span className="text-[5px] uppercase tracking-[0.25em] text-white/20">
                      Art Henna Studio
                    </span>
                  </div>

                  <div className="grid h-[calc(100%-2rem)] grid-cols-[25%_1fr]">
                    <div className="border-r border-white/[0.06] p-3">
                      <div className="h-2 w-12 rounded bg-white/10" />

                      <div className="mt-7 space-y-2">
                        <span className="block h-5 rounded bg-rose-500/10" />
                        <span className="block h-5 rounded bg-white/[0.025]" />
                        <span className="block h-5 rounded bg-white/[0.025]" />
                        <span className="block h-5 rounded bg-white/[0.025]" />
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="h-2 w-20 rounded bg-white/10" />
                          <div className="mt-2 h-1.5 w-32 rounded bg-white/[0.05]" />
                        </div>

                        <div className="h-5 w-16 rounded-full bg-rose-500/10" />
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-2">
                        <div className="h-14 rounded border border-white/[0.05] bg-white/[0.02]" />
                        <div className="h-14 rounded border border-white/[0.05] bg-white/[0.02]" />
                        <div className="h-14 rounded border border-white/[0.05] bg-white/[0.02]" />
                      </div>

                      <div className="mt-3 h-24 rounded border border-white/[0.05] bg-white/[0.02]" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 text-[7px] uppercase tracking-[0.25em] text-white/20">
                  Active Project / 2026
                </div>
              </div>
            </div>

            {/* INFORMATION */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div className="reveal-right">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
                  Active Project
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">
                  Art Henna
                  <br />
                  Studio<span className="text-rose-500">.</span>
                </h2>

                <p className="mt-7 max-w-lg text-sm leading-7 text-white/40 sm:text-base sm:leading-8">
                  A modern digital platform for a mehendi artist, designed to
                  showcase work, manage bookings and create a professional
                  online presence.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {[
                    "Angular",
                    "TypeScript",
                    "Responsive UI",
                    "Dashboard",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.1] px-3 py-2 text-[8px] uppercase tracking-[0.15em] text-white/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="reveal mt-8 border-t border-white/[0.08] pt-5 lg:mt-10">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-white/20">
                    Status
                  </span>

                  <span className="text-[8px] uppercase tracking-[0.25em] text-rose-400">
                    Building
                  </span>
                </div>

                <div className="mt-4 h-px overflow-hidden bg-white/[0.08]">
                  <div className="building-progress h-full w-[68%] bg-rose-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;