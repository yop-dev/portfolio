import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onError={(e) => console.error('Hero video failed to load:', e)}
          onLoadStart={() => console.log('Hero video loading started')}
          onCanPlay={() => console.log('Hero video can play')}
          onLoadedData={() => console.log('Hero video loaded successfully')}
          style={{
            filter: 'brightness(0.9) contrast(1.1) saturate(1.2) hue-rotate(10deg)',
          }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Color grading overlay for consistent blue tone */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/25 via-indigo-500/20 to-blue-600/30 mix-blend-overlay" />
        
        {/* Dark mode overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-blue-900/70" />
        
        {/* Animated circles in background */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-200/20 dark:bg-blue-800/20 blur-3xl"
          animate={{
            x: ['-20%', '30%'],
            y: ['10%', '40%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-indigo-200/20 dark:bg-indigo-800/20 blur-3xl"
          animate={{
            x: ['30%', '-10%'],
            y: ['40%', '20%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>


      <div className="container relative z-20">

        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white px-4"
            variants={itemVariants}
          >
            <span className="text-blue-600 dark:text-blue-400">Joner De Silva</span>
          </motion.h1>
          
          <motion.div
            className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 px-4"
            variants={itemVariants}
          >
            <span className="block">BS Computer Science</span>
            <motion.span
              className="block text-blue-600 dark:text-blue-400 text-base sm:text-lg md:text-xl"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                times: [0, 0.2, 0.8, 1],
              }}
            >
              Full Stack Developer | AI | Machine Learning
            </motion.span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 px-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-semibold text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 dark:text-gray-200 dark:border-gray-300 dark:border-opacity-30 dark:hover:border-opacity-50 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
            </Link>

            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-semibold text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 dark:text-gray-200 dark:border-gray-300 dark:border-opacity-30 dark:hover:border-opacity-50 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Skills
              </motion.button>
            </Link>
            
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-semibold text-white bg-blue-600 bg-opacity-90 backdrop-blur-sm border border-blue-500 border-opacity-50 rounded-full hover:bg-opacity-100 hover:border-opacity-70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-lg hover:shadow-xl text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Work
              </motion.button>
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-semibold text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 dark:text-gray-200 dark:border-gray-300 dark:border-opacity-30 dark:hover:border-opacity-50 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact <FiArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;