import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Download } from 'lucide-react';
import resumeUrl from '../files/CV Joner De Silva.pdf';

const contactLinks = [
  { name: 'Resume', icon: Download, href: resumeUrl, download: 'Joner De Silva - Resume.pdf' },
  { name: 'Email', icon: Mail, href: 'mailto:desilvajoner95@gmail.com' },
  { name: 'Phone', icon: Phone, href: 'tel:+639638513001' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/yop-dev', external: true },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/joner-de-silva-861575203/', external: true },
];

const Contact = () => (
  <section id="contact" className="relative py-24">
    <div className="container max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="liquid-glass-strong rounded-[2.5rem] p-10 sm:p-16 text-center"
      >
        <p className="text-xs tracking-widest uppercase text-white/50 mb-4">Contact</p>
        <h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4">
          Let&apos;s build <em className="text-white/80">something</em>
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10">
          Need AI features, automations, or a production web app shipped fast?
          Reach out and tell me what you are building.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              download={link.download}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="liquid-glass rounded-full px-5 py-2.5 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white hover:scale-105 transition-all"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Contact;
