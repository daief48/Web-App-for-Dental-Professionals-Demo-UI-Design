import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Bell, Globe, Lock, Smartphone, Eye, Moon, Sun, Volume2, Vibrate, MapPin } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const Settings = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [vibration, setVibration] = useState(true);

  const Toggle = ({ value, onChange }) => (
    <button
      onClick={onChange}
      className={`w-12 h-7 rounded-full p-0.5 transition-all duration-300 ${
        value ? 'bg-primary shadow-[0_0_12px_rgba(37,99,235,0.35)]' : 'bg-slate-700'
      }`}
    >
      <motion.div
        layout
        className="w-6 h-6 bg-white rounded-full shadow-md"
        initial={false}
        animate={{ x: value ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </button>
  );

  const settingsSections = [
    {
      title: 'Notifications',
      items: [
        { icon: Bell, label: 'Push Notifications', desc: 'Get notified about new shifts', toggle: true, value: notifications, onChange: () => setNotifications(!notifications) },
        { icon: Volume2, label: 'Sound Alerts', desc: 'Play sound for urgent shifts', nav: true },
        { icon: Vibrate, label: 'Vibration', desc: 'Vibrate on notifications', toggle: true, value: vibration, onChange: () => setVibration(!vibration) },
      ]
    },
    {
      title: 'Privacy & Security',
      items: [
        { icon: Lock, label: 'Change Password', desc: 'Update your password', nav: true },
        { icon: Eye, label: 'Biometric Login', desc: 'Use Face ID or fingerprint', toggle: true, value: biometric, onChange: () => setBiometric(!biometric) },
        { icon: MapPin, label: 'Location Access', desc: 'Allow location for nearby shifts', toggle: true, value: locationAccess, onChange: () => setLocationAccess(!locationAccess) },
      ]
    },
    {
      title: 'General',
      items: [
        { icon: Globe, label: 'Language', desc: 'English (UK)', nav: true },
        { icon: Smartphone, label: 'App Version', desc: 'v2.4.1 (Latest)', nav: false },
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      className="min-h-full bg-background text-slate-200 pb-10"
    >
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 px-5 pt-4 pb-5">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/profile')}
            className="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-full text-slate-400 hover:text-white border border-white/10 transition-colors"
          >
            <ChevronLeft size={22} />
          </button>
          <h1 className="text-xl font-bold text-white">Settings</h1>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="px-5 mt-6 flex flex-col gap-6">
        {settingsSections.map((section, sIdx) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sIdx * 0.1 }}
          >
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">{section.title}</h2>
            <div className="flex flex-col gap-2">
              {section.items.map((item, iIdx) => (
                <GlassCard key={item.label} className="bg-slate-900 p-4 flex items-center gap-4 border-white/5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-slate-800 text-slate-300 border border-slate-700">
                    <item.icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-white text-sm">{item.label}</h3>
                    <p className="text-xs text-slate-400 truncate">{item.desc}</p>
                  </div>
                  {item.toggle ? (
                    <Toggle value={item.value} onChange={item.onChange} />
                  ) : item.nav ? (
                    <ChevronRight size={18} className="text-slate-600 shrink-0" />
                  ) : null}
                </GlassCard>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Danger Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xs font-bold uppercase tracking-wider text-red-400/70 mb-3 px-1">Danger Zone</h2>
          <GlassCard className="bg-slate-900 p-4 border-white/5">
            <button className="w-full text-left">
              <h3 className="font-bold text-red-400 text-sm">Delete Account</h3>
              <p className="text-xs text-slate-500 mt-0.5">Permanently delete your account and all data</p>
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Settings;
