import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-10 right-10 w-28 h-28 cursor-pointer group"
          onClick={scrollToTop}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-300 rounded-full shadow-lg flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
            transition={{ duration: 0.3 }}
          >
            <ChevronUp className="text-white" size={24} />
          </motion.div>
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <path
                id="circle"
                d="M 50, 50 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
              />
            </defs>
            <text dy="2">
              <textPath xlinkHref="#circle" className="fill-white text-[12px]">
                Scroll Up • Scroll Up • Scroll Up • Scroll Up • Scroll Up
              </textPath>
            </text>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollUp;
