import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Hammer } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-zinc-900 pt-16 pb-8 relative overflow-hidden" id="footer-section">
      
      {/* Decorative Golden Line at the top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand details */}
          <div className="space-y-4" id="footer-brand-col">
            <Logo showText={true} size={42} />
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed pt-2">
              Premium manufacturer of high-tensile EN8D Rebar Couplers and providers of precision site thread-rolling services. Forging strength and safety in Pune’s infrastructure since inception.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4" id="footer-nav-col">
            <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Products & Services', id: 'products' },
                { name: 'Technical Showcase', id: 'showcase' },
                { name: 'Why Choose Us', id: 'why-choose-us' },
                { name: 'Contact Us', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(link.id);
                      if (el) {
                        const offset = 80;
                        const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: pos, behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specifications & Scope */}
          <div className="space-y-4" id="footer-specs-col">
            <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">
              Product Specifications
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full" />
                <span>Steel Grade: Grade EN8D Structural Steel</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full" />
                <span>Standard Sizes: 16mm, 20mm, 25mm, 32mm</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full" />
                <span>Transition Reducers: 16+20, 20+25, 25+32</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full" />
                <span>Machinery: COHD-45Type Rolling Machines</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gold-500 rounded-full" />
                <span>Utility Requirement: Site 3-Phase Electricity</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div className="space-y-4 text-xs sm:text-sm" id="footer-reach-col">
            <h4 className="text-white font-bold font-display text-sm uppercase tracking-wider">
              Project Desk
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <span>Indira Nagar, Lohegaon Road, Pune – 411032</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold-500 shrink-0" />
                <a href="tel:+919130656955" className="hover:text-gold-400 font-semibold text-white">
                  +91 9130656955
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold-500 shrink-0" />
                <a href="mailto:lchaugule455@gmail.com" className="hover:text-gold-400">
                  lchaugule455@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
          
          {/* Copyright */}
          <div className="text-center sm:text-left space-y-1">
            <p>© {currentYear} Bhagyalaxmi DD Enterprises. All Rights Reserved.</p>
            <p className="text-[10px] text-zinc-600">
              Manufactured with high precision in Pune, Maharashtra. Built matching EN8D grade tolerances.
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-zinc-950 hover:bg-gold-500 text-zinc-400 hover:text-black border border-zinc-900 hover:border-gold-500 rounded-full transition-all cursor-pointer shadow-lg"
            aria-label="Back to top"
            id="back-to-top-btn"
          >
            <ArrowUp size={16} />
          </button>

        </div>
      </div>
    </footer>
  );
}
