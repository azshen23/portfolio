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
    tags: ["All", "React-Native", "PostgreSQL", "NodeJS/Express"],
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

  const filterProjects = (technology) => {
    setProjects(
      allProjects.filter((project) =>
        project.tags.some((tag) => tag === technology),
      ),
    );
    setCurSelectedTech(technology);
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
      <div className="flex flex-col w-full items-center justify-center pb-20">
        <Header />
        <div className="pt-10 lg:pt-20"></div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 pokemonFont text-xs md:text-sm lg:text-base px-4">
          {allTechnologies.map((technology, key) => (
            <button
              onClick={() => filterProjects(technology)}
              key={key}
              className={`text-black px-4 py-2 rounded-xl transition-all duration-200 border-2 ${
                technology === curSelectedTech
                  ? "text-opacity-100 bg-white border-black shadow-md font-bold"
                  : "text-opacity-50 hover:text-opacity-100 hover:bg-white/50 border-transparent"
              }`}
            >
              {technology}
            </button>
          ))}
        </div>
        <div className="pt-10 lg:pt-20"></div>
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 justify-items-center">
          <AnimatePresence>
            {projects.map((project) => (
              <motion.div
                className="relative flex flex-col w-full max-w-[475px] h-[400px] lg:h-[475px] box border-8 items-center justify-center text-center p-1 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
                key={project.title}
                initial="initial"
                whileHover="hover"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                <motion.div
                  className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-r from-slate-200 to-orange-50 z-10"
                  variants={projectVariant}
                  transition={{ type: "spring", duration: 0.3 }}
                >
                  <a
                    className="w-full h-full flex flex-col items-center justify-center text-sm md:text-base"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="w-1/2 max-h-40 object-contain pb-6" src={project.logoColor} alt={project.title} />
                    <h1 className="font-medium px-4">{project.description}</h1>
                  </a>
                </motion.div>
                <div className="w-full h-full flex flex-col items-center justify-center p-5">
                  <img className="max-h-60 object-contain" src={project.logoBW} alt={project.title} />
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
