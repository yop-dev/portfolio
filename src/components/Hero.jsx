import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowRight } from 'react-icons/fi';
import profileImage from '../images/JD2.jpg';

const Hero = () => {
  // Animation variants
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
        >
          <source src="/videos/hero-bg-2-cropped.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Minimal Header Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 py-3 md:py-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 py-2 lg:py-3 bg-white/10 dark:bg-gray-900/30 backdrop-blur-md rounded-full border border-white/20 dark:border-gray-700/30">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                Skills
              </Link>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                Work
              </Link>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                Experience
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-xs sm:text-sm font-medium text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            {/* Left Column - Profile Photo */}
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-end order-1 md:order-1">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Gradient Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 shadow-2xl" />
                {/* Image Container */}
                <div className="absolute inset-1.5 sm:inset-2 rounded-full overflow-hidden bg-gray-900">
                  <img
                    src={profileImage}
                    alt="Joner De Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="text-center md:text-left order-2 md:order-2">
              <h1 className="mb-2 sm:mb-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Joner De Silva
              </h1>

              <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-blue-400 font-medium">
                Full Stack Developer | AI | Machine Learning
              </p>

              <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                <p>
                  I'm a Full Stack Developer, studied Computer Science; with hands-on experience building production-ready web applications
                  and AI-powered systems. I've worked across frontend and backend stacks, developing RESTful APIs,
                  integrating modern frameworks, and contributing to real-world products used by end users.
                </p>

                <p className="hidden sm:block">
                  My background includes building scalable web features using technologies such as React, Vue, Angular,
                  and Ruby on Rails, as well as integrating AI workflows with tools like LangChain, OpenAI, Hugging Face,
                  and Groq.
                </p>
              </div>

              {/* CTA Button */}
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm sm:text-base font-semibold rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;