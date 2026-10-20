import React from 'react';
import { 
  Cloud, 
  Cpu, 
  Zap, 
  Lock, 
  Database, 
  Layers, 
  Server, 
  RefreshCw, 
  CheckCircle2, 
  HardDrive 
} from 'lucide-react';

export const ArchitectureComparison: React.FC = () => {
  return (
    <section id="architecture" className="py-24 cad-grid-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>DUAL-TIER ENGINE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Extreme Speed & Total Privacy
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            GradeMyJob gives you the choice: lightning-fast zero-cloud local evaluation, or high-capacity AWS serverless synthesis.
          </p>
        </div>

        {/* Dual Mode Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Local Edge Mode */}
          <div className="rounded-2xl bg-dark-900/90 border border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-950 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                  <HardDrive className="w-3.5 h-3.5" /> TIER 1: LOCAL EDGE MODE
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">100% Offline Capable</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Zero Cloud Dependency & Microsecond Latency
              </h3>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Processes job postings entirely on your localhost. Ideal for privacy-conscious engineers who do not want job applications or profile information leaving their machine.
              </p>

              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-dark-950/80 border border-slate-800 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Local FastAPI Engine (`laya_server.py`)</strong>
                    <span className="text-slate-400">Sub-70ms parallel classification on `http://127.0.0.1:8000` via Uvicorn.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950/80 border border-slate-800 flex items-start gap-3">
                  <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Chrome Built-In Prompt API (`window.ai`)</strong>
                    <span className="text-slate-400">On-device Gemini Nano inference with zero external network traffic.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950/80 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">0 Cloud Tokens & 100% Free</strong>
                    <span className="text-slate-400">Unlimited evaluation volume without external API subscriptions.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Latency: <strong className="text-cyan-300">~50ms</strong></span>
              <span>Data Egress: <strong className="text-emerald-300">0 KB Cloud</strong></span>
            </div>
          </div>

          {/* Card 2: Serverless Cloud Mode */}
          <div className="rounded-2xl bg-dark-900/90 border border-slate-800 hover:border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-950 text-emerald-300 text-xs font-mono border border-emerald-500/30">
                  <Cloud className="w-3.5 h-3.5" /> TIER 2: SERVERLESS CLOUD MODE
                </span>
                <span className="text-xs font-mono text-cyan-400 font-semibold">Deep LLM Synthesis</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                AWS Lambda & Multi-Model Waterfall Chain
              </h3>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Connects to GradeMyJob’s distributed AWS infrastructure for complete job deconstruction, nuanced jargon translation, and transferable skills synthesis.
              </p>

              <div className="space-y-3 mb-6 font-mono text-xs">
                <div className="p-3 rounded-xl bg-dark-950/80 border border-slate-800 flex items-start gap-3">
                  <Server className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">AWS API Gateway & Node.js Lambda</strong>
                    <span className="text-slate-400">Stateless edge execution hosted in eu-north-1 with Google OAuth verification.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950/80 border border-slate-800 flex items-start gap-3">
                  <Database className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">DynamoDB Atomic 2PC Quota Reservations</strong>
                    <span className="text-slate-400">TransactWrite with 150s lease locks and SHA-256 deduplication.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-dark-950/80 border border-slate-800 flex items-start gap-3">
                  <RefreshCw className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">5-Tier Model Waterfall Resilience</strong>
                    <span className="text-slate-400">Automated fallback across Gemini flash-lite and flash families.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Daily Allowance: <strong className="text-emerald-300">25 Free Grades/Day</strong></span>
              <span>Uptime: <strong className="text-cyan-300">99.99% AWS</strong></span>
            </div>
          </div>

        </div>

        {/* Visual Architecture Flowchart */}
        <div className="rounded-2xl bg-dark-900/90 border border-slate-800 p-6 sm:p-8">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" /> Pipeline Architecture Data Flow
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            
            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-cyan-400 uppercase">Step 01: Capture</span>
              <div className="my-2">
                <strong className="text-white block text-sm">DOM Scraper</strong>
                <span className="text-xs text-slate-400">Extracts job title, company, location & raw posting text from LinkedIn/Indeed.</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">WXT Content Script</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-cyan-500/40 flex flex-col justify-between shadow-lg shadow-cyan-950/30">
              <span className="text-[10px] font-mono text-cyan-300 uppercase">Step 02: Triage</span>
              <div className="my-2">
                <strong className="text-white block text-sm">Parallel Local Triage</strong>
                <span className="text-xs text-slate-400">Checks track alignment & disqualifiers in ~50ms via local Laya/WebAI.</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400">Sub-70ms Filter</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-emerald-500/40 flex flex-col justify-between shadow-lg shadow-emerald-950/30">
              <span className="text-[10px] font-mono text-emerald-300 uppercase">Step 03: Synthesis</span>
              <div className="my-2">
                <strong className="text-white block text-sm">LLM Deconstruction</strong>
                <span className="text-xs text-slate-400">Extracts tech stack, separates hard requirements, translates buzzwords.</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">Multi-Tier Waterfall</span>
            </div>

            <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Step 04: Render</span>
              <div className="my-2">
                <strong className="text-white block text-sm">Side Panel & Cache</strong>
                <span className="text-xs text-slate-400">Stores evaluation in local storage; displays fit gauge & auto-saves to LinkedIn.</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">React 18 + WXT</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
