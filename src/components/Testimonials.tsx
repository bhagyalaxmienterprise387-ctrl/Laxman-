import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      name: 'Mr. Satish Shinde',
      company: 'Shinde Infrastructure Projects Ltd.',
      role: 'Chief Structural Engineer',
      text: 'Bhagyalaxmi DD Enterprises has been our primary coupler supplier for our commercial high-rises in Pune. Their EN8D grade couplers are of exceptional build, and Laxman and his team deliver custom batches on extremely tight timelines. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Ramesh Kulkarni',
      company: 'Kulkarni & Sons Builders',
      role: 'Project Director',
      text: 'We transition entirely from lap splicing to Bhagyalaxmis rebar couplers on our recent residential townships. Not only did we save over 22% on raw steel costs, but concrete pouring also became seamless due to zero congestion. Their thread rolling machine on site worked flawlessly.',
      rating: 5,
    },
    {
      name: 'Er. Anil Deshmukh',
      company: 'Swaraj Heights PMC',
      role: 'Principal Site Consultant',
      text: 'Precision is everything when it comes to rebar threading. The thread pitch rolled by Bhagyalaxmis COHD-45 rolling machines is incredibly consistent. The couplers screw on perfectly snug with zero thread slipping. Absolute engineering satisfaction.',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative overflow-hidden border-b border-zinc-900">
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-mono text-sm tracking-widest uppercase inline-block mb-3">
            Client Success
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Trusted by Leaders in Construction
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Carousel Block */}
        <div className="max-w-4xl mx-auto relative" id="testimonial-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-md relative"
            >
              {/* Giant quote icon */}
              <Quote className="absolute right-8 top-8 text-gold-500/10" size={120} />

              {/* Rating stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-gold-500 fill-gold-500" size={18} />
                ))}
              </div>

              {/* Text content */}
              <p className="text-zinc-200 text-base sm:text-xl italic leading-relaxed mb-8 relative z-10">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author identity */}
              <div className="flex items-center gap-4 border-t border-zinc-800/80 pt-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-gold-500 to-zinc-800 flex items-center justify-center text-black font-bold font-display shrink-0 shadow-lg">
                  {testimonials[activeIndex].name[4] || testimonials[activeIndex].name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold font-display text-base sm:text-lg">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gold-400 text-xs sm:text-sm font-medium">
                    {testimonials[activeIndex].role} — <span className="text-zinc-400">{testimonials[activeIndex].company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav controls */}
          <div className="flex justify-center sm:justify-between items-center gap-4 mt-8 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:-left-6 sm:-right-6 sm:mt-0 sm:pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 bg-zinc-900 hover:bg-gold-500 border border-zinc-800 hover:border-gold-500 text-zinc-400 hover:text-black rounded-full transition-all cursor-pointer pointer-events-auto shadow-xl"
              aria-label="Previous testimonial"
              id="testimonial-prev-btn"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-zinc-900 hover:bg-gold-500 border border-zinc-800 hover:border-gold-500 text-zinc-400 hover:text-black rounded-full transition-all cursor-pointer pointer-events-auto shadow-xl"
              aria-label="Next testimonial"
              id="testimonial-next-btn"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dynamic Project/Trust tickers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 text-center" id="trust-tickers">
          {[
            { value: '500+', label: 'Sites Completed' },
            { value: 'Pune, MH', label: 'Local Core Service' },
            { value: '25% Steel Saved', label: 'Mechanical Advantage' },
            { value: '18% GST standard', label: 'Transparent Invoicing' },
          ].map((item, index) => (
            <div key={index} className="p-4 bg-zinc-900/30 border border-zinc-800/40 rounded-xl flex flex-col items-center">
              <CheckCircle size={18} className="text-gold-500 mb-2" />
              <span className="block text-white font-bold font-display text-base sm:text-lg">
                {item.value}
              </span>
              <span className="block text-zinc-400 text-xs mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
