import "./App.css";
import React from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import { useSelector } from "react-redux";

import Skills from "./components/Skills";
import Projects from "./components/Projets";
import Contact from "./components/Contact";

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
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
