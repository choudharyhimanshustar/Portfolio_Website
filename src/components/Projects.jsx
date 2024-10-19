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
          <h2>Digital Memory</h2>
          
          <p>
            The digital memory platform allows users to create, categorize, and manage memories with full CRUD (Create, Read, Update, Delete) functionalities, featuring secure authentication via JWT for login and signup to enhance data privacy. It enables easy organization by offering categorization of memories into themes like 'Family,' 'Achievements,' 'Travel,' and 'Milestones.'
          </p>
          <div className='view_project'>
            <a href="https://digital-memory-one.vercel.app/" className='btn links'>Live Demo</a>
            <a href="https://github.com/choudharyhimanshustar/DigitalMemory" className='btn links'>Github Repo</a>
          </div>
        </div>


        <div className='content'>
          <h2>Crypto Tracker</h2>
          
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
          <h2>Anonymous Chat App</h2>
          
          <p>
            Developed a fully functional anonymous chat application that enables real-time communication while ensuring user privacy. Utilized WebSocket for efficient, instantaneous message delivery, allowing seamless connections and smooth conversations without noticeable delays. Designed a responsive user interface with ReactJS to provide a consistent and user-friendly experience across desktops, tablets, and smartphones.
          </p>
          <div className='view_project'>
            <a href="https://anonymous-chat-app-eight.vercel.app/" className='btn links'>Live Demo</a>
            <a href="https://github.com/choudharyhimanshustar/AnonymousChatApp" className='btn links'>Github Repo</a>
          </div>
        </div>

        <div className='content'>
          <h2>Drum Kit</h2>
          
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
