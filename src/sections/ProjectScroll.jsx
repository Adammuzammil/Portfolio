import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const ProjectScroll = ({ text, left, direction, progress }) => {
  const words = text.split(" ");
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(12)].fill(0).map((_, i) => (
              <>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4  items-center">
                    <span
                      className="text-white  font-medium  text-5xl"
                      style={{
                        transform: "scaleY(2)",
                      }}
                    >
                      {text}
                    </span>
                    <span className="inline-block h-7 w-7 bg-emerald-600 rounded-full flex-shrink-0"></span>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScroll;
