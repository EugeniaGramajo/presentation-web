import React from "react";
import pdf from "../Data/EugeniaGramajo(Eng).pdf"
import styles from "../styles/Contact.module.css";
import {useSelector} from "react-redux"

export default function Contact(props) {
  const spanish = useSelector(state=>state.spanishMode)
  return (
    <>
      <h1 className={styles.h1} id="contact">{
        spanish? "Contacto"
        :"Contact"
      }</h1>
      <div className={styles.social}>
        <div>
          <span>
            <a
            target="_blank"
            href="https://www.linkedin.com/in/eugenia-gramajo/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/800px-Linkedin_icon.svg.png"
                alt="LinkedIn"
              ></img>
            </a>
          </span>
        </div>
        <div>
          <span>
            <a target="_blank" href="https://github.com/EugeniaGramajo"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968896.png" alt="GitHub"/>
            </a>
          </span>
        </div>
        <div>
          <span>
            <a target="_blank" href="https://twitter.com/EugeniaGramajo" >
              <img src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"
              alt="Twitter"/>
            </a>
          </span>
        </div>
        <div className={styles.divbutton}>
        <a href={pdf} className={styles.a} download><button className={styles.download}>Download CV</button></a>
</div>
      </div>

      <form
        className={styles.form}
        action="https://formsubmit.co/gramajoeugenia@gmail.com"
        method="POST"
      >
        <div className={styles.general}>
          <div className={styles.gral}>
            <label className={styles.name}>{
              spanish? "Nombre: " : "Name: "
            }<input name="name" type="text" placeholder={spanish? "   Nombre" : "   name"}></input>
            </label>
            <label className={styles.subject}>{spanish?
                "Asunto: " : "Subject: "
              }<input type="text" name="subject" placeholder={spanish? "   Asunto" : "  Subject"}></input>
            </label>
            <label className={styles.email}>
              E-mail:{" "}
              <input type="email" name="email" placeholder= "  Email"></input>
            </label>
          </div>

          <div className={styles.textA}>
            <textarea
              className={styles.textarea}
              placeholder={spanish? "   Mensaje":"   Message"}
              name="textarea"
            ></textarea>
            <input
              type="hidden"
              name="_webhook"
              value="http://localhost:3000/"
            ></input>
          </div>
        </div>
        <label>
          
          <input className={styles.submit} value={spanish? "Enviar" : "Send"} type="submit"></input>
        </label>
      </form>
    </>
  );
}
