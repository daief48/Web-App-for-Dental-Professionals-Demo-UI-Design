import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowDownLeft, ArrowUpRight, ChevronRight, DollarSign, Wallet, Clock } from 'lucide-react';
import { mockEarnings } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';

const Earnings = () => {
  return (
    <div className="min-h-full pb-32 pt-4 px-5 bg-background text-slate-200 relative overflow-x-hidden">
      <div className="absolute top-[-10%] right-[-20%] w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-[40%] left-[-20%] w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      
      <header className="mb-6 relative z-10">
        <h1 className="text-2xl font-bold text-white">Earnings</h1>
      </header>

      {/* Main Balance Card */}
      <GlassCard className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 mb-6 glow-shadow-cyan !border-white/10 relative z-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-[40px]" />
        
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <p className="text-cyan-200 text-sm font-medium mb-1 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">Total Balance</p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-medium text-slate-300">£</span>
              <h2 className="text-4xl font-black tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{mockEarnings.thisWeek.toFixed(2)}</h2>
            </div>
          </div>
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Wallet size={24} className="text-cyan-400" />
          </div>
        </div>

        <div className="flex gap-4 relative z-10">
          <button className="flex-1 py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]">
            <ArrowUpRight size={16} />
            Withdraw
          </button>
          <button className="flex-1 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
            Details
          </button>
        </div>
      </GlassCard>

      {/* Stats Row */}
      <div className="flex gap-4 mb-8 relative z-10">
        <GlassCard className="flex-1 bg-slate-900 p-4 border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-cyan-950 flex items-center justify-center border border-cyan-500/30">
              <TrendingUp size={16} className="text-cyan-400" />
            </div>
            <p className="text-xs font-semibold text-slate-400">Pending</p>
          </div>
          <p className="text-xl font-bold text-white drop-shadow-[0_0_5px_rgba(6,182,212,0.3)]">£{mockEarnings.pending.toFixed(2)}</p>
        </GlassCard>
        
        <GlassCard className="flex-1 bg-slate-900 p-4 border-white/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <DollarSign size={16} className="text-primary drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]" />
            </div>
            <p className="text-xs font-semibold text-slate-400">This Month</p>
          </div>
          <p className="text-xl font-bold text-white">£3,450.00</p>
        </GlassCard>
      </div>

      {/* Chart Placeholder */}
      <div className="mb-8 relative z-10">
        <h3 className="text-lg font-bold text-white mb-4">Weekly Overview</h3>
        <GlassCard className="bg-slate-900 p-5 h-48 flex items-end gap-2 justify-between border-white/5">
          {mockEarnings.weekly.map((val, i) => {
            const heightPercent = (val / 500) * 100;
            return (
              <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                <div className="w-full h-32 flex items-end justify-center">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${heightPercent}%` }}
                    transition={{ delay: 0.1 * i, duration: 0.8, type: "spring" }}
                    className={`w-full max-w-[20px] rounded-t-md transition-all duration-300 ${
                      i === 3 
                        ? 'bg-gradient-to-t from-primary to-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]' 
                        : val > 0
                          ? 'bg-gradient-to-t from-primary/30 to-cyan-400/40 group-hover:from-primary/65 group-hover:to-cyan-400/75 shadow-[0_0_8px_rgba(99,102,241,0.15)]'
                          : 'bg-slate-800/20'
                    }`}
                  />
                </div>
                <span className={`text-[10px] font-bold transition-colors duration-300 ${
                  i === 3 
                    ? 'text-cyan-400 drop-shadow-[0_0_4px_rgba(6,182,212,0.3)]' 
                    : val > 0 
                      ? 'text-slate-400 group-hover:text-white' 
                      : 'text-slate-600'
                }`}>
                  {mockEarnings.labels[i]}
                </span>
              </div>
            );
          })}
        </GlassCard>
      </div>

      {/* Recent Transactions */}
      <div className="relative z-10">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-bold text-white">Recent Activity</h3>
          <button className="text-cyan-400 text-sm font-semibold hover:underline">See All</button>
        </div>
        
        <div className="flex flex-col gap-3">
          {mockEarnings.transactions.map((tx, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (0.1 * idx) }}
              key={tx.id}
            >
              <GlassCard className="bg-slate-900 p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-800 transition-colors border-white/5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                  tx.status === 'completed' ? 'bg-cyan-950/50 text-cyan-400 border-cyan-500/30 glow-shadow-cyan' : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}>
                  {tx.status === 'completed' ? <ArrowDownLeft size={20} /> : <Clock size={20} />}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm">{tx.desc}</h4>
                  <p className="text-xs text-slate-400 font-medium">{tx.date}</p>
                </div>
                
                <div className="text-right">
                  <p className="font-bold text-white">£{tx.amount.toFixed(2)}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-wider ${
                    tx.status === 'completed' ? 'text-cyan-400' : 'text-slate-500'
                  }`}>
                    {tx.status}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Earnings;
