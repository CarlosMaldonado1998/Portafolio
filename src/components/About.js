import React from "react";
import ME from "../images/profile2.png";
import { BsCodeSlash } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaHeadphones } from "react-icons/fa";

import "../styles/About.css";

const About = () => {
  return (
    <section id="about">
      <h2>Sobre mí</h2>

      <div className="container">
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <BsCodeSlash />
              <h5>Codificando </h5>
              <small>4 años</small>
            </article>

            <article className="about_card">
              <GoLocation />
              <h5>Ecuador</h5>
              <small>Quito</small>
            </article>
            <article className="about_card">
              <MdLanguage />
              <h5>Ingles - B1</h5>
              <small>CEC - EPN</small>
            </article>
            <article className="about_card">
              <FaHeadphones />
              <h5>Hobby</h5>
              <small>Disfrutar música</small>
            </article>
          </div>
          <div className="about_content">
            <p>
              Soy un desarrollador de software con experiencia en la creación de
              soluciones tecnológicas. Me caracterizo por trabajar de manera
              efectiva en equipo, enfrentar desafíos con determinación y
              mantener siempre una actitud positiva. Mi enfoque está en la
              mejora continua y en aportar valor en cada proyecto en el que
              participo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
