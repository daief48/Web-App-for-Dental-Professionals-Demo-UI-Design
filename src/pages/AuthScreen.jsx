import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Stethoscope } from 'lucide-react';

const AuthScreen = () => {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(searchParams.get('register') !== 'true');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-full bg-background relative overflow-y-auto no-scrollbar flex flex-col px-6 pt-12 pb-12">
      {/* Decorative Blobs */}
      <div className="absolute top-[-15%] right-[-15%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-15%] w-64 h-64 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] w-48 h-48 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Logo & Branding */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-10 z-10"
      >
        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/25 rotate-3">
          <Stethoscope size={28} className="text-white -rotate-3" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">
          {isLogin ? 'Welcome back' : 'Get started'}
        </h1>
        <p className="text-slate-400 text-sm">
          {isLogin ? 'Sign in to access your shifts & earnings.' : 'Create your account to find shifts near you.'}
        </p>
      </motion.div>

      {/* Auth Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="z-10"
      >
        <div className="auth-card bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="relative"
                >
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <User size={18} className="text-slate-500" />
                  </div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="auth-input w-full pl-11 pr-4 py-3.5 bg-slate-950/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-500"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Mail size={18} className="text-slate-500" />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="auth-input w-full pl-11 pr-4 py-3.5 bg-slate-950/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-500"
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                <Lock size={18} className="text-slate-500" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="auth-input w-full pl-11 pr-12 py-3.5 bg-slate-950/50 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-slate-300 z-10"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-primary font-medium hover:underline">
                  Forgot password?
                </button>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full mt-2 py-4 bg-primary text-white font-bold rounded-2xl shadow-lg shadow-primary/25 flex justify-center items-center gap-2 hover:brightness-110 transition-all"
            >
              {isLogin ? 'Login' : 'Create Account'}
              <ArrowRight size={18} />
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-slate-500 font-medium">or continue with</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 py-3 bg-slate-800 rounded-2xl border border-white/10 text-white text-sm font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google
            </button>
            <button className="flex-1 py-3 bg-slate-800 rounded-2xl border border-white/10 text-white text-sm font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.18 0-.36-.02-.53-.06-.01-.18-.04-.56-.04-.95 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 17.01c-.04.13-.63 2.17-2.09 4.29-1.26 1.84-2.56 3.67-4.62 3.71-2.02.04-2.67-1.19-5.58-1.19-2.92 0-3.63 1.15-5.53 1.23-1.98.08-3.49-1.99-4.76-3.82C.49 18.69-.62 12.82.67 9.03c.86-2.54 2.78-4.28 4.82-4.28 2.07 0 3.34 1.24 5.04 1.24 1.65 0 2.65-1.24 5.02-1.24 1.73 0 3.39.92 4.42 2.53-3.89 2.13-3.26 7.66.93 9.15z"/></svg>
              Apple
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer Toggle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 text-center z-10"
      >
        <p className="text-slate-400 text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-primary font-bold hover:underline"
          >
            {isLogin ? 'Register now' : 'Login'}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthScreen;
