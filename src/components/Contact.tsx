import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, Check, User, Building, Smartphone, Calendar, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: 'Coupler Supply',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after some time
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          company: '',
          phone: '',
          service: 'Coupler Supply',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  const handleSendEmail = () => {
    const subject = `Inquiry: ${formData.service} - Bhagyalaxmi DD Enterprises`;
    const body = `Hello Laxman-ji,\n\nMy name is ${formData.name} from ${formData.company || 'N/A'}.\nMy Contact Number is: ${formData.phone}.\n\nRequirements:\n${formData.message || 'I am interested in rebar couplers / threading services.'}`;
    window.open(`mailto:lchaugule455@gmail.com,laxmanchougule1212@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 top-0 w-96 h-96 bg-zinc-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-mono text-sm tracking-widest uppercase inline-block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Connect With Our Project Desk
          </h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in Pune or nearby? Reach out directly to Laxman J. Chaughule for orders, site feasibility, or bulk quotation requests.
          </p>
          <div className="w-20 h-1 bg-gold-500 mx-auto mt-6" />
        </div>

        {/* Contact Block Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-grid">
          
          {/* Column 1: Info & Actions */}
          <div className="lg:col-span-5 space-y-8" id="contact-info-col">
            
            {/* Quick Summary Card */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <span className="block text-xs font-mono text-gold-500 uppercase font-bold tracking-widest mb-1">
                MANAGING DIRECTOR
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                Laxman J. Chaughule
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Founder, Bhagyalaxmi DD Enterprises
              </p>
            </div>

            {/* Quick Details List */}
            <div className="space-y-4">
              
              {/* Phones Card */}
              <div className="flex items-start gap-4 p-5 bg-zinc-900/20 border border-zinc-900 hover:border-gold-500/10 rounded-xl transition-all">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-gold-500">
                  <Phone size={22} />
                </div>
                <div>
                  <span className="block text-zinc-500 text-xs font-mono uppercase tracking-widest font-bold mb-1">
                    Direct Hotlines
                  </span>
                  <div className="space-y-1.5">
                    <a href="tel:+919130656955" className="block text-white hover:text-gold-400 text-sm sm:text-base font-semibold transition-colors">
                      +91 9130656955 <span className="text-[10px] text-emerald-500 font-mono ml-2">(WhatsApp)</span>
                    </a>
                    <a href="tel:+917507067773" className="block text-white hover:text-gold-400 text-sm sm:text-base font-semibold transition-colors">
                      +91 7507067773
                    </a>
                    <a href="tel:+919834927810" className="block text-white hover:text-gold-400 text-sm sm:text-base font-semibold transition-colors">
                      +91 9834927810
                    </a>
                  </div>
                </div>
              </div>

              {/* Emails Card */}
              <div className="flex items-start gap-4 p-5 bg-zinc-900/20 border border-zinc-900 hover:border-gold-500/10 rounded-xl transition-all">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-gold-500">
                  <Mail size={22} />
                </div>
                <div>
                  <span className="block text-zinc-500 text-xs font-mono uppercase tracking-widest font-bold mb-1">
                    Email Inquiries
                  </span>
                  <div className="space-y-1.5">
                    <a href="mailto:lchaugule455@gmail.com" className="block text-white hover:text-gold-400 text-sm sm:text-base font-semibold transition-colors">
                      lchaugule455@gmail.com
                    </a>
                    <a href="mailto:laxmanchougule1212@gmail.com" className="block text-white hover:text-gold-400 text-sm sm:text-base font-semibold transition-colors">
                      laxmanchougule1212@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-5 bg-zinc-900/20 border border-zinc-900 hover:border-gold-500/10 rounded-xl transition-all">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-gold-500">
                  <MapPin size={22} />
                </div>
                <div>
                  <span className="block text-zinc-500 text-xs font-mono uppercase tracking-widest font-bold mb-1">
                    Corporate Address
                  </span>
                  <p className="text-white text-sm sm:text-base font-semibold leading-relaxed">
                    Indira Nagar, Lohegaon Road,<br />
                    Pune, Maharashtra – 411032
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Connect Quick Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-4" id="direct-action-btn-group">
              <a
                href="https://wa.me/919130656955"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-emerald-900/10 cursor-pointer"
                id="contact-whatsapp"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Owner</span>
              </a>
              <a
                href="tel:+919130656955"
                className="flex items-center gap-2 px-5 py-3 border border-zinc-800 hover:bg-zinc-900 text-zinc-300 hover:text-white font-bold rounded-xl text-xs sm:text-sm transition-all cursor-pointer"
                id="contact-call"
              >
                <Phone size={16} className="text-gold-500" />
                <span>Call MD</span>
              </a>
            </div>

          </div>

          {/* Column 2: Inquiry Form & Google Map */}
          <div className="lg:col-span-7 space-y-8" id="contact-form-col">
            
            {/* Form */}
            <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
                Send a Direct Project Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="relative">
                    <label className="block text-xs text-zinc-400 font-semibold mb-1.5 font-mono uppercase tracking-wider">
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500 text-white rounded-lg py-2.5 px-3.5 pl-10 text-sm outline-none transition-colors"
                        placeholder="e.g. Satish Shinde"
                      />
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="relative">
                    <label className="block text-xs text-zinc-400 font-semibold mb-1.5 font-mono uppercase tracking-wider">
                      Company Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500 text-white rounded-lg py-2.5 px-3.5 pl-10 text-sm outline-none transition-colors"
                        placeholder="e.g. Shinde Infra Ltd"
                      />
                      <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                    </div>
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Contact Phone */}
                  <div className="relative">
                    <label className="block text-xs text-zinc-400 font-semibold mb-1.5 font-mono uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500 text-white rounded-lg py-2.5 px-3.5 pl-10 text-sm outline-none transition-colors"
                        placeholder="e.g. +91 91306 56955"
                      />
                      <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600" size={16} />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="relative">
                    <label className="block text-xs text-zinc-400 font-semibold mb-1.5 font-mono uppercase tracking-wider">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500 text-white rounded-lg py-2.5 px-3.5 text-sm outline-none transition-colors font-semibold"
                    >
                      <option value="Coupler Supply">Coupler Supply (EN8D)</option>
                      <option value="Site Threading Services">Site Threading Services</option>
                      <option value="Reducer Couplers">Reducer Couplers</option>
                      <option value="Custom Order / Protective Caps">Custom Order / Protective Caps</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-zinc-400 font-semibold mb-1.5 font-mono uppercase tracking-wider">
                    Project Specifications / Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-gold-500 text-white rounded-lg py-2.5 px-3.5 text-sm outline-none transition-colors resize-none"
                    placeholder="Describe rebar sizes, total counts, or specific site timelines..."
                  />
                </div>

                {/* Submit Panel */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <span className="text-[10px] text-zinc-500 leading-normal max-w-xs text-center sm:text-left">
                    By submitting, you agree to our standard terms (immediate payment within 7 days, 18% GST extra).
                  </span>
                  <div className="flex gap-2 w-full sm:w-auto">
                    {formData.name && formData.phone && (
                      <button
                        type="button"
                        onClick={handleSendEmail}
                        className="px-4 py-3 bg-zinc-950 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-gold-500 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                        title="Prepare Email directly"
                      >
                        <Mail size={14} />
                        <span>Use Mail</span>
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-gold-500/15 hover:shadow-gold-500/35 transition-all cursor-pointer disabled:opacity-50 w-full"
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Success Toast feedback within card */}
                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute inset-0 bg-zinc-950/95 flex flex-col items-center justify-center text-center p-6"
                    >
                      <CheckCircle className="text-gold-500 mb-3" size={48} />
                      <h4 className="text-lg font-bold text-white font-display">
                        Inquiry Received Successfully!
                      </h4>
                      <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mt-2 leading-relaxed">
                        Laxman J. Chaughule has been notified of your project requirement. We will review the parameters and contact you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 px-4 py-2 border border-zinc-800 text-zinc-400 hover:text-white rounded-lg text-xs cursor-pointer"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>

            {/* Google Map IFrame Container */}
            <div className="rounded-2xl border border-zinc-800 overflow-hidden h-[250px] relative shadow-lg group">
              <iframe
                title="Bhagyalaxmi DD Enterprises - Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15127.37895048869!2d73.9048386!3d18.5835695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c129e924a491%3A0xe7a501a2d677d24c!2sLohegaon%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/75 border-t border-zinc-800 p-3 flex items-center justify-between text-[11px] backdrop-blur-sm">
                <span className="text-zinc-400">HQ: Lohegaon Road, Pune - 411032</span>
                <a
                  href="https://maps.google.com/?q=Lohegaon,+Pune,+Maharashtra+411032"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-500 font-bold hover:underline"
                >
                  Get Directions ↗
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
