import React from "react";
import { motion, useTransform } from "framer-motion";

const ProjectsThird = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.div
      className="relative h-screen text-white bg-blue-600"
      style={{
        scale,
        rotate,
      }}
    >
      ProjectsSec
    </motion.div>
  );
};

export default ProjectsThird;
