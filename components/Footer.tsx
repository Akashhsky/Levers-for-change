
import React from 'react';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-lfcBlue rounded-lg flex items-center justify-center font-display font-bold text-lg text-white">L</div>
              <span className="font-display font-bold text-lg tracking-tight text-slate-900">
                LEVERS <span className="text-lfcRed">FOR CHANGE</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs">
              Industrial transformation consultants specializing in EBITDA growth through precision operational engineering.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-lfcBlue hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-slate-900 uppercase tracking-widest text-xs">Framework</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-lfcBlue transition-colors">Focused OEE</a></li>
              <li><a href="#" className="hover:text-lfcBlue transition-colors">Manpower Logic</a></li>
              <li><a href="#" className="hover:text-lfcBlue transition-colors">Digital Twins</a></li>
              <li><a href="#" className="hover:text-lfcBlue transition-colors">Supply Chain Logic</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-slate-900 uppercase tracking-widest text-xs">Solutions</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              <li><a href="#" className="hover:text-lfcBlue transition-colors">Industry Portfolio</a></li>
              <li><a href="#" className="hover:text-lfcBlue transition-colors">Case Repository</a></li>
              <li><a href="#" className="hover:text-lfcBlue transition-colors">Assessment Tiers</a></li>
              <li><a href="#" className="hover:text-lfcBlue transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-slate-900 uppercase tracking-widest text-xs">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-lfcBlue shrink-0" />
                <span className="text-sm text-slate-500 font-medium leading-relaxed">Precision HQ, Industrial Park<br/>Suite 880, TX 75001</span>
              </div>
              <div className="flex items-start space-x-4">
                <Mail size={20} className="text-lfcBlue shrink-0" />
                <span className="text-sm text-slate-500 font-medium">strategy@lfc.consulting</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Levers For Change Management Consulting.
          </p>
          <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-lfcBlue">Privacy</a>
            <a href="#" className="hover:text-lfcBlue">Terms</a>
            <a href="#" className="hover:text-lfcBlue">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
