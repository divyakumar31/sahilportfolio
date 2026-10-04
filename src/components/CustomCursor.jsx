import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setEnabled(
        window.matchMedia("(pointer: fine)").matches &&
          window.innerWidth >= 768
      );
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ringX = mouseX;
    let ringY = mouseY;

    let animationFrame;

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    const handlePointerOver = (event) => {
      const target = event.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      if (target) {
        document.body.classList.add("cursor-hover");
      }
    };

    const handlePointerOut = (event) => {
      const target = event.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      if (target) {
        document.body.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", move, {
      passive: true,
    });

    document.addEventListener(
      "pointerover",
      handlePointerOver
    );

    document.addEventListener(
      "pointerout",
      handlePointerOut
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);

      document.removeEventListener(
        "pointerover",
        handlePointerOver
      );

      document.removeEventListener(
        "pointerout",
        handlePointerOut
      );

      cancelAnimationFrame(animationFrame);

      document.body.classList.remove("cursor-hover");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
      />

      <div
        ref={ringRef}
        className="custom-cursor-ring"
      />
    </>
  );
};

export default CustomCursor;