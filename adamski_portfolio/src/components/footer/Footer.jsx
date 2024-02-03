import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Maciej Adamski</a>

      <ul className='permalinks'>
        <li><a href="#">Początek</a></li>
        <li><a href="#about">O mnie</a></li>
        <li><a href="#experience">Doświadczenie</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><FaLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Maciej Adamski - automatyka przemysłowa. Wszelkie prawa zastrzeżone.</small>
      </div>
    </footer>
  )
}

export default Footer