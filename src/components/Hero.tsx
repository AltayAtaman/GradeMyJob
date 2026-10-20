import React from 'react';
import { 
  Chrome, 
  Play, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Lock,
  Layers
} from 'lucide-react';

interface HeroProps {
  onOpenInstallModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInstallModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden cad-grid-bg">
      {/* Background radial glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-emerald-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-12 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tech Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-950/40">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-semibold uppercase tracking-wider text-[11px]">Sub-Second Edge Triage & Serverless AI Engine</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400 hidden sm:inline">Chrome MV3 & Firefox MV2</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Stop Applying Blind.{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent underline decoration-cyan-500/30 decoration-wavy">
              Know Your Fit
            </span>{' '}
            in Milliseconds.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            GradeMyJob extracts tech stacks, isolates hard vs. preferred qualifications, and calculates real-time candidate fit directly inside <strong className="text-white font-medium">LinkedIn</strong>, <strong className="text-white font-medium">Indeed</strong>, and <strong className="text-white font-medium">We Work Remotely</strong>—powered by sub-70ms edge inference and AWS serverless models.
          </p>
        </div>

        {/* CTA Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenInstallModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-xl shadow-cyan-500/25 active:scale-98 group"
          >
            <Chrome className="w-5 h-5" />
            <span>Add to Chrome (Free)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#demo"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-dark-900/90 border border-slate-700/80 hover:border-cyan-500/40 hover:text-white transition-all shadow-md active:scale-98 group"
          >
            <div className="w-6 h-6 rounded-full bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
              <Play className="w-3 h-3 text-cyan-300 fill-cyan-300 ml-0.5" />
            </div>
            <span>Watch Video Tour</span>
          </a>
        </div>

        {/* Hero Visual Mockup with Floating Badges */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glowing contour */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition duration-1000 -z-10" />

          {/* Main frame */}
          <div className="relative rounded-2xl bg-dark-900/95 border border-slate-700/70 p-2 sm:p-4 shadow-2xl overflow-hidden">
            {/* Top terminal-style bar */}
            <div className="flex items-center justify-between pb-3 px-3 border-b border-slate-800 text-xs font-mono text-slate-400 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-500">grademyjob-engine v0.2.0 // live_preview.tsx</span>
              </div>
              <div className="hidden sm:flex items-center gap-3 text-[11px] text-cyan-400">
                <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> System 1: ACTIVE</span>
                <span className="text-slate-600">•</span>
                <span className="flex items-center gap-1 text-emerald-400"><ShieldCheck className="w-3 h-3" /> ATS: DECODED</span>
              </div>
            </div>

            {/* Visual Image Screen */}
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-dark-950">
              <img 
                src="./f_score.png" 
                alt="GradeMyJob Match Score Evaluation Preview" 
                className="w-full h-auto object-cover max-h-[560px] mx-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-30 pointer-events-none" />
            </div>

            {/* Floating Badge 1: Local Inference Speed */}
            <div className="absolute top-16 left-6 sm:left-10 bg-dark-900/90 backdrop-blur-md border border-cyan-500/40 rounded-xl p-3 shadow-xl shadow-cyan-950/50 flex items-center gap-3 animate-pulse-slow">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/90 border border-cyan-500/50 flex items-center justify-center text-cyan-400">
                <Zap className="w-5 h-5 fill-cyan-400/20" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Local Triage</div>
                <div className="text-sm font-bold text-white font-mono">~50ms Latency</div>
              </div>
            </div>

            {/* Floating Badge 2: Complete Local Privacy */}
            <div className="absolute bottom-12 left-6 sm:left-12 bg-dark-900/90 backdrop-blur-md border border-emerald-500/40 rounded-xl p-3 shadow-xl shadow-emerald-950/50 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-950/90 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Data Architecture</div>
                <div className="text-sm font-bold text-white font-mono">100% Privacy in Local Mode</div>
              </div>
            </div>

            {/* Floating Badge 3: Multi-Model Reliability */}
            <div className="absolute top-20 right-6 sm:right-10 bg-dark-900/90 backdrop-blur-md border border-slate-600/70 rounded-xl p-3 shadow-xl shadow-black/60 hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-dark-800 border border-slate-700 flex items-center justify-center text-cyan-300">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Waterfall Resilience</div>
                <div className="text-sm font-bold text-white font-mono">0% Rate-Limit Dropouts</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
