import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);

      const target = e.target;

      if (
        target.closest(
          "a, button, input, textarea, select, [role='button']"
        )
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Outer Cursor */}
      <div
        className={`pointer-events-none fixed z-[9999] hidden md:block rounded-full border border-rose-500 transition-all duration-200 ease-out ${
          hovering ? "h-12 w-12" : "h-8 w-8"
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Inner Dot */}
      <div
        className="pointer-events-none fixed z-[10000] hidden md:block h-2 w-2 rounded-full bg-rose-500"
        style={{
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;