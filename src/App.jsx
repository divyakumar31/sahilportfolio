import React from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import useReveal from "./hooks/useReveal";

const App = () => {
  useReveal();

  return (
    <>
      <Preloader />

      <CustomCursor />

      <Navbar />

      <main>
        <HeroSection />

        <About />

        <Services />

        <Project />

        <Contact />
      </main>
    </>
  );
};

export default App;