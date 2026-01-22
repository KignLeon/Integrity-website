
import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
      isScrolled ? 'glass-nav py-3' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-amber-500 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
            I
          </div>
          <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            {CONTACT_INFO.logoText}<span className={`font-normal ml-0.5 ${isScrolled ? 'text-amber-500' : 'text-amber-500'}`}>ELECTRICAL</span>
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          <a href="#services" className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-amber-500 ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>Services</a>
          <a href="#why-integrity" className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-amber-500 ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>The Process</a>
          <a href="#tesla" className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-amber-500 ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>Battery Backup</a>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex flex-col items-end">
            <span className={`text-[9px] font-black uppercase tracking-widest ${isScrolled ? 'text-slate-400' : 'text-slate-500'}`}>AZ ROC #315000</span>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className={`text-lg font-black transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'} hover:text-amber-500`}>
              {CONTACT_INFO.phone}
            </a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm shadow-[0_15px_30px_-5px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
          >
            FREE ESTIMATE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
