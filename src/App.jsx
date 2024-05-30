import React from 'react';
import HeaderSection from './Components/Header/HeaderSection';
import About from './Components/MainContent/About';
import Skills from './Components/MainContent/Skills';
import Education from './Components/MainContent/Education';
import Projects from './Components/MainContent/Projects';
import Contact from './Components/Footer/Contact';

const App = () => {
  return (
   <div className='flex flex-col justify-center'>
   <section id='home'>
   <HeaderSection  />
   </section>
   <section id='about'>
   <About />
   </section>
   <section id='skills'>
    <Skills />
    </section>
    <section id='education'>
      <Education />
    </section>
    <section id='projects'>
        <Projects />
    </section>
    <section id='contact'>
      <Contact />
    </section>
   </div>
  )
}

export default App
