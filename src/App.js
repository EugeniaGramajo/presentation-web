import "./App.css";
import React from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import DarkModeToggle from "./components/DarkMode";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Skills from "./components/Skills";
import Projects from "./components/Projets";

function App() {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      
        
          <NavBar></NavBar>
          <Header></Header>
          <AboutMe></AboutMe>
          

        
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
      
    </div>
  );
}

export default App;
