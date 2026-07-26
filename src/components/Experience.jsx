import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'AI Software Engineer & Automation Builder',
    company: 'DTLA Print',
    period: 'February 2026 - Present',
    type: 'Remote',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'n8n', 'Claude Code'],
    url: 'https://www.dtlaprint.com/',
  },
  {
    title: 'Full Stack Developer',
    company: 'Reelr Sports',
    period: 'October 2025 - Present',
    type: 'Remote',
    technologies: ['React', 'TypeScript', 'C#', 'SQL'],
    url: 'https://sports.reelr.app/allevents',
  },
  {
    title: 'Web Developer Intern',
    company: 'ChatGenie PH',
    period: 'September 2025 - October 2025',
    type: 'Remote',
    technologies: ['Ruby on Rails', 'GraphQL', 'Vue.js'],
    url: 'https://chatgenie.ph',
  },
  {
    title: 'AI Developer',
    company: 'Zaigo',
    period: 'August 2025 - September 2025',
    type: 'Remote',
    technologies: ['Claude Code', 'Higgsfield', 'MCPs'],
    url: 'https://zaigo.ai',
  },
  {
    title: 'IT Specialist Intern',
    company: 'Pearl Energy Philippines Inc.',
    period: 'June 2024 - July 2024',
    type: 'On-site',
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
        <p className="text-xs tracking-widest uppercase text-white/50 mb-3">Background</p>
        <h2 className="text-4xl sm:text-5xl tracking-tight text-white">
          Where I have <em className="text-white/80">worked</em>
        </h2>
      </motion.div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.a
            key={exp.company}
            href={exp.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 group"
          >
            <div className="flex-1">
              <h3 className="text-lg text-white mb-1 flex items-center gap-2">
                {exp.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-white/60" />
              </h3>
              <p className="text-sm text-white/70 mb-3">{exp.company}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex sm:flex-col sm:items-end gap-3 text-sm text-white/50">
              <span>{exp.period}</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {exp.type}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
