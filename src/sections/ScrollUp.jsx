import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-10 flex items-center justify-center "
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronUp className="text-black size-8" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollUp;
