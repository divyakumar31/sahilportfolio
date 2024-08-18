import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

const App = () => {
  return (
    <>
      <div className="h-dvh bg-[url('/sahil7.jpg')] bg-center bg-cover bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <About />
    </>
  );
};

export default App;
