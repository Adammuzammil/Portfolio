import { MoveUpRight, Scale } from "lucide-react";
import grainImg from "/assets/images/grain.jpg";
import { div } from "framer-motion/client";
import { motion, AnimatePresence } from "framer-motion";
import resume from "/Muzammil_resume.pdf";
import { useState } from "react";

const Contact = ({ setIsHovering, isHovering }) => {
  const text = "Looking for a new talent?";
  return (
    <div className="h-screen text-black">
      <div className="text-black h-full container mx-auto px-12 ">
        <div className="mb-12 h-full flex items-center justify-center flex-col space-y-8">
          <div className="flex flex-col justify-center items-center gap-3">
            <span
              className="text-black font-medium text-xl tracking-wide"
              style={{
                transform: "scaleY(1.5)",
              }}
            >
              {text}
            </span>
            <p className="font-satoshi text-3xl md:text-7xl font-medium">
              adammuzammil1998@gmail.com
            </p>
          </div>

          <motion.a
            href="/Muzammil_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 relative z-[999]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.span className="inline-block h-3 w-3 bg-emerald-600 rounded-full flex-shrink-0 relative"></motion.span>
            <p className="font-satoshi text-xl">Download CV</p>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
