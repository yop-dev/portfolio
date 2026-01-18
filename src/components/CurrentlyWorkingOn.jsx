import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiZap } from 'react-icons/fi';

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
    if (progress >= 80) return 'text-green-500';
    if (progress >= 60) return 'text-blue-500';
    if (progress >= 40) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <section id="currently-working" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Building
            </h2>
            <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Projects I'm actively developing and bringing to life
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Header with Status */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                        <FiZap className="w-3 h-3" />
                        {project.status}
                      </span>
                    </div>

                    {/* Circular Progress */}
                    <div className="relative w-16 h-16">
                      <svg className="w-16 h-16 transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeLinecap="round"
                          className={getProgressColor(project.progress)}
                          initial={{ strokeDasharray: "0 176" }}
                          animate={{ strokeDasharray: `${(project.progress / 100) * 176} 176` }}
                          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {project.progress}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Demo Link */}
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-white/50 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      View Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Hint */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              More exciting projects coming soon...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingOn;