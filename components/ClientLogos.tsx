
import React, { useState } from 'react';

const clients = [
  { name: "RR KÄBEL", color: "#F26522" },
  { name: "TATA", color: "#005A9C" },
  { name: "BRITANNIA", color: "#E31E24" },
  { name: "WELSPUN", color: "#0072BC" },
  { name: "GODREJ", color: "#D01F61" },
  { name: "TVS", color: "#003399" },
  { name: "SONIC", color: "#78BE20" },
  { name: "WILMAR", color: "#006838" }
];

const ClientLogos: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Triple the array for a seamless marquee effect
  const displayClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <div className="flex items-center justify-center space-x-6">
          <div className="h-px bg-slate-100 flex-grow max-w-[100px]"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Trusted Industry Partners</span>
          <div className="h-px bg-slate-100 flex-grow max-w-[100px]"></div>
        </div>
      </div>
      
      <div className="relative flex overflow-hidden group/marquee">
        <div className="flex animate-marquee whitespace-nowrap items-center py-4">
          {displayClients.map((client, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(idx)}
              onTouchEnd={() => setHoveredIndex(null)}
              className="mx-12 lg:mx-20 flex items-center justify-center transition-all duration-500 hover:scale-110 cursor-default"
              style={{
                opacity: hoveredIndex === null ? 0.3 : (hoveredIndex === idx ? 1 : 0.2),
                filter: hoveredIndex === idx ? 'grayscale(0%)' : 'grayscale(100%)',
              }}
            >
              <span 
                className="text-2xl lg:text-4xl font-black tracking-tighter transition-colors duration-500 select-none"
                style={{ 
                  color: hoveredIndex === idx ? client.color : '#0f172a' 
                }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .group\/marquee:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;
