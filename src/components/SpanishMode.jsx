import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { spanishMode } from "../Actions/actions";
import styles from "../styles/SpanishMode.module.css"

export default function SpanishMode(){

    const spanish = useSelector(state=>state.spanishMode)
    const dispatch = useDispatch()
    console.log(spanish)
    return(
        <>
        <div className={styles.switchtoggle}>
        <input type="checkbox" id="bluetooth"onChange={()=>dispatch(spanishMode())} />
        <label for="bluetooth"></label>
    </div>
        </>
    )
}