import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SocialLinks, { Location } from "../components/SocialLinks";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuVariants = {
    initial: { y: "-100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.6 },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { type: "tween", duration: 0.7 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <header className="text-white px-4 fixed top-0 left-0 right-0 z-20 bg-[#232126]/10 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-xl md:text-2xl font-bold">
          <a href="/">ADAM</a>
        </div>

        <button
          onClick={toggleMenu}
          className="z-50 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <div className="font-medium p-4 py-5">
            {open ? <span>CLOSE</span> : <span>MENU</span>}
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="menu"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={menuVariants}
              className="fixed top-0 left-0 right-0 bg-black text-white p-6 w-full h-screen flex flex-col justify-between items-center"
              style={{ zIndex: 40 }}
            >
              {/* Centered Navigation with Staggered Items */}
              <motion.nav
                className="flex flex-col items-center gap-8 text-2xl font-bold flex-1 justify-center"
                initial="hidden"
                animate="visible"
              >
                {["ABOUT", "WORK", "CONTACT"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    onClick={toggleMenu}
                    className="hover:text-gray-400"
                    variants={itemVariants}
                    custom={index}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.nav>

              {/* Social Links & Location Info - Positioned at Bottom */}
              {/* <div className="flex flex-col gap-4 text-sm text-white/60 pb-6 text-center">
                <SocialLinks className="flex flex-wrap gap-4 justify-center" />
              </div> */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center text-xs px-8 text-gray-400">
                {/* Left */}
                <div>
                  <Location />
                </div>
                {/* Right */}
                <div className="text-right">
                  <div className="flex gap-4">
                    <SocialLinks className="flex flex-wrap gap-4 justify-center" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
