import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import tbImage from '../images/TB.png';
import interviewerImage from '../images/interviewer.png';
import thesisImage from '../images/thesis.png';

const Projects = () => {
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
      title: 'Tuberculosis Detection System',
      description:
        'A machine-learning framework that analyzes cough sound recordings to screen for tuberculosis noninvasively.',
      image: tbImage,
      technologies: ['Flask', 'Render', 'Pytorch', 'Pandas', 'Numpy'],
      demoLink: 'https://tb-0.onrender.com',
      codeLink: 'https://github.com/yop-dev/tb-0',
    },
    {
      title: 'CareerLaunch AI',
      description:
        'Upload your resume to get AI-powered feedback, personalized cover letters tailored to the job, and mock interview questions to help you practice and stand out.',
      image: interviewerImage,
      technologies: ['Node.js', 'React', 'Next.js', 'Groq', 'Vercel CLI'],
      demoLink: 'https://ai-resume-critic.vercel.app',
      codeLink: 'https://github.com/yop-dev/ai-resume-critic',
    },
    {
      title: 'Unified Thesis Management System',
      description:
        'A university-based web app to manage thesis and defense schedules.',
      image: thesisImage,
      technologies: ['JavaScript', 'Vite', 'React', 'Firebase', 'SCSS'],
      demoLink: 'https://thesismanagementsystem-39688.web.app/#/login',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"
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
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="relative bg-gray-100 dark:bg-gray-700 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-white bg-blue-600 rounded-full hover:bg-blue-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.codeLink && (
                      <motion.a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-white bg-gray-800 rounded-full hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      View Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
