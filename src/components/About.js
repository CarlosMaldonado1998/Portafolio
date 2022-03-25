import React from 'react'
import ME from '../images/profile2.png';
import {BsCodeSlash} from 'react-icons/bs';
import {MdLanguage} from 'react-icons/md';
import {GoLocation} from 'react-icons/go';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about">
      <h5>conóceme</h5>
      <h2>Sobre mí</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img  src={ME} alt='ME'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <BsCodeSlash />
              <h5>Codificando </h5>
              <small>2 años</small>
            </article>
            <article className='about_card'>
              <GoLocation />
              <h5>Ecuador</h5>
              <small>Quito</small>
            </article>
            <article className='about_card'>
              <MdLanguage />
              <h5>Ingles - B1</h5>
              <small>CEC - EPN</small>
            </article>
          </div>

          <div className='about_content'>
            <p>
            Hola. Soy desarrollador web Junior, me llamo Carlos Maldonado. Estudie la Tecnología de Desarrollo de Software en la Escuela Politécnica Nacional, me gusta el desarrollo de software y trato de estar en continuo aprendizaje. He trabajado en equipo con actitud positiva, pues todo problema tiene una posible solución.
            </p>
          </div>
          <a href='#contact' className='btn btn-primary'> Hablemos </a>
        </div>
      </div>
      
    </section>
  )
}

export default About