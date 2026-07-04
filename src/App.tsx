import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import InteractiveShowcase from './components/InteractiveShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'showcase', 'why-choose-us', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-gray-100 font-sans antialiased overflow-x-hidden selection:bg-gold-500 selection:text-black" id="app-root-container">
      {/* Dynamic Sticky Header */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Single-Page Stack */}
      <main id="main-content-stack">
        <Hero />
        <About />
        <Products />
        <InteractiveShowcase />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      {/* Corporate Footer */}
      <Footer />

      {/* Floating Action Elements (WhatsApp & Direct Calls) */}
      <FloatingActions />
    </div>
  );
}
