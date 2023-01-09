
import './App.css';
import React from 'react';
import About from './components/AboutMe';
import Education from './components/Education';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Summary from './components/Summary';
import DarkModeToggle from './components/DarkMode';

function App() {


  return (
   <>
   
   <Header></Header>
   <DarkModeToggle></DarkModeToggle>
   <NavBar></NavBar>
   <About></About>
   <Education></Education>
   <Summary></Summary>
   <Footer></Footer>
   </>
  );
}

export default App;
