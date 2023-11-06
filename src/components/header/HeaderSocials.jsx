import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abdelmajid-elousse/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/mjidelouss" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/mji_sme/" target="_blank"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials