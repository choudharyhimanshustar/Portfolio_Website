import React from 'react'
import './Navbar.css'
/* The <nav> tag defines a set of navigation links. */

/* A hash - `#` within a hyperlink specifies an HTML element id to which the window should be scrolled.
href="#some-id" would scroll to an element on the current page such as <div id="some-id">. */

import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
import { AiOutlineFile } from 'react-icons/ai';
import { BiBookAdd } from 'react-icons/bi';
import { IoMdContact } from 'react-icons/io';

import { useState } from 'react';

const Navbar = () => {

  const [activeNav, setActive] = useState("#");/* Using 'useState' to manage compnents on navbar. 
  Indicates which section is clicked on navbar. */

  return (
    
      <nav>
        <a href='#' onClick={() => setActive("#")} className={activeNav == "#" ? 'active' : ""}><AiFillHome /></a>
        <a href='#about' onClick={() => setActive("#about")} className={activeNav == "#about" ? 'active' : ""}><BsInfoCircleFill /></a>
        <a href="#experience" onClick={() => setActive("#experience")} className={activeNav == "#experience" ? 'active' : ""}><AiOutlineFile /></a>
        <a href="#projects" onClick={() => setActive("#projects")} className={activeNav == "#projects" ? 'active' : ""}><BiBookAdd /></a>
        <a href="#contact" onClick={() => setActive("#contact")} className={activeNav == "#contact" ? 'active' : ""}><IoMdContact /></a>
      </nav>
    
  )
}

export default Navbar