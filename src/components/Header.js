import React from "react";
import "../styles/Header.css";
import Curriculum from "./Curriculum";
import Perfil from "../images/profile.png";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div>
          <h1>Carlos Maldonado</h1>
          <h2 className="text-light">Desarrollador de Software</h2>
          <h5 className="text-light">
            Tecnológo Superior en Desarrollo de Software
          </h5>
          <h className="text-light">Escuela Politécnica Nacional</h>
          <Curriculum />
        </div>
        <div>
          <div className="me">
            <img src={Perfil} alt="me" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
