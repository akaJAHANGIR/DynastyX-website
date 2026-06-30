import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'roster',   label: 'Roster' },
  { id: 'founders', label: 'Founders' },
  { id: 'join',     label: 'Join Us' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);

      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 80 && bottom >= 80) { setActive(id); break; }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-dark shadow-[0_0_40px_rgba(191,0,255,0.08)] border-b border-brand-700/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 group select-none"
        >
          {/* DX emblem */}
          <div className="relative w-9 h-9 flex-shrink-0">
            <div className="absolute inset-0 rounded-md bg-gradient-to-br from-brand-600 to-brand-900 border border-brand-500/50 shadow-neon-sm" />
            <span className="absolute inset-0 flex items-center justify-center font-orbitron font-black text-sm text-white tracking-tighter">
              DX
            </span>
          </div>
          <span className="font-orbitron font-black text-lg tracking-widest">
            <span className="text-white group-hover:neon-text-white transition-all">Dynasty</span>
            <span className="neon-text">X</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative px-4 py-2 font-rajdhani font-semibold text-sm uppercase tracking-widest transition-colors ${
                active === id ? 'text-brand-300' : 'text-gray-400 hover:text-white'
              }`}
            >
              {label}
              {active === id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-brand-400 rounded-full shadow-neon-sm"
                />
              )}
            </button>
          ))}
          <button
            onClick={() => scrollTo('join')}
            className="btn-primary ml-4 !py-2 !px-6 text-xs"
          >
            Join Now
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-brand-300 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass-dark border-t border-brand-700/30 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-rajdhani font-semibold text-sm uppercase tracking-wider transition-all ${
                    active === id
                      ? 'bg-brand-700/30 text-brand-300'
                      : 'text-gray-400 hover:bg-dark-700 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('join')}
                className="btn-primary w-full mt-2 !py-3 text-xs"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
