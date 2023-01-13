import React from "react";
import styles from "../styles/NavBar.module.css"
import { useSelector } from "react-redux";
import DarkModeToggle from "./DarkMode";
import { Link } from "react-scroll";
import SpanishMode from "./SpanishMode";

function NavBar() {
  
  const spanish = useSelector(state=>state.spanishMode)
  const darkMode = useSelector(state=>state.darkMode)

    return (
      <nav className={`${darkMode ? "dark-mode navbar sticky-top" : ""} ${styles.navbar} "sticky-top" `}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >{spanish? "Inicio" : "Home"}</Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >{spanish?
              "Educación" :
              "Education"
            }</Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >{ spanish?
              "Proyectos" :
              "Projects"
            }</Link>
          </li> <li className={styles.contact}><Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >{ spanish?
              "Contacto":
              "Contact"
            }</Link></li>
        
          <li><DarkModeToggle></DarkModeToggle></li>
          <li><SpanishMode></SpanishMode></li>
         </ul>
      </nav>
    );
  }
  export default NavBar;

