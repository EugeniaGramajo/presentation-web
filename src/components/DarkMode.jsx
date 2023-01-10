import React from 'react';
import '../App.css';
import {useDispatch} from "react-redux"
import {darkMode} from '../Actions/actions';

function DarkModeToggle() {
 
  const dispatch = useDispatch()
  return (
    <button onClick={()=>dispatch(darkMode())}>Dark mode</button>
  );
 };

export default DarkModeToggle;
