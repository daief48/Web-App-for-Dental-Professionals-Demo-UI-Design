import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const SplashScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full bg-background overflow-hidden flex flex-col items-center justify-center p-8">
      {/* Floating Background Shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-20 -left-10 w-40 h-40 bg-primary rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-20 -right-10 w-60 h-60 bg-secondary rounded-full blur-[80px]"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="z-10 flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-white/5 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-6 shadow-2xl border border-white/10 glow-shadow">
          <Activity size={48} className="text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Locum Connect</h1>
        <p className="text-slate-400 text-lg font-medium text-center">Find Flexible Dental Shifts Near You</p>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-12 left-0 right-0 px-8 flex flex-col gap-4 z-10"
      >
        <button
          onClick={() => navigate('/auth')}
          className="w-full py-4 bg-primary text-white font-bold rounded-2xl shadow-lg glow-shadow hover:bg-indigo-600 transition-colors"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/auth?register=true')}
          className="w-full py-4 bg-white/5 backdrop-blur-md text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
        >
          Register
        </button>
      </motion.div>
    </div>
  );
};

export default SplashScreen;
