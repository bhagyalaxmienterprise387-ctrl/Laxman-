import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Cpu, Clock, Smile, Users, Anchor } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="text-gold-500" size={24} />,
      title: 'Premium Quality EN8D Grade',
      desc: 'All our rebar couplers are forged from authentic EN8D grade steel, delivering superior tensile strength and structural integrity matching international specifications.',
    },
    {
      icon: <Cpu className="text-gold-500" size={24} />,
      title: 'Precision Engineering',
      desc: 'Using cutting-edge COHD-45Type thread rolling machines, we achieve ultra-precise thread pitch alignment and depths to prevent slip failures under heavy loads.',
    },
    {
      icon: <Clock className="text-gold-500" size={24} />,
      title: 'Timely Delivery Commitments',
      desc: 'We respect project timelines. Standard orders are prepared and dispatched with fast turnaround to ensure your construction site is never held up.',
    },
    {
      icon: <Smile className="text-gold-500" size={24} />,
      title: 'Customer Satisfaction First',
      desc: 'We work closely with structural engineers and site supervisors to customize orders and provide technical support that keeps projects completely compliant.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-zinc-900/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-500 font-mono text-sm tracking-widest uppercase inline-block mb-3"
          >
            Who We Are
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight"
          >
            Engineering Foundation For
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Generations to Come
            </span>
          </motion.h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Company Profile Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" id="about-story-grid">
          {/* Text Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white font-display">
              Bhagyalaxmi DD Enterprises — Pune's Trusted Manufacturing Partner
            </h3>
            
            <p className="text-zinc-300 leading-relaxed">
              Established with a clear focus on construction innovation, **Bhagyalaxmi DD Enterprises** has emerged as a premier manufacturer of high-tensile **Rebar Couplers** and provider of precision **Rebar Threading Services**. Led by our founder and industry expert, **Laxman J. Chaughule**, we have set benchmarks in Pune and surrounding industrial sectors.
            </p>

            <p className="text-zinc-300 leading-relaxed">
              Modern concrete structures require reliable reinforcement connections. Traditional lap-splicing is highly inefficient, wastes valuable steel, and compromises structural integrity under seismic forces. Our specialized couplers offer a robust mechanical connection, ensuring continuous structural integrity and a massive 20-30% reduction in steel rebar wastage.
            </p>

            <div className="p-5 bg-zinc-900 border-l-4 border-gold-500 rounded-r-xl">
              <span className="block text-zinc-400 text-xs uppercase font-mono tracking-wider mb-1">
                Owner's Statement
              </span>
              <p className="italic text-zinc-200 text-sm">
                "Our mission is to empower residential, commercial, and industrial projects with unbeatable strength and cost-efficiency. We don't just supply components; we engineer security and stability into the buildings that host people's dreams."
              </p>
              <span className="block text-right text-xs text-gold-500 font-semibold mt-2">
                — Laxman J. Chaughule, Founder & Managing Director
              </span>
            </div>
          </motion.div>

          {/* Graphical/Creative Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[350px] sm:h-[450px] flex items-center justify-center"
            id="about-visuals"
          >
            {/* Main Picture Frame */}
            <div className="w-5/6 h-5/6 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
                alt="Construction reinforcement structural layout"
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* Overlaid Floating Card 1 */}
            <div className="absolute top-10 right-4 p-4 bg-zinc-900/90 border border-gold-500/30 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-3 w-48 sm:w-56 hover-border-gold-glow transition-all duration-300">
              <div className="p-2.5 bg-gold-500/20 text-gold-400 rounded-lg shrink-0">
                <Anchor size={20} />
              </div>
              <div>
                <span className="block text-xl font-bold text-white font-display">100%</span>
                <span className="block text-zinc-400 text-xs">Structural Slip-Proof</span>
              </div>
            </div>

            {/* Overlaid Floating Card 2 */}
            <div className="absolute bottom-10 left-4 p-4 bg-zinc-900/90 border border-zinc-800 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-3 w-48 sm:w-56 hover-border-gold-glow transition-all duration-300">
              <div className="p-2.5 bg-zinc-950 text-gold-500 rounded-lg shrink-0">
                <Users size={20} />
              </div>
              <div>
                <span className="block text-xl font-bold text-white font-display">Pune Based</span>
                <span className="block text-zinc-400 text-xs">Lohegaon Road HQ</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values / Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="about-pillars">
          {values.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 bg-zinc-900/50 border border-zinc-800/60 rounded-xl hover:border-gold-500/20 transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-gold-500 shrink-0 h-12 w-12 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-display mb-2">{item.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
