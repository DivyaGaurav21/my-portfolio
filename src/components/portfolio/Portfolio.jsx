import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'IMDb Clone Website',
        github: 'https://github.com/DivyaGaurav21/IMDb_Clone-website',
        demo: 'https://divyagaurav21.github.io/IMDb_Clone-website/'
    },
    {
        id: 2,
        image: IMG4,
        title: 'Smart Todo List',
        github: 'https://github.com/DivyaGaurav21/TodoList_Vanilla',
        demo: 'https://divyagaurav21.github.io/TodoList_Vanilla/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Finance service app',
        github: 'https://github.com/DivyaGaurav21',
        demo: 'https://dribbble.com/shots/20247404-Finance-service-Mobile-app'
    },
    {
        id: 4,
        image: IMG2,
        title: 'Smart Home LC',
        github: 'https://github.com/DivyaGaurav21',
        demo: 'https://dribbble.com/shots/20242498-iHome-Smart-Home-Light-Controls'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Energy Expenses Platform',
        github: 'https://github.com/DivyaGaurav21',
        demo: 'https://dribbble.com/shots/20244694-Energy-Expenses-Platform'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Landing New Year',
        github: 'https://github.com/DivyaGaurav21',
        demo: 'https://dribbble.com/shots/20242163-Happy-New-Year'
    }
]

const Portfolio = () => {
  return (
      <section id="portfolio">
          <h5>My Reacent Work</h5>
          <h2>Portfolio</h2>

          <div className="container portfolio__container">
              
          {
                  data.map(item => (
                          <article key={item.id} className="portfolio__item">
                              <div className="portfolio__item-image">
                                  <img src={item.image} alt="imageport" />
                              </div>
                          <h3>{ item.title}</h3>
                              <div className="portfolio__item-cta">
                                  <a href={item.github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                                  <a href={item.demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
                              </div>
                          </article>
                )
            )      
         }
              
          </div>
    </section>
  )
}

export default Portfolio