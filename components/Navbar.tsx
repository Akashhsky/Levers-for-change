
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-6`}>
      <div className={`max-w-6xl mx-auto flex justify-between items-center px-8 py-3 rounded-full transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl' : 'bg-white border border-slate-100 shadow-md'}`}>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-lfcBlue rounded flex items-center justify-center font-bold text-lg text-white">L</div>
          <span className="font-bold text-base tracking-tighter text-slate-900">
            LEVERS <span className="text-lfcRed">FOR CHANGE</span>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <a href="#levers" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-lfcBlue transition-colors">Methodology</a>
          <a href="#portfolio" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-lfcBlue transition-colors">Portfolio</a>
        </div>

        <button className="bg-lfcBlue hover:bg-lfcBlue/90 text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center space-x-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-lfcBlue/20">
          <span>Assessment</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
