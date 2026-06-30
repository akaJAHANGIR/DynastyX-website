import { motion } from 'framer-motion';
import { ExternalLink, Swords, CheckCircle } from 'lucide-react';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfw2jx9nL-2qISBPA_xO3GZGfEcfNQACGMa-iVDb8j4LU9mXA/viewform';

const PERKS = [
  'Compete in BGMI tournaments alongside elite players',
  'Access structured coaching and team scrimmages',
  'Become part of India\'s fastest-rising esports brand',
  'Build your profile in the professional BGMI scene',
];

export default function JoinUs() {
  return (
    <section id="join" className="relative py-24 md:py-36 bg-dark-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(124,0,224,0.18),transparent)]" />

      {/* Floating glow blobs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-700/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-brand-500/15 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-bar font-orbitron text-xs text-brand-400 uppercase tracking-[0.3em] mb-4">
            Recruitment
          </p>
          <h2 className="font-orbitron font-black text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Ready to <span className="neon-text">Dominate?</span>
          </h2>
          <p className="font-rajdhani text-gray-300 text-xl">
            Join DynastyX Esports and write your name in the dynasty.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="gradient-border rounded-3xl overflow-hidden"
        >
          <div className="bg-dark-800 rounded-3xl p-8 md:p-12 relative">

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-brand-500/40 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-brand-500/40 rounded-br-3xl" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-5 rounded-2xl bg-brand-700/25 border border-brand-500/30 shadow-neon-sm">
                  <Swords className="w-10 h-10 text-brand-300" />
                </div>
              </div>

              {/* Perks list */}
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {PERKS.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span className="font-rajdhani text-gray-300">{perk}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base"
                >
                  Apply Now
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <p className="font-rajdhani text-gray-600 text-sm text-center mt-6">
                Responses typically within 48–72 hours &nbsp;·&nbsp; BGMI players only
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
