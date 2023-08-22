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
    tags: ["React-Native", "PostgreSQL", "NodeJS / Express"],
  },
  {
    title: "Raining Consulting",
    link: "https://raining.dev",
    logoColor: rainingColor,
    logoBW: rainingBW,
    tags: ["React", "PostgreSQL", "NodeJS/Express"],
  },
  {
    title: "Nutrition Education Initiative",
    link: "https://nutritioneducationinitiative.com/",
    logoColor: neiColor,
    logoBW: neiBW,
    tags: ["Svelte"],
  },
  {
    title: "Connect",
    link: "https://github.com/azshen23/Connect",
    logoColor: connectColor,
    logoBW: connectBW,
    tags: ["Android", "Firebase"],
  },
];

const allTechnologies = [
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
  const [isHoveredList, setIsHovered] = useState(
    Array(allProjects.length).fill(false)
  );

  const filterProjects = (technology) => {
    if (technology == "All") {
      setProjects(allProjects);
    } else {
      setProjects(
        allProjects.filter((project) =>
          project.tags.some((tag) => tag === technology)
        )
      );
    }
  };

  const hoverProject = (index) => {
    const updatedList = [...isHoveredList];
    updatedList[index] = !updatedList[index];
    setIsHovered(updatedList);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Header />
      <div className="pt-20"></div>
      <div className="flex flex-row space-x-5 pokemonFont">
        <button onClick={() => filterProjects("All")}>All</button>
        {allTechnologies.map((technology, key) => (
          <button onClick={() => filterProjects(technology)} key={key}>
            {technology}
          </button>
        ))}
      </div>
      <div className="pt-20"></div>
      <div className="w-full flex flex-col items-center gap-y-10">
        <AnimatePresence>
          {projects.map((project, key) => (
            <motion.div
              className="flex flex-col w-[475px] h-[475px] box border-8 items-center text-center"
              key={key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <a
                className=" w-full h-full "
                href={project.link}
                target="_blank"
              >
                {isHoveredList[key] ? (
                  <motion.div
                    className="w-full h-full flex flex-col items-center p-10 bg-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseLeave={() => hoverProject(key)}
                  >
                    <img className=" w-2/3" src={project.logoColor} />
                  </motion.div>
                ) : (
                  <div
                    onMouseEnter={() => hoverProject(key)}
                    className="w-full flex flex-col items-center p-10"
                  >
                    <img className="" src={project.logoBW} />
                  </div>
                )}
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
