import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import nuocalBW from "/src/assets/images/projects/bw/nuocal-bw.png";
import nuocalColor from "/src/assets/images/projects/color/nuocal-color.png";
import rainingBW from "/src/assets/images/projects/bw/raining-bw.png";
import neiBW from "/src/assets/images/projects/bw/nei-bw.png";
import connectBW from "/src/assets/images/projects/bw/connect-bw.png";
import rainingColor from "/src/assets/images/projects/color/raining-color.svg";
import neiColor from "/src/assets/images/projects/color/nei-color.svg";
import connectColor from "/src/assets/images/projects/color/connect-color.jpg";

const allProjects = [
  {
    title: "nuocal",
    link: "https://nuocal.com",
    logoColor: nuocalColor,
    logoBW: nuocalBW,
    description:
      "Nuocal is a full-stack cross platform mobile application that allows users to write down their daily thoughts to share and vent with others",
    tags: ["All", "React-Native", "PostgreSQL", "NodeJS / Express"],
  },
  {
    title: "Raining Consulting",
    link: "https://raining.dev",
    logoColor: rainingColor,
    logoBW: rainingBW,
    description:
      "Raining.dev is a full-stack web application where I run my personal software consulting business",
    tags: ["All", "React", "PostgreSQL", "NodeJS/Express"],
  },
  {
    title: "Nutrition Education Initiative",
    link: "https://nutritioneducationinitiative.com/",
    logoColor: neiColor,
    logoBW: neiBW,
    description:
      "NEI is a front-end web application for the non-profit organization Nutrition Education Initiative",
    tags: ["All", "Svelte"],
  },
  {
    title: "Connect",
    link: "https://github.com/azshen23/Connect",
    logoColor: connectColor,
    logoBW: connectBW,
    description:
      "Connect is a full-stack Android application aimed to allow nearby users to connect and create relationships",
    tags: ["All", "Android", "Firebase"],
  },
];

const allTechnologies = [
  "All",
  "React",
  "React-Native",
  "Firebase",
  "Svelte",
  "PostgreSQL",
  "NodeJS/Express",
  "Android",
].sort();

function Projects() {
  const [projects, setProjects] = useState(allProjects);
  const [curSelectedTech, setCurSelectedTech] = useState("All");
  const [isHoveredList, setIsHovered] = useState(
    Array(allProjects.length).fill(false)
  );

  const filterProjects = (technology) => {
    setProjects(
      allProjects.filter((project) =>
        project.tags.some((tag) => tag === technology)
      )
    );
    setCurSelectedTech(technology);
  };

  const hoverProject = (index) => {
    const updatedList = [...isHoveredList];
    updatedList[index] = !updatedList[index];
    setIsHovered(updatedList);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Header />
      <div className="pt-10 lg:pt-20"></div>
      <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-2 space-x-3 lg:space-x-5 pokemonFont text-sm lg:text-base ">
        {allTechnologies.map((technology, key) => (
          <button
            onClick={() => filterProjects(technology)}
            key={key}
            className={`text-black ${
              technology === curSelectedTech
                ? "text-opacity-100"
                : "text-opacity-20 hover:text-opacity-100"
            }`}
          >
            {technology}
          </button>
        ))}
      </div>
      <div className="pt-10 lg:pt-20"></div>
      <div className="w-full flex flex-col items-center gap-y-10">
        <AnimatePresence>
          {projects.map((project, key) => (
            <motion.div
              className="flex flex-col lg:w-[400px] lg:h-[400px] lg:w-[475px] lg:h-[475px] box border-8 items-center text-center p-1"
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              {isHoveredList[key] ? (
                <motion.div
                  className="w-full h-full flex flex-col items-center p-10 bg-gradient-to-r from-slate-200 to-orange-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onMouseLeave={() => hoverProject(key)}
                >
                  <a
                    className="w-full h-full flex flex-col items-center text-sm"
                    href={project.link}
                    target="_blank"
                  >
                    <img className="w-1/2 pb-10" src={project.logoColor} />
                    <h1>{project.description}</h1>
                  </a>
                </motion.div>
              ) : (
                <div
                  onMouseEnter={() => hoverProject(key)}
                  className="w-full flex flex-col items-center p-5"
                >
                  <img className="" src={project.logoBW} />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
