import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

const Cursor = ({ isHovering, setIsHovering }) => {
  const cursorSize = isHovering ? 60 : 20;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const manageMouseOver = () => {
    setIsHovering(true);
  };

  const manageMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    // <div className="fixed inset-0 pointer-events-none z-50">
    //   <motion.div
    //     className="absolute bg-transparent border border-white rounded-full opacity-50"
    //     style={{
    //       left: position.x - 16,
    //       top: position.y - 16,
    //     }}
    //     animate={{
    //       width: isHovering ? 64 : 32,
    //       height: isHovering ? 64 : 32,
    //     }}
    //     transition={{ duration: 0.2 }}
    //   />
    //   <div
    //     className="absolute w-2 h-2 bg-white rounded-full"
    //     style={{
    //       left: position.x,
    //       top: position.y,
    //     }}
    //   />
    // </div>
    <motion.div
      className="fixed w-5 h-5 bg-white/70 rounded-full pointer-events-none z-50"
      style={{
        left: smoothMouse.x,
        top: smoothMouse.y,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
    ></motion.div>
  );
};

export default Cursor;
