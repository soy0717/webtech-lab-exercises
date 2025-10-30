import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      {/* <ul className="navbar-nav"> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/achievements">Achievements</NavLink>
        <NavLink to="/thermostat">Thermostat</NavLink>
        <NavLink to="/timer">Timer</NavLink>
      {/* </ul> */}
    </nav>
  );
}

export default Navbar;