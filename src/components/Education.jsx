import React from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Education.module.css"

export default function Education(props){

    const darkMode = useSelector(state=>state.darkMode)
    
    return(
        <div id="education" className={styles.div}>
        <h1 className={styles.h1} >Education</h1>
        <div className={styles.cont}>
            <img src={`${darkMode!==true? "https://i.imgur.com/4EW16dc.gif" : "https://i.imgur.com/kumxYBh.gif"}`} alt="Hello World" />
            <p className={styles.p}>My education journey has been an incredible experience and solidified my passion for programming. I began my formal education at Henry Bootcamp in 2022, but it's been the self-directed learning that I've done since then that has really allowed me to flourish and find my true calling. I have a mix of both Bootcamp education and self-teaching that has prepared me well to be an asset to any team in this field. I am always looking for new opportunities to learn and grow my skills. I'm confident that my unique combination of classroom learning and self-study makes me adaptable and ready to make an impact in the programming world.</p>
        </div>
        </div>
    )
}