import React from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";
import ScrollDirectionButton from "./components/ScrollDirectionButton";
import useReveal from "./hooks/useReveal";
import Process from "./components/Process";
import CurrentlyBuilding from "./components/CurrentlyBuilding";

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

  <TechStack />

  <Services />

  <Project />

  <Process />

  <CurrentlyBuilding />

  <Contact />
</main>

      <ScrollDirectionButton />
    </>
  );
};

export default App;