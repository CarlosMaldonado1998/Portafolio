import React from 'react'
import CV from '../assets/cv.pdf';

const Curriculum = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download="Maldonado_cv">Descargar CV</a>
        <a className='btn btn-primary' href="#contact">Contáctame</a>
    </div>
  )
}

export default Curriculum
