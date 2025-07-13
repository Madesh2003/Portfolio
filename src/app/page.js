import React from 'react';
import HeroSection from './(sections)/HeroSection';
import { FloatingNav } from './(components)/NavBar';
import AboutSection from './(sections)/AboutSection';
import ExpertiseSection from './(sections)/ExpertiseSection';
import ScrollProgressBar from './(components)/ScrollProgressBar';
import ProjectSection from './(sections)/ProjectSection';
import ContactSection from './(sections)/ContactSection';

const Home = () => {
  return (
    <div className='min-lg:px-10 max-md:px-5'>
      <ScrollProgressBar />
      <FloatingNav />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectSection />
      <ContactSection />
    </div>
  )
}

export default Home