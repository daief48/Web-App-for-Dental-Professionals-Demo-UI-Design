import React, { useState, useEffect } from 'react';
import BottomNavigation from './BottomNavigation';
import TopHeader from './TopHeader';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const MobileContainer = ({ children }) => {
  const location = useLocation();
  const { theme } = useTheme();
  
  // Real-time Clock State (synchronizes with system time)
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  });


  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const hideNavRoutes = ['/', '/auth', '/applied'];
  const hideHeaderRoutes = ['/', '/auth', '/profile'];
  const showNav = !hideNavRoutes.includes(location.pathname) && !location.pathname.startsWith('/shift/');
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-0 sm:p-6 md:p-8 pt-4 pb-6 transition-colors duration-500 relative overflow-hidden select-none ${
      theme === 'light' ? 'theme-light bg-slate-200/40' : 'theme-dark bg-[#0a0a0c]'
    }`}>
      
      {/* 1. Backdrop Ambient Neon Glow Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[1000px] rounded-full blur-[140px] opacity-35 pointer-events-none transition-all duration-1000 mix-blend-screen z-0"
        style={{
          background: theme === 'light' 
            ? 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, rgba(6,182,212,0.06) 50%, transparent 75%)' 
            : 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(79,70,229,0.08) 50%, transparent 75%)'
        }}
      />

      {/* 2. Phone Outer Chassis & Bezel Container (Interactive Group) */}
      <div className="relative group z-10">
        
        {/* Antenna Band - Top-Left */}
        <div className="absolute top-[80px] -left-[14px] w-[3px] h-[8px] bg-slate-800/80 rounded-r z-20 hidden sm:block" />
        {/* Antenna Band - Top-Right */}
        <div className="absolute top-[80px] -right-[14px] w-[3px] h-[8px] bg-slate-800/80 rounded-l z-20 hidden sm:block" />
        {/* Antenna Band - Bottom-Left */}
        <div className="absolute bottom-[80px] -left-[14px] w-[3px] h-[8px] bg-slate-800/80 rounded-r z-20 hidden sm:block" />
        {/* Antenna Band - Bottom-Right */}
        <div className="absolute bottom-[80px] -right-[14px] w-[3px] h-[8px] bg-slate-800/80 rounded-l z-20 hidden sm:block" />

        {/* Tactile Side Keys (Left side: Volume & Action Keys; Right side: Power Key) */}
        {/* Action Button */}
        <div className="absolute left-[-14px] top-[110px] w-[3px] h-[22px] bg-gradient-to-r from-zinc-700 to-zinc-950 rounded-l border border-r-0 border-zinc-600/30 shadow-md transition-all group-hover:-translate-x-[1px] hidden sm:block" />
        {/* Volume Up Button */}
        <div className="absolute left-[-14px] top-[152px] w-[3px] h-[40px] bg-gradient-to-r from-zinc-700 to-zinc-950 rounded-l border border-r-0 border-zinc-600/30 shadow-md transition-all active:-translate-x-[0.5px] group-hover:-translate-x-[1px] cursor-pointer hidden sm:block" />
        {/* Volume Down Button */}
        <div className="absolute left-[-14px] top-[208px] w-[3px] h-[40px] bg-gradient-to-r from-zinc-700 to-zinc-950 rounded-l border border-r-0 border-zinc-600/30 shadow-md transition-all active:-translate-x-[0.5px] group-hover:-translate-x-[1px] cursor-pointer hidden sm:block" />
        {/* Power / Sleep Button */}
        <div className="absolute right-[-14px] top-[170px] w-[3px] h-[65px] bg-gradient-to-l from-zinc-700 to-zinc-950 rounded-r border border-l-0 border-zinc-600/30 shadow-md transition-all active:translate-x-[0.5px] group-hover:translate-x-[1px] cursor-pointer hidden sm:block" />

        {/* Real Phone Metallic Frame Rim */}
        <div className={`relative w-full h-screen sm:h-[880px] sm:max-h-[95vh] sm:w-[412px] sm:rounded-[3.25rem] sm:border-[12px] sm:bg-slate-950 shadow-2xl transition-all duration-500 flex flex-col overflow-hidden ${
          theme === 'light' 
            ? 'sm:border-slate-900 sm:ring-4 sm:ring-slate-300/40 shadow-slate-400/30' 
            : 'sm:border-[#15151a] sm:ring-4 sm:ring-[#2e2e38]/50 shadow-black/95'
        }`}>
          
          {/* Microscopic Ear Speaker Mesh Slit */}
          <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-16 h-[3px] bg-zinc-800 rounded-full border-t border-black/40 z-50 hidden sm:block" />

          {/* 3. Screen Viewport Wrapper */}
          <div className="relative flex-1 flex flex-col overflow-hidden sm:rounded-[2.5rem] bg-background">
            
            {/* Glossy Diagonal Glass Sheen Reflection Sweep (Triggered on Phone Hover) */}
            <div className="absolute inset-0 pointer-events-none z-50 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-[1200ms] ease-in-out" />

            {/* 4. Live System Status Bar Overlay */}
            <div className="absolute top-0 left-0 right-0 h-[44px] flex items-center justify-between px-6 z-40 select-none text-white pointer-events-none">
              
              {/* Left Side: Live System Time */}
              <div className="flex items-center text-xs font-semibold tracking-tight mix-blend-difference drop-shadow-sm pl-1 pt-1.5">
                {currentTime}
              </div>

              {/* Right Side: Network, Wi-Fi & Battery Cluster */}
              <div className="flex items-center gap-1.5 pt-1.5 text-white pr-1">
                
                {/* 4-Bar Signal Indicator */}
                <div className="flex items-end gap-[1.5px] h-[9px] mix-blend-difference">
                  <div className="w-[2.2px] h-[3px] bg-current rounded-[0.5px]"></div>
                  <div className="w-[2.2px] h-[5px] bg-current rounded-[0.5px]"></div>
                  <div className="w-[2.2px] h-[7px] bg-current rounded-[0.5px]"></div>
                  <div className="w-[2.2px] h-[9px] bg-current rounded-[0.5px] opacity-95"></div>
                </div>

                {/* 5G Label */}
                <span className="text-[8.5px] font-black tracking-tighter mix-blend-difference opacity-90 pl-0.5">5G</span>

                {/* Wi-Fi Icon */}
                <svg className="w-3 h-3 mix-blend-difference opacity-95" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h.01" />
                  <path d="M8.5 16.5c3.5-3.5 8.5-3.5 12 0" />
                  <path d="M5 13a12 12 0 0 1 14 0" />
                </svg>

                {/* Charging Battery Fuel Gauge */}
                <div className="flex items-center gap-[2px] ml-0.5">
                  <span className="text-[9px] font-bold mix-blend-difference opacity-90">98%</span>
                  <div className="w-[20px] h-[10.5px] border border-white/60 rounded-[3px] p-[1px] flex items-center relative mix-blend-difference">
                    <div className="h-full w-[85%] bg-green-500 rounded-[1px] flex items-center justify-center relative">
                      {/* Lightning Bolt */}
                      <svg className="w-2.5 h-2.5 text-white absolute fill-white drop-shadow-sm" viewBox="0 0 24 24">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10" />
                      </svg>
                    </div>
                    <div className="w-[1.5px] h-[4px] bg-white/60 rounded-r-[1px] absolute -right-[2px] top-1/2 -translate-y-1/2"></div>
                  </div>
                </div>

              </div>
            </div>


            {/* 6. Page Content Wrapper with Safe-Area Padding Top */}
            <div className={`flex-1 flex flex-col relative overflow-hidden ${
              showHeader ? 'pt-[44px]' : 'pt-0'
            }`}>
              
              {showHeader && <TopHeader />}

              {/* Main Scrollable Viewport */}
              <main className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative z-0 bg-background text-slate-200">
                {children}
              </main>

              {/* Floating Bottom Navigation */}
              {showNav && (
                <div className="absolute bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-10 pointer-events-none bg-gradient-to-t from-background via-background/90 to-transparent">
                  <BottomNavigation />
                </div>
              )}
            </div>

            {/* 7. Bottom Home Indicator Swipe Bar */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-50 w-[125px] h-[4.5px] bg-neutral-400/35 rounded-full pointer-events-none" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileContainer;


