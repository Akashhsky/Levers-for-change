
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Levers from './components/Levers';
import Portfolio from './components/Portfolio';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-lfcRed selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Levers />
        <Portfolio />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
