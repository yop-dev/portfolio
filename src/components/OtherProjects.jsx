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
      title: 'Library Management System',
      description: 'A weather dashboard that displays current and forecasted weather data for cities around the world.',
      technologies: ['JavaScript', 'OpenWeather', 'Apache Netbeans', 'HTML', 'CSS'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'IT Ticketing System',
      description: 'A web application to track personal expenses, income, and savings goals with data visualization.',
      technologies: ['Visual Basic', 'Microsoft Access', 'RDBMS'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'Point of Sale Systems',
      description: 'A recipe search application that allows users to find recipes based on ingredients they have.',
      technologies: ['Microsoft Access', 'Visual Basic'],
      codeLink: '#',
      demoLink: '#',
    },
    {
      title: 'Markdown Note Taking App',
      description: 'A simple markdown note-taking application with local storage and export functionality.',
      technologies: ['React', 'Marked.js', 'LocalStorage API'],
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

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
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
        </motion.div>

        {otherProjects.length > 3 && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
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