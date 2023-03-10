import React, { useState} from 'react'
import './Nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { RiServiceLine } from 'react-icons/ri'
import { MdPermContactCalendar } from 'react-icons/md'


const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
  return (
      <nav>
          <a href="#header" onClick={() => setActiveNav('#')}
              className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
          <a href="#about" onClick={() => setActiveNav('#about')}
              className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
          <a href="#experience" onClick={() => setActiveNav('#experience')}
              className={activeNav === '#experience' ? 'active' : ''}><BsBook/></a>
          <a href="#myservice" onClick={() => setActiveNav('#myservice')}
              className={activeNav === '#myservice' ? 'active' : ''}><RiServiceLine/></a>
          <a href="#contact" onClick={() => setActiveNav('#contact')}
              className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar/></a>
    </nav>
  )
}

export default Nav