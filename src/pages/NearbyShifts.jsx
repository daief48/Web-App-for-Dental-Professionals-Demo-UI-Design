import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, List, SlidersHorizontal, Search, ChevronLeft, X, RotateCcw } from 'lucide-react';
import { mockShifts } from '../data/mockData';
import ShiftCard from '../components/ui/ShiftCard';
import { useTheme } from '../context/ThemeContext';

const roles = ['All', 'Hygienist', 'Dentist', 'Orthodontist'];
const distances = ['Any', '1 mile', '3 miles', '5 miles', '10 miles'];
const statuses = ['All', 'Urgent', 'Available', 'Premium'];

const NearbyShifts = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'map'
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter states
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedDistance, setSelectedDistance] = useState('Any');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [minPay, setMinPay] = useState(0);

  const resetFilters = () => {
    setSelectedRole('All');
    setSelectedDistance('Any');
    setSelectedStatus('All');
    setMinPay(0);
  };

  const activeFilterCount = [selectedRole !== 'All', selectedDistance !== 'Any', selectedStatus !== 'All', minPay > 0].filter(Boolean).length;

  const filteredShifts = mockShifts.filter(shift => {
    const matchSearch = shift.clinicName.toLowerCase().includes(searchQuery.toLowerCase()) || 
           shift.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchRole = selectedRole === 'All' || shift.role === selectedRole;
    const matchStatus = selectedStatus === 'All' || shift.status === selectedStatus;
    const matchDistance = selectedDistance === 'Any' || parseFloat(shift.distance) <= parseFloat(selectedDistance);
    const shiftPay = parseFloat(shift.rate.replace('£', '').replace('/hr', ''));
    const matchPay = minPay === 0 || shiftPay >= minPay;
    return matchSearch && matchRole && matchStatus && matchDistance && matchPay;
  });

  return (
    <div className="min-h-full bg-background flex flex-col relative text-slate-200">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 px-5 pt-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => navigate('/home')}
            className="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-full text-slate-400 hover:bg-slate-800 hover:text-white transition-colors border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-white">Explore Shifts</h1>
          <button 
            onClick={() => setViewMode(viewMode === 'list' ? 'map' : 'list')}
            className="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-full text-slate-400 hover:bg-slate-800 transition-colors shadow-sm border border-white/10"
          >
            {viewMode === 'list' ? <Map size={20} className="text-primary" /> : <List size={20} className="text-primary" />}
          </button>
        </div>

        <div className="flex gap-3">
          <div className="flex-1 bg-slate-900 rounded-2xl flex items-center px-4 py-3 border border-white/10 focus-within:border-primary/50 transition-all">
            <Search size={18} className="text-slate-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search by role or clinic..." 
              className="bg-transparent border-none focus:outline-none text-sm w-full text-white placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button 
            onClick={() => setShowFilters(true)}
            className="w-12 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center text-slate-400 hover:text-primary transition-colors relative"
          >
            <SlidersHorizontal size={20} />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          {viewMode === 'list' ? (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-5 pb-24 overflow-y-auto h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-semibold text-slate-400">{filteredShifts.length} shifts found</span>
                <select className="bg-transparent text-sm font-semibold text-slate-300 border-none focus:ring-0 cursor-pointer outline-none">
                  <option className="bg-slate-900">Sort by: Distance</option>
                  <option className="bg-slate-900">Sort by: Pay (High to Low)</option>
                  <option className="bg-slate-900">Sort by: Date</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-4">
                {filteredShifts.length > 0 ? (
                  filteredShifts.map((shift, idx) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      key={shift.id}
                    >
                      <ShiftCard 
                        shift={shift} 
                        variant="vertical" 
                        onClick={() => navigate(`/shift/${shift.id}`)}
                      />
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-10 text-slate-500 font-medium">
                    No shifts found matching "{searchQuery}"
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="map-view"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute inset-0 bg-slate-900"
            >
              {/* Fake Map Image for demo */}
              <div className="w-full h-full relative">
                <img 
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=800&q=80"
                  alt="Map" 
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    theme === 'light' 
                      ? 'opacity-85 saturate-125' 
                      : 'opacity-75 invert hue-rotate-[195deg] brightness-[0.75] saturate-[1.8]'
                  }`}
                />
                {/* Subtle gradient edges to fade into layout headers/footers without washing out the center map */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60 pointer-events-none" />
                
                {/* Mock Map Markers */}
                {filteredShifts.map((shift, i) => (
                  <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1), type: "spring" }}
                    key={shift.id}
                    className="absolute shadow-xl flex flex-col items-center group"
                    style={{ 
                      top: `${30 + (i * 20)}%`, 
                      left: `${40 + (i === 1 ? -20 : i * 15)}%` 
                    }}
                    onClick={() => navigate(`/shift/${shift.id}`)}
                  >
                    {/* Glowing pulsating radar ring */}
                    <span className="absolute w-9 h-9 rounded-full bg-primary/30 animate-ping -top-1 pointer-events-none" />
                    <span className="absolute w-12 h-12 rounded-full bg-primary/10 animate-pulse -top-2.5 pointer-events-none" />

                    <div className="bg-primary text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap z-10 relative glow-shadow group-hover:bg-indigo-400 transition-colors">
                      {shift.rate}
                    </div>
                    <div className="w-3 h-3 bg-primary rotate-45 -mt-1.5 z-0 group-hover:bg-indigo-400 transition-colors" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Functional Filter Panel */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm z-50"
              onClick={() => setShowFilters(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 bg-slate-900 border-t border-white/10 rounded-t-[2rem] p-6 pb-28 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] max-h-[85%] overflow-y-auto no-scrollbar"
            >
              <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-5" />
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Filters</h3>
                <button onClick={resetFilters} className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-primary transition-colors">
                  <RotateCcw size={13} /> Reset All
                </button>
              </div>

              {/* Role Filter */}
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Role</p>
                <div className="flex flex-wrap gap-2">
                  {roles.map(role => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                        selectedRole === role
                          ? 'bg-primary text-white border-primary shadow-md'
                          : 'bg-slate-800 text-slate-400 border-white/10 hover:border-primary/30'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Distance Filter */}
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Max Distance</p>
                <div className="flex flex-wrap gap-2">
                  {distances.map(d => (
                    <button
                      key={d}
                      onClick={() => setSelectedDistance(d)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                        selectedDistance === d
                          ? 'bg-primary text-white border-primary shadow-md'
                          : 'bg-slate-800 text-slate-400 border-white/10 hover:border-primary/30'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Min Pay Slider */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Minimum Pay</p>
                  <span className="text-sm font-bold text-white">{minPay === 0 ? 'Any' : `£${minPay}/hr+`}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="5"
                  value={minPay}
                  onChange={e => setMinPay(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-700 accent-primary"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>Any</span>
                  <span>£20</span>
                  <span>£40</span>
                  <span>£60</span>
                  <span>£80</span>
                </div>
              </div>

              {/* Status Filter */}
              <div className="mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Status</p>
                <div className="flex flex-wrap gap-2">
                  {statuses.map(s => (
                    <button
                      key={s}
                      onClick={() => setSelectedStatus(s)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                        selectedStatus === s
                          ? 'bg-primary text-white border-primary shadow-md'
                          : 'bg-slate-800 text-slate-400 border-white/10 hover:border-primary/30'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Apply Button */}
              <button 
                onClick={() => setShowFilters(false)}
                className="w-full py-4 bg-primary text-white font-bold rounded-2xl glow-shadow"
              >
                Show {filteredShifts.length} Result{filteredShifts.length !== 1 ? 's' : ''}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NearbyShifts;
