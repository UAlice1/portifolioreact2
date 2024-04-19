// Header.js

import React from 'react';
const Header = () => {
  return (
    <header>
      <nav className='float-right -mt-[300px]'>
        <ul>
          <li><a href="#about">Home</a></li>
          <li><a href="#projects">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#portifolio">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <i class="fas fa-times" onclick="closemenu()"></i>
        </ul>
        <i class="fas fa-bars" onclick="openmenu()"></i>
      </nav>
      <div className="header-text ">
                <p>FrontEnd Developer</p>
                <h1>Hi, I'm <span>Alice</span><br/> Trix From Rwanda</h1>
            </div>
            
      
    </header>
  );
}

export default Header;
