
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const whatsappUrl = "https://wa.me/916380869731?text=Hi%20Levers%20For%20Change%2C%20I'm%20interested%20in%20a%20zero-fee%20EBITDA%20growth%20assessment%20for%20my%20manufacturing%20business.%20Can%20we%20discuss%20the%20next%20steps%3F";

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

  const handleCTA = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav 
      className={`fixed left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] px-6 ${
        scrolled ? 'top-2' : 'top-6'
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-700 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] px-6 py-2 rounded-2xl' 
            : 'bg-white border border-slate-100 shadow-md px-8 py-4 rounded-3xl'
        }`}
      >
        {/* Logo Section */}
        <a href="#" onClick={scrollToTop} className="flex items-center group cursor-pointer shrink-0">
          <span className={`font-black tracking-tighter text-slate-900 transition-all duration-500 ${
            scrolled ? 'text-sm' : 'text-lg'
          }`}>
            LEVERS <span className="text-lfcRed">FOR CHANGE</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          <a 
            href="#levers" 
            onClick={(e) => handleNavClick(e, 'levers')}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-lfcBlue transition-colors whitespace-nowrap"
          >
            Focused Area
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick(e, 'portfolio')}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-lfcBlue transition-colors whitespace-nowrap"
          >
            Results Delivered
          </a>
          <a 
            href="#cta-section" 
            onClick={(e) => handleNavClick(e, 'cta-section')}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-lfcBlue transition-colors whitespace-nowrap"
          >
            Schedule an Assessment
          </a>
        </div>

        {/* CTA Button */}
        <button 
          onClick={handleCTA}
          className={`bg-lfcBlue hover:bg-lfcBlue/90 text-white font-black flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-lfcBlue/20 shrink-0 ${
            scrolled ? 'px-4 py-2 rounded-xl text-[10px]' : 'px-6 py-3 rounded-2xl text-xs'
          }`}
        >
          <span>Get Started</span>
          <ArrowRight size={scrolled ? 12 : 14} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
