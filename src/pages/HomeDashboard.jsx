import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Search, SlidersHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockUser, mockShifts } from '../data/mockData';
import GlassCard from '../components/ui/GlassCard';
import ShiftCard from '../components/ui/ShiftCard';

const categories = ['All', 'Dentist', 'Hygienist', 'Dental Nurse'];
const SHIFTS_PER_PAGE = 4;

const HomeDashboard = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredShifts = mockShifts.filter(shift => {
    const matchesCategory = selectedCategory === 'All' || shift.role.includes(selectedCategory);
    const matchesSearch = shift.clinicName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shift.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Reset to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredShifts.length / SHIFTS_PER_PAGE);
  const startIndex = (currentPage - 1) * SHIFTS_PER_PAGE;
  const paginatedShifts = filteredShifts.slice(startIndex, startIndex + SHIFTS_PER_PAGE);

  return (
    <div className="w-full pb-28 pt-2 px-5 bg-background text-slate-200">

      {/* Hero Earnings Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8 cursor-pointer"
        onClick={() => navigate('/earnings')}
      >
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden glow-shadow-lg border border-white/10">
          <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-primary/40 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-32 h-32 bg-secondary/30 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-slate-400 text-sm font-medium mb-1">This Week's Earnings</p>
            <h1 className="text-4xl font-bold mb-4 tracking-tight">£1,240<span className="text-xl text-slate-500 font-normal">.00</span></h1>

            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">Active</p>
                  <p className="font-semibold text-sm">2 Shifts</p>
                </div>
                <div className="w-px h-8 bg-slate-700 mx-2" />
                <div>
                  <p className="text-slate-400 text-xs mb-0.5">Completed</p>
                  <p className="font-semibold text-sm">124</p>
                </div>
              </div>
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md">
                <ChevronRight size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search & Filter */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 bg-slate-900 rounded-2xl shadow-sm border border-white/10 flex items-center px-4 py-3">
          <Search size={18} className="text-slate-500 mr-2" />
          <input
            type="text"
            placeholder="Search shifts or clinics..."
            className="bg-transparent border-none focus:outline-none text-sm w-full text-white placeholder:text-slate-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={() => navigate('/shifts')}
          className="w-12 bg-slate-900 rounded-2xl shadow-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary transition-colors"
        >
          <SlidersHorizontal size={20} />
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${selectedCategory === cat
                ? 'bg-primary text-white shadow-md glow-shadow'
                : 'bg-slate-900 text-slate-400 border border-white/10 hover:bg-slate-800'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Nearby Shifts Section */}
      <div className="mb-4 flex justify-between items-end">
        <div>
          <h3 className="text-lg font-bold text-white">Nearby Shifts</h3>
          <div className="flex items-center text-sm text-slate-400 mt-0.5">
            <MapPin size={14} className="mr-1 text-primary" />
            <span className="truncate max-w-[200px]">{mockUser.location}</span>
          </div>
        </div>
        <button
          onClick={() => navigate('/shifts')}
          className="text-primary text-sm font-semibold hover:underline"
        >
          See All
        </button>
      </div>

      {/* Nearby Shifts Vertical Cards List (Paginated) */}
      <div className="flex flex-col gap-4 pb-6">
        {paginatedShifts.length > 0 ? (
          paginatedShifts.map((shift, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
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
          <div className="text-center py-8 text-slate-500 w-full text-sm font-medium">
            No shifts found matching your filters.
          </div>
        )}
      </div>

      {/* Ultra-Innovative Theme-Adaptive Pagination Capsule */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 mb-6">
          <div className="flex items-center bg-white/75 dark:bg-slate-950/60 border border-slate-200/60 dark:border-white/10 p-1.5 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8)] backdrop-blur-xl w-full max-w-[280px]">
            {/* Prev Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`h-9 px-4 rounded-full flex items-center justify-center gap-1 text-[10px] font-black uppercase tracking-wider transition-all duration-300 border ${currentPage === 1
                  ? 'bg-slate-100 dark:bg-slate-900/40 border-slate-200/20 dark:border-white/5 !text-slate-400 dark:!text-slate-600 cursor-not-allowed opacity-60'
                  : 'bg-slate-100 dark:bg-white/5 border-slate-200/60 dark:border-white/10 !text-slate-700 dark:!text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 active:scale-95 cursor-pointer'
                }`}
            >
              <ChevronLeft size={12} className="stroke-[3px]" />
              Prev
            </button>

            {/* Elegant Floating Segment Center */}
            <div className="flex-1 flex flex-col items-center justify-center select-none px-1">
              <div className="text-[11px] font-black !text-slate-800 dark:!text-slate-200 uppercase tracking-widest mb-1.5">
                Page <span className="!text-primary dark:!text-cyan-400 font-black">{currentPage}</span> / <span className="!text-slate-800 dark:!text-slate-200 font-black">{totalPages}</span>
              </div>
              {/* Dot Segments */}
              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <span
                    key={page}
                    className={`h-1 transition-all duration-300 rounded-full ${currentPage === page
                        ? 'w-5 bg-gradient-to-r from-primary to-cyan-400 dark:to-cyan-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]'
                        : 'w-1 bg-slate-300 dark:bg-white/15'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`h-9 px-4 rounded-full flex items-center justify-center gap-1 text-[10px] font-black uppercase tracking-wider transition-all duration-300 border ${currentPage === totalPages
                  ? 'bg-slate-100 dark:bg-slate-900/40 border-slate-200/20 dark:border-white/5 !text-slate-400 dark:!text-slate-600 cursor-not-allowed opacity-60'
                  : 'bg-primary dark:bg-gradient-to-tr dark:from-primary dark:to-indigo-500 border-primary/20 !text-[#ffffff] hover:brightness-110 active:scale-95 cursor-pointer shadow-md dark:shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                }`}
            >
              Next
              <ChevronRight size={12} className="stroke-[3px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDashboard;
