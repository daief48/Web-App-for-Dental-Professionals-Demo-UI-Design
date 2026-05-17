import React from 'react';
import { MapPin, Clock, ArrowRight, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const ShiftCard = ({ shift, variant = 'horizontal', onClick }) => {
  const isHorizontal = variant === 'horizontal';

  return (
    <GlassCard
      animate
      onClick={onClick}
      className={`cursor-pointer group ${isHorizontal ? 'w-[320px] shrink-0' : 'w-full mb-4'}`}
    >
      <div className={`flex ${isHorizontal ? 'flex-col' : 'flex-row gap-4'} h-full`}>
        {/* Image Section */}
        <div className={`relative rounded-2xl overflow-hidden ${isHorizontal ? 'h-32 mb-4' : 'w-24 h-24 shrink-0'}`}>
          <img
            src={shift.image}
            alt={shift.clinicName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 flex gap-1">
            <span className="bg-slate-900/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-full text-cyan-400 shadow-sm border border-white/10">
              {shift.rate}
            </span>
          </div>
          {shift.status === 'Urgent' && (
            <div className="absolute bottom-2 left-2">
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider shadow-lg border border-white/20">
                Urgent
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-white line-clamp-1">{shift.clinicName}</h3>
              {!isHorizontal && (
                <button className="text-slate-500 hover:text-primary transition-colors">
                  <Bookmark size={18} />
                </button>
              )}
            </div>

            <p className="text-sm font-medium text-primary mb-2">{shift.role}</p>

            <div className="flex flex-col gap-1.5 mt-2">
              <div className="flex items-center text-xs text-slate-400">
                <MapPin size={14} className="mr-1 text-slate-500" />
                {shift.distance}
              </div>
              <div className="flex items-center text-xs text-slate-400">
                <Clock size={14} className="mr-1 text-slate-500" />
                {shift.date} • {shift.time}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="text-sm font-semibold text-slate-300">
              {shift.totalPay}
            </span>
            <motion.div
              whileHover={{ x: 3 }}
              className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors border border-white/10"
            >
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ShiftCard;
