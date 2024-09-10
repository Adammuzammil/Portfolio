import React, { useEffect, useRef } from "react";
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

const App = () => {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Projects />
      <Tape />
      <About />
      <Contact />
      <Footer />
      <Cursor />
      {/* <ScrollUp /> */}
    </main>
  );
};

export default App;
