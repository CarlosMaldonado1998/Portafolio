import React from "react";
import "../styles/Header.css";
import Curriculum from "./Curriculum";
import Perfil from "../images/profile.png";
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hola soy</h5>
        <h1>Carlos Maldonado</h1>
        <h5 className="text-light">Desarrollador Junior</h5>
        <Curriculum />
        <div className="me">
          <img src={Perfil} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
