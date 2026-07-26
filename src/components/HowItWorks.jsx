import { motion } from 'framer-motion';
import { MessageSquare, Rocket, Workflow } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Tell me what you need',
    description: 'A short call or written brief. We scope the outcome you want, not billable hours.',
  },
  {
    icon: Rocket,
    step: '02',
    title: 'See it working early',
    description: 'Working software on a live preview within days, then fast iterations on your feedback.',
  },
  {
    icon: Workflow,
    step: '03',
    title: 'Ship, then automate',
    description: 'Production deploy plus the n8n automations around it, so the manual work disappears too.',
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="relative py-24">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="text-xs tracking-widest uppercase text-amber-300/70 mb-3">Process</p>
        <h2 className="text-4xl sm:text-5xl tracking-tight text-white">
          How it <em className="text-amber-200/90">works</em>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="liquid-glass rounded-3xl p-8"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-amber-200" />
              </span>
              <span className="text-3xl font-medium text-white/20">{step.step}</span>
            </div>
            <h3 className="text-xl text-white mb-3">{step.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
