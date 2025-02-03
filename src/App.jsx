import React, { useEffect, useRef, useState } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import ProjectsSec from "./sections/ProjectScroll";
import { useScroll } from "framer-motion";
import ProjectsThird from "./sections/ProjectsThird";
import Tape from "./sections/Tape";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ScrollUp from "./sections/ScrollUp";
import Lenis from "lenis";
import Cursor from "./components/Cursor";
import LoadingOverlay from "./components/LoadingOverlay ";
import MainHero from "./sections/MainHero";
import Header from "./sections/Header";
import Works from "./sections/Works";
import ThreeModel from "./components/ThreeModel";

const App = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <main className="">
      {/* {isLoading && (
        <LoadingOverlay onLoadingComplete={handleLoadingComplete} />
      )} */}
      <Cursor isHovering={isHovering} setIsHovering={setIsHovering} />
      <Header />
      {/* <Navbar setIsHovering={setIsHovering} /> */}
      {/* <Hero /> */}
      <MainHero />
      <Works />
      {/* <Projects /> */}
      {/* <Tape /> */}
      <About />
      <Contact setIsHovering={setIsHovering} isHovering={isHovering} />
      <Footer />

      <ScrollUp />
    </main>
  );
};

export default App;
