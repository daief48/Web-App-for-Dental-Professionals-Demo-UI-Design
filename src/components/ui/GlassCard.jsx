import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className, onClick, animate = false, ...props }) => {
  const baseClasses = "glass-card p-5 relative overflow-hidden";
  
  if (animate) {
    return (
      <motion.div
        whileHover={{ y: -2, boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.3)" }}
        whileTap={{ scale: 0.98 }}
        className={clsx(baseClasses, className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div 
      className={clsx(baseClasses, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
