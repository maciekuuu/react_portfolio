import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import Weather from './weather'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Cześć! jestem</h5>
        <h1>Maciej Adamski</h1>
        <h5 className="text-light">Automatyka przemysłowa</h5>
        <CTA />

        <HeaderSocial />

        <div className="me">
        <Weather />
        </div>
      </div>
    </header>
  )
}

export default Header
