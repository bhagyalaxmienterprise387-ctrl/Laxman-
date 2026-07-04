import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageSquare, Send } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Products & Services', id: 'products' },
    { name: 'Technical Showcase', id: 'showcase' },
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <div
            className="cursor-pointer"
            onClick={() => handleLinkClick('home')}
            id="nav-brand-logo-container"
          >
            <Logo showText={true} size={42} />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav-links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                id={`nav-link-${link.id}`}
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors relative cursor-pointer ${
                  activeSection === link.id
                    ? 'text-gold-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Action Button */}
          <div className="hidden sm:flex items-center gap-3" id="desktop-actions">
            <a
              href="tel:+919130656955"
              id="nav-call-btn"
              className="flex items-center gap-2 px-4 py-2 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-black rounded-full transition-all duration-300 text-sm font-semibold shadow-md cursor-pointer"
            >
              <Phone size={14} />
              <span>+91 9130656955</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('contact');
              }}
              id="nav-quote-btn"
              className="px-4 py-2 bg-gradient-to-r from-gold-500 to-gold-600 text-black hover:from-gold-400 hover:to-gold-500 rounded-full text-sm font-semibold shadow-lg shadow-gold-500/10 cursor-pointer hover:shadow-gold-500/30 transition-all duration-300"
            >
              Request Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center" id="mobile-menu-trigger-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-900 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zinc-950 border-b border-gold-500/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  id={`mobile-nav-link-${link.id}`}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-gold-500/10 text-gold-400 border-l-2 border-gold-500'
                      : 'text-gray-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}

              <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3 px-4">
                <a
                  href="tel:+919130656955"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-gold-500/40 text-gold-400 rounded-md font-semibold text-center cursor-pointer"
                  id="mobile-nav-call"
                >
                  <Phone size={16} />
                  <span>Call +91 9130656955</span>
                </a>
                <a
                  href="https://wa.me/919130656955"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md font-semibold text-center cursor-pointer"
                  id="mobile-nav-whatsapp"
                >
                  <MessageSquare size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
