import { MoveUpRight } from "lucide-react";
import React from "react";
import OuterLink from "../components/OuterLink";

const experience = [
  {
    title: "Software Engineer",
    company: "LTIMindtree",
    location: "Bangalore, India",
    industry: "Information Technology",
    url: "https://www.ltimindtree.com",
    startDate: "2021",
    endDate: "2024",
    description:
      "Optimizing quality assurance procedures reduced product release cycles by 30%, resulting in a 15% increase in on-time delivery. Directed Selenium-driven automated test script execution, leading to a 60% decrease in manual testing workload through seamless cross functional collaboration. Crafted 30+ test cases for a fashion website using exhaustive coverage of critical functionalities. Led and directed a team of 10 interns to construct web applications using HTML, CSS, and JavaScript, driving project success.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Web Developer",
    company: "Exposys Data Labs",
    location: "Bangalore, India",
    industry: "Information Technology",
    url: "https://www.exposysdata.com",
    startDate: "2020",
    endDate: "2021",
    description:
      "Spearheaded the design and development of dynamic, user-friendly web applications using modern JavaScript frameworks, improving site speed and user engagement by 30%. Implemented robust API integrations, enhancing the interoperability between front-end and back-end services, ultimately driving a 20% increase in data processing efficiency. Played an active role in mentoring junior developers, sharing best practices for code optimization, debugging, and design patterns.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className=" py-24 min-h-screen">
      <div className="container px-4 mt-12 md:mt-16 lg:mt-20 md:px-8 lg:px-16 bg-[#F1F0EA] text-black">
        <h2 className="text-5xl font-bold font-satoshi mb-6">EXPERIENCE</h2>
        <hr className="border-gray-700 mb-6" />

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="grid md:grid-cols-5 gap-6 items-start py-14"
            >
              {/* Left Section */}
              <div className="self-start md:col-span-1">
                <h3 className="text-2xl font-semibold">{exp.company}</h3>
                <p className="text-black mt-2">
                  {exp.startDate} — {exp.endDate}
                </p>
              </div>

              {/* Middle Section */}
              <div className="space-y-3 md:col-span-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Position</span>
                  <span className="font-semibold">{exp.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location</span>
                  <span className="font-semibold">{exp.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Industry</span>
                  <span className="font-semibold">{exp.industry}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Website</span>
                  <OuterLink url={exp.url} name={exp.url} isPresent={true} />
                </div>
              </div>

              {/* Right Section */}
              <div className="text-black leading-relaxed font-satoshi md:col-span-2">
                <ul className="list-disc list-outside pl-5">
                  {exp.description.split(".").map(
                    (sentence, index) =>
                      sentence.trim() && (
                        <li key={index} className="text-justify ">
                          {sentence}.
                        </li>
                      )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
