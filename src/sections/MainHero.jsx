import React, { useMemo } from "react";
import { motion } from "framer-motion";

const StarBackground = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + "px",
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      delay: Math.random() * 5 + "s",
      duration: Math.random() * 3 + 2 + "s",
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}
    </div>
  );
};

const MainHero = () => {
  const getCurrentDayDateTime = () => {
    const now = new Date();
    return {
      day: now.toLocaleDateString("en-US", { weekday: "long" }),
      date: now.toLocaleDateString("en-US", { day: "2-digit", month: "short" }),
      time: now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };
  };

  const { day, date, time } = getCurrentDayDateTime();

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 overflow-hidden bg-gray-900">
      <StarBackground />

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute h-[2px] bg-gradient-to-r from-white/30 to-transparent animate-shooting-star"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 10 + "s",
            }}
          />
        ))}
      </div>
      <div className="container mx-auto max-w-6xl">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 space-y-8"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-16 bg-gray-800"></div>
            <span className="text-sm font-medium tracking-widest text-gray-600">
              FULL-STACK DEVELOPER
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Adam Mohd
            </span>
            <br />
            <span className="text-gray-900">Muzammil</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
            Crafting robust digital solutions with modern web technologies and
            clean architecture. Passionate about full-cycle development from
            concept to deployment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-white font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
              href="#contact"
            >
              <span>Get in touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-gray-800 rounded-full text-gray-900 font-medium hover:bg-gray-50 transition-all"
              href="#work"
            >
              View projects
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom Status Bar */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 px-4 sm:px-8 lg:px-16 text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-4 sm:gap-0">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Mangalore, IN</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-ping absolute" />
                <div className="h-3 w-3 bg-green-500 rounded-full relative" />
              </div>
              <span className="font-medium">Available for opportunities</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium">{day}</span>
              <span className="text-gray-400">•</span>
              <span>{date}</span>
              <span className="text-gray-400">•</span>
              <span className="font-mono">{time}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainHero;
