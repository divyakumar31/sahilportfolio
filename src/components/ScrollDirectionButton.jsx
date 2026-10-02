import React, { useEffect, useState } from "react";

const ScrollDirectionButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (isScrolled) {
      // Scroll all the way to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Scroll all the way to bottom
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={isScrolled ? "Scroll to top" : "Scroll to bottom"}
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#151519]/90 text-white shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/60 hover:bg-rose-400 hover:text-black sm:bottom-8 sm:right-8"
    >
      <span className="text-lg">
        {isScrolled ? "↑" : "↓"}
      </span>
    </button>
  );
};

export default ScrollDirectionButton;