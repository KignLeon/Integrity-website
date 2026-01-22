
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LeadForm from './components/LeadForm';
import Modal from './components/Modal';
import { CONTACT_INFO, SERVICES, PARTNERS } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen selection:bg-amber-200">
      <Navbar />

      {/* --- SECTION 1: HERO (Layered & Splitted) --- */}
      <section className="relative min-h-[100vh] lg:min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80" 
            alt="Solar panels at sunset" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 dark-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Messaging Column */}
          <div className="lg:col-span-7 text-white space-y-10 reveal">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-amber-500/20 backdrop-blur-xl px-4 py-2 rounded-full border border-amber-500/30">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">Arizona's #1 Certified Installer</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-[900] leading-[0.95] tracking-tightest">
                Own Your Energy. <br />
                <span className="text-amber-500 text-glow">Protect Your Home.</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-300 leading-relaxed max-w-xl font-medium">
                Premium solar installations and electrical contracting for Arizona homeowners. <span className="text-white font-bold">14+ Years. 10,000+ Projects. 100% Integrity.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
                className="group bg-amber-500 hover:bg-amber-600 text-white px-8 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-4 transition-all shadow-[0_20px_50px_rgba(245,158,11,0.4)] hover:-translate-y-1 active:scale-95"
              >
                <i className="fa-solid fa-phone-volume text-2xl group-hover:rotate-12 transition-transform"></i>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest opacity-80 font-bold mb-0.5">Call Now</span>
                  {CONTACT_INFO.phone}
                </div>
              </a>
              <button 
                onClick={openModal}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-8 py-5 rounded-2xl font-bold text-xl transition-all flex items-center justify-center gap-3 hover:border-white/40"
              >
                Request Free Quote
                <i className="fa-solid fa-arrow-right-long opacity-50"></i>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-4 border-t border-white/10 max-w-lg">
              <div>
                <div className="text-2xl font-black text-white">4.9/5</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Google Rating</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">A+</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">BBB Accredited</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">25YR</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Work Warranty</div>
              </div>
            </div>
          </div>

          {/* Lead Capture Column */}
          <div className="lg:col-span-5 reveal stagger-1 hidden lg:block">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE "GRID" (Modern Minimalist Services) --- */}
      <section id="services" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-amber-500 font-black tracking-[0.3em] uppercase text-xs">Premium Engineering</h2>
              <p className="text-4xl md:text-6xl font-[900] text-slate-900 leading-tight">Expert Solutions For Every Square Inch.</p>
            </div>
            <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
              From residential rooftop solar to complex commercial electrical grids, we deliver unmatched precision and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-10 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-solar-panel"></i>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-white">Solar Energy</h3>
              <ul className="space-y-3 mb-10">
                {SERVICES.solar.slice(0, 4).map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-400 font-medium">
                    <i className="fa-solid fa-check text-amber-500"></i> {s}
                  </li>
                ))}
              </ul>
              <button onClick={openModal} className="text-amber-500 font-bold group-hover:text-white flex items-center gap-2 group/btn">
                Learn More <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white text-3xl mb-10 shadow-lg shadow-slate-900/20 group-hover:bg-amber-500 transition-colors group-hover:scale-110">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-white">Electrical Systems</h3>
              <ul className="space-y-3 mb-10">
                {SERVICES.electrical.slice(0, 4).map((s, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-400 font-medium">
                    <i className="fa-solid fa-check text-amber-500"></i> {s}
                  </li>
                ))}
              </ul>
              <button onClick={openModal} className="text-amber-500 font-bold group-hover:text-white flex items-center gap-2 group/btn">
                Explore Services <i className="fa-solid fa-arrow-right group-hover/btn:translate-x-1 transition-transform"></i>
              </button>
            </div>

            {/* Service Card 3 - Image Focused */}
            <div className="relative rounded-[3rem] overflow-hidden min-h-[400px] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1620714223084-8dfacc6dfd8d?auto=format&fit=crop&w=800&q=80" 
                alt="Battery storage" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent p-12 flex flex-col justify-end">
                <h3 className="text-2xl font-black text-white mb-2">Smart Storage</h3>
                <p className="text-slate-300 text-sm mb-6">Never worry about a blackout again with Tesla Powerwall integration.</p>
                <button onClick={openModal} className="bg-amber-500 text-white w-full py-4 rounded-2xl font-bold shadow-xl">Reserve Battery</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TRUST & EXPERIENCE (Human First) --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full -mr-64 -mt-64 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full -ml-64 -mb-64 blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-[900] text-white leading-tight">Building Arizona's Clean Energy <span className="text-amber-500">Since 2010.</span></h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Integrity isn't just a name—it's how we execute every wire, every panel, and every connection. We are a family-owned contracting firm dedicated to pushing Arizona's energy standards forward.
              </p>
              
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-2">
                  <div className="text-5xl font-black text-white">10K+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-500">Satisfied Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-black text-white">14+</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-500">Years Active</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-black text-white">#1</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-500">Local Authority</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-black text-white">Zero</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-500">Down Options</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1558444479-c8f027d8a5db?auto=format&fit=crop&w=800&q=80" 
                  alt="Quality Workmanship" 
                  className="w-full h-auto"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                  <p className="text-white italic text-lg mb-4">"The team was flawless. From initial quote to the final panel test, they operated with absolute precision and transparency."</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-xs">RK</div>
                    <div className="text-xs font-bold text-white uppercase tracking-widest">Robert K. · Scottsdale, AZ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PARTNERS (Clean Logo Cloud) --- */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {PARTNERS.map((p, i) => (
              <img key={i} src={p.logo} alt={p.name} className="h-8 md:h-12 w-auto object-contain" />
            ))}
            <span className="text-2xl font-black text-slate-900 tracking-tighter">TESLA ENERGY</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL CTA (High Impact) --- */}
      <section className="py-40 bg-slate-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-10">
          <h2 className="text-5xl md:text-7xl font-[900] text-slate-900 leading-[0.9] tracking-tightest">Stop Renting Energy. <br /><span className="text-amber-500">Start Owning It.</span></h2>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            Take the first step toward energy independence. Our experts are ready to map out your home's potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <button 
              onClick={openModal}
              className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-6 rounded-3xl font-black text-2xl shadow-2xl shadow-amber-500/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-4"
            >
              Request Free Consultation
              <i className="fa-solid fa-bolt"></i>
            </button>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
              className="bg-white text-slate-900 border-2 border-slate-200 px-12 py-6 rounded-3xl font-black text-2xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all flex items-center justify-center gap-4"
            >
              <i className="fa-solid fa-phone"></i>
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Minimalist Premium) --- */}
      <footer className="pt-24 pb-12 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-slate-100 pb-20">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-amber-500 w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl">I</div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">{CONTACT_INFO.logoText} <span className="text-amber-500 font-normal">ELECTRICAL</span></span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed font-medium">
              A premium contracting firm dedicated to the engineering of high-efficiency energy systems. Licensed in Arizona since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-all border border-slate-100"><i className="fa-brands fa-facebook-f text-xl"></i></a>
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-all border border-slate-100"><i className="fa-brands fa-instagram text-xl"></i></a>
              <a href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-amber-50 transition-all border border-slate-100"><i className="fa-brands fa-linkedin-in text-xl"></i></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Direct Contact</h4>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="block text-slate-500 hover:text-amber-500 transition-colors font-bold text-lg">{CONTACT_INFO.phone}</a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="block text-slate-500 hover:text-amber-500 transition-colors font-medium break-words">{CONTACT_INFO.email}</a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Credentials</h4>
            <div className="space-y-2">
              <div className="text-slate-500 font-medium">Arizona ROC #315000</div>
              <div className="text-slate-500 font-medium">BBB Accredited A+</div>
              <div className="text-slate-500 font-medium">Licensed · Bonded · Insured</div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-bold tracking-tight">© {new Date().getFullYear()} Integrity Electrical Contracting LLC. All rights reserved.</p>
          <div className="flex gap-8 text-slate-400 text-xs font-black uppercase tracking-widest">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* --- FLOATING ELEMENTS --- */}
      <div className="fixed bottom-8 right-8 z-[70] flex flex-col items-end gap-4">
        {showTooltip && (
          <div className="bg-white p-5 rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-amber-100 text-slate-900 text-sm font-bold animate-in fade-in slide-in-from-bottom-4 duration-500 relative max-w-xs">
            <p className="leading-tight mb-2"><span className="text-amber-500">⚡ New Report:</span> Average AZ solar savings hit <span className="underline decoration-amber-500 decoration-2">$1,480/year</span> in 2024.</p>
            <button onClick={openModal} className="text-amber-500 hover:text-amber-600 flex items-center gap-1 group">
              See your potential <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
            </button>
            <div className="absolute -bottom-1 right-8 w-4 h-4 bg-white border-r border-b border-amber-100 rotate-45"></div>
          </div>
        )}
        
        <button 
          onClick={openModal}
          className="bg-amber-500 hover:bg-amber-600 text-white w-20 h-20 rounded-full shadow-[0_20px_50px_rgba(245,158,11,0.5)] flex items-center justify-center text-3xl transition-all hover:scale-110 active:scale-95 group"
        >
          <i className="fa-solid fa-file-invoice-dollar group-hover:rotate-12 transition-transform"></i>
        </button>
      </div>

      {/* --- LEAD MODAL --- */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LeadForm isModal={true} title="Secure Your Priority Quote" buttonText="Calculate My Savings" />
      </Modal>

      {/* --- STICKY MOBILE CALL BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
        <div className="bg-white/80 backdrop-blur-2xl border-t border-slate-200 p-4 flex gap-4">
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
            className="flex-[2] bg-amber-500 text-white text-center font-black py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
          >
            <i className="fa-solid fa-phone-volume"></i>
            CALL NOW
          </a>
          <button 
            onClick={openModal}
            className="flex-1 bg-slate-900 text-white text-center font-black py-5 rounded-2xl shadow-xl active:scale-[0.98] transition-all"
          >
            QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
