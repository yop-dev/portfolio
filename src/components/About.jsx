import { motion } from 'framer-motion';
import profileImage from '../images/JD2.webp';

const facts = [
  'Based in the Philippines, working across US time zones',
  'Full stack: Next.js, TypeScript, Supabase',
  'Automation: n8n, APIs, webhooks',
  'AI-assisted workflow, human-owned quality',
];

const About = () => (
  <section id="about" className="relative py-24">
    <div className="container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="liquid-glass-strong rounded-[2.5rem] p-8 sm:p-12"
      >
        <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center">
          <img
            src={profileImage}
            alt="Joner De Silva"
            loading="lazy"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl object-cover mx-auto md:mx-0"
          />
          <div>
            <p className="text-xs tracking-widest uppercase text-amber-300/70 mb-3">About</p>
            <h2 className="text-3xl sm:text-4xl tracking-tight text-white mb-4">
              The person behind <em className="text-amber-200/90">the work</em>
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              I am Joner De Silva, an AI software engineer and automation builder.
              I ship production web apps end to end, wire the business automations
              around them with n8n, and use AI tooling to get from brief to deployed
              fast without cutting corners. Currently building for DTLA Print in
              Los Angeles and Reelr Sports.
            </p>
            <div className="flex flex-wrap gap-2">
              {facts.map((fact) => (
                <span key={fact} className="text-xs text-white/60 bg-white/5 rounded-full px-3 py-1.5">
                  {fact}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
