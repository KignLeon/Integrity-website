
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LeadForm from './components/LeadForm';
import Modal from './components/Modal';
import { CONTACT_INFO, SERVICES, PARTNERS, DIFFERENTIATORS } from './constants';

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

      {/* --- HERO: AUTHORITY & CLARITY --- */}
      <section className="relative min-h-[100vh] lg:min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?auto=format&fit=crop&w=2000&q=80" 
            alt="Yuma Arizona Sun" 
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 dark-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-8 text-white space-y-12 reveal">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-amber-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full border border-amber-500/30">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-amber-500">Yuma's Licensed Electrical & Solar Expert</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-[900] leading-[0.9] tracking-tightest">
                Reliable Solar for <br />
                <span className="text-amber-500 text-glow">Yuma Homeowners.</span>
              </h1>
              
              <p className="text-xl md:text-3xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                Safe electrical foundations, desert-smart solar design, and long-term support from a local contractor you can trust.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
                className="group bg-amber-500 hover:bg-white hover:text-slate-900 text-white px-10 py-6 rounded-[2rem] font-black text-2xl flex items-center justify-center gap-4 transition-all shadow-[0_32px_64px_-16px_rgba(245,158,11,0.5)] hover:-translate-y-2 active:scale-95"
              >
                <i className="fa-solid fa-phone-volume text-3xl group-hover:rotate-12 transition-transform"></i>
                <div className="text-left">
                  <span className="block text-[10px] uppercase tracking-widest opacity-80 font-bold mb-0.5">Call Julio Munoz</span>
                  {CONTACT_INFO.phone}
                </div>
              </a>
              <button 
                onClick={openModal}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-3xl text-white border border-white/20 px-10 py-6 rounded-[2rem] font-bold text-2xl transition-all flex items-center justify-center gap-4 group"
              >
                Request a Consultation
                <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform opacity-60"></i>
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-white/10 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-amber-500"><i className="fa-solid fa-shield-check"></i></div>
                <div>
                  <div className="text-lg font-black text-white">Licensed & Bonded</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{CONTACT_INFO.roc}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-amber-500"><i className="fa-solid fa-bolt"></i></div>
                <div>
                  <div className="text-lg font-black text-white">$80 Diagnostic</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full System Analysis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT US: THE CONTRACTOR STORY --- */}
      <section id="why-integrity" className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-7 space-y-10">
              <h2 className="text-amber-500 font-black tracking-widest uppercase text-xs">About Integrity Electrical</h2>
              <p className="text-4xl md:text-6xl font-[900] text-slate-900 leading-[1.1] tracking-tightest">Expert Workmanship. <br />No Surprises Later.</p>
              
              <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
                <p>
                  Integrity Electrical Contracting is a licensed electrical and solar contractor serving homeowners and small commercial properties in <span className="text-slate-900 font-bold underline decoration-amber-500 decoration-4 underline-offset-4">Yuma, Arizona.</span>
                </p>
                <p>
                  Our work begins with the electrical side — panel capacity, load calculations, and safety — before designing solar systems that are built for Yuma’s heat and real-world energy usage. This approach allows us to deliver reliable installations with clear, itemized proposals.
                </p>
                <p>
                  We focus on long-term performance, code-compliant work, and continued involvement after PTO through monitoring and service support. Our mission is to make sustainable energy accessible while improving homes for the future.
                </p>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" className="h-6 opacity-30" alt="Tesla" />
                <div className="w-1 h-8 bg-slate-100"></div>
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500 text-xs">
                    {[1,2,3,4,5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
                  </div>
                  <span className="text-sm font-black text-slate-900 uppercase tracking-widest">A+ BBB Accredited</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h3 className="text-2xl font-black text-slate-900 mb-10 text-center tracking-tight">Our Differentiators</h3>
              <div className="space-y-10">
                {DIFFERENTIATORS.map((diff, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white text-amber-500 rounded-2xl flex-shrink-0 flex items-center justify-center text-xl shadow-sm border border-slate-100 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                      <i className={`fa-solid ${diff.icon}`}></i>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-black text-slate-900 text-lg tracking-tight">{diff.title}</h4>
                      <p className="text-slate-500 font-medium leading-snug">{diff.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={openModal} className="w-full bg-slate-900 text-white mt-12 py-5 rounded-2xl font-black text-lg shadow-lg hover:bg-amber-500 transition-all">
                Learn Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE SERVICES: CLEAN LIST FORMAT --- */}
      <section id="services" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-amber-500 font-black tracking-widest uppercase text-xs">Core Services</h2>
            <p className="text-4xl md:text-7xl font-[900] text-slate-900 leading-tight tracking-tightest">Engineering for Yuma.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Solar Pillar */}
            <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-700">
              <div className="flex items-center justify-between mb-12">
                <div className="w-20 h-20 bg-amber-500 text-white rounded-[2rem] flex items-center justify-center text-4xl shadow-xl shadow-amber-500/20 group-hover:rotate-6 transition-transform">
                  <i className="fa-solid fa-solar-panel"></i>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-amber-500 uppercase tracking-[0.2em] mb-1">Energy Pillar</div>
                  <div className="text-xl font-black text-slate-900 uppercase tracking-tighter">Solar & Storage</div>
                </div>
              </div>
              
              <ul className="space-y-6 mb-12">
                {SERVICES.solarEnergy.map((s, i) => (
                  <li key={i} className="flex items-center gap-5 text-xl font-bold text-slate-700">
                    <div className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    {s}
                  </li>
                ))}
              </ul>
              
              <button onClick={openModal} className="w-full border-2 border-slate-900 text-slate-900 py-6 rounded-3xl font-black text-xl hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-3 group/btn">
                Request Solar Analysis
                <i className="fa-solid fa-arrow-right opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-2 transition-all"></i>
              </button>
            </div>

            {/* Electrical Pillar */}
            <div className="bg-white p-12 rounded-[4rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-700">
              <div className="flex items-center justify-between mb-12">
                <div className="w-20 h-20 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center text-4xl shadow-xl group-hover:-rotate-6 transition-transform">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div className="text-right">
                  <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Service Pillar</div>
                  <div className="text-xl font-black text-slate-900 uppercase tracking-tighter">Electrical Contractor</div>
                </div>
              </div>
              
              <ul className="space-y-6 mb-12">
                {SERVICES.electrical.map((s, i) => (
                  <li key={i} className="flex items-center gap-5 text-xl font-bold text-slate-700">
                    <div className="w-6 h-6 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center text-[10px]">
                      <i className="fa-solid fa-plus"></i>
                    </div>
                    {s}
                  </li>
                ))}
              </ul>
              
              <button onClick={openModal} className="w-full bg-slate-900 text-white py-6 rounded-3xl font-black text-xl hover:bg-amber-500 transition-all flex items-center justify-center gap-3 group/btn">
                Book Electrical Service
                <i className="fa-solid fa-arrow-right opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-2 transition-all"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO WE SERVE --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-10">
          <h2 className="text-amber-500 font-black tracking-widest uppercase text-xs">Our Community</h2>
          <p className="text-4xl md:text-6xl font-[900] text-white leading-tight tracking-tightest">Who We Serve</p>
          <p className="text-xl text-slate-400 leading-relaxed font-medium">
            We work with local homeowners and small commercial property owners in Yuma who value reliable workmanship, clear communication, and long-term system performance over aggressive sales tactics.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700 pt-10">
            {PARTNERS.map((p, i) => (
              <img key={i} src={p.logo} alt={p.name} className="h-8 md:h-12 w-auto object-contain invert" />
            ))}
            <div className="h-10 w-px bg-white/10 hidden md:block"></div>
            <div className="text-2xl font-black text-white tracking-tighter">TESLA AUTHORIZED</div>
          </div>
        </div>
      </section>

      {/* --- FINAL CONTACT: THE CONSULTATION --- */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-amber-500 font-black tracking-widest uppercase text-xs">Direct Contact</h2>
              <p className="text-5xl md:text-7xl font-[900] text-slate-900 leading-[0.9] tracking-tightest">Request a Solar or Electrical Consultation.</p>
              <p className="text-2xl text-slate-500 font-medium leading-relaxed">
                Speak directly with a licensed contractor for clear recommendations and honest next steps for your Yuma property.
              </p>
            </div>

            <div className="space-y-8">
              <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`} className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-3xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                   <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Phone Support</div>
                   <div className="text-3xl font-[900] text-slate-900">{CONTACT_INFO.phone}</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-slate-900 text-white rounded-3xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                   <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Inquiry</div>
                   <div className="text-2xl font-[900] text-slate-900 break-all">{CONTACT_INFO.email}</div>
                </div>
              </a>
            </div>
          </div>

          <div className="reveal stagger-1">
            <LeadForm title="Consult with Julio" buttonText="Confirm My Visit" />
          </div>
        </div>
      </section>

      {/* --- FOOTER: YUMA DESCRIPTION --- */}
      <footer className="pt-32 pb-12 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-16 border-b border-slate-100 pb-24">
          <div className="md:col-span-2 space-y-10">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-[900] text-2xl shadow-lg shadow-amber-500/20">I</div>
              <span className="text-3xl font-[900] tracking-tighter text-slate-900 uppercase">Integrity <span className="font-light text-amber-500">Solar</span></span>
            </div>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-sm">
              Integrity Electrical Contracting provides solar installations, electrical upgrades, and EV charger services for residential and commercial clients in Yuma, Arizona.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">Operations</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li>Residential Solar</li>
              <li>Commercial Solar</li>
              <li>System Maintenance</li>
              <li>Remove & Reinstall</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">Contracting</h4>
            <ul className="space-y-4 text-slate-500 font-bold text-sm">
              <li>{CONTACT_INFO.roc}</li>
              <li>Licensed · Bonded</li>
              <li>Owner: {CONTACT_INFO.owner}</li>
              <li>BBB A+ Accredited</li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-[10px]">Service Area</h4>
            <div className="space-y-4">
              <div className="text-slate-900 font-black text-xl">Yuma, Arizona</div>
              <div className="text-slate-500 text-sm font-medium">Serving the entire Sonoran Desert region.</div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">© {new Date().getFullYear()} Integrity Electrical Contracting LLC. All rights reserved.</p>
        </div>
      </footer>

      {/* --- UX FLOATING ENHANCEMENTS --- */}
      <div className="fixed bottom-10 right-10 z-[70] flex flex-col items-end gap-5">
        {showTooltip && (
          <div className="bg-slate-900 p-6 rounded-[2rem] shadow-2xl border border-white/10 text-white animate-in fade-in slide-in-from-bottom-8 duration-700 relative max-w-[280px]">
            <p className="text-sm font-medium leading-relaxed mb-4">
              <span className="text-amber-500 font-black">⚡ Yuma Update:</span> We are currently scheduling consultations for <span className="text-white font-black">next week.</span>
            </p>
            <button onClick={openModal} className="bg-amber-500 text-white w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-amber-600 transition-all">Book Now</button>
            <div className="absolute -bottom-1 right-10 w-5 h-5 bg-slate-900 border-r border-b border-white/10 rotate-45"></div>
          </div>
        )}
        
        <button 
          onClick={openModal}
          className="bg-amber-500 hover:bg-slate-900 text-white w-24 h-24 rounded-full shadow-2xl flex items-center justify-center text-4xl transition-all hover:scale-110 active:scale-95 group relative"
        >
          <i className="fa-solid fa-calendar-check group-hover:rotate-12 transition-transform"></i>
          <span className="absolute -top-1 -right-1 w-7 h-7 bg-white text-slate-900 rounded-full flex items-center justify-center text-[10px] font-black border-4 border-amber-500">1</span>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LeadForm isModal={true} title="Consultation Request" buttonText="Confirm My Visit" />
      </Modal>

      {/* --- MOBILE STICKY BAR --- */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden px-4 pb-6 pt-2 bg-white/50 backdrop-blur-3xl border-t border-slate-100">
        <a 
          href={`tel:${CONTACT_INFO.phone.replace(/\D/g,'')}`}
          className="w-full bg-amber-500 text-white text-center font-black py-6 rounded-[1.5rem] shadow-2xl flex items-center justify-center gap-4 active:scale-95 transition-all text-xl"
        >
          <i className="fa-solid fa-phone-volume"></i>
          CALL JULIO NOW
        </a>
      </div>
    </div>
  );
};

export default App;
