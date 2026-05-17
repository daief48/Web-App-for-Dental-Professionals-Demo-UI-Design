import React from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle2, AlertCircle, Clock, MoreHorizontal, Sparkles } from 'lucide-react';
import { mockNotifications } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';

const getIcon = (type) => {
  switch (type) {
    case 'shift':
      return (
        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/25 text-indigo-400 shadow-sm shrink-0">
          <Bell size={22} className="animate-pulse" />
        </div>
      );
    case 'payment':
      return (
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/25 text-emerald-400 shadow-sm shrink-0">
          <CheckCircle2 size={22} />
        </div>
      );
    case 'compliance':
      return (
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/25 text-amber-400 shadow-sm shrink-0">
          <AlertCircle size={22} />
        </div>
      );
    default:
      return (
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/25 text-cyan-400 shadow-sm shrink-0">
          <Clock size={22} />
        </div>
      );
  }
};

const Notifications = () => {
  return (
    <div className="w-full pb-28 pt-4 px-5 bg-background text-slate-200">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
          <Sparkles size={20} className="text-primary animate-pulse" />
          Alerts & Activity
        </h1>
        <button className="text-xs font-bold text-primary hover:underline">Mark all read</button>
      </header>

      <div className="flex flex-col gap-4">
        {mockNotifications.map((notif, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx }}
            key={notif.id}
          >
            <GlassCard className={`p-4 flex gap-4 ${!notif.read ? 'bg-slate-800/80 border-primary/30 glow-shadow-cyan' : 'bg-slate-900/60 border-white/5 opacity-80'}`}>
              <div className="relative shrink-0">
                {getIcon(notif.type)}
                {!notif.read && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-900 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h3 className={`font-bold text-sm truncate ${!notif.read ? 'text-white' : 'text-slate-300'}`}>{notif.title}</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider whitespace-nowrap pt-0.5">{notif.time}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  {notif.message}
                </p>

                {notif.action && (
                  <button className="mt-3 px-4 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-wider rounded-xl hover:bg-indigo-600 transition-colors shadow-lg shadow-primary/20 border border-primary/30">
                    {notif.action}
                  </button>
                )}
              </div>
              
              <button className="text-slate-600 hover:text-white shrink-0 self-start p-1 rounded-full hover:bg-white/5 transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
