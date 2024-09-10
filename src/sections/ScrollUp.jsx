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
    <>
      {isVisible && (
        <div
          className={`fixed bottom-10 right-10 w-28 h-28 cursor-pointer group transition-all duration-700 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
          onClick={scrollToTop}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-emerald-300 rounded-full shadow-lg transition-colors group-hover:bg-emerald-600 flex items-center justify-center">
            <ChevronUp className="text-white" size={24} />
          </div>
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow"
            viewBox="0 0 100 100"
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
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollUp;
