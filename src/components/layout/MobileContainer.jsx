import React from 'react';
import BottomNavigation from './BottomNavigation';
import TopHeader from './TopHeader';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const MobileContainer = ({ children }) => {
  const location = useLocation();
  const { theme } = useTheme();
  const hideNavRoutes = ['/', '/auth', '/accepted'];
  const hideHeaderRoutes = ['/', '/auth', '/profile'];
  const showNav = !hideNavRoutes.includes(location.pathname) && !location.pathname.startsWith('/shift/');
  const showHeader = !hideHeaderRoutes.includes(location.pathname);

  return (
    <div className={`min-h-screen flex items-start justify-center p-0 sm:p-4 md:p-6 pt-2 sm:pt-4 md:pt-6 pb-4 transition-colors duration-500 ${
      theme === 'light' ? 'theme-light bg-slate-200/50' : 'theme-dark bg-black'
    }`}>
      {/* Mobile Device Emulator Container */}
      <div className={`relative w-full h-screen sm:h-[960px] sm:max-h-[97vh] sm:w-[440px] sm:rounded-[3rem] overflow-hidden bg-background shadow-2xl sm:border-[8px] transition-colors duration-500 flex flex-col ${
        theme === 'light' ? 'sm:border-slate-300 shadow-slate-400/20' : 'sm:border-slate-800 shadow-black/80'
      }`}>

        {showHeader && <TopHeader />}

        {/* Main Scrollable Content */}
        <main className="flex-1 flex flex-col overflow-y-auto no-scrollbar relative z-0 bg-background text-slate-200">
          {children}
        </main>

        {/* Floating Bottom Navigation */}
        {showNav && (
          <div className="absolute bottom-0 left-0 right-0 z-50 px-4 pb-4 pt-10 pointer-events-none bg-gradient-to-t from-background via-background/90 to-transparent">
            <BottomNavigation />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileContainer;

