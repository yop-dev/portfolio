import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight, FiPlay } from 'react-icons/fi';
import tbImage from '../images/TB.png';
import interviewerImage from '../images/interviewer.png';
import thesisImage from '../images/thesis.png';
import legislationImage from '../images/legislation.png';
import adshieldImage from '../images/adshieldAI.png';
import eventsImage from '../images/events.png';
import ticketingImage from '../images/ticketing.png';
import inframeImage from '../images/inframe.png';
import realtorImage from '../images/realtor-portfolio.png';
import artisanalCrustImage from '../images/artisanal-crust.png';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    if (isVideoPlaying && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error);
      });
    }
  }, [isVideoPlaying]);

  const projects = [
    {
      title: 'InFrame',
      description: 'Generate professional LinkedIn posts in seconds. AI-powered captions and visuals that stop the scroll and drive engagement.',
      image: inframeImage,
      technologies: ['React', 'Vite', 'TypeScript', 'Groq', 'Stripe'],
      demoLink: 'https://postgen-ai-two.vercel.app/',
      codeLink: 'https://github.com/yop-dev/postgen-ai',
      featured: true,
    },
    {
      title: 'The Artisanal Crust',
      description: 'Statis pastry shop website with modern design and user-friendly interface.',
      image: artisanalCrustImage,
      technologies: ['Node.js', 'React', 'Next.js', 'Netlify', 'Nano Banana'],
      demoLink: 'https://allyspastry-shop.netlify.app/',
      codeLink: 'https://github.com/yop-dev/pastry-shop',
    },
    {
      title: 'RA 10173: Compliance Checker',
      description: 'A web-app that helps organizations comply with the Data Privacy Act of 2012 in the Philippines.',
      image: legislationImage,
      technologies: ['JavaScript', 'Vite', 'TypeScript', 'Groq', 'jsPDF'],
      demoLink: 'https://legislation.vercel.app',
      codeLink: 'https://github.com/yop-dev/privacy-ai-assessment',
    },
    {
      title: 'CareerLaunch AI',
      description: 'Upload your resume to get AI-powered feedback, personalized cover letters and mock interview questions.',
      image: interviewerImage,
      technologies: ['Node.js', 'React', 'Next.js', 'Groq', 'Vercel CLI'],
      demoLink: 'https://career-launch-ai.vercel.app',
      codeLink: 'https://github.com/yop-dev/ai-resume-critic',
    },
    {
      title: 'AdShield AI',
      description: 'Advanced AI analysis for phishing & scam detection with real-time threat assessment.',
      image: adshieldImage,
      technologies: ['React', 'FastAPI', 'Supabase', 'HuggingfaceAPI', 'TypeScript'],
      demoLink: 'https://adshield-frontend.vercel.app',
      codeLink: 'https://github.com/yop-dev/adshield-frontend',
    },
    {
      title: 'Tuberculosis Detection System',
      description: 'Machine-learning framework that analyzes cough sounds to screen for tuberculosis noninvasively.',
      image: tbImage,
      technologies: ['Flask', 'Render', 'Pytorch', 'Pandas', 'Numpy'],
      demoLink: 'https://tb-0.onrender.com',
      codeLink: 'https://github.com/yop-dev/tb-cough-detection',
    },
    {
      title: 'Event Scheduler',
      description: 'A web application built with Ruby on Rails and PostgreSQL for creating and managing events.',
      image: eventsImage,
      technologies: ['Ruby on Rails', 'Postgresql', 'Javascript', 'HTML5', 'CSS3'],
      demoLink: 'events-app-p6og.onrender.com',
      codeLink: 'https://github.com/yop-dev/rails-events-app',
    },
    {
      title: 'Realtor Portfolio',
      description: 'A luxury minimalist portfolio website for a realtor showcasing properties and services.',
      image: realtorImage,
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      demoLink: 'https://realtor-azure-tau.vercel.app',
      codeLink: 'https://github.com/yop-dev/realtor',
    },
    {
      title: 'IT Ticketing System',
      description: 'Ticketing system for IT support requests with status tracking and communication features.',
      image: ticketingImage,
      technologies: ['Visual Basic', 'Microsoft Access'],
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

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing innovation, technical expertise, and problem-solving.
          </p>
        </motion.div>

        {/* Featured Project - Large Card */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-950 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 border border-blue-500/20 hover:border-blue-500/40 hover:shadow-blue-500/10"
            onMouseEnter={() => setHoveredIndex('featured')}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative bg-white dark:bg-gray-950 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="relative w-full h-full"
                  animate={{
                    scale: hoveredIndex === 'featured' ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {featuredProject.title === 'InFrame' && !videoError ? (
                    <>
                      {/* Static Image with Play Button */}
                      {!isVideoPlaying && (
                        <div className="relative w-full h-full">
                          <img
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            className="w-full h-full object-cover"
                          />
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <motion.button
                              onClick={handlePlayVideo}
                              className="w-20 h-20 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full border-2 border-white/50 hover:border-white transition-all duration-300 shadow-2xl"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <FiPlay className="w-10 h-10 text-white ml-1" />
                            </motion.button>
                          </div>
                        </div>
                      )}
                      {/* Video - Hidden until play button is clicked */}
                      {isVideoPlaying && (
                        <video
                          ref={videoRef}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover cursor-pointer"
                          onError={() => setVideoError(true)}
                          onLoadedData={() => setVideoError(false)}
                          onClick={handleVideoClick}
                        >
                          <source src="/videos/inFrame.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </>
                  ) : (
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent dark:from-blue-900/10 pointer-events-none"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredProject.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-row gap-4">
                  {featuredProject.demoLink && featuredProject.demoLink !== '#' && (
                    <motion.a
                      href={featuredProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink className="w-5 h-5" />
                      View Demo
                    </motion.a>
                  )}
                  {featuredProject.codeLink && featuredProject.codeLink !== '#' && (
                    <motion.a
                      href={featuredProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub className="w-5 h-5" />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.slice(0, showAll ? regularProjects.length : 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                {/* Image Container */}
                <div className="relative bg-gray-50 dark:bg-gray-900 h-56 flex items-center justify-center p-6 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      filter: hoveredIndex === index ? 'blur(0px)' : 'blur(0px)',
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain drop-shadow-lg"
                    />
                  </motion.div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 mt-4">
                    {project.demoLink && project.demoLink !== '#' && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-lg border border-white/30 hover:border-white/50 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiGithub className="w-4 h-4" />
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {regularProjects.length > 4 && (
          <div className="flex justify-center mt-12">
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {showAll ? 'Show Less' : 'Show More'}
              <motion.span
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
