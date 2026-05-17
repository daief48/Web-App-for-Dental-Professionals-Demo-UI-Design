import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Settings, HelpCircle, FileText, ChevronRight, LogOut, Star, Clock, Sun, Moon } from 'lucide-react';
import { mockUser } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';
import { useTheme } from '../context/ThemeContext';

const Profile = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isAvailable, setIsAvailable] = useState(true);


  const menuItems = [
    { icon: Shield, label: 'Compliance & Docs', path: '/compliance', color: 'text-cyan-400', bg: 'bg-cyan-950/50', border: 'border-cyan-500/30' },
    { icon: FileText, label: 'Past Shifts', path: '/past-shifts', color: 'text-primary', bg: 'bg-primary/20', border: 'border-primary/30' },
    { icon: Settings, label: 'Settings', path: '/settings', color: 'text-slate-300', bg: 'bg-slate-800', border: 'border-slate-700' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help', color: 'text-slate-300', bg: 'bg-slate-800', border: 'border-slate-700' },
  ];

  return (
    <div className="w-full pb-32 bg-background text-slate-200">
      {/* Profile Header (Uber-style) */}
      <div 
        className="bg-gradient-to-br from-slate-900 pt-4 pb-8 px-5 rounded-b-[2.5rem] relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0b132b 0%, #1c2541 50%, #3a506b 100%)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 20px 45px -10px rgba(11, 19, 43, 0.22)'
        }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-between mb-8">
          <div className="flex gap-4 items-center">
            <div className="relative">
              <img 
                src={mockUser.avatar} 
                alt="Profile" 
                className="w-20 h-20 rounded-full border-4 border-white/20 shadow-xl object-cover"
              />
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 flex items-center justify-center shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                <Shield size={10} className="text-slate-950" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">{mockUser.name}</h1>
              <p className="text-slate-500 font-medium">{mockUser.role}</p>
              <div className="flex items-center gap-1 mt-1 bg-white/10 w-max px-2.5 py-1 rounded-full border border-white/10">
                <Star size={12} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-bold text-white">{mockUser.rating}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Toggle */}
        <div className="relative z-10 bg-black/35 p-4 rounded-2xl flex justify-between items-center border border-white/10 shadow-inner">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isAvailable ? 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'bg-slate-600'}`} />
            <div>
              <p className="font-bold text-sm text-white">{isAvailable ? "Available for shifts" : "Not available"}</p>
              <p className="text-xs text-slate-500">Clinics can send you requests</p>
            </div>
          </div>
          
          <button 
            onClick={() => setIsAvailable(!isAvailable)}
            className={`w-14 h-8 rounded-full p-1 transition-colors ${
              isAvailable ? 'bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'bg-slate-800'
            }`}
          >
            <motion.div 
              layout
              className="w-6 h-6 bg-white rounded-full shadow-md"
              initial={false}
              animate={{ x: isAvailable ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="px-5 mt-[-1.5rem] relative z-20 mb-8">
        <div className="flex gap-4">
          <GlassCard className="flex-1 bg-slate-900 p-4 border border-white/5 shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <Clock size={16} className="text-primary" />
              <p className="text-xs font-semibold text-slate-400">Total Hours</p>
            </div>
            <p className="text-xl font-black text-white">1,240</p>
          </GlassCard>
          <GlassCard className="flex-1 bg-slate-900 p-4 border border-white/5 shadow-lg">
            <div className="flex items-center gap-2 mb-1">
              <Shield size={16} className="text-cyan-400" />
              <p className="text-xs font-semibold text-slate-400">Compliance</p>
            </div>
            <p className="text-xl font-black text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.4)]">85%</p>
          </GlassCard>
        </div>
      </div>

      {/* Menu List */}
      <div className="px-5 flex flex-col gap-3">
        {/* Dynamic Theme Toggle Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
        >
          <GlassCard className="bg-slate-900 p-4 flex justify-between items-center border-white/5">
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${
                theme === 'light' 
                  ? 'bg-amber-100 text-amber-500 border-amber-300' 
                  : 'bg-cyan-950/50 text-cyan-400 border-cyan-500/30'
              }`}>
                {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Light Mode</h3>
                <p className="text-xs text-slate-400">Colorful & stylish light mode</p>
              </div>
            </div>
            
            <button 
              onClick={toggleTheme}
              className={`w-14 h-8 rounded-full p-1 transition-colors ${
                theme === 'light' ? 'bg-primary shadow-[0_0_10px_rgba(99,102,241,0.4)]' : 'bg-slate-800'
              }`}
            >
              <motion.div 
                layout
                className="w-6 h-6 bg-white rounded-full shadow-md"
                initial={false}
                animate={{ x: theme === 'light' ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
          </GlassCard>
        </motion.div>

        {menuItems.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * (idx + 1) }}
            key={item.label}
          >
            <GlassCard 
              className="bg-slate-900 p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-800 transition-colors border-white/5"
              onClick={() => navigate(item.path)}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.bg} ${item.color} ${item.border}`}>
                <item.icon size={20} />
              </div>
              <h3 className="font-bold text-white text-sm flex-1">{item.label}</h3>
              <ChevronRight size={18} className="text-slate-600" />
            </GlassCard>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <GlassCard 
            className="bg-slate-900 p-4 flex items-center gap-4 cursor-pointer hover:bg-red-950/20 transition-colors border-white/5 group"
            onClick={() => navigate('/auth')}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-red-950/50 text-red-400 border border-red-500/30 group-hover:bg-red-500 group-hover:text-white transition-colors">
              <LogOut size={20} />
            </div>
            <h3 className="font-bold text-red-400 text-sm flex-1 group-hover:text-red-500 transition-colors">Log out</h3>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
