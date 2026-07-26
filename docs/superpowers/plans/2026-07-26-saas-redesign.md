# SaaS-Style Marketing Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio as a SaaS-style marketing landing page selling Joner De Silva as an AI Software Engineer and Automation Expert, using a liquid glass aesthetic over a full-screen video background.

**Architecture:** Single-scroll React page. One fixed background video layer at z-0; all sections float above at z-10 as liquid glass panels. Old portfolio components are replaced wholesale; new components are self-contained files with inline data.

**Tech Stack:** Vite, React 18, Tailwind CSS 3, Framer Motion 10, lucide-react (new), Google Fonts (Poppins, Source Serif 4).

## Global Constraints

- All copy plain ASCII: no em dashes, en dashes, smart quotes, or invisible Unicode. Plain hyphens only.
- Strict grayscale: no colored accents. Text hierarchy via text-white, text-white/80, text-white/60, text-white/50.
- No `border` utility classes on glass elements; borders come only from the glass ::before pseudo-element.
- Repo lint gate: `npm run lint` runs eslint with `--max-warnings 0`; unused imports fail the build gate.
- There is no test suite in this repo. Verification per task = `npm run lint` + `npm run build` passing.
- Work directly on `master` in `C:\Users\tharraleos\DTLA\portfolio` (repo has no branch conventions; JDS iterates on localhost).
- Run all npm commands from `C:\Users\tharraleos\DTLA\portfolio`.

---

### Task 1: Foundation - fonts, Tailwind, liquid glass CSS, lucide-react

**Files:**
- Modify: `index.html`
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Modify: `package.json` (via npm install)

**Interfaces:**
- Produces: CSS classes `.liquid-glass`, `.liquid-glass-strong`, `.container`; Tailwind font families `font-display`, `font-serif` (Poppins default sans); package `lucide-react` importable. All later tasks depend on these exact class names.

- [ ] **Step 1: Install lucide-react**

Run: `npm install lucide-react`
Expected: added to dependencies, no errors.

- [ ] **Step 2: Replace index.html head (fonts, title, meta)**

Full new content of `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Joner De Silva | AI Software Engineer</title>
    <meta name="description" content="AI Software Engineer and Automation Expert. I build AI-powered software, n8n automations, and production web apps.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Source+Serif+4:ital,wght@1,400;1,500&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Replace tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        serif: ['"Source Serif 4"', 'serif'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
    },
  },
  plugins: [],
}
```

(darkMode key removed; the site is single-theme.)

- [ ] **Step 4: Replace src/index.css with the glass system**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --radius: 1rem;
    --background: 0 0% 4%;
    --foreground: 0 0% 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  h1 em, h2 em, h3 em,
  h1 i, h2 i, h3 i,
  h1 .italic, h2 .italic, h3 .italic {
    font-family: 'Source Serif 4', serif;
    font-style: italic;
  }
}

@layer components {
  .container {
    @apply px-4 mx-auto max-w-7xl sm:px-6 lg:px-8;
  }

  .liquid-glass {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: none;
    box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.45) 0%,
      rgba(255, 255, 255, 0.15) 20%,
      transparent 40%,
      transparent 60%,
      rgba(255, 255, 255, 0.15) 80%,
      rgba(255, 255, 255, 0.45) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }

  .liquid-glass-strong {
    background: rgba(255, 255, 255, 0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border: none;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.15);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass-strong::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1.4px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.2) 20%,
      transparent 40%,
      transparent 60%,
      rgba(255, 255, 255, 0.2) 80%,
      rgba(255, 255, 255, 0.5) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
  }
}
```

- [ ] **Step 5: Verify**

Run: `npm run lint` then `npm run build`
Expected: both pass (old components still compile; they still reference removed dark: classes harmlessly).

- [ ] **Step 6: Commit**

```bash
git add index.html tailwind.config.js src/index.css package.json package-lock.json
git commit -m "feat: glass design foundation - fonts, tailwind, liquid glass CSS, lucide-react"
```

---

### Task 2: Assets - background video and AccidentPath screenshot

**Files:**
- Create: `public/videos/background.mp4`
- Create: `src/images/accidentpath.png`

**Interfaces:**
- Produces: `/videos/background.mp4` (public URL consumed by BackgroundVideo in Task 3); `src/images/accidentpath.png` (imported by Hero in Task 4 and ProofOfWork in Task 6).

- [ ] **Step 1: Source a free-license dark abstract looping video**

Search Pexels/Coverr for a dark, slow, abstract loop (particles, ink, smoke, or macro light). Download the 1080p mp4 to `public/videos/background.mp4`. Target under ~15 MB; if larger, pick the SD/720p rendition instead. Record the source URL and license in the commit message.

- [ ] **Step 2: Capture accidentpath.com screenshot**

Open https://www.accidentpath.com in Chrome (claude-in-chrome), viewport ~1440x900, capture the homepage above the fold, save as `src/images/accidentpath.png`. Fallback if browser capture unavailable: fetch the site's og:image and save it under the same filename.

- [ ] **Step 3: Commit**

```bash
git add public/videos/background.mp4 src/images/accidentpath.png
git commit -m "feat: add background video and accidentpath screenshot assets"
```

---

### Task 3: BackgroundVideo component

**Files:**
- Create: `src/components/BackgroundVideo.jsx`

**Interfaces:**
- Produces: default export `BackgroundVideo` (no props). Renders the fixed z-0 layer. Consumed by App in Task 8.

- [ ] **Step 1: Write the component**

```jsx
import { useState } from 'react';

const BackgroundVideo = () => {
  const [failed, setFailed] = useState(false);

  return (
    <div className="fixed inset-0 z-0 bg-neutral-950">
      {!failed && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover grayscale"
          onError={() => setFailed(true)}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
};

export default BackgroundVideo;
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/BackgroundVideo.jsx
git commit -m "feat: fixed background video layer with dark overlay and fallback"
```

---

### Task 4: Hero rewrite (Bloom two-panel layout)

**Files:**
- Modify: `src/components/Hero.jsx` (full replacement)

**Interfaces:**
- Consumes: `.liquid-glass`, `.liquid-glass-strong` (Task 1); `src/images/accidentpath.png` (Task 2).
- Produces: default export `Hero` (no props). Anchors to `#what-i-do`, `#work`, `#experience`, `#contact`.

- [ ] **Step 1: Replace Hero.jsx entirely**

```jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, Sparkles, Wand2, BookOpen, Menu, Plus, Github, Linkedin, Mail,
} from 'lucide-react';
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
          <div className="flex-1 flex flex-col items-center justify-center text-center gap-6">
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
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/joner-de-silva-861575203/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:desilvajoner95@gmail.com"
              aria-label="Email"
              className="text-white hover:text-white/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <ArrowRight className="w-4 h-4 text-white/50" />
          </div>
          <a
            href="#contact"
            className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-white/80 hover:scale-105 transition-transform"
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
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: pass, no unused imports.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: Bloom-style two-panel glass hero"
```

---

### Task 5: WhatIDo section

**Files:**
- Create: `src/components/WhatIDo.jsx`

**Interfaces:**
- Produces: default export `WhatIDo`, section id `what-i-do`.

- [ ] **Step 1: Write the component**

```jsx
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
        <p className="text-xs tracking-widest uppercase text-white/50 mb-3">Services</p>
        <h2 className="text-4xl sm:text-5xl tracking-tight text-white">
          What I <em className="text-white/80">do</em>
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
              <service.icon className="w-5 h-5 text-white" />
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
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/WhatIDo.jsx
git commit -m "feat: What I do services section"
```

---

### Task 6: ProofOfWork section (AccidentPath spotlight + project grid)

**Files:**
- Create: `src/components/ProofOfWork.jsx`

**Interfaces:**
- Consumes: `src/images/accidentpath.png` (Task 2), existing project images in `src/images/`.
- Produces: default export `ProofOfWork`, section id `work`.

- [ ] **Step 1: Write the component**

```jsx
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import accidentpathImage from '../images/accidentpath.png';
import inframeImage from '../images/inframe.png';
import adshieldImage from '../images/adshieldAI.png';
import interviewerImage from '../images/interviewer.png';
import legislationImage from '../images/legislation.png';
import tbImage from '../images/TB.png';
import artisanalCrustImage from '../images/artisanal-crust.png';

const accidentPathStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'n8n', 'Vercel'];

const projects = [
  {
    title: 'InFrame',
    description: 'AI-generated LinkedIn posts: captions and visuals in seconds.',
    image: inframeImage,
    tags: ['React', 'TypeScript', 'Groq'],
    demoLink: 'https://postgen-ai-two.vercel.app/',
    codeLink: 'https://github.com/yop-dev/postgen-ai',
  },
  {
    title: 'AdShield AI',
    description: 'AI analysis of text, images, and documents for phishing and scam detection.',
    image: adshieldImage,
    tags: ['React', 'FastAPI', 'Supabase'],
    demoLink: 'https://adshield-frontend.vercel.app',
    codeLink: 'https://github.com/yop-dev/adshield-frontend',
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

const ProofOfWork = () => (
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
            <div className="flex items-center gap-4">
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
        {projects.map((project, index) => (
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
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProofOfWork;
```

- [ ] **Step 2: Verify**

Run: `npm run lint`
Expected: pass.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProofOfWork.jsx
git commit -m "feat: proof of work section - AccidentPath spotlight and project grid"
```

---

### Task 7: Experience and Contact rewrites, Footer

**Files:**
- Modify: `src/components/Experience.jsx` (full replacement)
- Modify: `src/components/Contact.jsx` (full replacement)
- Create: `src/components/Footer.jsx`

**Interfaces:**
- Consumes: `.liquid-glass`, `.liquid-glass-strong`; `src/files/CV Joner De Silva.pdf` (imported as a Vite asset).
- Produces: default exports `Experience` (section id `experience`), `Contact` (section id `contact`), `Footer`.

- [ ] **Step 1: Replace Experience.jsx**

```jsx
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
            className="liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-4 group block"
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
```

- [ ] **Step 2: Replace Contact.jsx**

```jsx
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
```

- [ ] **Step 3: Create Footer.jsx**

```jsx
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="relative py-8">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
      <span className="text-lg font-semibold tracking-tighter text-white/80">joner</span>
      <span>© {new Date().getFullYear()} Joner De Silva. All rights reserved.</span>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/yop-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors"
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/joner-de-silva-861575203/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-colors"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href="mailto:desilvajoner95@gmail.com"
          aria-label="Email"
          className="hover:text-white transition-colors"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
```

Note: the copyright symbol is the standard ASCII-safe HTML entity path; if `©` causes any encoding concern, use `(c)` instead. Do not use any smart punctuation.

- [ ] **Step 4: Verify**

Run: `npm run lint`
Expected: pass. If Vite/eslint complains about the .pdf import, add `assetsInclude: ['**/*.pdf']` to `vite.config.js` (Vite 4 handles .pdf by default; this is a fallback).

- [ ] **Step 5: Commit**

```bash
git add src/components/Experience.jsx src/components/Contact.jsx src/components/Footer.jsx
git commit -m "feat: glass experience rows, contact CTA panel, footer"
```

---

### Task 8: App rewire, dead component cleanup, final verify

**Files:**
- Modify: `src/App.jsx` (full replacement)
- Delete: `src/components/TerminalLoader.jsx`, `src/components/CursorParticles.jsx`, `src/components/Skills.jsx`, `src/components/CurrentlyWorkingOn.jsx`, `src/components/Projects.jsx`, `src/components/OtherProjects.jsx`, `src/components/About.jsx`, `src/components/Header.jsx`

**Interfaces:**
- Consumes: all components from Tasks 3-7.

- [ ] **Step 1: Replace App.jsx**

```jsx
import BackgroundVideo from './components/BackgroundVideo';
import Hero from './components/Hero';
import WhatIDo from './components/WhatIDo';
import ProofOfWork from './components/ProofOfWork';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-white">
      <BackgroundVideo />
      <main className="relative z-10">
        <Hero />
        <WhatIDo />
        <ProofOfWork />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Delete dead components**

```bash
git rm src/components/TerminalLoader.jsx src/components/CursorParticles.jsx src/components/Skills.jsx src/components/CurrentlyWorkingOn.jsx src/components/Projects.jsx src/components/OtherProjects.jsx src/components/About.jsx src/components/Header.jsx
```

- [ ] **Step 3: Final verify**

Run: `npm run lint`
Expected: pass with zero warnings.
Run: `npm run build`
Expected: build succeeds; confirm `dist/` contains the video reference and hashed accidentpath image.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: rewire app to glass landing page, remove old portfolio components"
```

- [ ] **Step 5: Start dev server for JDS review**

Run: `npm run dev` (background)
Tell JDS the site is on http://localhost:5173 for review. Do not screenshot it into the conversation; JDS reviews live per preference.
