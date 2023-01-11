import React from 'react';
import styles from "../styles/Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer}>
      <p>Eugenia Gramajo</p>
      <div className={styles.div}>
                <div className={styles.social}>
                    <a href="https://www.linkedin.com/in/eugenia-gramajo" target="_blank">
                        <img src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"></img>
                                            
                    </a>
                </div>
                <div className={styles.social}>
                    <a  href="https://github.com/EugeniaGramajo/deploy-Food" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                        
                                           
                    </a>
                </div>
                </div>
      
    </div>
  );
}



export default Footer;
