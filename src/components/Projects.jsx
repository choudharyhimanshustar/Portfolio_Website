import React from 'react'
import './Projects.css';
const Projects = () => {
  return (
    <div id="projects">
      <h2>
        Projects
      </h2>
      <div className='projects'>
        <div className='content'>
          <h2>Tindog</h2>
          <img src="https://shorturl.at/awMSY" className='project_img'/>
          <p>
            Welcome to Tindog, the pawsome website that brings together dogs and their pawrents! Tindog is a unique
            platform designed exclusively for our furry friends, where you can connect, mingle, and even find love for your beloved
            pooch. Created using basic HTML and CSS, Tindog provides a simple yet charming interface that celebrates
            the joy of canine companionship.
          </p>
          <div className='view_project'>
            <a href="https://choudharyhimanshustar.github.io/Tindog/" className='btn links'>Live Demo</a>
            <a href="https://github.com/choudharyhimanshustar/Tindog" className='btn links'>Github Repo</a>
          </div>
        </div>


        <div className='content'>
          <h2>Crypto Tracker</h2>
          <img src="https://shorturl.at/cyNWZ" className='project_img'/>
          <p>
            Welcome to CryptoTracker, your go-to destination for all things cryptocurrency! Whether you're a seasoned
            crypto investor or just getting started, CryptoTracker is here to empower you with real-time information on the
            exciting world of digital currencies. Our website provides comprehensive data on crypto coins,
            including their current price, ranking, market capitalization, and much more.
          </p>
          <div className='view_project'>
            <a href="https://crypto-tracker-one-mu.vercel.app/" className='btn links'>Live Demo</a>
            <a href="https://github.com/choudharyhimanshustar/Crypto_Tracker" className='btn links'>Github Repo</a>
          </div>
        </div>

        <div className='content'>
          <h2>Tic Tac Toe</h2>
          <img src="https://shorturl.at/bgovA" className='project_img'/>
          <p>
            Welcome to Tic Tac Toe Online, a captivating website that brings the
            classic game of Tic Tac Toe to life using the power of React! Immerse yourself in this beloved childhood
            game and experience the thrill of strategic moves and intense competitions, right from the comfort of your browser.
          </p>
          <div className='view_project'>
            <a href="https://tic-tac-toe-nine-bay.vercel.app/" className='btn links'>Live Demo</a>
            <a href="https://github.com/choudharyhimanshustar/TicTacToe" className='btn links'>Github Repo</a>
          </div>
        </div>

        <div className='content'>
          <h2>Drum Kit</h2>
          <img src="https://shorturl.at/nGSY5" className='project_img'/>
          <p>
            Welcome to DrumKit Online, an electrifying website that allows
            you to unleash your inner rhythm and become a drumming maestro! Immerse yourself in the world of percussion with our virtual drum kit. With its intuitive
            design and responsive interface, DrumKit Online offers an authentic drumming experience right at your fingertips.
          </p>
          <div className='view_project'>
            <a href="https://choudharyhimanshustar.github.io/DrumKit/" className='btn links'>Live Demo</a>
            <a href="https://github.com/choudharyhimanshustar/DrumKit" className='btn links'>Github Repo</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
