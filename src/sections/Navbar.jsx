import { AlignJustify, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a href="" className="nav-li_a">
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      animate={isHidden ? "hidden" : "visible"}
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 right-0 left-0 z-50 bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href=""
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Adam
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X color="white" size={28} />
            ) : (
              <AlignJustify color="white" size={28} />
            )}
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "h-screen" : "max-h-0"}`}>
        <nav className=" p-5">
          <NavItems />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
