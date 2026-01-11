import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../images/JD.jpg';
// Video path from public folder

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
    <section id="about" className="py-20">
      <div className="container">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >

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
              <p className="mb-4 text-gray-700 dark:text-gray-300 text-justify">
                I’m a Full Stack Developer with hands-on experience building production-ready web applications 
                and AI-powered systems. I’ve worked across frontend and backend stacks, developing RESTful APIs, 
                integrating modern frameworks, and contributing to real-world products used by end users.
              </p>

              <p className="mb-6 text-gray-700 dark:text-gray-300 text-justify">
                My background includes building scalable web features using technologies such as React, Vue, Angular, 
                and Ruby on Rails, as well as integrating AI workflows with tools like LangChain, OpenAI, Hugging Face, 
                and Groq. I work effectively in both collaborative and independent environments and focus on delivering 
                practical, maintainable solutions that solve real problems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;