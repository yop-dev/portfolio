import { motion } from 'framer-motion';
import { Bot, Workflow, Globe } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Software Engineering',
    description: 'AI-powered web apps and features: LLM integrations, intelligent tools, and products that use AI as a core capability, not a gimmick.',
    tags: ['React', 'Next.js', 'TypeScript', 'Claude / OpenAI APIs'],
  },
  {
    icon: Workflow,
    title: 'Automation and Integrations',
    description: 'n8n workflows, webhooks, and API glue that remove manual work: lead routing, notifications, data syncs, and business process automation.',
    tags: ['n8n', 'REST APIs', 'Webhooks', 'Supabase'],
  },
  {
    icon: Globe,
    title: 'Full-Stack Web',
    description: 'Production sites shipped end to end, from design to deploy: fast, responsive, SEO-ready, and maintained after launch.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
  },
];

const WhatIDo = () => (
  <section id="what-i-do" className="relative py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-widest uppercase text-amber-300/70 mb-3">Services</p>
        <h2 className="text-4xl sm:text-5xl tracking-tight text-white">
          What I <em className="text-amber-200/90">do</em>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="liquid-glass rounded-3xl p-8"
          >
            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-5">
              <service.icon className="w-5 h-5 text-amber-200" />
            </span>
            <h3 className="text-xl text-white mb-3">{service.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-5">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span key={tag} className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
