import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { MoveLeft, MoveUpRight } from "lucide-react";
import Carousel from "../components/Carousel";
import OuterLink from "../components/OuterLink";
import LazyImage from "../components/LazyImage";
import { projects } from "../constants";

const WorkInfo = () => {
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const isDark = false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.25,
        when: "beforeChildren",
      },
    },
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
  };

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">Project Not Found</h2>
        <p className="text-gray-600 max-w-md">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <a
          href="/"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Back to Projects
        </a>
      </div>
    );
  }
  return (
    <motion.div className="bg-hero min-h-screen">
      <div className="container mx-auto relative">
        {/* Changed to grid layout */}
        <div className="grid grid-cols-1  xl:grid-cols-3 gap-x-8 gap-y-12">
          {/* Left Column - Sticky Content */}

          <div className="col-span-1 relative xl:sticky top-0 h-auto z-10 lg:h-screen pt-6 lg:pt-8 px-4  backdrop-blur-sm">
            <Link
              to={"/"}
              className="flex w-fit items-center gap-2 text-gray-700 font-medium font-satoshi text-lg pb-2 cursor-pointer hover:text-black transition"
            >
              <MoveLeft className="w-5 h-5" />
              <span>Back to Works</span>
            </Link>
            <div className="xl:hidden flex items-center justify-end mb-6">
              <Carousel
                index={index}
                setIndex={setIndex}
                totalItems={projects.length}
                className="mr-auto"
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                className="flex flex-col space-y-8 pb-12 lg:pb-0"
              >
                {/* Project Header */}
                <motion.div
                  className="flex flex-col border-b border-gray-200 pb-4"
                  variants={staggerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.h1
                    variants={textVariants}
                    className="font-bold text-3xl lg:text-4xl mb-4 text-gray-900 tracking-tight"
                  >
                    {project.name}
                  </motion.h1>
                  <motion.p
                    variants={textVariants}
                    className="text-gray-600 font-satoshi text-base "
                  >
                    {project.description}
                  </motion.p>
                </motion.div>

                {/* Project Metadata */}
                <motion.div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  variants={staggerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.dl
                    className="flex flex-col gap-4"
                    variants={staggerVariants}
                  >
                    {[
                      { label: "Industry", value: project.industry },
                      { label: "Year", value: project.published },
                      { label: "Status", value: "Completed" },
                    ].map((item, i) => (
                      <motion.div key={i} variants={textVariants}>
                        <motion.dt className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-1">
                          {item.label}
                        </motion.dt>
                        <motion.dd className="text-base font-medium font-satoshi text-gray-800">
                          {item.value}
                        </motion.dd>
                      </motion.div>
                    ))}
                  </motion.dl>

                  <motion.div variants={textVariants}>
                    <dt className="text-xs uppercase tracking-wide text-gray-400 font-semibold mb-2">
                      Technology Stack
                    </dt>
                    <ul className="space-y-1.5">
                      {project.techstack?.map((tech, index) => (
                        <motion.li
                          key={index}
                          className="font-medium text-gray-800 font-satoshi"
                          variants={textVariants}
                        >
                          {tech}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>

                {/* Project Narrative */}
                <motion.div
                  variants={staggerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  <motion.h2
                    variants={textVariants}
                    className="text-sm uppercase tracking-wide text-gray-400 font-semibold"
                  >
                    Overview
                  </motion.h2>
                  <motion.div
                    className="text-black text-base leading-relaxed tracking-wide max-w-prose"
                    variants={textVariants}
                  >
                    {project.inspiration.split(".").map(
                      (sentence, index) =>
                        sentence.trim() && (
                          <p key={index} className="font-satoshi mb-1">
                            {sentence}.
                          </p>
                        )
                    )}
                  </motion.div>
                </motion.div>

                {/* Action Links */}
                <motion.div
                  className="mt-8 flex items-center gap-4 justify-between"
                  variants={textVariants}
                >
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      className={`relative flex items-center ${
                        isDark ? "text-white" : "text-black"
                      }  transition duration-200 group `}
                      aria-label="live site"
                    >
                      {project.dummyurl}

                      <img
                        src="/arrow.svg"
                        alt="Arrow Icon"
                        className="size-4"
                      />
                      {/* Persistent light gray underline */}
                      {project.url && (
                        <span
                          className={`absolute left-0 bottom-[-3px] w-full h-[1px] ${
                            isDark ? "bg-gray-500" : "bg-gray-300"
                          }`}
                        ></span>
                      )}

                      {/* Dark underline that expands on hover */}
                      <span
                        className={`absolute left-0 bottom-[-3px] w-0 h-[1px] ${
                          isDark ? "bg-white" : "bg-black"
                        } transition-all duration-700 ease-in-out group-hover:w-full`}
                      ></span>
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md"
                    aria-label="View source code"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 w-4 h-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 10.75h7.25M13 7h7.25M5 19.25h14a2 2 0 002-2V6.75a2 2 0 00-2-2H5a2 2 0 00-2 2v10.5a2 2 0 002 2z"
                      />
                    </svg>
                    View Repository
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column - Scrollable Content */}
          <div className="col-span-1 lg:col-span-2 pt-6 lg:pt-12 lg:pl-12 px-4 relative">
            <div className="hidden xl:flex items-center py-4 justify-end px-4">
              <Carousel
                index={index}
                setIndex={setIndex}
                totalItems={projects.length}
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index} // Key to trigger animation on change
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    // Add delay for images
                    duration: 0.4,
                    ease: "easeInOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.3 },
                }}
                className="space-y-8 lg:space-y-12 pb-20"
              >
                {/* Image Containers */}
                {project?.images?.map((item) => (
                  <motion.div
                    key={`${index}-${item}`}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }}
                    className="relative group rounded-lg  overflow-hidden border border-gray-900 transition-all duration-500 flex items-center justify-center"
                  >
                    <div
                      className="w-full h-full overflow-hidden relative bg-hero flex items-center justify-center"
                      style={{ minHeight: "245px" }}
                    >
                      <LazyImage
                        key={`${project.images[0]}-${index}`}
                        src={item}
                        alt={project.name}
                      />

                      {/* Keep the same overlay effects */}
                    </div>
                    {/* Keep the same status badge */}
                    <div className="hidden lg:absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg">
                      <span className="text-sm font-semibold text-gray-800">
                        Featured Project
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkInfo;
