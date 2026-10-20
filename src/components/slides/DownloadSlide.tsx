import React from 'react';
import { 
  Chrome, 
  Download, 
  UserCheck, 
  Compass, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface DownloadSlideProps {
  onOpenInstallModal: () => void;
}

export const DownloadSlide: React.FC<DownloadSlideProps> = ({ onOpenInstallModal }) => {
  const steps = [
    {
      num: '01',
      title: 'Add to Browser',
      desc: 'Install the extension in seconds from the web store.',
      icon: Download,
    },
    {
      num: '02',
      title: 'Set Target Persona',
      desc: 'Define your technical skills, seniority level, and dealbreakers.',
      icon: UserCheck,
    },
    {
      num: '03',
      title: 'Browse with Inline Fit',
      desc: 'View real-time match scores and apply only to high-fit roles.',
      icon: Compass,
    },
  ];

  return (
    <div className="max-w-4xl w-full mx-auto flex flex-col justify-center items-center py-4">
      
      {/* Slide Header (Centered) */}
      <div className="text-center mb-6 max-w-xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 mb-3 shadow-md shadow-cyan-950/30">
          <Sparkles className="w-3.5 h-3.5" /> Slide 03 // Quick Start & Download Center
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Deploy GradeMyJob to Your Browser
        </h2>
        <p className="text-xs sm:text-sm text-zinc-300">
          Start scoring job fit in under a minute with complete data privacy.
        </p>
      </div>

      {/* 3 Steps Cards (Centered Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-6">
        {steps.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-dark-900/90 border border-slate-800 flex flex-col justify-between shadow-lg hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-extrabold text-cyan-400">
                  STEP {st.num}
                </span>
                <Icon className="w-4 h-4 text-zinc-400" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1.5">{st.title}</h4>
              <p className="text-xs text-zinc-300 leading-relaxed">{st.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Main Download Card (Centered) */}
      <div className="w-full p-6 sm:p-8 rounded-2xl bg-dark-900/95 border border-cyan-500/30 shadow-2xl text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          Ready to eliminate job-hunt fatigue?
        </h3>
        <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto mb-6">
          Install the cross-browser extension for Chrome and Firefox to start analyzing requirements and evaluating ATS fit in real time.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Firefox - Direct Link (Live) */}
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/grademyjob/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-dark-950 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 transition-all shadow-lg shadow-emerald-500/25 active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Add to Firefox (Live)</span>
          </a>

          {/* Chrome - Under Review */}
          <button
            onClick={onOpenInstallModal}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-zinc-200 bg-dark-950 border border-slate-700 hover:border-amber-500/40 hover:text-white transition-all active:scale-95 cursor-pointer group"
          >
            <Chrome className="w-4 h-4 text-cyan-400" />
            <span>Add to Chrome</span>
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1 ml-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Under Review
            </span>
          </button>
        </div>

        <p className="text-[11px] font-mono text-zinc-400 mt-4">
          Chrome Web Store extension is currently under review and will be published soon.
        </p>
      </div>

      {/* Footer Info Strip */}
      <div className="w-full pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 font-semibold">GradeMyJob</span>
          <span>•</span>
          <span>Manifest V3 (Chrome) & V2 (Firefox)</span>
        </div>
        <div className="text-zinc-400 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Sub-Second Edge Triage & AWS Serverless</span>
        </div>
      </div>

    </div>
  );
};
