import pusheen from "./Pusheen.gif"
import personalWeb from "./Web.gif"
import doblev from "./doblev.gif"
import videogames from "./videogames.gif"

export const tableTechSkills = [
  {
    name: "HTML5",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    alt: "HTML5",
  },
  {
    name: "CSS3",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
    alt: "CSS3",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    alt: "JavaScript",
  },
  {
    name: "React",
    img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    alt: "React",
  },
  {
    name: "Redux",
    img: "https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/redux.png",
    alt: "Redux",
  },
  {
    name: "Node.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "NodeJS",
  },
  {
    name: "Express.js",
    img: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    alt: "ExpressJS",
  },
  {
    name: "PostgreSQL",
    img: "https://raw.githubusercontent.com/sachinverma53121/sachinverma53121/master/icons/psql.png",
    alt: "Postgresql",
  },
];

export const softSkills = [
  {
    name: "Adaptability",
    spanish:"Adaptabilidad",
    img: "https://em-content.zobj.net/thumbs/120/apple/325/puzzle-piece_1f9e9.png",
    alt: "Adaptability",
  },
  {
    name: "Curiosity",
    spanish: "Curiosidad",
    img: "https://em-content.zobj.net/thumbs/120/apple/325/magnifying-glass-tilted-left_1f50d.png",
    alt: "Curiosity",
  },
  {
    name: "Critical thinking",
    spanish: "Pensamiento critico",
    img: "https://em-content.zobj.net/thumbs/120/apple/325/brain_1f9e0.png",
    alt: "Critical thinking",
  },
  {
    name: "Conflict resolution",
    spanish: "Resolución de conflictos",
    img: "https://em-content.zobj.net/thumbs/72/apple/325/handshake_medium-light-skin-tone_1f91d-1f3fc_1f3fc.png",
    alt: "Conflict resolution",
  },
  {
    name: "Resilience",
    spanish: "Resiliencia",
    img: "https://em-content.zobj.net/thumbs/120/apple/325/woman-climbing-medium-skin-tone_1f9d7-1f3fd-200d-2640-fe0f.png",
    alt: "Resilience",
  },

  {
    name: "Teamwork",
    spanish: "Trabajo en equipo",
    img: "https://em-content.zobj.net/thumbs/120/apple/325/busts-in-silhouette_1f465.png",
    alt: "Teamwork",
  },
];

export const projects = [
    {
        name: "PI Videogames",
        deploy: "https://pi-videogames-eg.vercel.app/",
        video: videogames,
        spanish: "Este es mi proyecto individual de soyHenry bootcamp aprobado, donde tuve que aplicar mis conocimientos de full stack y realizar tanto el backend como el frontend para cumplir con los requisitos solicitados",
        summary:"This is my approved individual project at soyHenry bootcamp, where I have to apply all my full stack knowledge to fulfil the requirements of frontend and backend",
    },
    {
        name:"Pusheen Recipes",
        deploy:"https://deploy-food.vercel.app/",
        video:pusheen,
        spanish:"Este sitio web es un proyecto personal donde puse toda mi pasion y entusiasmo por la cocina junto con lo aprendido para ofrecer una web de recetas. Ha sido una experiencia increible y lleno de crecimiento",
        summary:" This website is my personal project where I put all my passion and enthusiasm for cooking and using my skills learned in bootcamp. I created this site as a way to practice what I was learning in bootcamp and to make it an amazing experience."
    },
    {
        name:"Personal Web Page",
        deploy:"https://eugeniagramajo.vercel.app/",
        video:personalWeb,
        spanish:"Esta es mi Portfolio-Web-Page donde muestro mis proyectos y habilidades y que soy capaz de hacer.",
        summary:"This is my own web site to introduce myself, share my projects and skills. I want to show what I am able to do."
    },
    {
      name:"Doble v Estudio de Tatuajes",
      deploy:"https://doble-v.vercel.app/",
      video: doblev,
      spanish:"Esta es una web para un cliente que quería algo especial para su negocio. Este es el deploy que hoce para mostrarselo, estoy esperando el dominio para terminarlo.",
      summary:"This is a web page for a client who wanted something special for his business, this is the deploy I made to show him the progress. I am wating the domain to finish it",
    }

]