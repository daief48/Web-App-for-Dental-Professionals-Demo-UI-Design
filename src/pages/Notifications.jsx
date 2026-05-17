import React from 'react';
import { motion } from 'framer-motion';
import { Bell, CheckCircle2, AlertCircle, Clock, MoreHorizontal } from 'lucide-react';
import { mockNotifications } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';

const Notifications = () => {
  return (
    <div className="min-h-full pb-24 pt-4 px-5 bg-background text-slate-200">
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Alerts</h1>
        <button className="text-sm font-semibold text-primary hover:underline">Mark all read</button>
      </header>

      <div className="flex flex-col gap-4">
        {mockNotifications.map((notif, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            key={notif.id}
          >
            <GlassCard className={`p-4 flex gap-4 ${!notif.read ? 'bg-slate-800/80 border-primary/30 glow-shadow-cyan' : 'bg-slate-900 border-white/5 opacity-80'}`}>
              <div className="relative shrink-0">
                {notif.type === 'success' && (
                  <div className="w-12 h-12 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/30 text-cyan-400">
                    <CheckCircle2 size={24} />
                  </div>
                )}
                {notif.type === 'warning' && (
                  <div className="w-12 h-12 rounded-full bg-orange-950/50 flex items-center justify-center border border-orange-500/30 text-orange-400">
                    <AlertCircle size={24} />
                  </div>
                )}
                {notif.type === 'info' && (
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 text-primary">
                    <Bell size={24} />
                  </div>
                )}
                {!notif.read && (
                  <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-slate-800" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-bold text-sm ${!notif.read ? 'text-white' : 'text-slate-300'}`}>{notif.title}</h3>
                  <p className="text-xs text-slate-500 font-medium whitespace-nowrap ml-2">{notif.time}</p>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-3">
                  {notif.message}
                </p>

                {notif.action && (
                  <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-indigo-600 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)] border border-primary/30">
                    {notif.action}
                  </button>
                )}
              </div>
              
              <button className="text-slate-600 hover:text-white shrink-0 self-start">
                <MoreHorizontal size={20} />
              </button>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
