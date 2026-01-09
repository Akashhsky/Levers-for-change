
import React from 'react';
import { Sparkles, Calendar, ShieldCheck } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="relative bg-lfcBlue rounded-[3.5rem] p-12 lg:p-24 overflow-hidden reveal">
          {/* Animated background element */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full text-white text-xs font-bold mb-8 uppercase tracking-[0.2em]">
              <Sparkles size={14} className="text-white" />
              <span>Priority Access for Q3</span>
            </div>
            
            <h2 className="text-4xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-8">
              Start Your <span className="text-red-400">10-Day</span> Blueprint Today.
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl">
              We provide a senior-led audit of your factory floor to identify every hidden lever. 
              Zero cost upfront. Guaranteed impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="bg-white text-lfcBlue hover:bg-slate-50 px-12 py-6 rounded-[2rem] font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                Claim Assessment
              </button>
              <div className="flex items-center justify-center space-x-6 text-blue-100 text-sm font-bold">
                <div className="flex items-center space-x-2">
                  <Calendar size={20} />
                  <span>10-15 Day Duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck size={20} />
                  <span>Non-Disclosure Secured</span>
                </div>
              </div>
            </div>

            <p className="text-blue-300/60 text-xs font-medium uppercase tracking-widest">
              Limited Availability: 4 slots remaining for current quarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
