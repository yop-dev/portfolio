import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiCode } from 'react-icons/fi';

const CurrentlyWorkingOn = () => {
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // You can easily modify this array to add/update your current projects
  const currentProjects = [
    {
      id: 1,
      title: "Repostr",
      description: "AI-powered content repurposer that transforms long-form content into multiple platform-ready formats, helping creators maximize reach and streamline multi-platform strategies",
      progress: 70,
      demoUrl: "https://repostr.vercel.app/",
      techStack: ["React", "Node.js", "OpenAI", "Python"],
      status: "In Development"
    },
    {
      id: 2,
      title: "RetroLens",
      description: "Social media app that lets users share and explore nostalgic photos with vintage filters, fostering a community around cherished memories and retro aesthetics.",
      progress: 40,
      techStack: ["React", "Node.js", "TypeScript", "FastAPI", "Clerk"],
      status: "In Development"
    },
  ];

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'from-green-400 to-green-600';
    if (progress >= 60) return 'from-blue-400 to-blue-600';
    if (progress >= 40) return 'from-yellow-400 to-yellow-600';
    return 'from-red-400 to-red-600';
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'planning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'testing': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="currently-working" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="mb-4 text-3xl font-bold text-center text-gray-900 sm:text-4xl dark:text-white"
            variants={itemVariants}
          >
            Currently Working On
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto mb-12 text-center text-gray-600 dark:text-gray-400 text-lg"
            variants={itemVariants}
          >
            Projects I'm actively developing and building
          </motion.p>

          <div className="space-y-6">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-4 min-w-[200px]">
                      {/* Progress Section */}
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Progress
                          </span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">
                            {project.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${getProgressColor(project.progress)}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                          />
                        </div>
                      </div>

                      {/* Demo Link - Only show if demoUrl exists */}
                      {project.demoUrl && (
                        <motion.a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="w-4 h-4" />
                          View Demo
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-500/5 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Add Project Hint */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              <FiCode className="inline w-4 h-4 mr-1" />
              More exciting projects coming soon...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingOn;