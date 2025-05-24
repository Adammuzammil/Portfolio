import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const LoadingOverlay = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * (7 - 3 + 1) + 3);
      });
    }, 75);

    return () => {
      clearInterval(interval);
    };
  }, [onLoadingComplete]);

  const variants = {
    initial: { y: 0 },
    complete: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.85, 0.19, 0.92, 0.82] },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={isComplete ? "complete" : "initial"}
      onAnimationComplete={() => {
        if (isComplete) {
          setTimeout(onLoadingComplete, 100);
        }
      }}
      className="fixed inset-0 flex items-center justify-center bg-[#232126] z-[100] overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold text-xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl"
      >
        {progress}%
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 text-white font-medium text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl"
      >
        LOADING
      </motion.div>
    </motion.div>
  );
};

export default LoadingOverlay;
