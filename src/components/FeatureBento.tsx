import React from 'react';
import { 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  Terminal 
} from 'lucide-react';

export const FeatureBento: React.FC = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>INTELLIGENT JOB EVALUATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineering Precision for Your Job Search
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Stop wading through repetitive postings and vague recruiter phrasing. GradeMyJob dissects listings into explicit technical parameters.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Dynamic Match Score Gauge (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-cyan-950 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                  FEATURE 01 // ATS & FIT SCORING
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  Real-time 0.0 - 10.0
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Dynamic Candidate Fit & Dealbreaker Detection
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Calculates custom alignment against your personal candidate persona. Automatically identifies visa requirements, foreign language dealbreakers, and senior experience mismatches before you spend hours applying.
              </p>
            </div>

            {/* Visual Screen Preview */}
            <div className="relative rounded-xl overflow-hidden border border-slate-700/60 bg-dark-950 shadow-inner">
              <img 
                src="./f_score.png" 
                alt="Match Score Gauge and ATS Breakdown" 
                className="w-full h-auto object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-dark-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Strong Technical Match (8.8/10)
                </span>
                <span className="text-slate-400 hidden sm:inline">Hard Requirements: 100% Met</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: In-Page Injection Hook (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-emerald-950 text-emerald-300 text-xs font-mono border border-emerald-500/30">
                  FEATURE 02 // SEAMLESS DOM INJECTION
                </span>
                <span className="text-xs font-mono text-slate-400">Zero Workflow Disruption</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Native In-Page Evaluation Hook
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Injects an unobtrusive evaluation badge and slide-out analysis drawer directly beside LinkedIn and Indeed's native "Easy Apply" button.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-700/60 bg-dark-950 shadow-inner">
              <img 
                src="./f_hook.png" 
                alt="In-Page DOM Hook next to Easy Apply" 
                className="w-full h-auto object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-dark-900/90 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono text-cyan-300 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>Injects into LinkedIn, Indeed & We Work Remotely</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Automated Multi-Page Batch Scanner (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-cyan-950 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                  FEATURE 03 // BATCH AUTOMATION
                </span>
                <span className="text-xs font-mono text-slate-400">Multi-Page Crawler</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Automated Batch Scanner
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Scan and grade dozens of postings across search pages automatically. Configurable rate limiting prevents bot bans, and automated LinkedIn bookmarking saves high-scoring roles automatically.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-slate-700/60 bg-dark-950 shadow-inner">
              <img 
                src="./f_batch.png" 
                alt="Batch Scanning and Sorting Interface" 
                className="w-full h-auto object-cover rounded-lg group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Bento Card 4: Corporate Jargon Buster & Stack Breakdown (7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-emerald-950 text-emerald-300 text-xs font-mono border border-emerald-500/30">
                  FEATURE 04 // JARGON BUSTER & TECH STACK
                </span>
                <span className="text-xs font-mono text-slate-400">Natural Language Deconstruction</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Corporate Jargon Buster & Tech Stack Dissector
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Categorizes all programming languages, databases, cloud providers, and dev tools into discrete buckets. Cuts through buzzwords to reveal true work conditions.
              </p>
            </div>

            {/* Interactive Mock Jargon / Stack Preview Box */}
            <div className="rounded-xl bg-dark-950 border border-slate-800 p-4 space-y-3 font-mono text-xs">
              
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Terminal className="w-4 h-4" /> RECRUITER PHRASE
                </span>
                <span className="text-emerald-400">REALITY TRANSLATION</span>
              </div>

              <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  "Fast-paced environment & wearing multiple hats"
                </span>
                <span className="text-slate-300 bg-dark-950 px-2.5 py-1 rounded border border-slate-800 text-[11px]">
                  Understaffed team, unmanaged on-call rotations
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-amber-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  "Self-starter with high ambiguity tolerance"
                </span>
                <span className="text-slate-300 bg-dark-950 px-2.5 py-1 rounded border border-slate-800 text-[11px]">
                  No formal roadmap, minimal technical documentation
                </span>
              </div>

              <div className="pt-2 flex flex-wrap gap-2 items-center">
                <span className="text-slate-400 text-[11px]">Categorized Tech Stack:</span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-[11px]">TypeScript</span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-[11px]">React 18</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-[11px]">FastAPI</span>
                <span className="px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-500/30 text-[11px]">DynamoDB</span>
                <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/30 text-[11px]">AWS Lambda</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
