import React from 'react'
import './Myservice.css'
import { BsCheck } from 'react-icons/bs'

const Myservice = () => {
    return (
        <section id="myservice">
            <h5>What I offer</h5>
            <h2>Services</h2>

            <div className="container service__container">
                {/* UI/UX Design  */}
                <article className="service">
                    <div className="service__head">
                        <h3 className='favs'>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>design ideas using storyboards, process and sitemaps</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Design graphical UI, like menus, tabs and widgets</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Build page navigation buttons and search fields</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Develop UI mockups and prototypes</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Create original graphic designs</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Evaluate user requirements in collaboration</p>
                        </li>
                    </ul>
                </article>
                {/* WEB DEVELOPEMENT  */}
                <article className="service">
                    <div className="service__head">
                        <h3 className='favs'>Web Developement</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Writing less Code In react and build user requirement UI</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Wekk Knowledge of react and redux for building Complex UI</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Create an API by Node(Express)</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Testing web applications</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Well Knowledge of MYSQL and MongoDB database</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Having an Idea about How i Design a FullStack WEB</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Troubleshooting problems with performance or user experience.</p>
                        </li>
                    </ul>
                </article>
                {/* CONTENT CREATION  */}
                <article className="service">
                    <div className="service__head">
                        <h3 className='favs'>Contact Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Blogs:high-quality, and well-written pieces about topics</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>CaseStudio:Case studies are a good way of making issues relatable</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Listicles:List articles may seem somewhat gimmicky</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Ebook:type of long-form content, and as the name suggests,</p>
                        </li>
                        <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>nfographics are among the most popular types of content</p>
                        </li>
                        {/* <li>
                            <BsCheck className='sevice__list-icon'/>
                            <p>Gather and evaluate user requirements in collaboration</p>
                        </li> */}
                    </ul>
                </article>
            </div>
        </section>
  )
}

export default Myservice