import React from "react";
import HeaderH2 from "../components/HeaderH2.jsx";
import List from "../components/List.jsx";

function Skills() {
  const skillItems = [
    <><strong>Languages:</strong> JavaScript, Python, Java</>,
    <><strong>Frameworks:</strong> React, Node.js</>,
    <><strong>Databases:</strong> SQL, PostgreSQL</>
  ];

  return (
    <div>
      <HeaderH2>Technical Skills</HeaderH2>
      <List items={skillItems} />
    </div>
  );
}

export default Skills;