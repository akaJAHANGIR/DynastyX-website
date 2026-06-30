@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { scroll-behavior: smooth; }

  body {
    @apply bg-dark-900 text-white font-inter;
    overflow-x: hidden;
  }

  ::selection {
    background: rgba(191, 0, 255, 0.35);
    color: #fff;
  }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { @apply bg-dark-950; }
  ::-webkit-scrollbar-thumb { @apply bg-brand-700 rounded-full; }
  ::-webkit-scrollbar-thumb:hover { @apply bg-brand-500; }
}

@layer components {
  /* ─── Neon text glow ─── */
  .neon-text {
    color: #bf00ff;
    text-shadow:
      0 0 8px rgba(191, 0, 255, 0.9),
      0 0 20px rgba(191, 0, 255, 0.6),
      0 0 40px rgba(191, 0, 255, 0.3);
  }

  .neon-text-white {
    text-shadow:
      0 0 10px rgba(255, 255, 255, 0.8),
      0 0 30px rgba(191, 0, 255, 0.5);
  }

  /* ─── Glassmorphism card ─── */
  .glass {
    background: rgba(16, 16, 26, 0.75);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(191, 0, 255, 0.18);
  }

  .glass-dark {
    background: rgba(10, 10, 15, 0.85);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(191, 0, 255, 0.12);
  }

  /* ─── Gradient border via pseudo-element ─── */
  .gradient-border {
    position: relative;
    background: rgba(16, 16, 26, 0.9);
  }
  .gradient-border::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, #bf00ff 0%, #5500aa 50%, #bf00ff 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  /* ─── Diagonal grid bg ─── */
  .bg-grid {
    background-image: linear-gradient(rgba(159, 0, 255, 0.06) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(159, 0, 255, 0.06) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* ─── Scan line overlay ─── */
  .scan-line::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(191, 0, 255, 0.6), transparent);
    animation: scan 4s linear infinite;
    pointer-events: none;
  }

  /* ─── Section heading bar ─── */
  .section-bar {
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }
  .section-bar::before,
  .section-bar::after {
    content: '';
    display: block;
    height: 2px;
    width: 40px;
    background: linear-gradient(90deg, transparent, #bf00ff);
  }
  .section-bar::after {
    background: linear-gradient(90deg, #bf00ff, transparent);
  }

  /* ─── Clip-path HUD corners ─── */
  .hud-clip {
    clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
  }

  /* ─── Hover glow on cards ─── */
  .card-hover {
    transition: all 0.35s ease;
  }
  .card-hover:hover {
    box-shadow: 0 0 0 1px rgba(191, 0, 255, 0.5),
                0 0 40px rgba(191, 0, 255, 0.2),
                0 20px 60px rgba(0, 0, 0, 0.7);
    transform: translateY(-6px);
  }

  /* ─── Primary button ─── */
  .btn-primary {
    @apply relative inline-flex items-center justify-center gap-2 px-8 py-3.5
           font-orbitron font-bold text-sm uppercase tracking-widest text-white
           rounded-lg overflow-hidden transition-all duration-300;
    background: linear-gradient(135deg, #7c00e0, #bf00ff);
    box-shadow: 0 0 24px rgba(191, 0, 255, 0.4);
  }
  .btn-primary:hover {
    box-shadow: 0 0 40px rgba(191, 0, 255, 0.7), 0 0 80px rgba(191, 0, 255, 0.3);
    transform: translateY(-2px) scale(1.02);
  }
  .btn-primary:active { transform: translateY(0) scale(0.99); }

  /* ─── Ghost button ─── */
  .btn-ghost {
    @apply relative inline-flex items-center justify-center gap-2 px-8 py-3.5
           font-orbitron font-bold text-sm uppercase tracking-widest text-brand-300
           rounded-lg overflow-hidden transition-all duration-300;
    border: 1px solid rgba(191, 0, 255, 0.5);
    background: transparent;
  }
  .btn-ghost:hover {
    background: rgba(191, 0, 255, 0.08);
    border-color: rgba(191, 0, 255, 0.9);
    box-shadow: 0 0 24px rgba(191, 0, 255, 0.3);
    transform: translateY(-2px);
  }
}
