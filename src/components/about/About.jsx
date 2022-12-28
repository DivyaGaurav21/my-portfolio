import React from 'react'
import './About.css'
import ME from '../../assets/myself.jpg'
import { FaAward } from 'react-icons/fa'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { AiFillFolderOpen } from 'react-icons/ai'

const About = () => {
  return (
      <section id='about'>
          <h5>Get To Know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
              
              <div className="about__me">
                  <div className="about__me-image">
                      <img src={ME} alt="my--img" />
                  </div>
              </div>

              <div className="about__content">
                  <div className="about__cards">
                      
                      <article className="about__card">
                          <FaAward className='about__icon'/>
                          <h5>Experience</h5>
                          <small>1 year Working</small>
                      </article>
                      <article className="about__card">
                          <AiOutlineUsergroupAdd className='about__icon'/>
                          <h5>Client</h5>
                          <small>200+ Worldwide</small>
                      </article>
                      <article className="about__card">
                          <AiFillFolderOpen className='about__icon'/>
                          <h5>Project</h5>
                          <small>20+ compleated</small>
                      </article>

                  </div>
                  <p>
                      Proficient in Java, DSA, React,MatrialUI, Node , Express, JavaScript, Mongo db, sql. I Love obsessing over algorithmic problems and making all kinds of project in free time. I am driven software developer who likes to take initiative in any task I am assigned
                  </p>
                  <a href="#contact" className='btn btn-primary'>Let's Talk</a>
              </div>
          </div>
    </section>
  )
}

export default About