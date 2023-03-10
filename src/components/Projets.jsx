import React from "react";
import { useSelector } from "react-redux";
import { projects } from "../Data/Data";
import styles from "../styles/Projects.module.css"

export default function Projects(props){

    const darkMode=useSelector(state=>state.darkMode)
    const spanish = useSelector(state => state.spanishMode)

    return(
        <>
        <div id="projects">
            <h1 className={styles.h1}>{spanish? "Proyectos" :"Projects"}</h1>
        { projects.map(project=>(
            <div className={styles.general} >
               
                
            <img className={styles.video} src={project.video} alt={project.name}></img>    
            <div className={styles.project}>  
            <div><h1 className={styles.h2}>{project.name}</h1></div>  
                
                <div className={styles.summary}>{spanish? project.spanish : project.summary}</div>
                <div className={styles.diva}> <a target="_blank"  href={project.deploy}>Check the deploy</a></div>
           </div>
           
           
                 </div>
        ))}
        </div>

        </>
    )
}