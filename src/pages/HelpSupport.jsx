import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Mail, FileText, ExternalLink, HelpCircle, BookOpen, Shield } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const faqItems = [
  { q: 'How do I accept a shift?', a: 'Browse available shifts on the Explore page, tap on a shift to see details, then click "Accept Shift" at the bottom. You\'ll receive a confirmation immediately.' },
  { q: 'How do I get paid?', a: 'Payments are processed within 48 hours of completing a shift. You can track all your earnings on the Earnings page. Funds are sent directly to your linked bank account.' },
  { q: 'What happens if I cancel a shift?', a: 'You can cancel a shift up to 24 hours before the start time without penalty. Late cancellations may affect your reliability score.' },
  { q: 'How do I update my compliance documents?', a: 'Go to Profile → Compliance & Docs. Upload or update your GDC Certificate, DBS Check, and Indemnity Insurance documents from there.' },
];

const HelpSupport = () => {
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const contactOptions = [
    { icon: MessageCircle, label: 'Live Chat', desc: 'Chat with our support team', color: 'text-cyan-400', bg: 'bg-cyan-950/50', border: 'border-cyan-500/30' },
    { icon: Mail, label: 'Email Support', desc: 'support@locumconnect.com', color: 'text-primary', bg: 'bg-primary/20', border: 'border-primary/30' },
    { icon: Phone, label: 'Call Us', desc: '+44 800 123 4567', color: 'text-green-400', bg: 'bg-green-950/50', border: 'border-green-500/30' },
  ];

  const resourceLinks = [
    { icon: BookOpen, label: 'User Guide', desc: 'Complete app walkthrough' },
    { icon: Shield, label: 'Privacy Policy', desc: 'How we protect your data' },
    { icon: FileText, label: 'Terms of Service', desc: 'Terms and conditions' },
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
          <h1 className="text-xl font-bold text-white">Help & Support</h1>
        </div>
      </div>

      <div className="px-5 mt-6 flex flex-col gap-6">
        {/* Contact Options */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">Contact Us</h2>
          <div className="flex flex-col gap-2">
            {contactOptions.map(item => (
              <GlassCard key={item.label} className="bg-slate-900 p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-800 transition-colors border-white/5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.bg} ${item.color} ${item.border}`}>
                  <item.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-sm">{item.label}</h3>
                  <p className="text-xs text-slate-400 truncate">{item.desc}</p>
                </div>
                <ChevronRight size={18} className="text-slate-600 shrink-0" />
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-2">
            {faqItems.map((faq, idx) => (
              <GlassCard
                key={idx}
                className="bg-slate-900 border-white/5 overflow-hidden cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
              >
                <div className="p-4 flex items-center gap-3">
                  <HelpCircle size={16} className="text-primary shrink-0" />
                  <h3 className="font-bold text-white text-sm flex-1">{faq.q}</h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === idx ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight size={16} className="text-slate-500" />
                  </motion.div>
                </div>
                {expandedFaq === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4 border-t border-white/5"
                  >
                    <p className="text-sm text-slate-400 pt-3 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-1">Resources</h2>
          <div className="flex flex-col gap-2">
            {resourceLinks.map(item => (
              <GlassCard key={item.label} className="bg-slate-900 p-4 flex items-center gap-4 cursor-pointer hover:bg-slate-800 transition-colors border-white/5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-slate-800 text-slate-300 border border-slate-700">
                  <item.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-sm">{item.label}</h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
                <ExternalLink size={16} className="text-slate-600 shrink-0" />
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* App Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-center pt-4 pb-6"
        >
          <p className="text-xs text-slate-500">Locum Connect v2.4.1</p>
          <p className="text-xs text-slate-600 mt-1">Made with ❤️ in London</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HelpSupport;
