import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="h-dvh bg-[url('/sahil7.jpg')] bg-center bg-cover bg-no-repeat">
        <Navbar />
        <HeroSection />
      </div>
      <About />
      <Services />
      <Project />
      <Contact />
      <div className="copyright bg-neutral-400 bg-opacity-70 py-6 px-4 md:px-20 lg:px-36 text-center">
        <p>Created By Sahil Darji &copy; 2023 All Rights Reserved</p>
      </div>
    </>
  );
};

export default App;
