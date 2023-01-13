import React from "react";
import styles from "../styles/Skills.module.css";
import {useSelector} from "react-redux"
import { tableTechSkills, softSkills } from "../Data/Data";

export default function Skills(props) {

  const spanish = useSelector(state=>state.spanishMode)

  return (
    <>
      <div id="skills">
        <h1 className={styles.h1}>Tech Skills</h1>
        <div className={styles.tech}>
              <p> {spanish? "Tengo un conjunto amplio de habilidades técnicas, incluyendo una gran experiencia en HTML5, CSS3, JavaScript, React, Redux, Node.js, Express.js y PostgreSQL. He desarrollado mi experiencia en la construcción de sitios web y aplicaciones web dinámicos y adaptativos mediante la práctica. Mi experiencia con React y Redux me permite crear interfaces de usuario eficientes y fáciles de mantener, y mi experiencia con Node.js y Express.js me permite desarrollar sistemas back-end robustos. Además, tengo experiencia en el diseño y la gestión de bases de datos eficientes utilizando PostgreSQL." : "I have a diverse set of technical skills including proficiency in HTML5, CSS3, JavaScript, React, Redux, Node.js, Express.js, and PostgreSQL. My experience in building dynamic and responsive websites and web applications utilizing modern front-end and back-end technologies has been developed through hands-on experience and self-study. My experience with React and Redux allows me to create efficient and maintainable user interfaces and expertise in Node.js and Express.js enables me to develop robust back-end systems. Furthermore, I have experience working with PostgreSQL to design and manage efficient databases."}</p>
        
            <div className={styles.items}>
          {tableTechSkills.map((skill) => (
            <span
              className={styles.span}
            >
              {skill.name}
              <img className={styles.imgTech} src={skill.img} alt={skill.alt} />
            </span>
          ))}</div>
           </div>
        <h1 className={styles.h1}>Soft Skills</h1>
        
        <div className={styles.items2}>

            {softSkills.map(skill=>(
                <span className={styles.span}>{
                    spanish? skill.spanish : skill.name
                    }<img className={styles.imgTech} src={skill.img} alt={skill.alt} />
                </span>
            ))}
        </div>
      </div>
    </>
  );
}
