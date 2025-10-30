import React from "react";
import HeaderH2 from "../components/HeaderH2.jsx";
import List from "../components/List.jsx";

function Projects() {
  const projectItems = [
    "Portfolio Website: A personal portfolio built with React.",
    "E-commerce Platform: A full-stack e-commerce site using HTML.",
  ];

  return (
    <div>
      <HeaderH2>Projects</HeaderH2>
      <List items={projectItems} />
    </div>
  );
}

export default Projects;