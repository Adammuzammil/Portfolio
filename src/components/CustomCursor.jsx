import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = ({ cursorText, isHovering }) => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Apply a spring effect to smoothen cursor movement
  const springConfig = { damping: 10, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed flex items-center justify-center text-xs font-bold 
                pointer-events-none mix-blend-difference z-[99999]"
      style={{
        x: smoothX,
        y: smoothY,
        width: isHovering ? 50 : 20,
        height: isHovering ? 50 : 20,
        backgroundColor: "white",
        borderRadius: "50%",
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
        mass: 0.4,
      }}
    >
      {cursorText && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute text-black"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};

export default CustomCursor;
