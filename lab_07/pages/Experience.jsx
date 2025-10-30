import React from "react";
import HeaderH2 from "../components/HeaderH2.jsx";
import List from "../components/List.jsx";

function Experience() {
  const experienceItems = [
    <>
      <strong>AI Intern</strong> - Unleash Networks, Chennai (July 2025 - Present)
    </>,
    <>
      <strong>Software Intern</strong> - Bharat Electronics Limited, Bengaluru (June 2025 - July 2025)
    </>,
  ];
  
  return (
    <div>
      <HeaderH2>Experience</HeaderH2>
      <List items={experienceItems} />
    </div>
  );
}

export default Experience;