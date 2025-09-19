import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const experiences = [
    {
      title: 'IT Specialist Intern',
      company: 'Pearl Energy Philippines Inc.',
      period: 'Jun - Jul 2024',
      type: 'On-site',
      technologies: ['Microsoft Access', 'Troubleshooting', 'Visual Basic'],
    },
    {
      title: 'Web Developer Intern',
      company: 'ChatGenie PH',
      period: 'Sep 2025 - Present',
      type: 'Remote',
      technologies: ['Ruby on Rails', 'GraphQL', 'Vue.js'],
    },
  ];

  return (
    <section 
      id="experience" 
      className="py-16 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h2>
            <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-4 text-base sm:text-lg">
              My professional journey in tech
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 sm:top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            
            {/* Experience Items */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-8 md:space-x-16 space-y-8 sm:space-y-0 pt-4">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="relative text-center w-full max-w-xs sm:w-72 md:w-80"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Date and Type - Above the line */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3 sm:mb-4">
                    <span className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 sm:px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                      {exp.type}
                    </span>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 sm:mb-6 relative z-10 border-2 border-white dark:border-gray-900 shadow-lg"></div>
                  
                  {/* Content Card - Responsive height and padding */}
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 w-full min-h-[180px] sm:h-48 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      {/* Job Title */}
                      <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg mb-2">
                        {exp.title}
                      </h3>
                      
                      {/* Company */}
                      <p className="text-gray-700 dark:text-gray-300 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                        {exp.company}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 justify-center">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400 rounded-md border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;