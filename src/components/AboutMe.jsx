import React from 'react';
import styles from '../styles/AboutMe.module.css';


function AboutMe(props) {
  

  return (
    <div className={`container ${styles.aboutme}`}>
    <img src='https://i.imgur.com/jquAiiT.png' alt="michi" className={`${styles.fadein} ${styles.slideinright} ${styles.zoom}`} />

 <div className={styles.slideinright}> <p className={styles.p}>
 I am a highly skilled Full Stack developer passionate about programming based in Uruguay. Since discovering my interest in this field, I have strived to improve my skills and knowledge daily, allowing me to grow professionally. I am highly motivated and dedicated, always looking for new opportunities to challenge myself and continue growing as a developer.</p></div>
    </div>

  );
}

export default AboutMe;

