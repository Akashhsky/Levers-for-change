
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ExternalLink, ShieldCheck, Factory, Gauge, TrendingUp, Layers } from 'lucide-react';

const industryData = [
  {
    id: "01",
    name: "Plastic Packaging",
    impact: "+42% EBITDA",
    challenge: "High resin waste & inconsistent cycle times.",
    solution: "Statistical OEE mapping & scrap reduction logic.",
    linkedin: "https://www.linkedin.com/pulse/plastic-packaging-escaping-commodity-trap-levers-for-change-dfv3c"
  },
  {
    id: "02",
    name: "Textiles",
    impact: "2.5x Yield",
    challenge: "Frequent loom micro-stoppages.",
    solution: "Scientific interval analysis & shift-synchronization.",
    linkedin: "https://www.linkedin.com/pulse/textiles-case-study-right-first-time-revolution-levers-for-change-vrfjc"
  },
  {
    id: "03",
    name: "Lumber & Wood",
    impact: "+28% Margin",
    challenge: "Inaccurate cutting yield & log-mix logic.",
    solution: "Inventory flow redesign & sales alignment delta.",
    linkedin: "https://www.linkedin.com/pulse/lumber-wood-efficiency-lfc"
  },
  {
    id: "04",
    name: "Auto Components",
    impact: "+35% Throughput",
    challenge: "Bottlenecks in high-precision casting.",
    solution: "Flow balancing & WIP reduction.",
    linkedin: "https://www.linkedin.com/pulse/auto-components-flow-lfc"
  },
  {
    id: "05",
    name: "Iron & Steel",
    impact: "18% Energy Cut",
    challenge: "Thermal loss & idle forge time.",
    solution: "Precision scheduling & maintenance syncing.",
    linkedin: "https://www.linkedin.com/pulse/iron-steel-impact-lfc"
  },
  {
    id: "06",
    name: "Speciality Chemicals",
    impact: "+24% Capacity",
    challenge: "Batch processing lag & reactor idle time.",
    solution: "Parallel processing & cycle-time compression.",
    linkedin: "https://www.linkedin.com/pulse/chemicals-optimization-lfc"
  },
  {
    id: "07",
    name: "Aluminium Production",
    impact: "+31% Yield",
    challenge: "Molten metal loss & dross formation.",
    solution: "OEE precision & operator-logic training.",
    linkedin: "https://www.linkedin.com/pulse/aluminium-yield-lfc"
  },
  {
    id: "08",
    name: "Converted Paper",
    impact: "+22% EBITDA",
    challenge: "High set-up waste & roll changeover time.",
    solution: "SMED logic & throughput flow acceleration.",
    linkedin: "https://www.linkedin.com/pulse/paper-transformation-lfc"
  },
  {
    id: "09",
    name: "Cosmetic Care",
    impact: "30% Labor Cut",
    challenge: "High manual handling in filling lines.",
    solution: "Manpower logic & ergonomic line redesign.",
    linkedin: "https://www.linkedin.com/pulse/cosmetic-efficiency-lfc"
  },
  {
    id: "10",
    name: "Industrial Machinery",
    impact: "2.0x Flow",
    challenge: "Assembly line clutter & WIP silos.",
    solution: "Cellular manufacturing & pull-system logic.",
    linkedin: "https://www.linkedin.com/pulse/machinery-flow-lfc"
  },
  {
    id: "11",
    name: "Dairy",
    impact: "+15% Recovery",
    challenge: "Product giveaway & CIP downtime.",
    solution: "Yield tracking & digital twin transparency.",
    linkedin: "https://www.linkedin.com/pulse/dairy-optimization-lfc"
  },
  {
    id: "12",
    name: "Hygiene",
    impact: "+40% OEE",
    challenge: "High-speed line synchronization gaps.",
    solution: "Focused OEE & micro-stoppage elimination.",
    linkedin: "https://www.linkedin.com/pulse/hygiene-impact-lfc"
  },
  {
    id: "13",
    name: "Metal Foundries",
    impact: "+26% EBITDA",
    challenge: "High casting rejection rates.",
    solution: "Root-cause OEE logic & process stability.",
    linkedin: "https://www.linkedin.com/pulse/foundry-transformation-lfc"
  },
  {
    id: "14",
    name: "Packaged Foods",
    impact: "+33% Capacity",
    challenge: "Seasonality & erratic floor demand.",
    solution: "Sales alignment & flexible labor logic.",
    linkedin: "https://www.linkedin.com/pulse/packaged-foods-delta-lfc"
  }
];

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = industryData[activeIndex];
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth scroll logic for the selector
  useEffect(() => {
    if (scrollRef.current) {
      const activeEl = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        scrollRef.current.scrollTo({
          top: activeEl.offsetTop - scrollRef.current.offsetHeight / 2 + activeEl.offsetHeight / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  return (
    <section id="portfolio" className="relative py-32 lg:py-48 accent-gradient-bg overflow-hidden">
      {/* Cinematic Background Grid Overlays */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
      <div className="absolute -top-1/2 -left-1/4 w-full h-full bg-white/20 blur-[180px] rounded-full pointer-events-none animate-pulse-slow"></div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* LEFT: THE COMMAND SELECTOR */}
          <div className="w-full lg:w-1/3 reveal">
            <div className="mb-10">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-px bg-white"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Industry Portfolio</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter-custom leading-tight">
                Market <br/><span className="bg-slate-900 px-4 py-1 inline-block -rotate-1 mt-2 shadow-2xl">Performance.</span>
              </h2>
            </div>

            <div 
              ref={scrollRef}
              className="h-[450px] overflow-y-auto pr-4 space-y-2 scroll-hide bg-black/5 rounded-3xl p-2 backdrop-blur-sm"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {industryData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full group relative flex items-center justify-between p-5 rounded-2xl transition-all duration-500 border ${
                    activeIndex === idx 
                      ? 'bg-white border-transparent shadow-[0_20px_40px_rgba(0,0,0,0.1)] translate-x-2' 
                      : 'bg-white/10 border-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className={`font-mono text-[10px] font-bold ${activeIndex === idx ? 'text-lfcRed' : 'text-white/60'}`}>
                      {item.id}
                    </span>
                    <span className={`text-base font-bold tracking-tight transition-colors ${activeIndex === idx ? 'text-slate-900' : 'text-white'}`}>
                      {item.name}
                    </span>
                  </div>
                  {activeIndex === idx && (
                    <div className="h-2 w-2 rounded-full bg-lfcRed animate-pulse shadow-[0_0_10px_#ED3237]"></div>
                  )}
                </button>
              ))}
            </div>
            
            <p className="mt-8 text-white/60 text-xs font-bold uppercase tracking-widest leading-relaxed">
              *Scroll to explore all 14 sectors
            </p>
          </div>

          {/* RIGHT: THE IMPACT STAGE */}
          <div className="w-full lg:w-2/3 h-full lg:min-h-[700px] flex items-center justify-center">
            <div className="relative w-full max-w-2xl group">
              {/* Dynamic Content Card - Using high-contrast white card against the gradient background */}
              <div key={activeIndex} className="animate-[slideUp_0.6s_ease-out] bg-white rounded-[4rem] p-10 lg:p-16 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.3)] relative overflow-hidden border border-white/40">
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-lfcRed/5 rounded-bl-full"></div>
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-inner">
                      <Factory className="text-lfcRed" size={32} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-lfcRed uppercase tracking-widest mb-1">Sector Analysis</div>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tighter-custom">{activeData.name}</h3>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">EBITDA Delta Realized</div>
                    <div className="text-6xl font-black text-slate-900 tracking-tighter">{activeData.impact}</div>
                  </div>
                </div>

                {/* Case Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <Gauge size={16} className="text-lfcOrange" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">The Challenge</span>
                    </div>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed italic">
                      "{activeData.challenge}"
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-slate-400">
                      <TrendingUp size={16} className="text-lfcRed" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Our Strategic Lever</span>
                    </div>
                    <p className="text-lg text-slate-900 font-bold leading-relaxed">
                      {activeData.solution}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Call to Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-10 border-t border-slate-50 gap-8">
                  <div className="flex items-center space-x-4 text-slate-400">
                    <ShieldCheck size={20} className="text-lfcRed" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Audit Verified Results</span>
                  </div>
                  <a 
                    href={activeData.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn flex items-center space-x-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-sm transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/20"
                  >
                    <span>Read Full Case Study</span>
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Background Stack Decor */}
              <div className="absolute -z-10 -bottom-6 left-10 right-10 h-10 bg-black/10 rounded-[4rem] translate-y-2 blur-sm"></div>
              <div className="absolute -z-20 -bottom-12 left-20 right-20 h-10 bg-black/5 rounded-[4rem] translate-y-4 blur-md"></div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .scroll-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
