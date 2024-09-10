import React, { useRef } from "react";
import ProjectScroll from "./ProjectScroll";
import ClickView from "../components/ClickView";
import { useScroll } from "framer-motion";

const Projects = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <div className=" bg-black text-white py-32">
      <div className="flex items-center justify-center space-x-6 px-4 md:px-0">
        <div className="h-[1px] bg-white/10 flex-1 max-w-[400px]" />
        <div>
          <h2 className="text-xl font-normal whitespace-normal text-center">
            <span className="inline-block mx-1">Discover </span>
            <span className="inline-block mx-1">my </span>
            <span className="inline-block mx-1">creative </span>
            <span className="inline-block mx-1">expertise </span>
          </h2>
        </div>
        <div className="h-[1px] bg-white/10 flex-1 max-w-[400px]" />
      </div>

      <p className="text-center font-semibold mt-1 text-white/60 font-satoshi">
        Check out some of my projects by area of expertise
      </p>

      {/* Projects */}
      <div className="flex flex-col space-y-10 " ref={container}>
        <ProjectScroll text="Crypto Dashboard" />
        <ClickView texts={["Click", "to", "view", "projects"]} />

        <ProjectScroll text="Movie Site" />
        <ClickView texts={["Click", "to", "view", "projects"]} />
        <ProjectScroll text="Weather Dash" />
      </div>
    </div>
  );
};

export default Projects;
