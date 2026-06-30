import { useRef } from 'react';
import { motion, useInView, type Transition } from 'framer-motion';
import { Target, Eye, Heart, Calendar } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.65, delay, ease: 'easeOut' } as Transition,
});

const PILLARS = [
  {
    icon: Target,
    title: 'Our Mission',
    body: 'Become one of India\'s biggest and most respected BGMI organisations — building elite squads that compete at every major tournament and inspire a generation of Indian esports athletes.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'A future where DynastyX stands among the premier global BGMI names — representing India with skill, discipline, and an unwavering championship mindset.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    body: 'Focus. Commit. Dominate. We live by these words every scrimmage, every tournament, every day — winning the right way through relentless preparation and brotherhood.',
  },
];

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24 md:py-36 bg-dark-900">
      {/* Subtle top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <p className="section-bar font-orbitron text-xs text-brand-400 uppercase tracking-[0.3em] mb-4">
            Our Story
          </p>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            About <span className="neon-text">DynastyX</span>
          </h2>
          <p className="font-rajdhani text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Born from passion, forged through competition.
          </p>
        </motion.div>

        {/* Founded card */}
        <motion.div {...fadeUp(0.15)} className="mb-12">
          <div className="gradient-border rounded-2xl p-px max-w-3xl mx-auto">
            <div className="rounded-2xl bg-dark-800 p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(124,0,224,0.15),transparent)]" />
              <div className="relative">
                <div className="inline-flex items-center gap-3 mb-5">
                  <Calendar className="w-5 h-5 text-brand-400" />
                  <span className="font-orbitron text-sm text-brand-400 uppercase tracking-widest">
                    Est. 27 June 2026
                  </span>
                </div>
                <p className="font-rajdhani text-gray-200 text-lg md:text-xl leading-relaxed">
                  <span className="font-semibold text-white">DynastyX Esports</span> was founded on{' '}
                  <span className="text-brand-300 font-semibold">27 June 2026</span> by two brothers —{' '}
                  <span className="text-brand-300 font-semibold">SM Jahangir Alom</span> and{' '}
                  <span className="text-brand-300 font-semibold">Harshal</span> — united by a single goal: to build India's most feared and respected BGMI competitive organisation from the ground up.
                </p>
                <p className="font-rajdhani text-gray-400 text-base md:text-lg mt-4 leading-relaxed">
                  What started as a dream became a dynasty. Every player we sign, every tournament we enter, every hour of scrimmage is a step toward that goal — becoming unstoppable.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pillars grid */}
        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-6"
        >
          {PILLARS.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="glass rounded-2xl p-7 card-hover hud-clip group"
            >
              <div className="mb-5">
                <div className="inline-flex p-3 rounded-xl bg-brand-700/25 border border-brand-600/30 group-hover:border-brand-400/50 group-hover:bg-brand-600/20 transition-all">
                  <Icon className="w-6 h-6 text-brand-400" />
                </div>
              </div>
              <h3 className="font-orbitron font-bold text-xl text-white mb-3">{title}</h3>
              <p className="font-rajdhani text-gray-400 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-600/30 to-transparent" />
    </section>
  );
}
