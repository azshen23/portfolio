import React from "react";
import Header from "../components/Header";
import nuocalColor from "/src/assets/images/projects/nuocal-color.png";
import nuocalBW from "/src/assets/images/projects/nuocal-bw.png";
import rainingBW from "/src/assets/images/projects/raining-bw.svg";

const projects = [
  {
    title: "nuocal",
    link: "https://nuocal.com",
    logoColor: nuocalColor,
    logoBW: nuocalBW,
  },
  {
    title: "Raining Consulting",
    link: "https://raining.dev",
    logoColor: nuocalColor,
    logoBW: rainingBW,
  },
  {
    title: "Nutrition Education Initiative",
    link: "https://joyful-malasada-ab27ce.netlify.app/",
    logoColor: nuocalColor,
  },
  {
    title: "Connect",
    link: "https://github.com/azshen23/Connect",
    logoColor: nuocalColor,
  },
];

function Projects() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Header />
      <div className="pt-10"></div>
      <div className="w-full flex flex-col items-center gap-y-10">
        {projects.map((project, key) => (
          <div
            className="flex flex-col w-1/4 box border-4 items-center text-center"
            key={key}
          >
            <img src={project.logoBW} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
