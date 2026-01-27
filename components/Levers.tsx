
import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, Factory, TrendingUp, Cpu, Activity, ChevronRight } from 'lucide-react';

const leversData = [
  {
    id: '01',
    icon: Target,
    title: "Focused OEE transformation",
    description: "Maximizing asset utilization through high-precision micro-stoppage elimination and asset synchronization. We unlock hidden plant capacity by pushing existing hardware to its true theoretical limit.",
    result: "+5-40% Capacity",
    detail: "Statistical process control & bottleneck mapping."
  },
  {
    id: '02',
    icon: Users,
    title: "Cost optimization",
    description: "Targeting systemic waste through precision manpower optimization, logistics streamlining, and conversion efficiency. We drive down the cost per unit by re-engineering every touchpoint of your production chain.",
    result: "3-15% Cost Per Unit",
    detail: "Manpower, logistics & conversion audits."
  },
  {
    id: '03',
    icon: Factory,
    title: "Commercial Excellence",
    description: "Driving bottom-line impact by reducing procurement cost and securing high value contracts. We architect your commercial framework to eliminate margin leakage and maximize sourcing efficiency.",
    result: "2-12% Cost Reduction",
    detail: "Strategic sourcing & contract optimization."
  },
  {
    id: '04',
    icon: TrendingUp,
    title: "Sales productivity",
    description: "Unlocking latent top-line potential by synchronizing sales velocity with manufacturing rhythm. We scale your revenue capture without increasing fixed costs.",
    result: "0.5x-3x Growth",
    detail: "Revenue-velocity & mix-ratio mapping."
  },
  {
    id: '05',
    icon: Cpu,
    title: "Digital Enablement",
    description: "Real-time floor-to-top data synchronization using your existing PLC infrastructure. Digital transparency that drives decision speed.",
    result: "100% Visibility",
    detail: "IIoT edge-integration & live dashboards."
  }
];

const Levers: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % leversData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Center the active item in horizontal scroll on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeElement = scrollContainerRef.current.children[activeIdx] as HTMLElement;
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - (scrollContainerRef.current.offsetWidth / 2) + (activeElement.offsetWidth / 2);
        scrollContainerRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeIdx]);

  return (
    <section id="levers" className="relative py-16 lg:py-32 overflow-hidden bg-white">
      {/* Background Dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#ED3237 1.5px, transparent 0)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 lg:mb-20 reveal">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <div className="w-8 lg:w-10 h-[2px] bg-lfcRed"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-lfcRed">Focused area</span>
            </div>
            <h3 className="text-4xl lg:text-6xl font-extrabold tracking-tighter-custom text-slate-900 leading-none">
              Productivity <span className="ebitda-gradient">levers.</span>
            </h3>
          </div>
          <p className="mt-4 lg:mt-0 text-slate-400 font-medium max-w-xs text-xs lg:text-sm leading-relaxed">
            Our proprietary 5-step methodology captures EBITDA growth in 15 days using existing floor resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center min-h-auto lg:min-h-[500px]">
          
          {/* Mobile Selector: Horizontal Scroll */}
          <div className="lg:hidden w-full overflow-hidden">
             <div 
              ref={scrollContainerRef}
              className="flex space-x-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
             >
                {leversData.map((lever, idx) => (
                  <button
                    key={lever.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`flex-shrink-0 flex items-center space-x-3 px-5 py-3 rounded-full border-2 transition-all duration-300 ${
                      activeIdx === idx 
                        ? 'bg-lfcBlue border-lfcBlue text-white shadow-lg' 
                        : 'bg-slate-50 border-slate-100 text-slate-400'
                    }`}
                  >
                    <lever.icon size={16} />
                    <span className="text-[11px] font-bold uppercase tracking-tight whitespace-nowrap">Lever {lever.id}</span>
                  </button>
                ))}
             </div>
          </div>

          {/* Desktop Selector: Vertical Stack */}
          <div className="hidden lg:flex lg:col-span-4 flex-col space-y-4">
            {leversData.map((lever, idx) => (
              <button
                key={lever.id}
                onClick={() => setActiveIdx(idx)}
                className={`group relative flex items-center p-4 rounded-2xl transition-all duration-500 border-2 ${
                  activeIdx === idx 
                    ? 'bg-lfcBlue border-lfcBlue shadow-xl shadow-lfcBlue/20 translate-x-4' 
                    : 'bg-white border-slate-100 hover:border-lfcBlue/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                  activeIdx === idx ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-400 group-hover:text-lfcBlue'
                }`}>
                  <lever.icon size={20} />
                </div>
                <div className="ml-4 text-left">
                  <div className={`text-[10px] font-black uppercase tracking-widest mb-0.5 ${
                    activeIdx === idx ? 'text-white/60' : 'text-slate-300'
                  }`}>Lever {lever.id}</div>
                  <div className={`text-sm font-bold tracking-tight transition-colors ${
                    activeIdx === idx ? 'text-white' : 'text-slate-500 group-hover:text-slate-700'
                  }`}>{lever.title}</div>
                </div>
                {activeIdx === idx && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <ChevronRight size={14} className="text-lfcBlue" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* The Impact Display Area */}
          <div className="lg:col-span-8 perspective-1000 relative h-[450px] sm:h-[500px] flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-lfcRed/5 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative w-full max-w-xl h-full">
              {leversData.map((lever, idx) => {
                const isActive = activeIdx === idx;
                const isPrevious = (activeIdx - 1 + leversData.length) % leversData.length === idx;
                const isNext = (activeIdx + 1) % leversData.length === idx;
                
                // Adjusting 3D effect for mobile/tablet to be less aggressive and avoid clipping
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
                
                let transform = "translateX(100%) opacity-0 scale-75";
                let zIndex = 0;
                
                if (isActive) {
                  transform = isMobile 
                    ? "translateX(0) scale(1) opacity-100" 
                    : "translateX(0) rotateY(-10deg) scale(1) opacity-100";
                  zIndex = 30;
                } else if (isPrevious) {
                  transform = isMobile
                    ? "translateX(-30%) scale(0.9) opacity-0"
                    : "translateX(-20%) translateY(-10%) rotateY(-25deg) scale(0.85) opacity-40 blur-sm";
                  zIndex = 20;
                } else if (isNext) {
                  transform = isMobile
                    ? "translateX(30%) scale(0.9) opacity-0"
                    : "translateX(20%) translateY(10%) rotateY(5deg) scale(0.9) opacity(20) blur-md";
                  zIndex = 10;
                }

                return (
                  <div 
                    key={lever.id}
                    className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none"
                    style={{ transform, zIndex, pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    <div className="h-full w-full bg-white rounded-[2.5rem] lg:rounded-[3.5rem] p-6 sm:p-10 lg:p-12 shadow-[0_30px_60px_-15px_rgba(237,50,55,0.1)] lg:shadow-[0_40px_100px_-20px_rgba(237,50,55,0.15)] border border-slate-100 flex flex-col justify-between overflow-hidden relative">
                      {/* Decorative Background Blob */}
                      <div className="absolute -top-20 -right-20 w-48 lg:w-64 h-48 lg:h-64 bg-slate-50 rounded-full blur-2xl lg:blur-3xl opacity-50"></div>
                      
                      <div className="relative z-10">
                        {/* Card Header: Icon + Result */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6 sm:mb-10 lg:mb-12">
                          <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-lg shadow-slate-100 bg-lfcRed/5 text-lfcRed">
                            <lever.icon size={isActive ? (isMobile ? 28 : 40) : 24} strokeWidth={1.5} className="transition-all" />
                          </div>
                          <div className="text-left sm:text-right">
                            <div className="text-[9px] lg:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Impact Metric</div>
                            <div className="text-3xl lg:text-4xl font-black tracking-tighter ebitda-gradient">{lever.result}</div>
                          </div>
                        </div>

                        <h4 className="text-2xl lg:text-4xl font-extrabold text-slate-900 mb-4 lg:mb-6 tracking-tighter leading-tight">
                          {lever.title}
                        </h4>
                        <p className="text-sm lg:text-lg text-slate-500 font-medium leading-relaxed max-w-md">
                          {lever.description}
                        </p>
                      </div>

                      {/* Card Footer: Detail + Activity Icon */}
                      <div className="relative z-10 flex items-center justify-between pt-6 lg:pt-10 border-t border-slate-50">
                        <div className="flex flex-col pr-4">
                          <span className="text-[9px] lg:text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Key Detail</span>
                          <span className="text-[11px] lg:text-sm font-bold text-slate-900 line-clamp-1">{lever.detail}</span>
                        </div>
                        <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl lg:rounded-2xl bg-lfcBlue flex items-center justify-center text-white shadow-lg shadow-lfcBlue/20 shrink-0">
                          <Activity size={18} className="lg:w-5 lg:h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Progress Dots */}
        <div className="mt-12 lg:mt-20 flex justify-center space-x-2">
          {leversData.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIdx === idx ? 'w-10 lg:w-12 bg-lfcRed' : 'w-3 lg:w-4 bg-slate-100 hover:bg-slate-200'
              }`}
            />
          ))}
        </div>

      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Levers;
