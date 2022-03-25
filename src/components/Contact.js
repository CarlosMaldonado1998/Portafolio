import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Medios de comunicación</h5>
      <h2>Contáctame</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>kardaniel1998@gmail.com</h5>
            <a href="mailto:kardaniel1998@gmail.com" target="_blank">
              Enviar mensaje
            </a>
          </article>
          <article className="contact_option">
            <BsGithub className="contact_option-icon" />
            <h4>Github</h4>
            <h5>Carlos Maldonado</h5>
            <a href="https://github.com/CarlosMaldonado1998" target="_blank">
              Ver perfil
            </a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Carlos Maldonado</h5>
            <a
              href="https://www.linkedin.com/in/carlosmaldonado1998"
              target="_blank"
            >
              Ver perfil
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>Quito, Ecuador</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+593990919625"
              target={"_blank"}
            >
              Enviar mensaje
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
