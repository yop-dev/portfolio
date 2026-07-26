import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import accidentpathImage from '../images/accidentpath.png';
import shoptitanImage from '../images/shoptitan.png';
import reelrImage from '../images/reelr.png';
import inframeImage from '../images/inframe.png';
import interviewerImage from '../images/interviewer.png';
import legislationImage from '../images/legislation.png';
import tbImage from '../images/TB.png';
import artisanalCrustImage from '../images/artisanal-crust.png';

const accidentPathStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'n8n', 'Vercel'];

const projects = [
  {
    title: 'Shop Titan',
    description: 'Print shop websites and management software: marketing site and workflow video.',
    image: shoptitanImage,
    tags: ['Next.js', 'Remotion', 'Vercel'],
    demoLink: 'https://shoptitan.app',
    client: true,
  },
  {
    title: 'Reelr Sports',
    description: 'Sports events platform for discovering and organizing tournaments, leagues, and camps.',
    image: reelrImage,
    tags: ['React', 'TypeScript', 'C#'],
    demoLink: 'https://sports.reelr.app',
    client: true,
  },
  {
    title: 'InFrame',
    description: 'AI-generated LinkedIn posts: captions and visuals in seconds.',
    image: inframeImage,
    tags: ['React', 'TypeScript', 'Groq'],
    demoLink: 'https://postgen-ai-two.vercel.app/',
    codeLink: 'https://github.com/yop-dev/postgen-ai',
  },
  {
    title: 'CareerLaunch AI',
    description: 'Resume feedback, cover letters, and mock interviews powered by AI.',
    image: interviewerImage,
    tags: ['Next.js', 'Node.js', 'Groq'],
    demoLink: 'https://career-launch-ai.vercel.app',
    codeLink: 'https://github.com/yop-dev/ai-resume-critic',
  },
  {
    title: 'RA 10173 Compliance Checker',
    description: 'Helps organizations comply with the Philippine Data Privacy Act.',
    image: legislationImage,
    tags: ['TypeScript', 'Groq', 'jsPDF'],
    demoLink: 'https://legislation.vercel.app',
    codeLink: 'https://github.com/yop-dev/privacy-ai-assessment',
  },
  {
    title: 'TB Detection System',
    description: 'Machine learning that screens for tuberculosis from cough sounds.',
    image: tbImage,
    tags: ['PyTorch', 'Flask', 'Pandas'],
    demoLink: 'https://tb-0.onrender.com',
    codeLink: 'https://github.com/yop-dev/tb-cough-detection',
  },
  {
    title: 'The Artisanal Crust',
    description: 'Pastry shop site with a modern, conversion-focused design.',
    image: artisanalCrustImage,
    tags: ['React', 'Next.js', 'Framer Motion'],
    demoLink: 'https://allyspastry-shop.netlify.app/',
    codeLink: 'https://github.com/yop-dev/pastry-shop',
  },
];

const VISIBLE_COUNT = 3;

const ProofOfWork = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
  <section id="work" className="relative py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-widest uppercase text-white/50 mb-3">Proof of work</p>
        <h2 className="text-4xl sm:text-5xl tracking-tight text-white">
          Things I have <em className="text-white/80">shipped</em>
        </h2>
      </motion.div>

      {/* AccidentPath spotlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="liquid-glass-strong rounded-[2.5rem] overflow-hidden mb-14"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px]">
            <img
              src={accidentpathImage}
              alt="AccidentPath.com homepage"
              className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-white/50 mb-3">DTLA Print - client work</p>
            <h3 className="text-3xl sm:text-4xl text-white mb-4">AccidentPath.com</h3>
            <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
              A bilingual EN/ES personal-injury guidance platform and attorney directory
              for California and Arizona. I built and shipped the full product: a guided
              intake flow, a Supabase-backed attorney directory, lead delivery automated
              with n8n, and the SEO and content pipeline behind its organic growth.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {accidentPathStack.map((tech) => (
                <span key={tech} className="text-xs text-white/70 bg-white/5 rounded-full px-3 py-1.5">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.accidentpath.com"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass rounded-full px-6 py-3 inline-flex items-center gap-2 text-sm font-medium text-white hover:scale-105 transition-transform"
              >
                <ExternalLink className="w-4 h-4" />
                Visit accidentpath.com
              </a>
              <span className="text-xs text-white/50">Proprietary client codebase</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Personal projects grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="liquid-glass rounded-3xl overflow-hidden group"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg text-white mb-2">{project.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {project.client ? 'Visit' : 'Demo'}
                </a>
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.client && (
                  <span className="text-xs text-white/50">Client work</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {projects.length > VISIBLE_COUNT && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="liquid-glass rounded-full px-8 py-3 inline-flex items-center gap-2 text-sm font-medium text-white hover:scale-105 active:scale-95 transition-transform"
          >
            {showAll ? 'Show less' : `See ${projects.length - VISIBLE_COUNT} more projects`}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      )}
    </div>
  </section>
  );
};

export default ProofOfWork;
