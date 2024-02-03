import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Dowiedz się więcej</h5>
      <h2>o mnie</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Doświadczenie</h5>
              <small>6 lat jako automatyk</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Lider</h5>
              <small>zespołu automatyków</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Opiekun</h5>
              <small>15 linii produkcyjnych</small>
            </article>
          </div>

          <p>
          Moim celem jest usprawnianie linii produkcyjnych i podejmowanie działań prewencyjnych żeby eliminować
zbędne przestoje. Do analizy awaryjności poszczególnych linii stworzyłem rejestr awarii w oparciu o formularze
i arkusze Google co w pewnym stopniu pełni rolę systemu CMMS i pozwala na
dokładniejszą analizę przyczyn przestojów linii produkcyjnych.
          </p>

          <a href="#contact" className='btn btn-primary'>Porozmawiajmy!</a>
        </div>
      </div>
    </section>
  )
}

export default About