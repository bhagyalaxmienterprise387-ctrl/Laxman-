import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, ShieldAlert, CheckCircle, Info, ArrowRight } from 'lucide-react';

export default function InteractiveShowcase() {
  const [step, setStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const steps = [
    {
      title: 'Step 1: Precision Thread Rolling',
      desc: 'Our COHD-45Type machine rolls threads directly onto the TMT steel bar end. This cold-forming process hardens the steel fibers instead of cutting them, ensuring zero strength loss.',
    },
    {
      title: 'Step 2: Install EN8D Coupler',
      desc: 'The internal female threads of our EN8D Coupler match the rebar pitch perfectly. Screw the high-tensile coupler onto the first bar until half the coupler is fully engaged.',
    },
    {
      title: 'Step 3: Connect Secondary Bar',
      desc: 'Insert the second threaded TMT bar from the opposite end. Tighten the connection using a standard pipe wrench until the bars butt firmly against each other inside the coupler.',
    },
    {
      title: 'Step 4: Structural Tensile Testing',
      desc: 'Under massive seismic or tensile forces, traditional lap joints fail due to concrete shear. Bhagyalaxmi Mechanical Coupler joints withstand load levels exceeding the rebar yield limit.',
    },
  ];

  const handleNextStep = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setStep((prev) => (prev + 1) % 4);
      setIsAnimating(false);
    }, 450);
  };

  const resetSimulation = () => {
    setStep(0);
  };

  return (
    <section id="showcase" className="py-24 bg-zinc-950 relative overflow-hidden border-b border-zinc-900">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-mono text-sm tracking-widest uppercase inline-block mb-3">
            Interactive Technical Demo
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            The Science of Mechanical Splicing
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            See how our high-tensile couplers and precision threading create an unbreakable connection. Use the simulator below to follow the assembly process.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Simulator Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-10" id="showcase-container">
          
          {/* SVG Stage Column */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center bg-zinc-950 border border-zinc-900 rounded-2xl p-4 sm:p-8 min-h-[350px] relative">
            
            {/* Grid Line Underlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.01)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

            {/* Stage */}
            <div className="w-full relative h-48 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 500 200" className="w-full max-w-md h-full">
                
                {/* Step 0: Threading Animation */}
                {step === 0 && (
                  <g id="step-0-svg">
                    {/* Machine base */}
                    <rect x="280" y="50" width="140" height="100" fill="#222" stroke="#d4af37" strokeWidth="2" rx="6" />
                    <circle cx="350" cy="100" r="25" fill="#111" stroke="#444" strokeWidth="3" />
                    <line x1="320" y1="100" x2="380" y2="100" stroke="#d4af37" strokeWidth="4" strokeDasharray="3 3" />
                    
                    {/* Rebar sliding into machine */}
                    <motion.g
                      animate={{ x: [0, 80, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {/* Ribbed Steel Rebar */}
                      <rect x="50" y="90" width="180" height="20" fill="#4B5563" rx="2" />
                      {/* Rib lines */}
                      <line x1="70" y1="90" x2="75" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="90" y1="90" x2="95" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="110" y1="90" x2="115" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="130" y1="90" x2="135" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="150" y1="90" x2="155" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="170" y1="90" x2="175" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="190" y1="90" x2="195" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="210" y1="90" x2="215" y2="110" stroke="#1F2937" strokeWidth="3" />
                      
                      {/* Rolled thread pattern on end */}
                      <rect x="230" y="92" width="40" height="16" fill="#9CA3AF" />
                      <line x1="235" y1="92" x2="235" y2="108" stroke="#374151" strokeWidth="2" />
                      <line x1="240" y1="92" x2="240" y2="108" stroke="#374151" strokeWidth="2" />
                      <line x1="245" y1="92" x2="245" y2="108" stroke="#374151" strokeWidth="2" />
                      <line x1="250" y1="92" x2="250" y2="108" stroke="#374151" strokeWidth="2" />
                      <line x1="255" y1="92" x2="255" y2="108" stroke="#374151" strokeWidth="2" />
                      <line x1="260" y1="92" x2="260" y2="108" stroke="#374151" strokeWidth="2" />
                      <line x1="265" y1="92" x2="265" y2="108" stroke="#374151" strokeWidth="2" />
                    </motion.g>

                    {/* Thread forming sparkles */}
                    <motion.circle
                      cx="330" cy="90" r="2" fill="#ffe066"
                      animate={{ scale: [1, 2, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="325" cy="110" r="1.5" fill="#ffe066"
                      animate={{ scale: [1, 1.8, 1], opacity: [0, 1, 0] }}
                      transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }}
                    />
                  </g>
                )}

                {/* Step 1: Install Coupler */}
                {step === 1 && (
                  <g id="step-1-svg">
                    {/* Threaded Rebar on Left */}
                    <g>
                      <rect x="20" y="90" width="180" height="20" fill="#4B5563" rx="2" />
                      <line x1="40" y1="90" x2="45" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="60" y1="90" x2="65" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="80" y1="90" x2="85" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="100" y1="90" x2="105" y2="110" stroke="#1F2937" strokeWidth="3" />
                      {/* Threads */}
                      <rect x="200" y="92" width="50" height="16" fill="#9CA3AF" />
                      <path d="M200,92 L200,108 M205,92 L205,108 M210,92 L210,108 M215,92 L215,108 M220,92 L220,108 M225,92 L225,108 M230,92 L230,108 M235,92 L235,108 M240,92 L240,108 M245,92 L245,108" stroke="#374151" strokeWidth="2" />
                    </g>

                    {/* Coupler moving in */}
                    <motion.g
                      animate={{ x: [150, 0] }}
                      transition={{ duration: 2.5, ease: 'easeOut' }}
                    >
                      {/* Gold Coupler sleeve */}
                      <rect x="220" y="85" width="80" height="30" fill="#d4af37" stroke="#aa7c11" strokeWidth="2" rx="4" />
                      {/* Inner threading markers */}
                      <line x1="230" y1="88" x2="230" y2="112" stroke="#573e0a" strokeWidth="1" />
                      <line x1="240" y1="88" x2="240" y2="112" stroke="#573e0a" strokeWidth="1" />
                      <line x1="250" y1="88" x2="250" y2="112" stroke="#573e0a" strokeWidth="1" />
                      <line x1="260" y1="88" x2="260" y2="112" stroke="#573e0a" strokeWidth="1" />
                      <line x1="270" y1="88" x2="270" y2="112" stroke="#573e0a" strokeWidth="1" />
                      <line x1="280" y1="88" x2="280" y2="112" stroke="#573e0a" strokeWidth="1" />
                    </motion.g>
                  </g>
                )}

                {/* Step 2: Connect Second Bar */}
                {step === 2 && (
                  <g id="step-2-svg">
                    {/* Fixed Left Bar and engaged Coupler */}
                    <g>
                      <rect x="20" y="90" width="180" height="20" fill="#4B5563" rx="2" />
                      <rect x="200" y="85" width="80" height="30" fill="#d4af37" stroke="#aa7c11" strokeWidth="2" rx="4" />
                    </g>

                    {/* Right bar moving in */}
                    <motion.g
                      animate={{ x: [100, 0] }}
                      transition={{ duration: 2.5, ease: 'easeOut' }}
                    >
                      {/* Threads of Right Bar */}
                      <rect x="240" y="92" width="40" height="16" fill="#9CA3AF" />
                      <path d="M245,92 L245,108 M250,92 L250,108 M255,92 L255,108 M260,92 L260,108 M265,92 L265,108 M270,92 L270,108 M275,92 L275,108" stroke="#374151" strokeWidth="2" />
                      
                      {/* Right rebar body */}
                      <rect x="280" y="90" width="180" height="20" fill="#4B5563" rx="2" />
                      <line x1="300" y1="90" x2="305" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="320" y1="90" x2="325" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="340" y1="90" x2="345" y2="110" stroke="#1F2937" strokeWidth="3" />
                      <line x1="360" y1="90" x2="365" y2="110" stroke="#1F2937" strokeWidth="3" />
                    </motion.g>
                  </g>
                )}

                {/* Step 3: Tensile Loading test */}
                {step === 3 && (
                  <g id="step-3-svg">
                    {/* Tension indicators (Arrows) */}
                    <motion.g
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {/* Left Rebar */}
                      <rect x="20" y="90" width="180" height="20" fill="#4B5563" rx="2" />
                      {/* Red Tension force arrow */}
                      <path d="M60,70 L30,70 M30,70 L40,65 M30,70 L40,75" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                    </motion.g>

                    <motion.g
                      animate={{ x: [5, -5, 5] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      {/* Right Rebar */}
                      <rect x="280" y="90" width="180" height="20" fill="#4B5563" rx="2" />
                      {/* Red Tension force arrow */}
                      <path d="M420,70 L450,70 M450,70 L440,65 M450,70 L440,75" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                    </motion.g>

                    {/* Secure Golden Coupler Sleeve in the center */}
                    <rect x="200" y="85" width="80" height="30" fill="#d4af37" stroke="#ffeb99" strokeWidth="3" rx="4" />
                    
                    {/* Glow indicators around joint */}
                    <motion.rect
                      x="195" y="80" width="90" height="40" rx="6"
                      stroke="#ffe066" strokeWidth="2" fill="none" opacity="0.4"
                      animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.6, 0.1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />

                    {/* Stress Text Badge */}
                    <text x="240" y="145" fill="#ffe066" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
                      JOINT SECURITY: 100%
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Stage Footer: Indicator Dots */}
            <div className="flex gap-2 mt-4" id="stage-indicators">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === step ? 'w-8 bg-gold-500' : 'w-2 bg-zinc-800'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text Description Column */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[300px]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 bg-zinc-800 text-gold-500 rounded-md font-mono text-xs font-bold">
                  0{step + 1}
                </span>
                <span className="text-zinc-500 text-xs font-mono font-bold tracking-widest uppercase">
                  Assembly Simulation
                </span>
              </div>

              {/* Title & Description with smooth fade effects */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold font-display text-white mb-4">
                    {steps[step].title}
                  </h3>
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                    {steps[step].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls panel */}
            <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleNextStep}
                disabled={isAnimating}
                className="px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold text-sm rounded-xl flex items-center gap-2 cursor-pointer shadow-lg shadow-gold-500/10 transition-all disabled:opacity-50"
                id="showcase-next-btn"
              >
                <span>{step === 3 ? 'Restart Demo' : 'Next Step'}</span>
                {step === 3 ? <RotateCcw size={16} /> : <Play size={16} fill="black" />}
              </button>

              {step > 0 && (
                <button
                  type="button"
                  onClick={resetSimulation}
                  className="px-4 py-3 border border-zinc-800 text-zinc-400 hover:text-white rounded-xl text-xs font-semibold cursor-pointer transition-colors"
                  id="showcase-reset-btn"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Table comparing Splicing types */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8" id="comparison-panels">
          
          {/* Lap Splice */}
          <div className="p-6 sm:p-8 bg-zinc-950/40 border border-red-900/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-red-950/30 text-red-400 rounded-lg">
                <ShieldAlert size={22} />
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                Traditional Lap Splicing
              </h4>
            </div>
            <ul className="space-y-3 text-zinc-400 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-1">✕</span>
                <span>Requires overlapping rebars up to 50x diameter, wasting tons of premium steel.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-1">✕</span>
                <span>Congests reinforcement cages, blocking coarse aggregate flow during concrete pours.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 shrink-0 mt-1">✕</span>
                <span>Relies entirely on concrete bond stress. If concrete cracks during earthquakes, the joint slips.</span>
              </li>
            </ul>
          </div>

          {/* Mechanical Splice */}
          <div className="p-6 sm:p-8 bg-zinc-900/30 border border-gold-500/10 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gold-500/10 text-gold-500 rounded-lg">
                <CheckCircle size={22} />
              </div>
              <h4 className="text-lg font-bold font-display text-gold-400">
                Bhagyalaxmi Mechanical Splicing
              </h4>
            </div>
            <ul className="space-y-3 text-zinc-300 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gold-500 shrink-0 mt-1">✓</span>
                <span>End-to-end load paths, requiring zero overlap. **Saves 25% on steel reinforcement budget.**</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 shrink-0 mt-1">✓</span>
                <span>Eliminates rebar congestion completely, letting concrete flow and vibrate smoothly.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-500 shrink-0 mt-1">✓</span>
                <span>Provides a continuous mechanical connection that retains strength even if concrete degrades.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
