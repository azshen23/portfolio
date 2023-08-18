import { useState } from "react";
import Header from "../components/Header";
import nuocalColor from "/src/assets/images/projects/nuocal-bw.png";
import nuocalBW from "/src/assets/images/projects/nuocal-bw.png";
import rainingBW from "/src/assets/images/projects/raining-bw.svg";

const allProjects = [
  {
    title: "nuocal",
    link: "https://nuocal.com",
    logoColor: nuocalColor,
    logoBW: nuocalBW,
    tags: ["React Native", "PostgreSQL", "NodeJS / Express"],
  },
  {
    title: "Raining Consulting",
    link: "https://raining.dev",
    logoColor: nuocalColor,
    logoBW: rainingBW,
    tags: ["React", "PostgreSQL", "NodeJS / Express"],
  },
  {
    title: "Nutrition Education Initiative",
    link: "https://nutritioneducationinitiative.com/",
    logoColor: nuocalColor,
    tags: ["Svelte"],
  },
  {
    title: "Connect",
    link: "https://github.com/azshen23/Connect",
    logoColor: nuocalColor,
    tags: ["Android", "Firebase"],
  },
];

const allTechnologies = [
  "React",
  "React Native",
  "Firebase",
  "Svelte",
  "PostgreSQL",
  "NodeJS / Express",
  "Android",
].sort();

function Projects() {
  const [projects, setProjects] = useState(allProjects);

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
        {projects.map((project, key) => (
          <div
            className="flex flex-col w-1/4 box border-8 items-center text-center p-10"
            key={key}
          >
            <img className="" src={project.logoBW} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
