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
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        {/* Animated circles in background */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-blue-200 dark:bg-blue-800 opacity-20 blur-3xl"
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
          className="absolute w-96 h-96 rounded-full bg-indigo-200 dark:bg-indigo-800 opacity-20 blur-3xl"
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

      <div className="container relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
            variants={itemVariants}
          >
            <span className="text-blue-600 dark:text-blue-400">Joner De Silva</span>
          </motion.h1>
          
          <motion.div
            className="mb-8 text-xl text-gray-700 sm:text-2xl dark:text-gray-300"
            variants={itemVariants}
          >
            <span className="block">BS Computer Science</span>
            <motion.span
              className="block text-blue-600 dark:text-blue-400"
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
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
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
                className="btn btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me <FiArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full dark:border-gray-400">
          <div className="w-1.5 h-1.5 mx-auto mt-2 bg-gray-600 rounded-full dark:bg-gray-400" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;