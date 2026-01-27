
import React from 'react';
import { BarChart3, Activity, Target, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/916380869731?text=Hi%20Levers%20For%20Change%2C%20I'm%20interested%20in%20a%20zero-fee%20EBITDA%20growth%20assessment%20for%20my%20manufacturing%20business.%20Can%20we%20discuss%20the%20next%20steps%3F";

  const handleCTA = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative pt-44 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/60 border border-white px-4 py-2 rounded-full mb-10 shadow-sm">
            <div className="w-2 h-2 bg-lfcRed rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Start with Zero fee assessment</span>
          </div>
          
          <h1 className="text-7xl lg:text-[100px] font-extrabold leading-[0.9] text-slate-900 mb-10 tracking-tighter-custom">
            Unlock <br/>
            <span className="ebitda-gradient">50-100%</span><br/>
            EBITDA <br/>
            Growth.
          </h1>
          
          <p className="text-lg text-slate-400 leading-relaxed mb-12 max-w-md font-medium">
            No CAPEX. Transform through productivity levers.
          </p>
          
          <button 
            onClick={handleCTA}
            className="accent-gradient-bg text-white px-10 py-5 rounded-2xl text-lg font-black shadow-2xl shadow-lfcRed/20 hover:scale-105 active:scale-95 transition-all"
          >
            Schedule an Assessment
          </button>
        </div>

        {/* Right Side: Spatial 3D UI */}
        <div className="relative perspective-1000 hidden lg:block h-[600px]">
          {/* Main Card: EBITDA Delta */}
          <div className="absolute top-0 right-0 w-[420px] spatial-card rounded-[3rem] p-10 animate-float z-30 shadow-2xl">
            <div className="flex justify-between items-start mb-10">
              <div className="w-12 h-12 bg-lfcRed/5 rounded-2xl flex items-center justify-center">
                <BarChart3 className="text-lfcRed" size={24} />
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">EBITDA Delta</div>
                <div className="text-4xl font-extrabold text-slate-900 tracking-tighter">+114%</div>
              </div>
            </div>
            
            <div className="flex items-end space-x-3 h-32 mb-4">
              {[40, 60, 45, 90, 55, 95, 100].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-lfcRed to-lfcOrange rounded-t-xl opacity-60 transition-all duration-1000" style={{ height: `${h}%` }}></div>
              ))}
            </div>
          </div>

          {/* Background Card: OEE Precision */}
          <div className="absolute top-44 -left-10 w-[380px] spatial-card rounded-[3rem] p-10 z-20 shadow-xl opacity-90 delay-150" style={{ animation: 'float 6s ease-in-out infinite -2s' }}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 bg-lfcOrange/10 rounded-xl flex items-center justify-center shadow-inner">
                <Target className="text-lfcOrange" size={20} />
              </div>
              <div className="font-bold text-slate-800 text-sm">OEE Precision</div>
            </div>
            <div className="space-y-4">
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full accent-gradient-bg w-[82%]"></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 tracking-widest">
                <span>Current: 62%</span>
                <span className="text-lfcRed font-black">Target: 95%</span>
              </div>
            </div>
          </div>

          {/* Bottom Card: Throughput Flow */}
          <div className="absolute -bottom-20 right-10 w-[300px] spatial-card rounded-[3rem] p-8 z-10 shadow-lg opacity-60 scale-95" style={{ animation: 'float 6s ease-in-out infinite -4s' }}>
            <div className="flex items-center space-x-3 mb-4">
              <Activity className="text-lfcRed" size={16} />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Throughput Flow</span>
            </div>
            <div className="h-1 bg-gradient-to-r from-lfcRed/20 to-lfcOrange/20 rounded-full w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
