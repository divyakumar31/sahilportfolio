import React from "react";
import Typewriter from "./writer/Typewriter";

const HeroSection = () => {
  return (
    <div className="place-content-center font-bold px-4 md:px-20 lg:px-36 space-y-2 h-full">
      <h2 className="text-3xl md:text-6xl">
        Hi, My Name is <span className="text-rose-500">Sahil</span>
      </h2>
      <h3 className="text-rose-500 text-2xl md:text-3xl">
        and <Typewriter text="I am a Frontend Developer." delay={100} />
      </h3>
    </div>
  );
};

export default HeroSection;
