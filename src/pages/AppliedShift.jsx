import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Calendar, MapPin, Navigation, MessageCircle, Phone, FileText, ShieldCheck, HelpCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AppliedShift = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className={`flex-1 min-h-0 flex flex-col relative overflow-hidden transition-colors duration-500 ${isLight ? 'bg-gradient-to-b from-slate-100 via-blue-50 to-slate-100 text-slate-800' : 'bg-gradient-to-b from-[#0e0f14] via-[#090a0d] to-[#040406] text-slate-200'}`}>

      {/* Decorative Blobs */}
      <div className={`absolute top-0 right-[-10%] w-72 h-72 rounded-full blur-[90px] pointer-events-none ${isLight ? 'bg-amber-400/25' : 'bg-amber-500/10'}`} />
      <div className={`absolute top-[30%] left-[-15%] w-64 h-64 rounded-full blur-[90px] pointer-events-none ${isLight ? 'bg-primary/15' : 'bg-primary/10'}`} />

      {/* ─── HEADER (shrink-0 — never compressed) ─── */}
      <div className="shrink-0 pt-8 pb-6 px-5 flex flex-col items-center text-center z-10 select-none">

        {/* Pulsing Radar Clock Icon */}
        <div className="relative mb-5">
          <div className="absolute inset-0 rounded-full bg-amber-500/25 blur-md animate-ping opacity-50" />
          <div className="absolute -inset-3 rounded-full bg-amber-500/5 animate-pulse" />
          <div className={`w-20 h-20 backdrop-blur-md rounded-full flex items-center justify-center border-2 relative z-10 ${isLight ? 'bg-white/90 border-amber-400/60 shadow-[0_0_35px_rgba(245,158,11,0.2)]' : 'bg-slate-950/80 border-amber-500/40 shadow-[0_0_40px_rgba(245,158,11,0.2)]'}`}>
            <Clock size={36} className="text-amber-500 stroke-[2.5px]" />
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-2xl font-black mb-1.5 tracking-tight ${isLight ? 'text-slate-800' : 'text-white'}`}
        >
          Applied for Shift!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className={`text-sm font-medium mb-4 max-w-[260px] leading-relaxed ${isLight ? 'text-slate-500' : 'text-slate-400'}`}
        >
          Submitted to <span className={`font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>Smile Care Dental</span>.
        </motion.p>

        {/* Progress Stepper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className={`w-full max-w-[320px] rounded-2xl p-3.5 flex justify-between items-center ${isLight ? 'bg-white/80 border border-slate-200 shadow-sm' : 'bg-slate-950/40 border border-white/5'}`}
        >
          {/* Step 1 — Applied */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 flex items-center justify-center text-xs font-black">✓</div>
            <span className={`text-[10px] font-bold ${isLight ? 'text-slate-500' : 'text-slate-300'}`}>Applied</span>
          </div>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-emerald-500/50 to-amber-500/60 mx-1.5 -mt-4" />
          {/* Step 2 — In Review */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 border border-amber-500/40 flex items-center justify-center text-xs font-black animate-pulse">●</div>
            <span className="text-[10px] font-extrabold text-amber-500">In Review</span>
          </div>
          <div className={`flex-1 h-[2px] mx-1.5 -mt-4 ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`} />
          {/* Step 3 — Booked */}
          <div className="flex flex-col items-center gap-1 opacity-30">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black border ${isLight ? 'bg-slate-100 text-slate-400 border-slate-300' : 'bg-slate-900 text-slate-500 border-white/5'}`}>✓</div>
            <span className={`text-[10px] font-bold ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>Booked</span>
          </div>
        </motion.div>
      </div>

      {/* ─── SCROLLABLE BODY ─── */}
      <div className={`flex-1 min-h-0 overflow-y-auto no-scrollbar pb-32 rounded-t-[2.5rem] px-5 pt-6 relative z-10 ${isLight ? 'bg-white shadow-[0_-12px_30px_rgba(0,0,0,0.06)] border-t border-slate-100' : 'bg-[#090a0d] shadow-[0_-18px_40px_rgba(0,0,0,0.6)] border-t border-white/5'}`}>

        {/* Drag Handle */}
        <div className={`w-10 h-1.5 rounded-full mx-auto mb-5 ${isLight ? 'bg-slate-200' : 'bg-slate-800'}`} />

        {/* Section Title */}
        <h3 className={`text-xs font-black uppercase tracking-widest mb-3 pl-1 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>Applied Shift Details</h3>

        {/* Details Card */}
        <div className={`mb-5 overflow-hidden rounded-3xl ${isLight ? 'bg-slate-50 border border-slate-200 shadow-sm' : 'bg-slate-950/60 border border-white/5'}`}>

          {/* Application Status Row */}
          <div className={`p-4 flex gap-3 border-b ${isLight ? 'border-slate-200 bg-amber-50/50' : 'border-white/5 bg-amber-500/[0.03]'}`}>
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/20">
              <FileText size={18} />
            </div>
            <div>
              <p className={`text-[10px] font-black uppercase tracking-wider mb-0.5 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>Application Status</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping shrink-0" />
                <span className="text-sm font-black text-amber-500 uppercase tracking-wide">Under Review</span>
              </div>
            </div>
          </div>

          {/* Date Row */}
          <div className={`p-4 flex gap-3 border-b ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-primary shrink-0 border ${isLight ? 'bg-primary/5 border-primary/20' : 'bg-primary/10 border-primary/20'}`}>
              <Calendar size={18} />
            </div>
            <div>
              <p className={`text-sm font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>Sunday, 24 May</p>
              <p className={`text-xs font-medium mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Decision expected within 24 hours</p>
            </div>
          </div>

          {/* Time Row */}
          <div className={`p-4 flex gap-3 border-b ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-primary shrink-0 border ${isLight ? 'bg-primary/5 border-primary/20' : 'bg-primary/10 border-primary/20'}`}>
              <Clock size={18} />
            </div>
            <div>
              <p className={`text-sm font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>09:00 – 17:00</p>
              <p className={`text-xs font-medium mt-0.5 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>8 hours total • Rate: £45/hr</p>
            </div>
          </div>

          {/* Location Row */}
          <div className="p-4 flex gap-3">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-primary shrink-0 border ${isLight ? 'bg-primary/5 border-primary/20' : 'bg-primary/10 border-primary/20'}`}>
              <MapPin size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-bold truncate ${isLight ? 'text-slate-800' : 'text-white'}`}>Smile Care Dental</p>
              <p className={`text-xs font-medium mt-0.5 truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>123 Harley Street, London</p>
            </div>
            <button className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-all hover:scale-105 active:scale-95 ${isLight ? 'bg-slate-100 border-slate-200 hover:bg-slate-200' : 'bg-slate-900 border-white/5 hover:bg-slate-800'}`}>
              <Navigation size={13} className="text-primary" />
            </button>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className={`rounded-2xl p-4 flex flex-col gap-2.5 mb-5 border ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-slate-950/40 border-white/5'}`}>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-emerald-500" />
            <span className={`text-[10px] font-black uppercase tracking-wider ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Attached Compliance Profile</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`text-[10px] font-bold px-3 py-1 border rounded-xl flex items-center gap-1 ${isLight ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> GDC Verified
            </span>
            <span className={`text-[10px] font-bold px-3 py-1 border rounded-xl flex items-center gap-1 ${isLight ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Indemnity OK
            </span>
          </div>
        </div>

        {/* Contact Clinic */}
        <h3 className={`text-xs font-black uppercase tracking-widest mb-3 pl-1 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>Contact Clinic</h3>
        <div className="flex gap-3 mb-5">
          <button className={`flex-1 py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-colors border ${isLight ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-slate-900 border-white/5 text-slate-300 hover:bg-slate-800'}`}>
            <MessageCircle size={17} className="text-primary" /> Message
          </button>
          <button className={`flex-1 py-3.5 rounded-2xl flex items-center justify-center gap-2 font-bold text-sm transition-colors border ${isLight ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : 'bg-slate-900 border-white/5 text-slate-300 hover:bg-slate-800'}`}>
            <Phone size={17} className="text-primary" /> Call
          </button>
        </div>

        {/* Info Notice */}
        <div className={`p-4 rounded-2xl border flex gap-3 ${isLight ? 'bg-primary/5 border-primary/15' : 'bg-primary/10 border-primary/20'}`}>
          <HelpCircle size={17} className="text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-primary text-sm mb-1">What's Next?</h4>
            <p className={`text-xs font-medium leading-relaxed ${isLight ? 'text-slate-600' : 'text-indigo-200'}`}>
              The clinic will review your credentials within 24 hours. Keep notifications on to receive a prompt decision.
            </p>
          </div>
        </div>
      </div>

      {/* ─── STICKY BOTTOM BUTTONS (absolute) ─── */}
      <div className={`absolute bottom-0 left-0 right-0 px-5 pb-5 pt-3 z-50 ${isLight ? 'bg-white/90 backdrop-blur-xl border-t border-slate-100' : 'bg-[#090a0d]/90 backdrop-blur-xl border-t border-white/5'}`}>
        <button
          onClick={() => navigate('/home')}
          className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all shadow-lg mb-2"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate('/home')}
          className={`w-full text-center text-xs font-black uppercase tracking-widest transition-colors py-1.5 ${isLight ? 'text-rose-500/80 hover:text-rose-600' : 'text-rose-500/70 hover:text-rose-500'}`}
        >
          Withdraw Application
        </button>
      </div>

    </div>
  );
};

export default AppliedShift;
