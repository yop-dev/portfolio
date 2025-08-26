import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';

const OtherProjects = () => {
  const [showAll, setShowAll] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const otherProjects = [
    {
      title: 'AdShield AI',
      description: 'Advanced AI text, image, and documents analysis for phishing & scam detection',
      technologies: ['React', 'FastAPI', 'Supabase', 'HuggingfaceAPI', 'TypeScript'],
      codeLink: 'https://github.com/yop-dev/adshield-frontend',
      demoLink: 'https://adshield-frontend.vercel.app',
    },
    {
      title: 'IT Ticketing System',
      description: 'A Microsoft Access-based system for logging, managing, and resolving IT support tickets within an organization.',
      technologies: ['Visual Basic', 'Microsoft Access', 'RDBMS'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'Point of Sale Systems',
      description: 'A Microsoft Access-based system for processing sales transactions, managing inventory, and generating sales reports in retail environments.',
      technologies: ['Microsoft Access', 'Visual Basic'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'LegalPal',
      description: 'A mobile application that has a legal database, case management system, and legal document generator for lawyers.',
      technologies: ['Angular', 'TypeScript', 'Firebase'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'URL Shortener',
      description: 'A URL shortening service with custom aliases and click tracking analytics.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Bootstrap'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      codeLink: '#',
      demoLink: '#',
    },
  ];

  const visibleProjects = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <section id="other-projects" className="py-20">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Other Noteworthy Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <FiFolder className="w-10 h-10 text-blue-500" />
                <div className="flex space-x-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    aria-label="GitHub Repository"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {otherProjects.length > 3 && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 font-semibold text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OtherProjects;