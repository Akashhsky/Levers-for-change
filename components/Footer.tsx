
import React from 'react';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const partners = [
  { name: "OmPrakash", url: "https://www.linkedin.com/in/omprakash-ns/" },
  { name: "Gangadharan", url: "https://www.linkedin.com/in/gangadharana03/" },
  { name: "Rawat", url: "https://www.linkedin.com/in/rawat-ram-godara-47a681137/" },
  { name: "Ankur Kumar", url: "https://www.linkedin.com/in/ankurkumar5/" },
  { name: "Subhabrata", url: "https://www.linkedin.com/in/subhabrata-sharma/" },
  { name: "Ankur jain", url: "https://www.linkedin.com/in/ankur-jain-1aa5ab61/" }
];

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center mb-8">
              <span className="font-display font-bold text-lg tracking-tight text-slate-900">
                LEVERS <span className="text-lfcRed">FOR CHANGE</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs">
              Industrial transformation consultants specializing in EBITDA growth through precision operational engineering.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/levers-for-change/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-lfcBlue hover:text-white transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="mailto:ganga@lfcc.in" 
                className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-lfcBlue hover:text-white transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-slate-900 uppercase tracking-widest text-xs">Partners</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-medium">
              {partners.map((partner, idx) => (
                <li key={idx}>
                  <a 
                    href={partner.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-lfcBlue transition-colors"
                  >
                    {partner.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-slate-900 uppercase tracking-widest text-xs">Connect</h4>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-lfcBlue shrink-0" />
                <span className="text-sm text-slate-500 font-medium leading-relaxed">
                  2nd Floor, 11/2, Meera Path,<br/>
                  Dhenu Market, Indore,<br/>
                  Madhya Pradesh 452001
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={20} className="text-lfcBlue shrink-0" />
                <a href="mailto:ganga@lfcc.in" className="text-sm text-slate-500 font-medium hover:text-lfcBlue transition-colors">
                  ganga@lfcc.in
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={20} className="text-lfcBlue shrink-0" />
                <a href="tel:6380869731" className="text-sm text-slate-500 font-medium hover:text-lfcBlue transition-colors">
                  6380869731
                </a>
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
