import React from "react";
import Header from "../components/Header";

const projects = [{ title: "nuocal", link: "nuocal.com" }];

function Projects() {
  return (
    <div>
      <Header />
      <div className="pt-10"></div>
      <div className="w-full flex flex-col items-center">
        {projects.map((project, key) => (
          <div
            className="flex flex-col w-1/4 box border-4 items-center pt-5"
            key={key}
          >
            {project.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
