import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, FileText, CheckCircle2, AlertCircle, UploadCloud } from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';

const documents = [
  { id: 1, name: 'GDC Certificate', status: 'verified', date: 'Valid until May 2027' },
  { id: 2, name: 'Enhanced DBS', status: 'verified', date: 'Checked 12 Jan 2026' },
  { id: 3, name: 'Indemnity Insurance', status: 'expiring', date: 'Expires in 12 days' },
  { id: 4, name: 'Immunisation Record', status: 'missing', date: 'Upload required' },
];

const Compliance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-full bg-background flex flex-col relative text-slate-200">
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl px-5 pt-4 pb-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/profile')}
            className="w-10 h-10 flex items-center justify-center bg-slate-900 rounded-full text-slate-400 hover:bg-slate-800 transition-colors border border-white/10"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-white">Compliance & Docs</h1>
        </div>
      </div>

      <div className="p-5 flex-1 overflow-y-auto no-scrollbar pb-24 relative z-10">
        
        {/* Verification Status Card */}
        <GlassCard className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 text-white p-6 mb-8 text-center border-primary/30 glow-shadow">
          <div className="w-16 h-16 bg-cyan-950/50 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <ShieldCheck size={32} className="text-cyan-400" />
          </div>
          <h2 className="text-xl font-bold mb-2 text-white">85% Compliant</h2>
          <p className="text-slate-300 text-sm mb-4">Complete your missing documents to accept all types of shifts.</p>
          
          <div className="w-full bg-slate-800 rounded-full h-2.5 mb-2 overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-gradient-to-r from-primary to-cyan-400 h-2.5 rounded-full"
            />
          </div>
        </GlassCard>

        {/* Document List */}
        <h3 className="text-lg font-bold text-white mb-4">Required Documents</h3>
        <div className="flex flex-col gap-3">
          {documents.map((doc, idx) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              key={doc.id}
            >
              <GlassCard className={`p-4 flex items-center gap-4 border-white/5 ${
                doc.status === 'expiring' ? 'border-orange-500/30 bg-orange-950/20' : 
                doc.status === 'missing' ? 'border-red-500/30 bg-red-950/20' : 'bg-slate-900'
              }`}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                  doc.status === 'verified' ? 'bg-cyan-950/50 text-cyan-400 border-cyan-500/30 glow-shadow-cyan' :
                  doc.status === 'expiring' ? 'bg-orange-900/50 text-orange-400 border-orange-500/30' :
                  'bg-red-900/50 text-red-400 border-red-500/30'
                }`}>
                  <FileText size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white text-sm">{doc.name}</h4>
                    {doc.status === 'verified' && <CheckCircle2 size={14} className="text-cyan-400" />}
                    {doc.status === 'expiring' && <AlertCircle size={14} className="text-orange-400" />}
                    {doc.status === 'missing' && <AlertCircle size={14} className="text-red-400" />}
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{doc.date}</p>
                </div>
                
                {doc.status !== 'verified' && (
                  <button className={`p-2.5 rounded-xl border transition-colors ${
                    doc.status === 'expiring' ? 'bg-orange-900/50 text-orange-400 border-orange-500/30 hover:bg-orange-800/50' :
                    'bg-red-900/50 text-red-400 border-red-500/30 hover:bg-red-800/50'
                  }`}>
                    <UploadCloud size={18} />
                  </button>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Compliance;
