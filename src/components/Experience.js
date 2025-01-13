import React from "react";
import "../styles/Experience.css";
import PROGRAMMER from "../images/programador.png";
import PROGRAMACION from "../images/programacion.png";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experiencia</h2>

      <div className="container ">
        <div class="content">
          <ul class="team">
            <li class="member">
              <div class="thumb">
                <img
                  className="thumb_image"
                  src={PROGRAMMER}
                  alt="PROGRAMMER"
                />
              </div>
              <div class="description">
                <h3>Developer - Krugercorporation (Jun 2022 - Actualidad)</h3>
                <p>
                  Desarrollo de interfaces web interactivas y responsivas
                  utilizando Next.js y React, mejorando la experiencia del
                  usuario y optimizando el rendimiento de las aplicaciones.
                </p>
                <p>
                  Implementación de APIs y servicios backend con Spring Boot,
                  asegurando la integración fluida de funcionalidades y la
                  seguridad de los datos.
                </p>
                <p>
                  Administración y optimización de bases de datos relacionales,
                  especialmente PostgreSQL, para mejorar la eficiencia en la
                  gestión de datos y consultas.
                </p>
              </div>
            </li>
          </ul>
          <ul class="team">
            <li class="member">
              <div class="thumb">
                <img src={PROGRAMACION} alt="PROGRAMACION" />
              </div>
              <div class="description">
                <h3>
                  Front-End Developer - Grupo Menta ( Dic 2020 - May 2021)
                </h3>
                <p>
                  Desarrollo de interfaces web interactivas y responsivas
                  utilizando Next.js y React, mejorando la experiencia del
                  usuario y optimizando el rendimiento de las aplicaciones.
                </p>
                <p>
                  Desarrollo de aplicaciones web y móviles utilizando Next.js y
                  React Native, optimizando la experiencia de usuario en
                  diferentes plataformas.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
