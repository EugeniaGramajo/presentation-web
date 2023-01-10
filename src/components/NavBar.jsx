import React from "react";
import styles from "../styles/NavBar.module.css"
import { useSelector } from "react-redux";
import DarkModeToggle from "./DarkMode";

function NavBar() {

  const darkMode = useSelector(state=>state.darkMode)

    return (
      <nav className={`${darkMode ? "dark-mode navbar" : ""} ${styles.navbar} `}>
        <ul>

          <li><a href="#">Home</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Projects</a></li>
          <li><DarkModeToggle></DarkModeToggle></li>
          <li className={styles.contact}><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }

  export default NavBar;
