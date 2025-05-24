import { motion } from "framer-motion";
import React, { useState } from "react";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      className={`w-full rounded-lg transition-all duration-500 ${
        loaded ? "border-2 border-black" : "border-none"
      }`}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.5,
          delay: 0.5,
          ease: [0.22, 0.61, 0.36, 1],
        },
      }}
      exit={{
        opacity: 0,
        scaleY: 0,
        transition: {
          duration: 0.8,
          ease: "easeIn",
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.4,
          ease: "easeOut",
        },
      }}
      style={{
        transformOrigin: "center center",
        willChange: "transform, opacity",
      }}
    />
  );
};

export default LazyImage;
