import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Szafa sterownicza wózka samojezdnego do kręgów stali 30 ton',
    github: 'https://github.com',
    demo: 'https://pixabay.com/pl/photos/rozdzielnica-prze%C5%82%C4%85cz-gablot%C4%99-2069791/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Moje ostatnie projekty</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio