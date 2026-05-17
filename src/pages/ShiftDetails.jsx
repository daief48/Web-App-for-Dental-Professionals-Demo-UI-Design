import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, MapPin, Clock, Calendar, CheckCircle2, Navigation, AlertCircle, Sparkles } from 'lucide-react';
import { mockShifts } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';

const ShiftDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isAccepting, setIsAccepting] = useState(false);
  
  const shift = mockShifts.find(s => s.id === id) || mockShifts[0];

  const handleAccept = () => {
    setIsAccepting(true);
    setTimeout(() => {
      navigate('/accepted');
    }, 1500);
  };

  return (
    <div className="flex-1 min-h-0 bg-background flex flex-col relative overflow-hidden text-slate-200">
      {/* Hero Image Section - Immersive Full-Bleed & Fully Vibrant */}
      <div className="relative h-72 shrink-0 w-full overflow-hidden">
        <img 
          src={shift.image} 
          alt={shift.clinicName} 
          className="w-full h-full object-cover opacity-100 transition-transform duration-700 hover:scale-105"
        />
        
        {/* Soft top gradient to ensure back button is always visible */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/25 to-transparent pointer-events-none" />
        
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-5 left-5 w-10 h-10 bg-black/25 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/55 transition-all duration-300 border border-white/10 shadow-md hover:scale-105"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Scrollable Bottom Sheet Details */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar pb-32 -mt-8 relative z-10 bg-background rounded-t-[2.5rem] pt-8 px-5 border-t border-white/5 shadow-[0_-15px_30px_rgba(0,0,0,0.3)]">
        
        {/* Header Block inside bottom sheet */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1 mr-4">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest border border-primary/20">
                <Sparkles size={10} className="text-primary animate-pulse" />
                {shift.role}
              </span>
              <span className="bg-cyan-500/10 text-cyan-400 text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest border border-cyan-500/20">
                {shift.distance} away
              </span>
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight leading-tight">{shift.clinicName}</h1>
          </div>
          
          <div className="text-right shrink-0 bg-primary/10 border border-primary/25 px-4 py-2.5 rounded-2xl shadow-[0_0_15px_rgba(99,102,241,0.12)]">
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-wider mb-0.5">Total Pay</p>
            <p className="text-2xl font-black text-primary drop-shadow-[0_0_5px_rgba(99,102,241,0.3)]">{shift.totalPay}</p>
          </div>
        </div>
        
        {/* Quick Info Bar - Re-styled original bar inside premium GlassCard */}
        <GlassCard className="flex justify-between items-center bg-slate-900/60 p-4.5 rounded-2xl shadow-md border-white/10 mb-6">
          <div className="flex flex-col items-center flex-1">
            <Calendar size={18} className="text-primary mb-1.5 drop-shadow-[0_0_5px_rgba(99,102,241,0.4)]" />
            <span className="text-xs font-bold text-slate-300">{shift.date}</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center flex-1">
            <Clock size={18} className="text-primary mb-1.5 drop-shadow-[0_0_5px_rgba(99,102,241,0.4)]" />
            <span className="text-xs font-bold text-slate-300">{shift.time}</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="flex flex-col items-center flex-1">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-0.5">Rate</span>
            <span className="text-lg font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.4)]">{shift.rate}</span>
          </div>
        </GlassCard>

        {/* Location Section */}
        <div className="mb-6">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider mb-3">Location</h3>
          <GlassCard className="p-4 flex gap-4 border-white/10 shadow-sm">
            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0 border border-primary/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              <MapPin size={24} className="text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-white mb-0.5">{shift.clinicName}</p>
              <p className="text-xs text-slate-400 mb-1.5 font-medium">123 Harley Street, London, W1G 7JZ</p>
              <p className="text-[11px] font-bold text-cyan-400 drop-shadow-[0_0_4px_rgba(6,182,212,0.3)] inline-flex items-center gap-1">
                <Navigation size={10} className="fill-cyan-400" />
                {shift.distance} away
              </p>
            </div>
            <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 flex items-center justify-center text-slate-300 hover:text-primary shrink-0 transition-all duration-300 hover:scale-105">
              <Navigation size={16} />
            </button>
          </GlassCard>
        </div>

        {/* Requirements Section */}
        <div className="mb-6">
          <h3 className="text-sm font-black text-slate-400 uppercase tracking-wider mb-3">Requirements</h3>
          <GlassCard className="p-5 border-white/10 shadow-sm">
            <ul className="flex flex-col gap-3.5">
              {shift.requirements.map((req, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0 drop-shadow-[0_0_5px_rgba(6,182,212,0.4)]" />
                  <span className="text-sm font-semibold text-slate-300">{req}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* Important Notes */}
        <div className="bg-primary/10 rounded-2xl p-4 border border-primary/25 flex gap-3 glow-shadow mb-6">
          <AlertCircle size={18} className="text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-indigo-200 leading-relaxed font-semibold">
            Please arrive 15 minutes before the shift starts. Bring your own loupes and uniform. Parking is available at the rear of the building.
          </p>
        </div>
      </div>

      {/* Sticky Bottom Action */}
      <div className="absolute bottom-0 left-0 right-0 p-5 bg-background/80 backdrop-blur-xl border-t border-white/10 z-50">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAccept}
          disabled={isAccepting}
          className={`w-full py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 border ${
            isAccepting 
              ? 'bg-slate-800 text-slate-500 border-white/5' 
              : 'bg-primary text-white hover:bg-indigo-600 glow-shadow border-white/20'
          }`}
        >
          {isAccepting ? (
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-6 h-6 border-2 border-slate-600 border-t-primary rounded-full"
            />
          ) : (
            'Accept Shift'
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default ShiftDetails;
