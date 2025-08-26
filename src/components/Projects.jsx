import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import tbImage from '../images/TB.png';
import interviewerImage from '../images/interviewer.png';
import thesisImage from '../images/thesis.png';
import legislationImage from '../images/legislation.png';
import adshieldImage from '../images/adshieldAI.png';


const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
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
      transition: { duration: 0.6, ease: 'easeOut' },
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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
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
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          {/* Project Display */}
          <motion.div
            key={currentProject}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative bg-gray-100 dark:bg-gray-700 group">
              <img
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-48 sm:h-64 md:h-80 object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                onClick={openImageModal}
              />
            </div>

            {/* Text Content */}
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                {projects[currentProject].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                {projects[currentProject].description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                {projects[currentProject].technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm font-medium bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                {projects[currentProject].demoLink && (
                  <motion.a
                    href={projects[currentProject].demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white bg-blue-600 bg-opacity-90 backdrop-blur-sm border border-blue-500 border-opacity-50 rounded-full hover:bg-opacity-100 hover:border-opacity-70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-center text-sm sm:text-base"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Demo
                  </motion.a>
                )}
                {projects[currentProject].codeLink && (
                  <motion.a
                    href={projects[currentProject].codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-6 py-2 sm:py-3 font-semibold text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-center text-sm sm:text-base"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-6 sm:mt-8 space-x-4 sm:space-x-6">
            {/* Previous Button */}
            <motion.button
              onClick={prevProject}
              className="p-2 sm:p-3 text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Pagination Dots */}
            <div className="flex space-x-2 sm:space-x-3">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-blue-600 scale-125'
                      : 'bg-white bg-opacity-40 hover:bg-opacity-60'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextProject}
              className="p-2 sm:p-3 text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
            </motion.button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-3 sm:mt-4">
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {currentProject + 1} of {projects.length}
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
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            
            {/* Action Buttons */}
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex space-x-2 sm:space-x-3">
              {projects[currentProject].demoLink && projects[currentProject].demoLink !== '#' && (
                <motion.a
                  href={projects[currentProject].demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 text-white bg-blue-600 bg-opacity-90 backdrop-blur-sm border border-blue-500 border-opacity-50 rounded-full hover:bg-opacity-100 hover:border-opacity-70 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              )}
              {projects[currentProject].codeLink && projects[currentProject].codeLink !== '#' && (
                <motion.a
                  href={projects[currentProject].codeLink}
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
