import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Calendar, Clock, MapPin, Navigation, MessageCircle, Phone } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const AcceptedShift = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-1 min-h-0 bg-gradient-to-br from-indigo-900 via-background to-slate-900 flex flex-col relative overflow-hidden text-slate-200">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-56 h-56 bg-secondary/20 rounded-full blur-[80px] pointer-events-none" />

      {/* Success Animation Header */}
      <div className="pt-6 pb-10 px-5 flex flex-col items-center text-center z-10">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 150 }}
          className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.6)] mb-6 border-2 border-primary/50"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <Check size={48} className="text-cyan-400 stroke-[3px] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          </motion.div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-black text-white mb-2 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        >
          Shift Confirmed!
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 font-medium"
        >
          Smile Care Dental is expecting you.
        </motion.p>
      </div>

      {/* Details Card */}
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.2 }}
        className="flex-1 min-h-0 bg-background rounded-t-[2.5rem] p-6 relative z-10 shadow-[0_-20px_40px_rgba(0,0,0,0.5)] flex flex-col border-t border-white/5"
      >
        <div className="w-12 h-1.5 bg-slate-800 rounded-full mx-auto mb-8" />

        <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar pb-6">
          
          <h3 className="text-lg font-bold text-white mb-4">Shift Details</h3>
          
          <GlassCard className="bg-slate-900 mb-6 p-0 overflow-hidden !border-white/10">
            <div className="p-4 flex gap-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 border border-primary/30">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Today, 24 May</p>
                <p className="text-xs text-slate-400 font-medium">Please arrive 15m early</p>
              </div>
            </div>
            
            <div className="p-4 flex gap-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 border border-primary/30">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">09:00 - 17:00</p>
                <p className="text-xs text-slate-400 font-medium">8 hours total</p>
              </div>
            </div>

            <div className="p-4 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 border border-primary/30">
                <MapPin size={20} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Smile Care Dental</p>
                <p className="text-xs text-slate-400 font-medium line-clamp-1">123 Harley Street, London</p>
              </div>
              <button className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-primary shrink-0 border border-white/10 hover:bg-slate-700 transition-colors">
                <Navigation size={14} />
              </button>
            </div>
          </GlassCard>

          {/* Quick Actions */}
          <h3 className="text-lg font-bold text-white mb-4">Contact Clinic</h3>
          <div className="flex gap-4 mb-6">
            <button className="flex-1 py-3.5 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center gap-2 font-semibold text-slate-300 hover:bg-slate-800 transition-colors shadow-sm">
              <MessageCircle size={18} className="text-primary" />
              Message
            </button>
            <button className="flex-1 py-3.5 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center gap-2 font-semibold text-slate-300 hover:bg-slate-800 transition-colors shadow-sm">
              <Phone size={18} className="text-primary" />
              Call
            </button>
          </div>

          <div className="bg-primary/10 p-4 rounded-2xl border border-primary/20 glow-shadow">
            <h4 className="font-bold text-primary text-sm mb-1 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]">Before you go</h4>
            <p className="text-xs text-indigo-200 font-medium leading-relaxed">
              Make sure to bring your GDC certificate and physical photo ID. You will be asked to sign in at reception.
            </p>
          </div>
        </div>

        <button 
          onClick={() => navigate('/home')}
          className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-indigo-600 transition-colors mt-auto shadow-lg glow-shadow border border-white/10"
        >
          Back to Home
        </button>

      </motion.div>
    </div>
  );
};

export default AcceptedShift;
