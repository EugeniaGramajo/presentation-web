import React from 'react';
import styles from "../styles/Header.module.css"

function Header() {
  return (
    <div id="Home" className={styles.fadein}>
      <h1 className={styles.h1}>Eugenia Gramajo</h1>
      <p className={styles.p}>Full-stack developer</p>
    </div>
  );
}

export default Header;
