import React from 'react'
import './About.css';
import { SlBadge } from 'react-icons/sl';
import { BsFileCheck } from 'react-icons/bs';
/* Gives a brief description about me. Simple HTML tags are used such as <article> for article.  */
const About = () => {
  return (
    <div id="about">
      <h2>
        About Me
      </h2>
      <div className='about_container'>
        <div className='about_me'>
          <img src="https://i.pinimg.com/564x/c8/d5/b6/c8d5b67988c661a128aadb9d383aa366.jpg" className='about_image' />
        </div>
        <div>


          <div className='about_cards'>

            <article className='cards' >
              <SlBadge className='about_icons' />
              <h3>
                Experience
              </h3>
              <br></br>
              <span>
                Fresher
              </span>
            </article>

            <article className='cards' >
              <BsFileCheck className='about_icons' />
              <h3>
                Projects
              </h3>
              <br></br>
              <span>
                Cryptocoins Drumkit TicTacToe
              </span>
            </article>

          </div>
          <p className='description'>
            I hold a B.Tech in Computer Science and Engineering from SRM Institute of Science and Technology.
            I have expertise in web development using HTML, CSS, JavaScript, React, NodeJS, and more.
            My projects include creating a website for a digital Simon game,
            and a crypto coins tracker website. I am proficient in C++, familiar with databases like MongoDB, and experienced
            with RESTful APIs and version control using GitHub. I actively participate in competitive programming events,
            constantly enhancing my problem-solving skills. I am a versatile software developer, ready to take on new
            challenges in the field.
          </p>
        </div>
      </div>

    </div>

  )
}

export default About

/* Section about me. A picture is used and cards are used to describe experience and projects. */