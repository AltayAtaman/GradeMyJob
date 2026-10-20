import React from 'react';
import { 
  Chrome, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  ShieldCheck 
} from 'lucide-react';

interface FooterProps {
  onOpenInstallModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInstallModal }) => {
  return (
    <footer className="relative bg-dark-950 border-t border-slate-800/80 pt-20 pb-12 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-cyan-600/10 via-emerald-600/5 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bold CTA Banner */}
        <div className="relative rounded-3xl bg-gradient-to-b from-dark-900 to-dark-950 border border-cyan-500/30 p-8 sm:p-14 text-center shadow-2xl mb-20 overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" /> AI-POWERED JOB ASSISTANT
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Ready to eliminate job-hunt fatigue?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Install GradeMyJob in under a minute and let local edge AI evaluate ATS requirements before you commit your time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenInstallModal}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-xl shadow-cyan-500/25 active:scale-98 group cursor-pointer"
              >
                <Chrome className="w-5 h-5" />
                <span>Install Extension</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Lower Links & Brand Area */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800 text-sm">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <img 
                src="./grade_my_job_dark.png" 
                alt="GradeMyJob" 
                className="w-8 h-8 rounded-lg object-contain bg-dark-900 border border-slate-800 p-0.5" 
              />
              <span className="text-xl font-bold font-mono text-white">
                Grade<span className="text-cyan-400">My</span>Job
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Sub-second edge triage and serverless AI job analysis with cross-browser DOM automation. Built for high-volume technical job applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 font-mono text-xs">
            <span className="text-slate-300 font-semibold uppercase tracking-wider block mb-2 font-sans">
              Navigation
            </span>
            <a href="#hero" className="block text-slate-400 hover:text-cyan-400 transition-colors">Overview</a>
            <a href="#features" className="block text-slate-400 hover:text-cyan-400 transition-colors">Capabilities</a>
            <a href="#install" className="block text-slate-400 hover:text-cyan-400 transition-colors">Download</a>
          </div>

          {/* Ecosystem / External */}
          <div className="space-y-2 font-mono text-xs">
            <span className="text-slate-300 font-semibold uppercase tracking-wider block mb-2 font-sans">
              Platforms
            </span>
            <span className="block text-slate-400">LinkedIn</span>
            <span className="block text-slate-400">Indeed</span>
            <span className="block text-slate-400">We Work Remotely</span>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} GradeMyJob. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by Edge Decision Models & AWS Serverless</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
