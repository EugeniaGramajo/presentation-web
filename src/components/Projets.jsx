import React from "react";
import { projects } from "../Data/Data";
import styles from "../styles/Projects.module.css"

export default function Projects(props){
    return(
        <>
        <div id="projects">
            <h1 className={styles.h1}>Projects</h1>
        { projects.map(project=>(
            <div className={styles.general} >
               
                
            <img className={styles.video} src={project.video}></img>    
            <div className={styles.project}>  
            <div><h1 className={styles.h2}>{project.name}</h1></div>  
                
                <div className={styles.summary}>{project.summary}</div>
                <div className={styles.diva}> <a target="_blank"  href={project.deploy}>Check the deploy</a></div>
           </div>
           
           
                 </div>
        ))}
        </div>

        </>
    )
}