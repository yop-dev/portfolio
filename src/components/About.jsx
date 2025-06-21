import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../images/JD.jpg';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>

          <div className="grid gap-10 md:grid-cols-2">
            <motion.div variants={itemVariants} className="flex items-center justify-center">
              <div className="relative w-64 h-64 overflow-hidden rounded-full shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600" />
                  <div className="absolute inset-2 rounded-full overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="JD Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Computer Science Graduate
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify">
                Dedicated Computer Science graduate from Batangas State University - Alangilan, specializing in building AI-powered web 
                applications. I have hands-on experience with machine learning workflows, LangChain for building LLM agents, and integrating AI 
                APIs such as OpenAI, Hugging Face, and Ollama. 
              </p>
              <p className="mb-6 text-gray-700 dark:text-gray-300 text-justify">
                Skilled in both collaborative group projects and solo development, I’m passionate 
                about applying machine learning to real-world problems through practical, scalable solutions.  
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/joner-de-silva-861575203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://github.com/yop-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub Profile
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;