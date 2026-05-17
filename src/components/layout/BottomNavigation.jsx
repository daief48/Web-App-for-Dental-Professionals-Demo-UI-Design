import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Search, DollarSign, User } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navItems = [
  { path: '/home', icon: Home, label: 'Home' },
  { path: '/shifts', icon: Search, label: 'Shifts' },
  { path: '/earnings', icon: DollarSign, label: 'Earnings' },
  { path: '/profile', icon: User, label: 'Profile' }
];

const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="glass-nav rounded-2xl p-2 pointer-events-auto mx-auto max-w-[calc(100%-2rem)]">
      <ul className="flex justify-between items-center relative">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname.startsWith(path);
          return (
            <li key={path} className="relative z-10 flex-1">
              <NavLink
                to={path}
                className="flex flex-col items-center justify-center w-full h-12 gap-1 text-slate-400 transition-colors hover:text-primary"
              >
                <div className="relative">
                  <Icon
                    size={22}
                    className={clsx(
                      "transition-all duration-300",
                      isActive ? "text-primary stroke-[2.5px]" : "stroke-[1.5px]"
                    )}
                  />
                </div>
                <span className={clsx(
                  "text-[10px] font-medium transition-all duration-300",
                  isActive ? "text-primary opacity-100 translate-y-0" : "opacity-0 translate-y-2 absolute bottom-0"
                )}>
                  {label}
                </span>
              </NavLink>

              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute inset-0 bg-primary/20 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
