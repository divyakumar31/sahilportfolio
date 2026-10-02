import { useEffect, useState } from "react";

const roles = [
  {
    text: "Building Digital Products",
    color: "#fb7185",
  },
  {
    text: "Developing Web Applications",
    color: "#61dafb",
  },
  {
    text: "Creating Business Solutions",
    color: "#dd0031",
  },
  {
    text: "Building Scalable Software",
    color: "#a78bfa",
  },
];

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!loading) return;

    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 500);

    return () => clearInterval(roleTimer);
  }, [loading]);

  if (!loading) {
    return null;
  }

  const currentRole = roles[roleIndex];

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#080808] text-white">
      
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/[0.06] blur-[120px]" />

      <div className="relative text-center">

        {/* Small label */}
        <p className="text-[10px] uppercase tracking-[0.45em] text-white/30 sm:text-xs">
          Portfolio
        </p>

        {/* Brand */}
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
          Sahil
          <span className="text-rose-500">.</span>
          <span className="mt-5 text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">dev</span>
        </h1>

        {/* Name */}
        <p className="mt-5 text-sm tracking-[0.18em] text-white/60 sm:text-base">
          Sahil Darji
        </p>

        {/* Developer role */}
        <div className="mt-5 h-6">
          <p
            key={currentRole.text}
            className="text-xs font-medium uppercase tracking-[0.22em] transition-all duration-300 sm:text-sm"
            style={{
              color: currentRole.color,
            }}
          >
            {currentRole.text}
          </p>
        </div>

        {/* Loading line */}
        <div className="mx-auto mt-8 h-[2px] w-32 overflow-hidden rounded-full bg-white/10 sm:w-40">
          <div className="preloader-line h-full w-full origin-left rounded-full bg-rose-500" />
        </div>

        {/* Loading text */}
        <p className="mt-4 text-[9px] uppercase tracking-[0.35em] text-white/20">
          Loading experience
        </p>

      </div>
    </div>
  );
};

export default Preloader;