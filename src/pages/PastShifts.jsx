import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Clock, MapPin, CheckCircle, XCircle, Search, Filter } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const pastShifts = [
  { id: 1, clinic: 'Bright Smile Dental', role: 'Hygienist', date: '12 May 2026', time: '09:00 - 17:00', pay: '£360.00', status: 'completed', distance: '1.2 miles' },
  { id: 2, clinic: 'Pearl White Clinic', role: 'Dentist', date: '8 May 2026', time: '10:00 - 18:00', pay: '£336.00', status: 'completed', distance: '2.5 miles' },
  { id: 3, clinic: 'Central Dental Care', role: 'Hygienist', date: '1 May 2026', time: '08:00 - 14:00', pay: '£270.00', status: 'cancelled', distance: '0.8 miles' },
  { id: 4, clinic: 'Harley Dental Group', role: 'Dentist', date: '25 Apr 2026', time: '09:00 - 17:00', pay: '£400.00', status: 'completed', distance: '3.1 miles' },
  { id: 5, clinic: 'SmileCare Orthodontics', role: 'Orthodontist', date: '18 Apr 2026', time: '10:00 - 16:00', pay: '£300.00', status: 'completed', distance: '4.0 miles' },
  { id: 6, clinic: 'City Dental Practice', role: 'Hygienist', date: '10 Apr 2026', time: '09:00 - 15:00', pay: '£240.00', status: 'cancelled', distance: '1.7 miles' },
];

const PastShifts = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all'); // 'all' | 'completed' | 'cancelled'
  const [search, setSearch] = useState('');

  const filtered = pastShifts.filter(s => {
    const matchFilter = filter === 'all' || s.status === filter;
    const matchSearch = s.clinic.toLowerCase().includes(search.toLowerCase()) || s.role.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const totalEarned = pastShifts.filter(s => s.status === 'completed').reduce((acc, s) => acc + parseFloat(s.pay.replace('£', '').replace(',', '')), 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="min-h-full bg-background text-slate-200 pb-10"
    >
      {/* Header */}
      <div className="bg-slate-900 pt-4 pb-6 px-5 rounded-b-[2.5rem] border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-56 h-56 bg-primary/15 rounded-full blur-[70px] pointer-events-none" />
        <div className="flex items-center gap-4 mb-6 relative z-10">
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <h1 className="text-xl font-bold text-white">Past Shifts</h1>
        </div>

        {/* Summary Row */}
        <div className="relative z-10 grid grid-cols-3 gap-3">
          {[
            { label: 'Total Shifts', value: pastShifts.length },
            { label: 'Completed', value: pastShifts.filter(s => s.status === 'completed').length },
            { label: 'Total Earned', value: `£${totalEarned.toLocaleString()}` },
          ].map(stat => (
            <div key={stat.label} className="bg-white/5 rounded-2xl p-3 text-center border border-white/10">
              <p className="text-lg font-black text-white">{stat.value}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search + Filter */}
      <div className="px-5 mt-6 flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="flex-1 bg-slate-900 rounded-2xl flex items-center px-4 py-3 border border-white/10 focus-within:border-primary/50 transition-all">
            <Search size={16} className="text-slate-500 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search clinic or role..."
              className="bg-transparent border-none focus:outline-none text-sm w-full text-white placeholder:text-slate-500"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2">
          {['all', 'completed', 'cancelled'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all border ${
                filter === f
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-slate-900 text-slate-400 border-white/10 hover:border-primary/30'
              }`}
            >
              {f === 'all' ? 'All' : f}
            </button>
          ))}
        </div>
      </div>

      {/* Shift List */}
      <div className="px-5 mt-4 flex flex-col gap-3">
        {filtered.length === 0 ? (
          <p className="text-center text-slate-500 py-10 font-medium">No shifts found.</p>
        ) : (
          filtered.map((shift, i) => (
            <motion.div
              key={shift.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassCard className="bg-slate-900 p-4 border-white/5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-white text-sm">{shift.clinic}</h3>
                    <p className="text-xs text-primary font-semibold mt-0.5">{shift.role}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                    shift.status === 'completed'
                      ? 'bg-cyan-950/50 text-cyan-400 border-cyan-500/30'
                      : 'bg-red-950/50 text-red-400 border-red-500/30'
                  }`}>
                    {shift.status === 'completed'
                      ? <CheckCircle size={11} />
                      : <XCircle size={11} />}
                    <span className="capitalize">{shift.status}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock size={12} className="text-slate-500" />
                      {shift.date} • {shift.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin size={12} className="text-slate-500" />
                      {shift.distance}
                    </div>
                  </div>
                  <span className={`text-base font-black ${shift.status === 'completed' ? 'text-white' : 'text-slate-500 line-through'}`}>
                    {shift.pay}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default PastShifts;
