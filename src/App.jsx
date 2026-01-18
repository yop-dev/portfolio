import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import CurrentlyWorkingOn from './components/CurrentlyWorkingOn';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CursorParticles from './components/CursorParticles';
import TerminalLoader from './components/TerminalLoader';

function App() {
  const [showParticles, setShowParticles] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Always use dark mode
    document.documentElement.classList.add('dark');
  }, []);

  // Handle scroll to disable particles after Hero section
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const skillsTop = skillsSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight * 0.5; // Trigger when halfway to skills section
        setShowParticles(scrollPosition < skillsTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
      {isLoading && <TerminalLoader onComplete={handleLoadingComplete} />}

      {!isLoading && (
        <>
          <CursorParticles isActive={showParticles} />
          <main>
            <Hero />
            <Skills />
            <CurrentlyWorkingOn />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;