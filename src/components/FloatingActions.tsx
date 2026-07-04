import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3"
      id="floating-quick-contacts"
    >
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919130656955?text=Hello%20Bhagyalaxmi%20DD%20Enterprises,%20I'm%20inquiring%20about%20rebar%20couplers/threading%20services."
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1, stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-colors relative group"
        title="Chat on WhatsApp"
        id="floating-whatsapp-action"
      >
        <MessageSquare size={24} />
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full border border-emerald-500 animate-ping opacity-75 pointer-events-none" />
        
        {/* Tooltip on hover */}
        <span className="absolute right-14 bg-zinc-900 border border-zinc-800 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          WhatsApp Chat
        </span>
      </motion.a>

      {/* Floating Call Button */}
      <motion.a
        href="tel:+919130656955"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', delay: 1.2, stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-4 bg-gold-500 hover:bg-gold-400 text-black rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-colors relative group"
        title="Call Laxman J. Chaughule"
        id="floating-call-action"
      >
        <Phone size={24} fill="currentColor" />
        {/* Tooltip on hover */}
        <span className="absolute right-14 bg-zinc-900 border border-zinc-800 text-white text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Call Project Desk
        </span>
      </motion.a>
    </div>
  );
}
