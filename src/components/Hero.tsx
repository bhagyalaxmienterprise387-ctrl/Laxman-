import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, Award, ShieldCheck, Zap, Users } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const images = [
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600', // Rebar/Construction
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600', // Metalworking Shop
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600', // Sparks/Threading
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const stats = [
    { icon: <ShieldCheck className="text-gold-400" size={24} />, value: '100%', label: 'Quality Assured' },
    { icon: <Zap className="text-gold-400" size={24} />, value: 'EN8D', label: 'Grade Certified' },
    { icon: <Users className="text-gold-400" size={24} />, value: '500+', label: 'Clients Satisfied' },
    { icon: <Award className="text-gold-400" size={24} />, value: 'Precision', label: 'Engineering' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentBg]})` }}
          />
        </AnimatePresence>
        {/* Dark Overlays for Extreme Contrast */}
        <div className="absolute inset-0 bg-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/50 to-zinc-950/90" />
        
        {/* Grid lines pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
          id="hero-content-block"
        >
          {/* Logo Frame */}
          <div className="mb-6 p-4 bg-zinc-900/60 rounded-full border border-gold-500/30 backdrop-blur-sm shadow-xl shadow-black/50 hover:border-gold-500/60 transition-colors duration-500">
            <Logo size={80} showText={false} />
          </div>

          {/* Core Branding */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-display mb-4 leading-tight">
            BHAGYALAXMI
            <span className="block mt-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700">
              DD ENTERPRISES
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-gold-400 font-sans font-medium max-w-3xl mx-auto mb-3 tracking-wide">
            Manufacturers of Rebar Couplers & Rebar Threading Services
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-400 tracking-widest text-xs sm:text-sm font-semibold uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full inline-block" />
            <span>Strength</span>
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full inline-block" />
            <span>Precision</span>
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full inline-block" />
            <span>Reliability</span>
            <span className="w-1.5 h-1.5 bg-gold-500 rounded-full inline-block" />
          </div>

          {/* Action Buttons Grid */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto mb-16" id="hero-actions">
            <a
              href="tel:+919130656955"
              id="hero-call-btn"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-zinc-900 text-white border border-gold-500/50 hover:border-gold-400 rounded-full font-bold transition-all duration-300 shadow-md cursor-pointer"
            >
              <Phone size={18} className="text-gold-400" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/919130656955?text=Hello%20Bhagyalaxmi%20DD%20Enterprises,%20I'm%20interested%20in%20your%20rebar%20couplers/threading%20services."
              target="_blank"
              rel="noreferrer"
              id="hero-whatsapp-btn"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-emerald-600/20 cursor-pointer"
            >
              <MessageSquare size={18} />
              <span>WhatsApp Chat</span>
            </a>

            <button
              onClick={() => scrollToSection('products')}
              id="hero-quote-btn"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black rounded-full font-bold transition-all duration-300 shadow-lg shadow-gold-500/20 cursor-pointer"
            >
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Animated Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl" id="hero-stats">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="p-4 bg-zinc-900/50 border border-zinc-800/80 rounded-xl backdrop-blur-md flex flex-col items-center hover:border-gold-500/30 transition-all duration-300 shadow-md"
              >
                <div className="mb-2 p-2 bg-zinc-950 rounded-lg">{stat.icon}</div>
                <span className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Golden Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
