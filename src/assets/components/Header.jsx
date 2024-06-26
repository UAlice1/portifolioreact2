// Header.js

import React from 'react'

const Header = () => {
  return (
    <header>
      <nav className='float-right -mt-[40px]'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#Contact">Contact</a></li>
          <i class="fas fa-times" onclick="closemenu()"></i>
        </ul>
        <i class="fas fa-bars" onclick="openmenu()"></i>
      </nav>
      <div className="header-text ">
        <img src='./images/logo.PNG' className='mt-[-250px] rounded-[20%]'/><br/><br/>
                <p>FrontEnd Developer</p>
                <h1>Hi, I'm <span>Alice</span><br/> Trix From Rwanda</h1>
            </div>

      
    </header>
  );
}

export default Header;
