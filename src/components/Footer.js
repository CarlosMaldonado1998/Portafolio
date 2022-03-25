import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#skillsdev">Habilidades</a>
        </li>
        <li>
          <a href="#portfolio">Portafolio</a>
        </li>
        <li>
          <a href="#about">Sobre mí</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/carlosmaldonado1998"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/CarlosMaldonado1998"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small> Hecho con React</small>
      </div>
    </footer>
  );
};

export default Footer;
