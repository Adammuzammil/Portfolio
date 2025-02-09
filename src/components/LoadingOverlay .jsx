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
      className="fixed inset-0 flex items-center justify-center bg-[#232126] z-[100]"
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="text-white text-9xl font-bold"
      >
        {progress}%
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isComplete ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 left-8 text-white text-5xl font-medium"
      >
        LOADING
      </motion.div>
    </motion.div>
  );
};

export default LoadingOverlay;
