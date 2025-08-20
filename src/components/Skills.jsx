import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, SiJavascript, SiPython, SiNodedotjs, SiMongodb, SiMysql, 
  SiPostgresql, SiDocker, SiKubernetes, SiAmazonaws, SiGit, SiGithub,
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiExpress, SiDjango,
  SiFlask, SiPhp, SiLaravel, SiFirebase, SiFlutter, SiSwift,
  SiAngular, SiVuedotjs, SiGraphql, SiTypescript, SiRedux, SiNextdotjs,
  SiTensorflow, SiPytorch, SiOpenai, SiLinux, SiVisualstudiocode,
  SiFigma, SiAdobephotoshop, SiNpm, SiYarn, SiWebpack, SiVite
} from 'react-icons/si';

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
    { name: 'React', icon: <SiReact className="w-12 h-12" />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <SiJavascript className="w-12 h-12" />, color: '#F7DF1E' },
    { name: 'Python', icon: <SiPython className="w-12 h-12" />, color: '#3776AB' },
    { name: 'Node.js', icon: <SiNodedotjs className="w-12 h-12" />, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb className="w-12 h-12" />, color: '#47A248' },
    { name: 'MySQL', icon: <SiMysql className="w-12 h-12" />, color: '#4479A1' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-12 h-12" />, color: '#336791' },
    { name: 'Docker', icon: <SiDocker className="w-12 h-12" />, color: '#2496ED' },
    { name: 'AWS', icon: <SiAmazonaws className="w-12 h-12" />, color: '#FF9900' },
    { name: 'Git', icon: <SiGit className="w-12 h-12" />, color: '#F05032' },
    { name: 'GitHub', icon: <SiGithub className="w-12 h-12" />, color: '#181717' },
    { name: 'HTML5', icon: <SiHtml5 className="w-12 h-12" />, color: '#E34F26' },
    { name: 'CSS3', icon: <SiCss3 className="w-12 h-12" />, color: '#1572B6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-12 h-12" />, color: '#06B6D4' },
    { name: 'Bootstrap', icon: <SiBootstrap className="w-12 h-12" />, color: '#7952B3' },
    { name: 'Express', icon: <SiExpress className="w-12 h-12" />, color: '#000000' },
    { name: 'Django', icon: <SiDjango className="w-12 h-12" />, color: '#092E20' },
    { name: 'Flask', icon: <SiFlask className="w-12 h-12" />, color: '#000000' },
    { name: 'PHP', icon: <SiPhp className="w-12 h-12" />, color: '#777BB4' },
    { name: 'Laravel', icon: <SiLaravel className="w-12 h-12" />, color: '#FF2D20' },
    { name: 'Firebase', icon: <SiFirebase className="w-12 h-12" />, color: '#FFCA28' },
    { name: 'Flutter', icon: <SiFlutter className="w-12 h-12" />, color: '#02569B' },
    { name: 'Swift', icon: <SiSwift className="w-12 h-12" />, color: '#FA7343' },
    { name: 'Angular', icon: <SiAngular className="w-12 h-12" />, color: '#DD0031' },
    { name: 'Vue.js', icon: <SiVuedotjs className="w-12 h-12" />, color: '#4FC08D' },
    { name: 'GraphQL', icon: <SiGraphql className="w-12 h-12" />, color: '#E10098' },
    { name: 'TypeScript', icon: <SiTypescript className="w-12 h-12" />, color: '#3178C6' },
    { name: 'Redux', icon: <SiRedux className="w-12 h-12" />, color: '#764ABC' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-12 h-12" />, color: '#000000' },
    { name: 'TensorFlow', icon: <SiTensorflow className="w-12 h-12" />, color: '#FF6F00' },
    { name: 'PyTorch', icon: <SiPytorch className="w-12 h-12" />, color: '#EE4C2C' },
    { name: 'OpenAI', icon: <SiOpenai className="w-12 h-12" />, color: '#412991' },
    { name: 'Linux', icon: <SiLinux className="w-12 h-12" />, color: '#FCC624' },
    { name: 'VS Code', icon: <SiVisualstudiocode className="w-12 h-12" />, color: '#007ACC' },
    { name: 'Figma', icon: <SiFigma className="w-12 h-12" />, color: '#F24E1E' },
    { name: 'Vite', icon: <SiVite className="w-12 h-12" />, color: '#646CFF' },
  ];

  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container">
        <motion.h2 
          className="mb-4 text-3xl font-bold text-center text-gray-900 sm:text-4xl dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <motion.p
          className="max-w-2xl mx-auto mb-16 text-center text-gray-600 dark:text-gray-400 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Tools and technologies I frequently use
        </motion.p>

        {/* First Marquee Row - Left to Right */}
        <div className="relative mb-8">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {/* Duplicate the skills array for seamless loop */}
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={`row1-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -5 }}
                style={{
                  boxShadow: `0 4px 20px ${skill.color}20`,
                }}
              >
                <div 
                  className="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Marquee Row - Right to Left */}
        <div className="relative">
          <motion.div
            className="flex space-x-8"
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Reverse and duplicate the skills array */}
            {[...skills.slice().reverse(), ...skills.slice().reverse()].map((skill, index) => (
              <motion.div
                key={`row2-${index}`}
                className="flex-shrink-0 flex flex-col items-center justify-center w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -5 }}
                style={{
                  boxShadow: `0 4px 20px ${skill.color}20`,
                }}
              >
                <div 
                  className="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="mt-2 text-xs font-medium text-gray-600 dark:text-gray-400 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;