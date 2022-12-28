import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'
import { AiFillPhone } from 'react-icons/ai'

const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="https://www.linkedin.com/in/divya-gaurav-917889215/" target="_blank" rel='noreferrer'> <AiFillLinkedin /></a>
          <a href="https://github.com/DivyaGaurav21" target="_blank" rel='noreferrer'> < FaGithub /></a>
          <a href="mailto:divyag.ug16.ee@nitp.ac.in" target="_blank" rel='noreferrer'> < TfiEmail /></a>
          <a href="tel:9334802030" target="_blank" rel='noreferrer'> < AiFillPhone /></a>
      </div>
  )
}

export default HeaderSocials