import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Achievements from "./pages/Achievements.jsx";
import ThermostatApp from "./thermostat/App.jsx";
import TimerApp from "./timer/App.jsx";

function App(props) {
  return (
    <div className="app-root">
      <Header />
      <Navbar />
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/thermostat" element={<ThermostatApp />} />
          <Route path="/timer" element={<TimerApp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
