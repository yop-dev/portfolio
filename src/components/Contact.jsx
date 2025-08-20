import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      href: 'https://github.com/yop-dev',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/joner-de-silva-861575203/',
    },
    {
      name: 'Twitter',
      icon: <FiTwitter className="w-6 h-6" />,
      href: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 className="mb-4 text-3xl font-bold text-center text-gray-900 sm:text-4xl dark:text-white" variants={itemVariants}>
            Get In Touch
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto mb-8 text-center text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </motion.p>

          <motion.div
            className="max-w-lg mx-auto"
            variants={itemVariants}
          >
            {/* Direct Contact Information */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Email */}
              <motion.a
                href="mailto:desilvajoner95@gmail.com"
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md dark:bg-gray-900 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-3 bg-blue-100 rounded-full dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                  <FiMail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  desilvajoner95@gmail.com
                </p>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+639638513001"
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md dark:bg-gray-900 hover:shadow-lg transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-3 bg-green-100 rounded-full dark:bg-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-300">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Phone
                </h3>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  +63 963 851 3001
                </p>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center mt-8 space-x-6"
            variants={itemVariants}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 space-x-2 text-gray-700 transition-colors rounded-lg hover:bg-blue-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-blue-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;