import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const menuVariants = {
    initial: {
      y: "-100%", // Start off-screen at the top
      opacity: 0,
    },
    animate: {
      y: 0, // Slide down to its original position
      opacity: 1,
      transition: {
        type: "tween", // Smoother animation
        duration: 0.6,
      },
    },
    exit: {
      y: "-100%", // Exit animation moves up off-screen
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.7,
      },
    },
  };
  return (
    <header className=" text-white px-4 fixed top-0 left-0 right-0 z-20 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="text-2xl font-bold">
          <a href="/">ADAM</a>
        </div>
        <div onClick={toggleMenu} className="z-50">
          <div className="bg-red-200 p-4 rounded-full">
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              key="menu"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={menuVariants}
              className="fixed top-0 right-0 bg-yellow-500 text-white p-4 rounded-bl-3xl rounded-br-3xl shadow-lg w-[30%] z-20"
              style={{ zIndex: 40 }}
            >
              <nav className="pt-20">
                <ul className="flex items-center gap-6">
                  <li>
                    <a href="/frontend-developer" className="text-xl font-bold">
                      HOME
                    </a>
                  </li>
                  <li>
                    <a href="/freelancer" className="text-xl font-bold">
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-xl font-bold">
                      WORK
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="text-xl font-bold">
                      CONTACT
                    </a>
                  </li>
                </ul>
              </nav>
              <SocialLinks />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
