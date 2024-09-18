import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import nuocalBW from "/src/assets/images/projects/bw/nuocal-bw.png";
import nuocalColor from "/src/assets/images/projects/color/nuocal-color.png";
import rainingBW from "/src/assets/images/projects/bw/raining-bw.png";
import connectBW from "/src/assets/images/projects/bw/connect-bw.png";
import rainingColor from "/src/assets/images/projects/color/raining-color.svg";
import connectColor from "/src/assets/images/projects/color/connect-color.jpg";
import spotifytkColor from "/src/assets/images/projects/color/spotifytk-color.png";
import spotifytkBW from "/src/assets/images/projects/bw/spotifytk-bw.png";
import ScreenWrapper from "../components/ScreenWrapper";

const allProjects = [
  {
    title: "nuocal",
    link: "https://github.com/azshen23/nuocal-app",
    logoColor: nuocalColor,
    logoBW: nuocalBW,
    description:
      "Nuocal is a full-stack cross platform mobile application that allows users to write down their daily thoughts to share and vent with others",
    tags: ["All", "React-Native", "PostgreSQL", "NodeJS / Express"],
  },
  {
    title: "Spotify Tool Kit",
    link: "https://github.com/azshen23/spotify-tk",
    logoColor: spotifytkColor,
    logoBW: spotifytkBW,
    description:
      "Spotify Tool Kit is a Frontend toolkit for Spotify's API utilizing their Oauth2",
    tags: ["All", "React-Native", "PostgreSQL", "NodeJS/Express"],
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
  {
    title: "Raining Consulting",
    link: "https://raining.dev",
    logoColor: rainingColor,
    logoBW: rainingBW,
    description:
      "Raining.dev is a full-stack web application where I run my personal software consulting business",
    tags: ["All", "React", "PostgreSQL", "NodeJS/Express"],
  },
];

const allTechnologies = [
  "All",
  "React",
  "React-Native",
  "Firebase",
  "PostgreSQL",
  "NodeJS/Express",
  "Android",
].sort();

function Projects() {
  const [projects, setProjects] = useState(allProjects);
  const [curSelectedTech, setCurSelectedTech] = useState("All");
  const [isHoveredList, setIsHovered] = useState(
    Array(allProjects.length).fill(false),
  );

  const filterProjects = (technology) => {
    setProjects(
      allProjects.filter((project) =>
        project.tags.some((tag) => tag === technology),
      ),
    );
    setCurSelectedTech(technology);
  };

  const hoverProject = (index) => {
    const updatedList = [...isHoveredList];
    updatedList[index] = !updatedList[index];
    setIsHovered(updatedList);
  };

  const projectVariant = {
    hover: {
      y: 0,
    },
    initial: {
      y: -1000,
    },
  };

  return (
    <ScreenWrapper>
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
                className="relative flex flex-col lg:w-[475px] lg:h-[475px] box border-8 items-center justify-center text-center p-1 overflow-hidden"
                key={key}
                initial="initial"
                whileHover="hover"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <motion.div
                  className="absolute w-[95%] h-[95%] flex flex-col items-center p-10 bg-gradient-to-r from-slate-200 to-orange-50"
                  variants={projectVariant}
                  transition={{ type: "spring", duration: 0.3 }}
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
                <div
                  onMouseEnter={() => hoverProject(key)}
                  className="w-full flex flex-col items-center p-5"
                >
                  <img className="" src={project.logoBW} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </ScreenWrapper>
  );
}

export default Projects;
