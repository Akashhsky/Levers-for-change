
import React, { useState, useEffect } from 'react';
import { Target, Users, Factory, TrendingUp, Cpu, Activity, ChevronRight } from 'lucide-react';

const leversData = [
  {
    id: '01',
    icon: Target,
    title: "Focused OEE Optimization",
    description: "Eliminating micro-stoppages and synchronization lags. We push your existing hardware to its theoretical limit without capital expenditure.",
    result: "+22% Capacity",
    detail: "Statistical process control & bottleneck mapping."
  },
  {
    id: '02',
    icon: Users,
    title: "Labor Logic Dynamics",
    description: "Scientific ergonomic task-mapping. We re-engineer shift handovers and interval activities to recapture lost production minutes.",
    result: "-30% Idle Time",
    detail: "Interval studies & motion-economy audits."
  },
  {
    id: '03',
    icon: Factory,
    title: "Manufacturing Throughput",
    description: "End-to-end floor flow redesign. We synchronize Work-In-Progress (WIP) to actual demand pulses for rapid inventory turnover.",
    result: "2.4x Speedup",
    detail: "Takt-time balancing & pull-system logic."
  },
  {
    id: '04',
    icon: TrendingUp,
    title: "Sales Delta Alignment",
    description: "Matching market demand profiles to actual floor capacity. We optimize your product mix for maximum margin contribution per hour.",
    result: "+18% Margin",
    detail: "Contribution-margin sequencing."
  },
  {
    id: '05',
    icon: Cpu,
    title: "Digital Twin Enablement",
    description: "Real-time floor-to-top data synchronization using your existing PLC infrastructure. Digital transparency that drives decision speed.",
    result: "100% Visibility",
    detail: "IIoT edge-integration & live dashboards."
  }
];

const Levers: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % leversData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="levers" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#ED3237 1.5px, transparent 0)', backgroundSize: '60px 60px' }}></div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 reveal">
          <div className="max-w-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-[2px] bg-lfcRed"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-lfcRed">The Methodology</span>
            </div>
            <h3 className="text-5xl lg:text-6xl font-extrabold tracking-tighter-custom text-slate-900 leading-none">
              Precision <span className="ebitda-gradient">Levers.</span>
            </h3>
          </div>
          <p className="mt-6 lg:mt-0 text-slate-400 font-medium max-w-xs text-sm leading-relaxed">
            Our proprietary 5-step methodology captures EBITDA growth in 15 days using existing floor resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          
          <div className="lg:col-span-4 flex flex-col space-y-4">
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
                  }`}>Module_{lever.id}</div>
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

          <div className="lg:col-span-8 perspective-1000 relative h-[500px] flex items-center justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lfcRed/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative w-full max-w-xl h-full">
              {leversData.map((lever, idx) => {
                const isActive = activeIdx === idx;
                const isPrevious = (activeIdx - 1 + leversData.length) % leversData.length === idx;
                const isNext = (activeIdx + 1) % leversData.length === idx;
                
                let transform = "translateX(100%) opacity-0 scale-75";
                let zIndex = 0;
                
                if (isActive) {
                  transform = "translateX(0) rotateY(-10deg) scale(1) opacity-100";
                  zIndex = 30;
                } else if (isPrevious) {
                  transform = "translateX(-20%) translateY(-10%) rotateY(-25deg) scale(0.85) opacity-40 blur-sm";
                  zIndex = 20;
                } else if (isNext) {
                  transform = "translateX(20%) translateY(10%) rotateY(5deg) scale(0.9) opacity-20 blur-md";
                  zIndex = 10;
                }

                return (
                  <div 
                    key={lever.id}
                    className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none"
                    style={{ transform, zIndex, pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    <div className="h-full w-full bg-white rounded-[3.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(237,50,55,0.15)] border border-slate-100 flex flex-col justify-between overflow-hidden relative">
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-50"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-12">
                          <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl shadow-slate-100 bg-lfcRed/5 text-lfcRed">
                            <lever.icon size={40} strokeWidth={1.5} />
                          </div>
                          <div className="text-right">
                            <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Impact Metric</div>
                            <div className="text-4xl font-black tracking-tighter ebitda-gradient">{lever.result}</div>
                          </div>
                        </div>

                        <h4 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight">
                          {lever.title}
                        </h4>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
                          {lever.description}
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between pt-10 border-t border-slate-50">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Key Detail</span>
                          <span className="text-sm font-bold text-slate-900">{lever.detail}</span>
                        </div>
                        <div className="h-12 w-12 rounded-2xl bg-lfcBlue flex items-center justify-center text-white shadow-lg shadow-lfcBlue/20">
                          <Activity size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-20 flex justify-center space-x-2">
          {leversData.map((_, idx) => (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIdx === idx ? 'w-12 bg-lfcRed' : 'w-4 bg-slate-100'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Levers;
