import React from "react";
import styles from "../styles/Skills.module.css";

import { tableTechSkills, softSkills } from "../Data/Data";

export default function Skills(props) {

  return (
    <>
      <div id="skills">
        <h1 className={styles.h1}>Tech Skills</h1>
        <div className={styles.tech}>
            <p> I have a diverse set of technical skills including proficiency in HTML5, CSS3, JavaScript, React, Redux, Node.js, Express.js, and PostgreSQL. My experience in building dynamic and responsive websites and web applications utilizing modern front-end and back-end technologies has been developed through hands-on experience and self-study. My experience with React and Redux allows me to create efficient and maintainable user interfaces and expertise in Node.js and Express.js enables me to develop robust back-end systems. Furthermore, I have experience working with PostgreSQL to design and manage efficient databases.</p>
       
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
                <span className={styles.span}>
                    {skill.name}
                    <img className={styles.imgTech} src={skill.img} alt={skill.alt} />
                </span>
            ))}
        </div>
      </div>
    </>
  );
}
