# Spec: SaaS-style personal marketing site redesign

Date: 2026-07-26
Status: Approved by JDS (verbal, "go for it, we'll iterate for improvements after")

## Goal

Replace the classic portfolio layout with a SaaS-style marketing landing page that sells
Joner De Silva as an AI Software Engineer, Automation Expert, and AI Expert. The visual
language follows the "Bloom" reference: liquid glass morphism over a full-screen looping
video background, strict grayscale, Poppins with Source Serif 4 italic accents.

## Non-goals

- No multi-page routing. The site stays a single scroll page.
- No CMS, no backend changes. EmailJS contact flow is kept as-is functionally.
- No light mode. The site is dark-over-video only.
- The old design (TerminalLoader, CursorParticles, blue accents, marquee skills) is retired.

## Foundation

- Stack stays Vite + React 18 + Tailwind CSS 3 + Framer Motion. Add `lucide-react`.
- `index.html` loads Google Fonts: Poppins (400, 500, 600) and Source Serif 4 (italic 400, 500).
- Tailwind config: `font-display` = Poppins (also the default sans), `font-serif` =
  Source Serif 4. Border radius token `--radius: 1rem`.
- Color system: strict grayscale only. All CSS variables are `0 0% X%` HSL. Text uses
  `text-white`, `text-white/80`, `text-white/60`, `text-white/50` for hierarchy. No colored
  accents anywhere. No `border` utility classes on glass elements; borders come from the
  glass ::before pseudo-element.

### Liquid glass (index.css, @layer components)

`.liquid-glass` (light tier):
- background: rgba(255,255,255,0.01); background-blend-mode: luminosity;
- backdrop-filter: blur(4px); border: none;
- box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
- position: relative; overflow: hidden;
- ::before gradient border: linear-gradient(180deg, rgba(255,255,255,0.45) 0%,
  rgba(255,255,255,0.15) 20%, transparent 40%, transparent 60%,
  rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%), padding 1.4px,
  masked with -webkit-mask-composite: xor / mask-composite: exclude.

`.liquid-glass-strong` (heavy tier, CTAs and panels):
- Same structure, backdrop-filter: blur(50px);
- box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15);
- ::before alphas 0.5 / 0.2 instead of 0.45 / 0.15.

### Background video

- One site-wide `<video>` element: autoplay, loop, muted, playsInline, object-cover,
  fixed inset-0 z-0, with a dark overlay (black at roughly 40-55 percent) for readability.
- All page content sits above at z-10, so glass panels refract the video while scrolling.
- Asset: a free-license dark abstract looping video (Pexels or similar), downloaded to
  `public/videos/background.mp4`. Must read well in grayscale (a grayscale CSS filter on
  the video is acceptable to enforce the palette). Keep the file reasonably small
  (target under ~15 MB); pick 1080p or downscale.
- Fallback: if the video fails to load, the fixed layer shows a near-black background.

## Page structure (top to bottom)

### 1. Hero (full viewport, Bloom layout)

Two-panel flex row, min-h-screen. Left panel w-[52%], right panel w-[48%], right panel
hidden below lg.

Left panel: wrapped in a `liquid-glass-strong` overlay (absolute inset-4 lg:inset-6
rounded-3xl). Contents:
- Nav row: wordmark "joner" (semibold, text-2xl, tracking-tighter, white) on the left.
  On the right a "Menu" pill (liquid-glass, Menu icon) that opens a simple glass dropdown
  with anchor links to sections (What I do, Work, Experience, Contact).
- Hero center (flex-1, centered):
  - h1, text-6xl lg:text-7xl, tracking-[-0.05em], font-weight 500, white:
    "Software, shipped" on line one, "at the speed of AI" on line two with the italic
    part in font-serif text-white/80.
  - Sub-line: "Joner De Silva - AI Software Engineer and Automation Expert" in
    text-white/60.
  - CTA button: "Start a project" with an ArrowRight icon inside a w-7 h-7 rounded-full
    bg-white/15 circle. Button is liquid-glass-strong, rounded-full, hover:scale-105
    active:scale-95. Scrolls to Contact.
  - Three pills: "AI Engineering", "n8n Automation", "Full-Stack Web" (liquid-glass,
    rounded-full, text-xs, text-white/80).
- Bottom quote block:
  - Label: "BUILT WITH AI, SHIPPED BY ME" (text-xs, tracking-widest, uppercase,
    text-white/50).
  - Quote line mixing font-display and font-serif italic spans, e.g. "I build the
    software and the automations that build the business."
  - Author line: "JONER DE SILVA" with horizontal rule lines on each side.

Right panel (lg and up only):
- Top bar: social icons pill (Github, Linkedin, Mail from lucide-react) in a liquid-glass
  pill with an ArrowRight, plus an "Account"-slot button repurposed as a "Hire me" pill
  with Sparkles icon. Social links: GitHub https://github.com/yop-dev, LinkedIn
  https://www.linkedin.com/in/joner-de-silva-861575203/, mailto:desilvajoner95@gmail.com.
- Community card slot: small liquid-glass card (w-56) titled "Currently building" with a
  one-liner about Repostr and RetroLens.
- Bottom feature section (mt-auto): outer liquid-glass container rounded-[2.5rem]
  containing:
  - Two side-by-side liquid-glass rounded-3xl cards: "AI Engineering" (Wand2 icon) and
    "Automation" (BookOpen icon), each with a one-line description.
  - Bottom card: AccidentPath screenshot thumbnail (96x64), title "Client work -
    AccidentPath.com", short description, and a "+" button that anchors to the Proof of
    Work section. All liquid-glass.

Icon containers: w-8 h-8 rounded-full bg-white/10 flex items-center justify-center.
All interactive elements: hover:scale-105 transition-transform. Social links:
text-white hover:text-white/80 transition-colors.

### 2. What I do

Section heading in the hero typography style (font-weight 500, serif italic accent word).
Three `liquid-glass` cards in a responsive grid:
1. AI Software Engineering: AI-powered web apps and features, LLM integrations.
   Tags: React, Next.js, TypeScript, Claude/OpenAI APIs.
2. Automation and Integrations: n8n workflows, webhooks, API glue that removes manual
   work. Tags: n8n, REST APIs, Supabase, Zapier-class integrations.
3. Full-Stack Web: production sites shipped end to end, from design to deploy.
   Tags: Next.js, Tailwind, Vercel, PostgreSQL.
Each card: lucide icon in a bg-white/10 circle, title, two-line pitch, small text tags.

### 3. Proof of work

- AccidentPath spotlight: large `liquid-glass-strong` panel, two columns. Left: screenshot
  of the live accidentpath.com homepage (captured fresh, stored at
  `src/images/accidentpath.png`). Right: label "DTLA Print - client work", title
  "AccidentPath.com", 3-4 sentence case study (bilingual EN/ES personal-injury guidance
  platform and attorney directory for California and Arizona; guided intake flow;
  Supabase-backed attorney directory; lead delivery automated with n8n; SEO and content
  pipeline). Stack badges: Next.js, TypeScript, Tailwind CSS, Supabase, n8n, Vercel.
  One button: "Visit accidentpath.com". Muted note: "Proprietary client codebase".
- Selected personal projects: glass-card grid of 6: InFrame, AdShield AI, CareerLaunch AI,
  RA 10173 Compliance Checker, Tuberculosis Detection System, The Artisanal Crust.
  Existing images reused with a grayscale filter, color restored on hover. Each card:
  title, one-line description, up to 3 tech tags, demo and code links where they exist.
  The remaining old projects (Event Scheduler, Realtor Portfolio, IT Ticketing, Thesis
  Management, and the whole OtherProjects list) are cut.

### 4. Experience

Condensed stacked glass rows (not the dot-and-line timeline): company, title, period,
type, tech tags. Same five entries as today, except DTLA Print tags become:
Next.js, TypeScript, Supabase, n8n, Claude Code. Rows are clickable to company URLs.

### 5. Contact CTA plus footer

- One large `liquid-glass-strong` panel: headline "Let's build something" (serif italic
  accent), short line, the existing EmailJS form restyled: glass inputs (bg-white/5,
  no visible borders, white text), glass submit pill. Direct email and social links
  alongside.
- Minimal footer: wordmark, "Built with React and too much coffee" type one-liner
  optional, copyright, socials. All text white/50.

## Component plan

New/rewritten components in `src/components/`:
- `BackgroundVideo.jsx` (fixed video + overlay)
- `Hero.jsx` (full rewrite, Bloom layout)
- `WhatIDo.jsx` (new)
- `ProofOfWork.jsx` (new: AccidentPath spotlight + projects grid; project data inlined
  or in a small `src/data/projects.js`)
- `ExperienceGlass.jsx` (rewrite of Experience; may keep filename Experience.jsx)
- `ContactGlass.jsx` (rewrite of Contact; may keep filename Contact.jsx)
- `Footer.jsx` (rewrite)
Removed from App: TerminalLoader, CursorParticles, Skills marquee, CurrentlyWorkingOn
(content absorbed into hero right panel), About, OtherProjects, Header (nav lives in
hero left panel). Dead component files are deleted.

`App.jsx` renders: BackgroundVideo, then main z-10: Hero, WhatIDo, ProofOfWork,
Experience, Contact, Footer.

## Copy rules

- All copy plain ASCII: no em dashes, en dashes, smart quotes, or invisible Unicode.
- AccidentPath copy stays educational and factual, no legal claims on behalf of the site.

## Error handling

- Video: onError hides the video element, leaving the near-black fallback layer.
- EmailJS: existing success/error states restyled but logic unchanged.
- Reduced motion: hero animations remain subtle; Framer Motion entrance animations only,
  no scroll-jacking.

## Testing / acceptance

- `npm run lint` passes with zero warnings (repo lint config).
- `npm run build` succeeds.
- Manual review by JDS on `npm run dev` (localhost), desktop and mobile widths.
- Mobile: right hero panel hidden, left panel full width, all sections single column.
