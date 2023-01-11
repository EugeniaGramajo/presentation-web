import React from 'react';
import '../App.css';
import {useDispatch} from "react-redux"
import {darkMode} from '../Actions/actions';
import styles from "../styles/DarkMode.module.css"

function DarkModeToggle() {
 
  const dispatch = useDispatch()
  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={()=>dispatch(darkMode())}></input>
      <span className={styles.slider}></span>
    </label>
  );
 };

export default DarkModeToggle;
