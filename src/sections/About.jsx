import React, { useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import FirebaseIcon from "../components/FirebaseIcon";
import HtmlIcon from "../components/HtmlIcon";
import GithubIcon from "../components/GithubIcon";
import ChromeIcon from "../components/ChromeIcon";
import ReactIcon from "../components/ReactIcon";
import JSIcon from "../components/JSIcon";
import CssIcon from "../components/CssIcon";
import MongodbIcon from "../components/MongodbIcon";
import NextjsIcon from "../components/NextjsIcon";
import NodejsIcon from "../components/NodejsIcon";
import ExpressIcon from "../components/ExpressIcon";
import SassIcon from "../components/SassIcon";
import PostgresIcon from "../components/PostgresIcon";
import VsCodeIcon from "../components/VsCodeIcon";
import ReduxIcon from "../components/ReduxIcon";
import PythonIcon from "../components/PythonIcon";
import TailwindIcon from "../components/TailwindIcon";
import TypeScriptIcon from "../components/TypeScript";
import PostmanIcon from "../components/PostmanIcon";
import CardHeader from "../components/CardHeader";
import ToolBoxItems from "../components/ToolBoxItems";
import { motion } from "framer-motion";

import { Eye, Download, Sun, Clock } from "lucide-react";

const toolBoxItems = [
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "JavaScript",
    iconType: JSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Firebase",
    iconType: FirebaseIcon,
  },
  {
    title: "Mongodb",
    iconType: MongodbIcon,
  },
  {
    title: "Nextjs",
    iconType: NextjsIcon,
  },
  {
    title: "Nodejs",
    iconType: NodejsIcon,
  },
  {
    title: "Sass",
    iconType: SassIcon,
  },
  {
    title: "Express",
    iconType: ExpressIcon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "VSCode",
    iconType: VsCodeIcon,
  },
  {
    title: "Typescript",
    iconType: TypeScriptIcon,
  },
  {
    title: "Redux",
    iconType: ReduxIcon,
  },
  {
    title: "Postgres",
    iconType: PostgresIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Postman",
    iconType: PostmanIcon,
  },
];

const hobbies = [
  {
    title: "Football",
    emoji: "⚽",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Cricket",
    emoji: "🏏",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "💪",
    left: "5%",
    top: "65%",
  },
  {
    title: "Anime",
    emoji: "⛩️",
    left: "12%",
    top: "65%",
  },
  {
    title: "Real Madrid",
    emoji: "🤍🖤",
    left: "50%",
    top: "15%",
  },
];

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/Muzammil_resume.pdf"; // Path to your PDF
  link.download = "AdamMMuzammil-Resume.pdf"; // Name of the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleOpenResume = () => {
  window.open("/Muzammil_resume.pdf", "_blank"); // Opens in a new tab
};

const About = () => {
  const constraintRef = useRef(null);
  return (
    <section className="py-20 pb-28 bg-[#F1F0EA]">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto max-w-7xl">
        {/* <SectionHeader
          eyebrow="About"
          title="A Glimpse into my world"
          desc="Know more about who I am, what I do and what inspires me"
        /> */}

        {/* Bento Grid Section */}
        <div className="space-y-8">
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-medium">
            Still curious about <span className="text-lime-400">me</span>?
          </h2>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-5 space-y-10">
              <Card
                className="relative group bg-white backdrop-blur-sm p-6 flex flex-col justify-between"
                hasBlur={true}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">2025 CV</p>
                    <h3 className="text-xl font-medium">RESUME</h3>
                  </div>

                  {/* Animated Icons */}
                  <div className="flex gap-4 justify-center">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: -10,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleDownload}
                    >
                      <Download className="size-6 text-gray-500 cursor-pointer" />
                    </motion.div>

                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                        },
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleOpenResume}
                    >
                      <Eye className="size-6 text-gray-500 cursor-pointer" />
                    </motion.div>
                  </div>
                </div>
              </Card>
              <Card
                className="group bg-white/80 hover:bg-white/90 backdrop-blur-sm p-6 transition-all duration-300 "
                hasBlur={true}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-gray-500">DEVELOPER THOUGHTS</p>
                    <p className="text-lg font-medium text-gray-800 leading-relaxed">
                      "Fluent in sarcasm and JavaScript <br />
                      <span className="text-gray-500 font-normal">
                        (but mostly sarcasm)
                      </span>
                      "
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-px w-8 bg-gray-300"></div>
                      <p className="text-sm text-gray-400">Daily Wisdom</p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-24 h-28  overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <img
                        src="/assets/images/lol.png"
                        alt="Emoji"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-300/20 to-sky-400/20 blur group-hover:blur-xl transition-all duration-300"></div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="md:col-span-7">
              <Card className="h-[320px]" hasBlur={true}>
                <CardHeader
                  title="My Toolbox"
                  desc="Explore the technologies and tools I use to create digital experiences."
                />
                <ToolBoxItems
                  toolBoxItems={toolBoxItems}
                  wrapperClassName="animate-move-left [animation-duration:60s]"
                />
                <ToolBoxItems
                  toolBoxItems={toolBoxItems}
                  className="mt-6"
                  wrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:60s]"
                />
              </Card>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-7">
              <Card className="h-[320px] p-0 flex flex-col" hasBlur>
                <CardHeader
                  title="Beyond the code"
                  desc="Explore my interests and hobbies beyond the digital realm."
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex gap-2 px-6 bg-[#F1F0EA]  border border-black rounded-full py-1.5 absolute"
                      style={{ left: hobby.left, top: hobby.top }}
                      drag
                      dragConstraints={constraintRef}
                    >
                      <span className="text-gray-950 font-medium font-satoshi">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
            <div className="md:col-span-5">
              <Card
                className="h-[320px] p-0 relative overflow-hidden"
                hasBlur={false}
              >
                <img
                  src="/assets/images/loca.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <img
                    src="/assets/images/smile.png"
                    alt=""
                    className="w-20 h-20"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
