
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-6 ${
        scrolled ? 'top-2' : 'top-6'
      }`}
    >
      <div 
        className={`max-w-6xl mx-auto flex justify-between items-center transition-all duration-700 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] px-6 py-2 rounded-2xl' 
            : 'bg-white border border-slate-100 shadow-md px-8 py-4 rounded-3xl'
        }`}
      >
        {/* Logo Section */}
        <a href="#" onClick={scrollToTop} className="flex items-center space-x-3 group cursor-pointer">
          <div className={`transition-all duration-500 rounded flex items-center justify-center font-bold text-white bg-lfcBlue shadow-lg shadow-lfcBlue/20 ${
            scrolled ? 'w-7 h-7 text-base' : 'w-9 h-9 text-xl'
          }`}>
            L
          </div>
          <span className={`font-black tracking-tighter text-slate-900 transition-all duration-500 ${
            scrolled ? 'text-sm' : 'text-lg'
          }`}>
            LEVERS <span className="text-lfcRed">FOR CHANGE</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <a 
            href="#levers" 
            onClick={(e) => handleNavClick(e, 'levers')}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-lfcBlue transition-colors"
          >
            Areas
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-lfcBlue transition-colors"
          >
            Portfolio
          </a>
        </div>

        {/* CTA Button */}
        <button 
          onClick={(e: any) => handleNavClick(e, 'cta-section')}
          className={`bg-lfcBlue hover:bg-lfcBlue/90 text-white font-black flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-lfcBlue/20 ${
            scrolled ? 'px-4 py-2 rounded-xl text-[10px]' : 'px-6 py-3 rounded-2xl text-xs'
          }`}
        >
          <span>Assessment</span>
          <ArrowRight size={scrolled ? 12 : 14} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
