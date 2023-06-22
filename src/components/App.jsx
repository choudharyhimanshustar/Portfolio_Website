import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
/* Calls all other components */
const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App