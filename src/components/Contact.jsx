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
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      href: 'desilvajoner95@gmail.com',
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
    {
      name: 'Twitter',
      icon: <FiTwitter className="w-6 h-6" />,
      href: 'https://twitter.com',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto mb-12 text-center text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
          </motion.p>

          <motion.div
            className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900"
            variants={itemVariants}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-transparent rounded-lg focus:border-blue-500 focus:bg-white focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:focus:bg-gray-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-transparent rounded-lg focus:border-blue-500 focus:bg-white focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:focus:bg-gray-700"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-transparent rounded-lg focus:border-blue-500 focus:bg-white focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:focus:bg-gray-700"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-transparent rounded-lg focus:border-blue-500 focus:bg-white focus:ring-0 dark:bg-gray-800 dark:text-gray-300 dark:focus:bg-gray-700"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center mt-12 space-x-6"
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