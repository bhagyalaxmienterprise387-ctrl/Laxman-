import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, FileText, Info } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What steel grade is used in Bhagyalaxmi DD Enterprises couplers?',
      answer: 'All our standard couplers are manufactured from premium EN8D Grade high-tensile steel. This grade provides exceptional toughness, high fatigue limits, and ultimate mechanical splicing security suitable for residential, commercial, and heavy industrial construction.',
    },
    {
      question: 'What are the official business payment terms and GST rules?',
      answer: 'As per standard terms & conditions: (1) GST is charged extra at 18% on all supply and services. (2) Payment holds a terms-cycle of immediate (7 days) after material delivery. (3) Any quotation provided holds a validity of 15 days from the date of issuance.',
    },
    {
      question: 'What utilities must the client provide for on-site threading services?',
      answer: 'Our on-site service rates are for TMT bar threading services including labor charges only. The clients scope of responsibility includes providing: (1) A sheltered, dry working place & flat work bed for the machinery. (2) Continuous 3-Phase electricity supply required to run the heavy-duty thread-rolling rolling machines. (3) Delivery of steel bars near the machine. (4) All lifting, loading, and unloading of TMT bars on the threading machine.',
    },
    {
      question: 'How much steel reinforcement material can we save by switching to couplers?',
      answer: 'Traditional lap splicing requires overlapping bars by up to 50 times their diameter, causing massive steel wastage. Bhagyalaxmi mechanical couplers require zero overlap. This mechanical splice saves approximately 20% to 30% of total rebar steel tonnage, leading to significant material budget savings.',
    },
    {
      question: 'Do you supply transition reduction couplers and end caps?',
      answer: 'Yes! We manufacture highly specialized Reduction Couplers for joining bars of different sizes (such as 16+20mm, 20+25mm, and 25+32mm). We also supply heavy-duty polymer protective caps (for 16/20mm and 25/32mm) to seal threads against rain, cement slurry, and rust before joining.',
    },
    {
      question: 'How do you handle quality inspections and threading reports on site?',
      answer: 'On-site threading reports must be signed by your site engineer or supervisor on a daily/weekly basis as per the actual threading done at the construction site. Final payments are calculated and processed according to these mutually signed reports, ensuring full operational transparency.',
    },
  ];

  return (
    <section id="faqs" className="py-24 bg-zinc-900/50 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-zinc-950 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-mono text-sm tracking-widest uppercase inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Accoridon Stack */}
        <div className="space-y-4" id="faq-stack">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  id={`faq-btn-${idx}`}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors hover:bg-zinc-900/40"
                >
                  <div className="flex items-start gap-4 pr-4">
                    <HelpCircle className="text-gold-500 shrink-0 mt-1" size={20} />
                    <span className="font-display font-semibold text-white text-sm sm:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-zinc-400 shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900 ml-10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Technical Policy Document note */}
        <div className="mt-12 p-5 bg-zinc-900/60 border border-gold-500/10 rounded-2xl flex items-start gap-4" id="faq-document-note">
          <FileText className="text-gold-500 shrink-0 mt-0.5" size={22} />
          <div>
            <h4 className="text-sm font-bold text-white font-display mb-1">
              Official Quotation & Scope Agreement
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              All transactions are subject to standard industrial policies of Pune engineering chambers. By utilizing Bhagyalaxmi services, clients agree to provide necessary electrical utilities and site preparation parameters as outlined in our terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
