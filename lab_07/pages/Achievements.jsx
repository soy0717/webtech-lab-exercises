import React from "react";
import HeaderH2 from "../components/HeaderH2.jsx";
import List from "../components/List.jsx";

function Achievements() {
  const achievementItems = [
    "Runner up - Walmart Sparkathon", 
    "Runner up - SNUC Hacks",
    "NPTEL certifications - Social Network Analysis, Introduction to LLMs"
  ];

  return (
    <div>
      <HeaderH2>Achievements</HeaderH2>
      <List items={achievementItems} />
    </div>
  );
}

export default Achievements;