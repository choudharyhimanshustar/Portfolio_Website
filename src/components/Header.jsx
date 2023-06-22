import React from 'react'
import CV from '../assests/Himanshu_Resume.pdf';
import './Header.css';
/* Importing various icons from 'react-icons' */
import { FaLinkedin } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
/* Contains image, heading, Social Handles */
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className='heading'>
          <h3>
            Hi, I am
          </h3>
          <h1>
            Choudhary Himanshu
          </h1>
          <h5>
            Web Developer
          </h5>
          <a href={CV} download className="cv btn">Download CV</a>
          <img src='https://i.pinimg.com/236x/90/05/ef/9005ef6f70bb2a49db4c7c60e0185d3e.jpg' />
        </div>


        <div className='socials'>
          <a href="https://www.linkedin.com/in/choudhary-himanshu-60615625a/" className='about_icons'><FaLinkedin /></a>
          <a href="https://github.com/choudharyhimanshustar" className='about_icons'><FiGithub /></a>
          <a href="https://www.instagram.com/himanshuch3003/" className='about_icons'><FiInstagram /></a>
        </div>

      </div>
    </header>
  )
}

export default Header