
import React, { useState } from 'react';
import { LeadFormValues } from '../types';

interface LeadFormProps {
  title?: string;
  buttonText?: string;
  isModal?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  title = "Request a Consultation", 
  buttonText = "Schedule Consultation",
  isModal = false 
}) => {
  const [form, setForm] = useState<LeadFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    interest: 'Solar Installation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-12 bg-white rounded-3xl shadow-2xl border border-amber-100 flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6 animate-pulse">
          <i className="fa-solid fa-paper-plane text-3xl"></i>
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-3">Consultation Set</h3>
        <p className="text-slate-500 max-w-xs mx-auto">Julio or a senior engineer will reach out within 24 business hours to confirm your visit.</p>
      </div>
    );
  }

  return (
    <div className={`${isModal ? '' : 'glass-card shadow-[0_48px_80px_-16px_rgba(15,23,42,0.2)] p-10 md:p-12 rounded-[3.5rem] relative overflow-hidden group'}`}>
      {!isModal && (
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full -mr-24 -mt-24 blur-3xl transition-transform group-hover:scale-110"></div>
      )}
      
      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 leading-tight tracking-tightest">{title}</h3>
        <p className="text-slate-500 text-sm mb-10 font-medium">Speak directly with a licensed contractor for clear recommendations.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">First Name</label>
              <input 
                required
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all font-bold text-slate-900"
                type="text" 
                placeholder="John" 
                value={form.firstName}
                onChange={(e) => setForm({...form, firstName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Last Name</label>
              <input 
                required
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all font-bold text-slate-900"
                type="text" 
                placeholder="Doe"
                value={form.lastName}
                onChange={(e) => setForm({...form, lastName: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Email</label>
            <input 
              required
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all font-bold text-slate-900"
              type="email" 
              placeholder="email@example.com"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Phone</label>
            <input 
              required
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all font-bold text-slate-900"
              type="tel" 
              placeholder="(480) 000-0000"
              value={form.phone}
              onChange={(e) => setForm({...form, phone: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Type of Consultation</label>
            <div className="relative">
              <select 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 transition-all appearance-none font-bold text-slate-900 cursor-pointer"
                value={form.interest}
                onChange={(e) => setForm({...form, interest: e.target.value})}
              >
                <option>Residential Solar Design</option>
                <option>Commercial Solar Audit</option>
                <option>Main Panel Upgrade</option>
                <option>EV Charger Install</option>
                <option>System Diagnostic ($80)</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs"></i>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-slate-900 hover:bg-amber-500 text-white font-black py-6 rounded-[1.5rem] shadow-xl transition-all transform hover:-translate-y-1 active:scale-[0.98] text-xl mt-6 flex items-center justify-center gap-4 group"
          >
            {buttonText}
            <i className="fa-solid fa-arrow-right-long group-hover:translate-x-2 transition-transform"></i>
          </button>
          
          <div className="flex items-center justify-center gap-6 pt-4 grayscale opacity-40">
             <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
               <i className="fa-solid fa-lock"></i>
               Secure Data
             </div>
             <div className="w-1 h-1 bg-slate-200 rounded-full"></div>
             <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
               <i className="fa-solid fa-id-card"></i>
               ROC #315000
             </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
