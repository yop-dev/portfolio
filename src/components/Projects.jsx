import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import tbImage from '../images/TB.png';
import interviewerImage from '../images/interviewer.png';
import thesisImage from '../images/thesis.png';
import legislationImage from '../images/legislation.png';
import adshieldImage from '../images/adshieldAI.png';
import eventsImage from '../images/events.png';
import ticketingImage from '../images/ticketing.png';

const Projects = () => {
  const [focusedProject, setFocusedProject] = useState(0); // Start with middle project focused
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      title: 'RA 10173: Compliance Checker',
      description:
        'A web-app that helps organizations comply with the Data Privacy Act of 2012 in the Philippines, providing comprehensive resources and automated compliance tools.',
      image: legislationImage,
      technologies: ['JavaScript', 'Vite', 'TypeScript', 'Groq', 'jsPDF'],
      demoLink: 'https://legislation.vercel.app',
      codeLink: 'https://github.com/yop-dev/privacy-ai-assessment',
    },
    {
      title: 'CareerLaunch AI',
      description:
        'Upload your resume to get AI-powered feedback, personalized cover letters tailored to the job, and mock interview questions to help you practice and stand out.',
      image: interviewerImage,
      technologies: ['Node.js', 'React', 'Next.js', 'Groq', 'Vercel CLI'],
      demoLink: 'https://career-launch-ai.vercel.app',
      codeLink: 'https://github.com/yop-dev/ai-resume-critic',
    },
      {
      title: 'Event Scheduler',
      description:
        'A web application built with Ruby on Rails, and PostgreSQL that allows users to create, manage, and share events with a user-friendly interface and robust backend functionality.',
      image: eventsImage,
      technologies: ['Ruby on Rails', 'Postgresql', 'Javascript', 'HTML5', 'CSS3'],
      demoLink: 'events-app-p6og.onrender.com',
      codeLink: 'https://github.com/yop-dev/rails-events-app',
    },
    {
      title: 'IT Ticketing System',
      description:
        'Ticketing system for IT support requests, enabling users to submit, track, and manage their IT issues efficiently with status updates and communication features.',
      image: ticketingImage,
      technologies: ['Visual Basic', 'Microsoft Access'],
    },
    {
      title: 'AdShield AI',
      description: 'Advanced AI text, image, and documents analysis for phishing & scam detection with real-time threat assessment and comprehensive security reporting.',
      image: adshieldImage, 
      technologies: ['React', 'FastAPI', 'Supabase', 'HuggingfaceAPI', 'TypeScript'],
      demoLink: 'https://adshield-frontend.vercel.app',
      codeLink: 'https://github.com/yop-dev/adshield-frontend',
    },
    {
      title: 'Tuberculosis Detection System',
      description:
        'A machine-learning framework that analyzes cough sound recordings to screen for tuberculosis noninvasively using advanced audio processing and AI models.',
      image: tbImage,
      technologies: ['Flask', 'Render', 'Pytorch', 'Pandas', 'Numpy'],
      demoLink: 'https://tb-0.onrender.com',
      codeLink: 'https://github.com/yop-dev/tb-cough-detection',
    },
    {
      title: 'Thesis Management System',
      description:
        'A comprehensive web-based system for managing thesis projects, tracking student progress, and facilitating communication between students and advisors with document management capabilities.',
      image: thesisImage,
      technologies: ['Node.js', 'React', 'Firebase'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  const focusProject = (index) => {
    setFocusedProject(index);
  };

  const nextProject = () => {
    setFocusedProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setFocusedProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <section id="projects" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Overlapping Carousel */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="relative max-w-7xl mx-auto overflow-hidden"
        >
          {/* Navigation Arrow - Left */}
          <motion.button
            onClick={prevProject}
            className="absolute left-1 sm:left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Carousel Container */}
          <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] px-8 sm:px-12 md:px-16">
            {projects.map((project, index) => {
              const offset = index - focusedProject;
              const isFocused = index === focusedProject;
              const isVisible = Math.abs(offset) <= 1; // Show only one card on each side
              
              return (
                <motion.div
                  key={index}
                  className={`absolute cursor-pointer transition-all duration-500 ${
                    isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    zIndex: isFocused ? 10 : 5 - Math.abs(offset),
                  }}
                  animate={{
                    x: `${offset * (isFocused ? 0 : window.innerWidth < 640 ? 40 : window.innerWidth < 768 ? 50 : window.innerWidth < 1024 ? 60 : 70)}%`,
                    scale: isFocused ? 1 : window.innerWidth < 640 ? 0.7 - Math.abs(offset) * 0.15 : 0.8 - Math.abs(offset) * 0.1,
                    rotateY: isFocused ? 0 : offset * (window.innerWidth < 640 ? -5 : -10),
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  onClick={() => focusProject(index)}
                  whileHover={!isFocused ? { scale: window.innerWidth < 640 ? 0.75 : 0.85 } : {}}
                >
                  {/* Project Card */}
                  <div className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${
                    isFocused 
                      ? 'w-72 sm:w-80 md:w-[500px] lg:w-[600px] xl:w-[700px] shadow-2xl' 
                      : 'w-60 sm:w-72 md:w-80 lg:w-96 shadow-md hover:shadow-lg'
                  }`}>
                    {/* Image Container */}
                    <div className="relative bg-gray-100 dark:bg-gray-700 group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full object-contain transition-all duration-500 ${
                          isFocused 
                            ? 'h-32 sm:h-40 md:h-56 lg:h-72 xl:h-80 p-3 sm:p-4 group-hover:scale-105' 
                            : 'h-24 sm:h-28 md:h-32 lg:h-40 p-2 sm:p-3'
                        }`}
                        onClick={(e) => {
                          if (isFocused) {
                            e.stopPropagation();
                            openImageModal();
                          }
                        }}
                      />
                      {!isFocused && (
                        <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300" />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`transition-all duration-500 ${
                      isFocused ? 'p-3 sm:p-4 md:p-6' : 'p-2 sm:p-3 md:p-4'
                    }`}>
                      <h3 className={`font-bold text-gray-900 dark:text-white mb-2 transition-all duration-300 ${
                        isFocused ? 'text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl' : 'text-sm sm:text-base md:text-lg lg:text-xl'
                      }`}>
                        {project.title}
                      </h3>
                      
                      {isFocused && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-base xl:text-lg mb-4 sm:mb-5 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            {project.demoLink && project.demoLink !== '#' && (
                              <motion.a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 sm:px-6 py-2.5 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center text-sm sm:text-base flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FiExternalLink className="w-4 h-4" />
                                View Demo
                              </motion.a>
                            )}
                            {project.codeLink && project.codeLink !== '#' && (
                              <motion.a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 sm:px-6 py-2.5 font-semibold text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 text-center text-sm sm:text-base flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FiGithub className="w-4 h-4" />
                                View Code
                              </motion.a>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrow - Right */}
          <motion.button
            onClick={nextProject}
            className="absolute right-1 sm:right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 sm:p-3 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Project Indicators */}
          <div className="flex items-center justify-center mt-6 sm:mt-8">
            <div className="flex space-x-1.5 sm:space-x-2">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => focusProject(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === focusedProject
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {focusedProject + 1} of {projects.length}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {isImageModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageModal}
        >
          <div className="flex items-center gap-2 sm:gap-6 w-full max-w-6xl">
            {/* Previous Button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                prevProject();
              }}
              className="p-2 sm:p-3 text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] p-2 sm:p-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
            <img
              src={projects[focusedProject].image}
              alt={projects[focusedProject].title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Action Buttons */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex space-x-2 sm:space-x-3">
              {projects[focusedProject].demoLink && projects[focusedProject].demoLink !== '#' && (
                <motion.a
                  href={projects[focusedProject].demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 text-white bg-blue-600 bg-opacity-90 backdrop-blur-sm border border-blue-500 border-opacity-50 rounded-full hover:bg-opacity-100 hover:border-opacity-70 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              )}
              {projects[focusedProject].codeLink && projects[focusedProject].codeLink !== '#' && (
                <motion.a
                  href={projects[focusedProject].codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 text-white bg-gray-800 bg-opacity-90 backdrop-blur-sm border border-gray-600 border-opacity-50 rounded-full hover:bg-opacity-100 hover:border-opacity-70 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              )}
            </div>

            {/* Close Button */}
            <motion.button
              onClick={closeImageModal}
              className="absolute top-2 right-2 p-1.5 sm:p-2 text-white bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            </motion.div>

            {/* Next Button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                nextProject();
              }}
              className="p-2 sm:p-3 text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
