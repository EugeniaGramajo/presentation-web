import React from "react";
import styles from "../styles/NavBar.module.css"

function NavBar() {
    return (
      <nav className={styles.navbar}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Work experience</a></li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }

  export default NavBar;
