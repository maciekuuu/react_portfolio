import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Jakie umiejętności posiadam</h5>
      <h2>Moje doświadczenie</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Utrzymanie ruchu</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Czytanie dokumentacji technicznej</h4>
                <small className='text-light'>Zaawansowany</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Analiza i rozwiązywanie problemów</h4>
                <small className='text-light'>Zaawansowany</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Koordynowanie działań automatyków</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Kontakt z serwisami krajowymi i zagranicznymi</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Modernizacja układów sterowania</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Kontrola stanu magazynu części zamiennych</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Programowanie PLC + HMI</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Mitsubishi PLC</h4>
                <small className='text-light'>Zaawansowany</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Siemens PLC</h4>
                <small className='text-light'>Początkujący</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Allen-Bradley PLC</h4>
                <small className='text-light'>Początkujący</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Mitsubishi HMI</h4>
                <small className='text-light'>Zaawansowany</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Napędy Mitsubishi</h4>
                <small className='text-light'>Średnio-zaawansowany</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Napędy ABB</h4>
                <small className='text-light'>Średnio-zaawansowany</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Napędy LS</h4>
                <small className='text-light'>Średnio-zaawansowany</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience