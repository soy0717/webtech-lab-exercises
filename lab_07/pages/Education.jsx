import React from "react";
import HeaderH2 from "../components/HeaderH2.jsx"; // Path updated
import List from "../components/List.jsx";       // Path updated

function Education() {
  const educationItems = [
    <>B. Tech Artificial Intelligence & Data Science - Shiv Nadar University, Chennai (2023 - Present)</>,
    <>12th Grade, PSBB KKN (2008 - 2023)</>
  ];

  return (
    <div>
      <HeaderH2>Education</HeaderH2>
      <List items={educationItems} />
    </div>
  );
}

export default Education;