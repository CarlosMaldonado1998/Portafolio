import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import "../styles/Nav.css";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [activeNav, setActiveNav] = useState("#");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <div className="list">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            Inicio
          </a>

          <a
            href="#skillsdev"
            onClick={() => setActiveNav("#skillsdev")}
            className={activeNav === "#skillsdev" ? "active" : ""}
          >
            Habilidades
          </a>

          <a
            href="#portfolio"
            onClick={() => setActiveNav("#portfolio")}
            className={activeNav === "#portfolio" ? "active" : ""}
          >
            Portafolio
          </a>

          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            Sobre mí
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            Contacto
          </a>
        </div>
      )}

      <a onClick={toggleNav} className="icon_list">
        <BsList />
      </a>
    </nav>
  );
};

export default Nav;
