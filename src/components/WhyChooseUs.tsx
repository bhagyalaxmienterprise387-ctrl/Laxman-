import React from 'react';
import { motion } from 'motion/react';
import { Award, DollarSign, Truck, Users, HeartHandshake, ShieldCheck } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Award className="text-gold-400" size={32} />,
      title: 'Premium Quality',
      desc: 'All rebar couplers are fabricated from certified EN8D structural steel, strictly conforming to tensile strength thresholds and building regulations.',
    },
    {
      icon: <DollarSign className="text-gold-400" size={32} />,
      title: 'Best Price',
      desc: 'By sourcing premium raw materials directly and utilizing highly efficient machinery, we offer unbeatable bulk trade rates.',
    },
    {
      icon: <Truck className="text-gold-400" size={32} />,
      title: 'Fast Delivery',
      desc: 'We maintain massive reserves of standard couplers (16mm-32mm) and provide prompt on-site threading support with fast turnaround times.',
    },
    {
      icon: <Users className="text-gold-400" size={32} />,
      title: 'Experienced Team',
      desc: 'Led by Laxman J. Chaughule, our technicians have over a decade of hands-on expertise operating advanced thread-rolling machines.',
    },
    {
      icon: <HeartHandshake className="text-gold-400" size={32} />,
      title: 'Trusted Service',
      desc: 'We are Pune’s preferred industrial vendor, trusted by top developers, structural consultants, and public infrastructure contractors.',
    },
    {
      icon: <ShieldCheck className="text-gold-400" size={32} />,
      title: 'Customer Satisfaction',
      desc: 'We accommodate custom sizing, transition reducer configurations, and provide responsive on-site troubleshooting to make assembly a breeze.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-zinc-900/40 relative border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-mono text-sm tracking-widest uppercase inline-block mb-3">
            Our Edge
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Why Contractors Choose Bhagyalaxmi
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We merge industrial grade durability with uncompromising customer service to secure your building foundations.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-grid">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 bg-zinc-950 border border-zinc-800/80 rounded-2xl hover-border-gold-glow transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle top gold accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-300 to-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="mb-6 p-4 bg-zinc-900 rounded-xl w-16 h-16 flex items-center justify-center border border-zinc-800/50 group-hover:border-gold-500/20 transition-all duration-300">
                {point.icon}
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-gold-400 transition-colors">
                {point.title}
              </h3>
              
              <p className="text-zinc-400 text-sm leading-relaxed">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
