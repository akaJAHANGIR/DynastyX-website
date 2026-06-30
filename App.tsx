import { motion, type Transition } from 'framer-motion';
import { ChevronDown, Users, Zap } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' } as Transition,
});

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark-950"
    >
      {/* ── Background grid ── */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* ── Radial purple glow ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(124,0,224,0.22),transparent)]" />

      {/* ── Animated orbit rings ── */}
      <div className="absolute top-1/2 left-1/2 pointer-events-none select-none">
        <div
          className="absolute border border-brand-600/20 rounded-full"
          style={{
            width: 600, height: 600,
            transform: 'translate(-50%,-50%)',
            animation: 'spin 30s linear infinite',
          }}
        />
        <div
          className="absolute border border-brand-500/10 rounded-full"
          style={{
            width: 900, height: 900,
            transform: 'translate(-50%,-50%)',
            animation: 'spin 50s linear infinite reverse',
          }}
        />
      </div>

      {/* ── Floating purple orbs ── */}
      <div className="absolute top-1/4 left-[15%] w-72 h-72 bg-brand-700/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-[15%] w-56 h-56 bg-brand-500/15 rounded-full blur-[80px] animate-float [animation-delay:3.5s]" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 glass hud-clip font-rajdhani font-semibold text-sm uppercase tracking-widest text-brand-300">
            <Zap className="w-4 h-4 text-brand-400" />
            BGMI Competitive Esports Organisation
          </span>
        </motion.div>

        {/* Main logo / wordmark */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <h1 className="font-orbitron font-black leading-none select-none">
            <span
              className="block text-[clamp(4rem,12vw,10rem)] tracking-tight text-white neon-text-white"
              style={{ lineHeight: 1 }}
            >
              DYNASTY
            </span>
            <span
              className="block text-[clamp(4.5rem,14vw,12rem)] tracking-tight animate-pulse-neon"
              style={{ lineHeight: 0.9, color: '#bf00ff' }}
            >
              X
            </span>
          </h1>
          <p className="font-orbitron font-semibold text-[clamp(0.65rem,2vw,1rem)] uppercase tracking-[0.35em] text-brand-400 mt-2">
            ─── ESPORTS ───
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.25)}
          className="font-orbitron font-bold text-[clamp(1.1rem,3.5vw,2rem)] text-white uppercase tracking-wider mb-4"
        >
          FORGING A DYNASTY IN BGMI
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.35)}
          className="font-rajdhani font-semibold text-[clamp(1rem,2.5vw,1.5rem)] text-gray-300 mb-10 tracking-widest"
        >
          Built to{' '}
          <span className="text-brand-300">Compete</span>.{' '}
          Made to{' '}
          <span className="text-brand-300">Win</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('join')}
            className="btn-primary text-sm"
          >
            <Zap className="w-4 h-4" />
            Join the Dynasty
          </button>
          <button
            onClick={() => scrollTo('roster')}
            className="btn-ghost text-sm"
          >
            <Users className="w-4 h-4" />
            Meet the Roster
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12"
        >
          {[
            { value: '4', label: 'Elite Players' },
            { value: '2026', label: 'Founded' },
            { value: 'BGMI', label: 'Primary Game' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-orbitron font-black text-3xl md:text-4xl text-brand-300 mb-1">
                {value}
              </div>
              <div className="font-rajdhani text-xs uppercase tracking-widest text-gray-500">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-500/60 hover:text-brand-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>

      {/* Inline keyframe for spin */}
      <style>{`
        @keyframes spin {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
