import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';
import profileImage from '../images/JD2.jpg';
import defaultBg from '../images/def-bg.png';

const Hero = () => {
  const [videoBgError, setVideoBgError] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper to determine if a link should be visible
  const shouldShowLink = (sectionId) => {
    return activeSection === 'hero' || isExpanded || activeSection === sectionId;
  };

  // Handle link clicks
  const handleLinkClick = (sectionId) => {
    if (activeSection === sectionId) {
      // If clicking the currently active section, toggle expansion
      setIsExpanded(!isExpanded);
    } else {
      // If clicking a different section, navigate and collapse
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    const sections = ['hero', 'skills', 'currently-working', 'projects', 'experience', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-15% 0px -35% 0px', // Adjusted to be better for mobile
      threshold: 0.1 // Lower threshold to detect tall sections on mobile
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Verify we aren't at the very bottom (handled by scroll listener)
          if (window.innerHeight + window.scrollY < document.body.offsetHeight - 100) {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Handle scroll specific cases (Top and Bottom)
    const handleScroll = () => {
      // Top of page
      if (window.scrollY < 100) {
        setActiveSection('hero');
        setIsExpanded(false);
      }

      // Bottom of page (Contact)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Video or Image */}
      <div className="absolute inset-0 z-0">
        {!videoBgError ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onError={() => setVideoBgError(true)}
            onLoadedData={() => setVideoBgError(false)}
            style={{
              pointerEvents: 'none',
              objectFit: 'cover'
            }}
          >
            <source src="/videos/hero-bg-2-cropped.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={defaultBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Minimal Header Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 py-3 md:py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <motion.div
              layout
              onMouseEnter={() => setIsExpanded(true)}
              onMouseLeave={() => setIsExpanded(false)}
              className="flex items-center gap-4 sm:gap-6 lg:gap-8 px-6 py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-md rounded-full border border-white/20 dark:border-gray-700/30 transition-all duration-300"
            >
              <AnimatePresence mode="popLayout">
                {shouldShowLink('skills') && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, width: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to="skills"
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleLinkClick('skills')}
                      className={`text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer ${activeSection === 'skills' ? 'text-white' : 'text-white hover:text-blue-400'
                        }`}
                    >
                      Skills
                    </Link>
                  </motion.div>
                )}

                {shouldShowLink('currently-working') && (
                  <motion.div
                    key="currently-working"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, width: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to="currently-working"
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleLinkClick('currently-working')}
                      className={`text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer ${activeSection === 'currently-working' ? 'text-white' : 'text-white hover:text-blue-400'
                        }`}
                    >
                      Building
                    </Link>
                  </motion.div>
                )}

                {shouldShowLink('projects') && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, width: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to="projects"
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleLinkClick('projects')}
                      className={`text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer ${activeSection === 'projects' ? 'text-white' : 'text-white hover:text-blue-400'
                        }`}
                    >
                      Work
                    </Link>
                  </motion.div>
                )}

                {shouldShowLink('experience') && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, width: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to="experience"
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleLinkClick('experience')}
                      className={`text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer ${activeSection === 'experience' ? 'text-white' : 'text-white hover:text-blue-400'
                        }`}
                    >
                      Experience
                    </Link>
                  </motion.div>
                )}

                {shouldShowLink('contact') && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, width: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to="contact"
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => handleLinkClick('contact')}
                      className={`text-xs sm:text-sm font-medium transition-colors duration-300 cursor-pointer ${activeSection === 'contact' ? 'text-white' : 'text-white hover:text-blue-400'
                        }`}
                    >
                      Contact
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left Column - Profile Photo */}
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-end order-1 md:order-1">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-2xl" />
                {/* Image Container */}
                <div className="absolute inset-1.5 sm:inset-2 rounded-full overflow-hidden bg-gray-900">
                  <img
                    src={profileImage}
                    alt="Joner De Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="text-center md:text-left order-2 md:order-2">
              <h1 className="mb-2 sm:mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Joner De Silva
              </h1>

              <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-blue-400 font-medium">
                Full Stack Developer | AI | Machine Learning
              </p>

              <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  I'm a Full Stack Developer, studied Computer Science; with hands-on experience building production-ready web applications
                  and AI-powered systems. I've worked across frontend and backend stacks, developing RESTful APIs,
                  integrating modern frameworks, and contributing to real-world products used by end users.
                </p>

                <p className="hidden sm:block">
                  My background includes building scalable web features using technologies such as React, Vue, Angular,
                  and Ruby on Rails, as well as integrating AI workflows with tools like LangChain, OpenAI, Hugging Face,
                  and Groq.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm sm:text-base font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;