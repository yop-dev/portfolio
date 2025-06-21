import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, FiDatabase, FiLayers, FiServer, 
  FiSmartphone, FiGlobe, FiTool, FiGitBranch 
} from 'react-icons/fi';

const Skills = () => {
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
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const skills = [
    {
      category: 'Frontend',
      icon: <FiCode className="w-6 h-6" />,
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
      category: 'Backend',
      icon: <FiServer className="w-6 h-6" />,
      items: ['Node.js', 'Express', 'Python', 'Django', 'Flask', 'PHP', 'Laravel'],
    },
    {
      category: 'Database',
      icon: <FiDatabase className="w-6 h-6" />,
      items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'SQLite'],
    },
    {
      category: 'Mobile',
      icon: <FiSmartphone className="w-6 h-6" />,
      items: ['React Native', 'Flutter', 'Swift', 'Angular', 'Ionic'],
    },
    {
      category: 'DevOps',
      icon: <FiTool className="w-6 h-6" />,
      items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions'],
    },
    {
      category: 'Version Control',
      icon: <FiGitBranch className="w-6 h-6" />,
      items: ['Git', 'GitHub', 'GitLab', 'Bitbucket'],
    },
    {
      category: 'Architecture',
      icon: <FiLayers className="w-6 h-6" />,
      items: ['Microservices', 'RESTful APIs', 'GraphQL'],
    },
    {
      category: 'Other',
      icon: <FiGlobe className="w-6 h-6" />,
      items: ['UI/UX Design', 'Agile', 'Scrum', 'Testing', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                {skill.icon}
                <h3 className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;