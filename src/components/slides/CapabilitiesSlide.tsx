import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Zap, 
  Terminal, 
  Bookmark, 
  Sliders, 
  ShieldCheck, 
  Code2 
} from 'lucide-react';

export const CapabilitiesSlide: React.FC = () => {
  return (
    <div className="max-w-6xl w-full mx-auto flex flex-col justify-center h-full">
      
      {/* Slide Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-800 pb-3">
        <div>
          <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> Slide 02 // Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            In-Page DOM Injection & Intelligent Automation
          </h2>
        </div>
        <div className="text-xs font-mono text-zinc-400">
          Chrome Manifest V3 • Firefox Manifest V2
        </div>
      </div>

      {/* Clean 4-Card Bento Grid (No Broken Images) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* Card 1: Match Scoring & Dealbreaker Isolation (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-dark-900/90 border border-slate-800 p-6 flex flex-col justify-between shadow-xl hover:border-cyan-500/40 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                CAPABILITY 01 // FIT SCORING
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> 0.0 - 10.0 ATS Gauge
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Dynamic Match Scoring & Dealbreaker Isolation
            </h3>
            
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">
              Calculates bespoke ATS compatibility against your candidate persona. Flags non-negotiable prerequisites (experience ceiling, foreign language requirements, clearance) before you spend hours applying.
            </p>
          </div>
          
          <div className="p-3 rounded-xl bg-dark-950 border border-slate-800/90 font-mono text-xs flex items-center justify-between">
            <span className="text-cyan-400 font-semibold">Transferability Engine</span>
            <span className="text-zinc-400 text-[11px]">Hard vs. Preferred Isolation</span>
          </div>
        </div>

        {/* Card 2: Automated Batch Scanner (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-dark-900/90 border border-slate-800 p-6 flex flex-col justify-between shadow-xl hover:border-cyan-500/40 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 text-[10px] font-mono border border-cyan-500/30">
                CAPABILITY 02 // CRAWLER
              </span>
              <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Multi-Page Feeds
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              Automated Batch Scanner & Bookmarking
            </h3>
            
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">
              Automatically crawls dozens of job postings across search feeds with anti-ban rate limiting. Programmatically clicks the LinkedIn "Save" action for postings exceeding your match threshold.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-dark-950 border border-slate-800/90 font-mono text-xs flex items-center justify-between">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <Bookmark className="w-3.5 h-3.5 text-emerald-400" /> Auto-Save Threshold: ≥ 8.0/10
            </span>
            <span className="text-zinc-400 text-[11px]">Anti-Bot Throttling</span>
          </div>
        </div>

        {/* Card 3: Native Side Panel (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-dark-900/90 border border-slate-800 p-6 flex flex-col justify-between shadow-xl hover:border-emerald-500/40 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                CAPABILITY 03 // SIDE PANEL
              </span>
              <span className="text-[11px] font-mono text-zinc-400">Zero Disruption</span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              Native Side Panel & Live DOM Extraction
            </h3>
            
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">
              Captures full job postings directly from LinkedIn, Indeed, and We Work Remotely without third-party scrapers, streaming insights into a persistent browser Side Panel without interrupting your browsing flow.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-dark-950 border border-slate-800/90 font-mono text-xs flex items-center justify-between">
            <span className="text-cyan-300 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn • Indeed • WWR
            </span>
            <span className="text-zinc-400 text-[11px]">Native Browser Side Panel</span>
          </div>
        </div>

        {/* Card 4: Pros & Cons Signals & Stack Dissector (6 cols) */}
        <div className="md:col-span-6 rounded-2xl bg-dark-900/90 border border-slate-800 p-6 flex flex-col justify-between shadow-xl hover:border-emerald-500/40 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                CAPABILITY 04 // SIGNALS & STACK
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5" /> Signals Analysis
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              Pros & Cons Signals & Stack Dissector
            </h3>
            
            <p className="text-xs text-zinc-300 leading-relaxed mb-4">
              Surfaces potential job-post green flags and red flags while categorizing languages, frameworks, cloud tooling, and databases into discrete, structured technical buckets.
            </p>
          </div>

          <div className="p-2.5 rounded-xl bg-dark-950 border border-slate-800/90 font-mono text-[11px] space-y-1">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-emerald-400 truncate">🟢 Explicit salary range & modern stack</span>
              <span className="text-zinc-300 text-[10px] truncate">Green Flag</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-rose-400 truncate">🚩 Unrealistic scope & on-call ambiguity</span>
              <span className="text-zinc-300 text-[10px] truncate">Red Flag</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
