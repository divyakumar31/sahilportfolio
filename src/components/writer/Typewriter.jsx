import { useEffect, useState } from "react";

const texts = [
  "Building Digital Products",
  "Developing Web Applications",
  "Creating Business Solutions",
  "Building Scalable Software",
  "Turning Ideas Into Products",
];

const Typewriter = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const speed = isDeleting ? 45 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1100);
        }
      } else {
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 <= 0) {
          setCharIndex(0);
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, textIndex, isDeleting]);

  return (
    <span className="inline-flex items-center">
      <span className="text-rose-400">
        {texts[textIndex].substring(0, charIndex)}
      </span>

      <span className="ml-1 inline-block h-4 w-px animate-pulse bg-rose-500" />
    </span>
  );
};

export default Typewriter;