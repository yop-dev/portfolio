import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Wand2, BookOpen, Menu, Plus,
} from 'lucide-react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import accidentpathImage from '../images/accidentpath.png';

const navLinks = [
  { label: 'What I do', href: '#what-i-do' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const pills = ['AI Engineering', 'n8n Automation', 'Full-Stack Web'];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row">
      {/* Left panel */}
      <div className="relative flex flex-1 lg:w-[52%] lg:flex-none min-h-screen">
        <div className="liquid-glass-strong absolute inset-4 lg:inset-6 rounded-3xl" aria-hidden="true" />
        <div className="relative z-10 flex flex-col flex-1 m-4 lg:m-6 p-6 sm:p-10">
          {/* Nav */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold tracking-tighter text-white">joner</span>
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-white/80 hover:scale-105 transition-transform"
              >
                <Menu className="w-4 h-4" />
                Menu
              </button>
              {menuOpen && (
                <div className="liquid-glass-strong absolute right-0 mt-2 rounded-2xl py-2 w-44 flex flex-col z-20">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="px-5 py-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center */}
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 py-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl tracking-[-0.05em] text-white leading-[1.05]"
            >
              Software, shipped
              <br />
              <em className="text-white/80">at the speed of AI</em>
            </motion.h1>
            <p className="text-white/60 text-sm sm:text-base">
              Joner De Silva - AI Software Engineer and Automation Expert
            </p>
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full pl-6 pr-2 py-2 inline-flex items-center gap-3 text-sm font-medium text-white hover:scale-105 active:scale-95 transition-transform"
            >
              Start a project
              <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <div className="flex flex-wrap justify-center gap-3">
              {pills.map((pill) => (
                <span key={pill} className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80">
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom quote */}
          <div className="text-center space-y-3">
            <p className="text-xs tracking-widest uppercase text-white/50">Built with AI, shipped by me</p>
            <p className="text-lg text-white/80">
              I build the software <em className="font-serif italic">and the automations</em> that build the business.
            </p>
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-white/30" />
              <span className="text-xs tracking-widest uppercase text-white/60">Joner De Silva</span>
              <span className="h-px w-12 bg-white/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Right panel (desktop only) */}
      <div className="hidden lg:flex lg:w-[48%] flex-col p-6 pl-0 gap-6">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-4">
            <a
              href="https://github.com/yop-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white hover:text-white/80 transition-colors"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/joner-de-silva-861575203/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-white/80 transition-colors"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:desilvajoner95@gmail.com"
              aria-label="Email"
              className="text-white hover:text-white/80 transition-colors"
            >
              <FiMail className="w-4 h-4" />
            </a>
            <ArrowRight className="w-4 h-4 text-white/50" />
          </div>
          <a
            href="#contact"
            className="liquid-glass rounded-full pl-2 pr-4 py-2 flex items-center gap-2 text-sm text-white/80 hover:scale-105 transition-transform"
          >
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </span>
            Hire me
          </a>
        </div>

        {/* Currently building card */}
        <div className="liquid-glass rounded-2xl w-56 p-4 self-end">
          <h3 className="text-sm font-medium text-white mb-1">Currently building</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Repostr and RetroLens, AI products in active development.
          </p>
        </div>

        {/* Bottom feature section */}
        <div className="liquid-glass mt-auto rounded-[2.5rem] p-3 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="liquid-glass rounded-3xl p-5">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <Wand2 className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-sm font-medium text-white mb-1">AI Engineering</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                LLM-powered apps and features, built for production.
              </p>
            </div>
            <div className="liquid-glass rounded-3xl p-5">
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <BookOpen className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-sm font-medium text-white mb-1">Automation</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                n8n workflows and integrations that remove manual work.
              </p>
            </div>
          </div>
          <div className="liquid-glass rounded-3xl p-4 flex items-center gap-4">
            <img
              src={accidentpathImage}
              alt="AccidentPath.com homepage"
              className="w-24 h-16 object-cover rounded-xl grayscale"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-white">Client work - AccidentPath.com</h3>
              <p className="text-xs text-white/60">Bilingual legal guidance platform, live in production.</p>
            </div>
            <a
              href="#work"
              aria-label="View case study"
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:scale-105 transition-transform"
            >
              <Plus className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
