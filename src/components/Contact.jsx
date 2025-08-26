import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiPhone, FiDownload } from 'react-icons/fi';

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

  const contactLinks = [
    {
      name: 'Resume',
      icon: <FiDownload className="w-6 h-6" />,
      href: '/src/files/Joner De Silva.pdf',
      download: true,
    },
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      href: 'mailto:desilvajoner95@gmail.com',
    },
    {
      name: 'Phone',
      icon: <FiPhone className="w-6 h-6" />,
      href: 'tel:+639638513001',
    },
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
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 bg-blue-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-center text-gray-900 sm:text-4xl dark:text-white" variants={itemVariants}>
            Get In Touch
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto mb-8 sm:mb-12 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4"
            variants={itemVariants}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </motion.p>

          <motion.div
            className="flex justify-center gap-2 sm:gap-3 flex-wrap px-4"
            variants={itemVariants}
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.name === 'Email' || link.name === 'Phone' || link.name === 'Resume' ? '_self' : '_blank'}
                rel={link.name === 'Email' || link.name === 'Phone' || link.name === 'Resume' ? undefined : 'noopener noreferrer'}
                download={link.download ? 'Joner De Silva - Resume.pdf' : undefined}
                className="flex items-center px-3 sm:px-4 py-2 sm:py-3 space-x-1.5 sm:space-x-2 text-white bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 rounded-full hover:bg-opacity-30 hover:border-opacity-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-xs sm:text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;