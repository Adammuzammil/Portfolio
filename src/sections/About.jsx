import React, { useRef } from "react";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import StarIcon from "../components/StarIcon";
import HtmlIcon from "../components/HtmlIcon";
import GithubIcon from "../components/GithubIcon";
import ChromeIcon from "../components/ChromeIcon";
import ReactIcon from "../components/ReactIcon";
import JSIcon from "../components/JSIcon";
import CssIcon from "../components/CssIcon";
import TechIcon from "../components/TechIcon";
import CardHeader from "../components/CardHeader";
import ToolBoxItems from "../components/ToolBoxItems";
import { motion } from "framer-motion";

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
];

const About = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container px-12 mx-auto">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse into my world"
          desc="Know more about who I am, what I do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                desc="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <img src="/assets/images/book-cover.png" alt="Book" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                title="My Toolbox"
                desc="Explore the technologies and tools I use to create digital
                experiences."
                className=""
              />
              <ToolBoxItems
                toolBoxItems={toolBoxItems}
                className=""
                wrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                toolBoxItems={toolBoxItems}
                className="mt-6"
                wrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
              <CardHeader
                title="Beyond the code"
                desc="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
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

            <Card className="h-[320px] p-0 relative md:col-span-2">
              <img
                src="/assets/images/map.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <img
                  src="/assets/images/memoji-smile.png"
                  alt=""
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
