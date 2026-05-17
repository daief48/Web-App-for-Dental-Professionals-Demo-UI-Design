import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockUser, mockNotifications } from '../../data/mockData';
import { useTheme } from '../../context/ThemeContext';

const TopHeader = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  return (
    <header className="flex justify-between items-center px-5 pt-8 pb-4 bg-background z-50">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img 
            src={mockUser.avatar} 
            alt="Profile" 
            className="w-12 h-12 rounded-full border-2 border-slate-800 shadow-md object-cover"
          />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900" />
        </div>
        <div>
          <p className="text-sm text-slate-400 font-medium">Good Morning,</p>
          <h2 className="text-lg font-bold text-white">{mockUser.name.split(' ')[1]}</h2>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {/* Dynamic Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shadow-sm border border-white/10 text-slate-400 hover:text-primary transition-all duration-300 relative overflow-hidden"
          aria-label="Toggle Theme"
        >
          <motion.div
            initial={false}
            animate={{ rotate: theme === 'dark' ? 0 : 180, scale: theme === 'dark' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute flex items-center justify-center"
          >
            <Moon size={20} className="text-cyan-400" />
          </motion.div>
          <motion.div
            initial={false}
            animate={{ rotate: theme === 'light' ? 0 : -180, scale: theme === 'light' ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute flex items-center justify-center"
          >
            <Sun size={20} className="text-amber-500" />
          </motion.div>
        </button>

        <button 
          onClick={() => navigate('/notifications')}
          className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shadow-sm border border-white/10 relative text-slate-400 hover:text-primary transition-colors"
        >
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-red-500 rounded-full text-[9px] font-black text-white flex items-center justify-center border border-white/20 shadow-md">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
