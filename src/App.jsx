import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
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
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight * 0.5; // Trigger when halfway to about section
        setShowParticles(scrollPosition < aboutTop);
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
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;