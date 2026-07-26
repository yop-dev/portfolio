import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import dtlaLogo from '../images/logos/dtla.png';
import reelrLogo from '../images/logos/reelr.png';
import chatgenieLogo from '../images/logos/chatgenie.png';
import zaigoLogo from '../images/logos/zaigo.png';
import pearlLogo from '../images/logos/pearl.png';

const experiences = [
  {
    title: 'AI Software Engineer & Automation Builder',
    company: 'DTLA Print',
    logo: dtlaLogo,
    period: 'February 2026 - Present',
    type: 'Remote',
    summary: 'Built and shipped AccidentPath.com - 980+ pages, an attorney directory, and the n8n lead automations behind it.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'n8n', 'Claude Code'],
    url: 'https://www.dtlaprint.com/',
  },
  {
    title: 'Full Stack Developer',
    company: 'Reelr Sports',
    logo: reelrLogo,
    period: 'October 2025 - Present',
    type: 'Remote',
    summary: 'Full-stack development on the live sports events platform for tournaments, leagues, and camps.',
    technologies: ['React', 'TypeScript', 'C#', 'SQL'],
    url: 'https://sports.reelr.app',
  },
  {
    title: 'Web Developer Intern',
    company: 'ChatGenie PH',
    logo: chatgenieLogo,
    period: 'September 2025 - October 2025',
    type: 'Remote',
    summary: 'Web development on the commerce platform with Ruby on Rails, GraphQL, and Vue.',
    technologies: ['Ruby on Rails', 'GraphQL', 'Vue.js'],
    url: 'https://chatgenie.ph',
  },
  {
    title: 'AI Developer',
    company: 'Zaigo',
    logo: zaigoLogo,
    period: 'August 2025 - September 2025',
    type: 'Remote',
    summary: 'AI development sprints with Claude Code, MCP servers, and generative media tooling.',
    technologies: ['Claude Code', 'Higgsfield', 'MCPs'],
    url: 'https://zaigo.ai',
  },
  {
    title: 'IT Specialist Intern',
    company: 'Pearl Energy Philippines Inc.',
    logo: pearlLogo,
    period: 'June 2024 - July 2024',
    type: 'On-site',
    summary: 'Built internal IT tools on Microsoft Access and Visual Basic.',
    technologies: ['Microsoft Access', 'Visual Basic'],
    url: 'https://www.qpl.com.ph',
  },
];

const Experience = () => (
  <section id="experience" className="relative py-24">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-widest uppercase text-amber-300/70 mb-3">Background</p>
        <h2 className="text-4xl sm:text-5xl tracking-tight text-white">
          Where I have <em className="text-amber-200/90">worked</em>
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline rail */}
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-amber-300/40 via-white/15 to-transparent" aria-hidden="true" />

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isCurrent = exp.period.includes('Present');
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-16"
              >
                {/* Logo node on the rail */}
                <div className="absolute left-0 top-5 w-12 h-12 liquid-glass rounded-full flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    loading="lazy"
                    className="w-6 h-6 rounded-sm object-contain"
                  />
                </div>

                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-4 group block"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg text-white flex items-center gap-2">
                        {exp.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/60" />
                      </h3>
                      {isCurrent && (
                        <span className="text-[10px] tracking-widest uppercase text-amber-200 bg-amber-400/10 rounded-full px-2.5 py-1">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-white/70 mb-2">{exp.company}</p>
                    <p className="text-sm text-white/60 leading-relaxed mb-3">{exp.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex sm:flex-col sm:items-end gap-3 text-sm text-white/50 shrink-0">
                    <span>{exp.period}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.type}
                    </span>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
