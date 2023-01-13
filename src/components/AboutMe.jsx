import React from 'react';
import styles from '../styles/AboutMe.module.css';
import { useSelector } from 'react-redux';


function AboutMe(props) {

  const spanish = useSelector(state=>state.spanishMode)
  

  return (
    <div className={`container ${styles.aboutme}`}>
    <img src='https://i.imgur.com/jquAiiT.png' alt="michi" className={`${styles.fadein} ${styles.slideinright} ${styles.zoom}`} />

 <div className={styles.slideinright}> <p className={styles.p}>{ spanish? "Soy una desarrolladora Full Stack altamente capacitada y apasionada por la programación ubicada en Uruguay. Desde que descubrí mi interés en este campo, he trabajado incansablemente para mejorar mis habilidades y conocimientos día a día, lo que me ha permitido progresar en mi carrera. Estoy altamente motivada y comprometida, siempre buscando nuevas oportunidades para desafiarme y seguir creciendo como desarrolladora." :
 "I am a highly skilled Full Stack developer passionate about programming based in Uruguay. Since discovering my interest in this field, I have strived to improve my skills and knowledge daily, allowing me to grow professionally. I am highly motivated and dedicated, always looking for new opportunities to challenge myself and continue growing as a developer"}</p></div>   </div>

  );
}

export default AboutMe;

