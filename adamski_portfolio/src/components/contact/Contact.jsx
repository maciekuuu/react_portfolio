import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Napisz lub zadzwoń</h5>
      <h2>Skontaktuj się ze mną</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>msadamski96@gmail.com</h5>
            <a href="mailto:msadamski96@gmail.com" target="_blank">Wyślij wiadomość</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Maciej Adamski</h5>
            <a href="https://m.me/maciejautomatyk" target="_blank">Wyślij wiadomość</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+48505860263</h5>
            <a href="https://api.whatsapp.com/send?phone=+48505860263" target="_blank">Wyślij wiadomość</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Twoje imię i nazwisko' required />
          <input type="email" name='email' placeholder='Twój Email' required />
          <textarea name="message" rows="7" placeholder='Twoja wiadomość' required ></textarea>
          <button type='submit' className='btn btn-primary'>Wyślij wiadomość</button>
        </form>
      </div>
    </section>
  )
}

export default Contact