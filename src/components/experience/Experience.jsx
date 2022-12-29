import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import { FaJava } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { RiDatabase2Line } from 'react-icons/ri'

const Experience = () => {
  return (
      <section id='experience'>
          <h5>What Skills I Have</h5>
          <h2>My Experience</h2>

     <div className="container experience__container">
              <div className="expeience__frontend">
                  <h3>Frontend Developement</h3>
                  <div className="experience__content">
                      <article className="experience__details">
                          <BsFillPatchCheckFill className='exp_icon'/>
                          <div>
                              <h4>HTML</h4>
                              <small className="text-light">Experienced</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <BsFillPatchCheckFill className='exp_icon' />
                          <div>
                              <h4>CSS</h4>
                              <small className="text-light">Experienced</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <BsFillPatchCheckFill className='exp_icon' />
                          <div>
                              <h4>JavaScript</h4>
                              <small className="text-light">Experienced</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <BsFillPatchCheckFill className='exp_icon' />
                          <div>
                              <h4>MaterialUI</h4>
                              <small className="text-light">Intermediate</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <BsFillPatchCheckFill className='exp_icon' />
                          <div>
                              <h4>React</h4>
                              <small className="text-light">Experienced</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <BsFillPatchCheckFill className='exp_icon' />
                          <div>
                              <h4>Redux</h4>
                              <small className="text-light">Experienced</small>
                          </div>
                      </article>
                  </div>
              </div>
              {/* END OF FRONTEND  */}
              <div className="expeience__backend">
                  <h3>Backend Developement</h3>
                  <div className="experience__content">
                      <article className="experience__details">
                          <BsFillPatchCheckFill className='exp_icon' />
                          <div>
                              <h4>NodeJS</h4>
                              <small className="text-light">Intermediate</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <BsFillPatchCheckFill className='exp_icon' />
                          <div>
                              <h4>Express</h4>
                              <small className="text-light">Experienced</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <RiDatabase2Line className='exp_icon' />
                          <div>
                              <h4>MongoDB</h4>
                              <small className="text-light">Intermediate</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <RiDatabase2Line className='exp_icon' />
                          <div>
                              <h4>MySQL</h4>
                              <small className="text-light">Expeienced</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <FaCode className='exp_icon' />
                          <div>
                              <h4>DSA</h4>
                              <small className="text-light">Intermediate</small>
                          </div>
                      </article>
                      <article className="experience__details">
                          <FaJava className='exp_icon' />
                          <div>
                              <h4>Java</h4>
                              <small className="text-light">Experienced</small>
                          </div>
                      </article>
                  </div>
              </div>
      
     </div>
         
    </section>
  )
}

export default Experience