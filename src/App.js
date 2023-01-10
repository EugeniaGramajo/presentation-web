
import './App.css';
import React from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Summary from './components/Summary';
import DarkModeToggle from './components/DarkMode';
import { useSelector } from 'react-redux';

function App() {

  const darkMode = useSelector(state=>state.darkMode)

  return (
   <div className={darkMode? "dark-mode" : ""}>
   
   
   <NavBar></NavBar>
   <Header></Header>
   <AboutMe></AboutMe>
   <Education></Education>
   <Summary></Summary>
   <Footer></Footer>
   </div>
  );
}

export default App;
