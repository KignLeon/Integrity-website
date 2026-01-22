
import React, { useState } from 'react';
import { LeadFormValues } from '../types';

interface LeadFormProps {
  title?: string;
  buttonText?: string;
  isModal?: boolean;
}

const LeadForm: React.FC<LeadFormProps> = ({ 
  title = "Get a Solar or Electrical Consultation", 
  buttonText = "Get My Consultation",
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
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <i className="fa-solid fa-check-double text-3xl"></i>
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-3">Request Received</h3>
        <p className="text-slate-500 max-w-xs mx-auto">One of our Arizona technicians will reach out to you within 24 business hours.</p>
      </div>
    );
  }

  return (
    <div className={`${isModal ? '' : 'glass-card shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden'}`}>
      {!isModal && <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>}
      
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight tracking-tight">{title}</h3>
        <p className="text-slate-500 text-sm mb-8 font-medium">Free estimate. No obligation to buy.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">First Name</label>
              <input 
                required
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-900 placeholder:text-slate-300"
                type="text" 
                placeholder="John" 
                value={form.firstName}
                onChange={(e) => setForm({...form, firstName: e.target.value})}
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Last Name</label>
              <input 
                required
                className="w-full px-5 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-900 placeholder:text-slate-300"
                type="text" 
                placeholder="Doe"
                value={form.lastName}
                onChange={(e) => setForm({...form, lastName: e.target.value})}
              />
            </div>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
            <div className="relative">
              <i className="fa-solid fa-envelope absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"></i>
              <input 
                required
                className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-900 placeholder:text-slate-300"
                type="email" 
                placeholder="john@example.com"
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
            <div className="relative">
              <i className="fa-solid fa-phone absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"></i>
              <input 
                required
                className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all font-medium text-slate-900 placeholder:text-slate-300"
                type="tel" 
                placeholder="(480) 000-0000"
                value={form.phone}
                onChange={(e) => setForm({...form, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">I'm Interested In...</label>
            <div className="relative">
              <i className="fa-solid fa-bolt absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"></i>
              <select 
                className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-slate-50/50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none font-medium text-slate-900 cursor-pointer"
                value={form.interest}
                onChange={(e) => setForm({...form, interest: e.target.value})}
              >
                <option>Solar Installation</option>
                <option>Solar Maintenance</option>
                <option>Tesla Powerwall</option>
                <option>Electrical Repair</option>
                <option>EV Charger</option>
              </select>
              <i className="fa-solid fa-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs"></i>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-black py-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 active:scale-[0.98] text-lg mt-4 flex items-center justify-center gap-3"
          >
            {buttonText}
            <i className="fa-solid fa-arrow-right-long opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"></i>
          </button>
          
          <div className="flex items-center justify-center gap-4 mt-6 grayscale opacity-60">
             <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
               <i className="fa-solid fa-lock"></i>
               Secure Data
             </div>
             <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
             <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
               <i className="fa-solid fa-shield-halved"></i>
               AZ Licensed
             </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeadForm;
