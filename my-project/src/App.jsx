import React from 'react';
import Header from './assets/components/Header.jsx';
import About from './assets/components/About.jsx'; 
import Skills from './assets/components/Skills.jsx';
import Projects from './assets/components/Projects.jsx';
import Contact from './assets/components/Contact.jsx';

import './App.css';

const App = () => {
  return (
    <div className=''>
      <Header />
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
