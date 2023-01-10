import React from 'react';
import styles from '../styles/AboutMe.module.css';


function AboutMe(props) {
  return (
    <div className={styles.aboutme}>
    <img src='https://img.chilango.com/2022/06/catitow-1024x682.jpeg' alt="michi" className={`${styles.fadein} ${styles.slideinright} ${styles.zoom}`} />

 <div className={styles.slideinright}> <p className={styles.p}>
 I am a highly skilled Full Stack developer with a great passion for programming. 
 Since discovering my interest in this field, I have strived to improve my skills and knowledge every day, 
 allowing me to grow professionally.

I consider myself to be a highly motivated and dedicated person, 
always looking for new opportunities to challenge myself and continue growing as a developer.</p></div>
    </div>
  );
}

export default AboutMe;

