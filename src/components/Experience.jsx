import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiExternalLink } from 'react-icons/fi';

const Experience = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Reelr Sports',
      period: 'October 2025 - Present',
      type: 'Remote',
      technologies: ['React', 'TypeScript', 'C#', 'SQL'],
      url: 'https://sports.reelr.app/allevents',
    },
    {
      title: 'Web Developer Intern',
      company: 'ChatGenie PH',
      period: 'Sep 2025 - October 2025',
      type: 'Remote',
      technologies: ['Ruby on Rails', 'GraphQL', 'Vue.js'],
      url: 'https://chatgenie.ph',
    },
    {
      title: 'IT Specialist Intern',
      company: 'Pearl Energy Philippines Inc.',
      period: 'Jun - Jul 2024',
      type: 'On-site',
      technologies: ['Microsoft Access', 'Visual Basic'],
      url: 'https://www.qpl.com.ph',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey in tech
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400"></div>

            {/* Experience Items */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2.5 sm:left-6.5 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                  {/* Experience Card */}
                  <motion.div
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer"
                    onClick={() => window.open(exp.url, '_blank', 'noopener,noreferrer')}
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          {exp.company}
                          <FiExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-2">
                        <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit">
                          {exp.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                          <FiMapPin className="w-4 h-4" />
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;