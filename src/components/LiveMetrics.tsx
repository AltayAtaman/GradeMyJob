import React from 'react';
import { Gauge, Cpu, CloudOff, Activity } from 'lucide-react';

export const LiveMetrics: React.FC = () => {
  const metrics = [
    {
      value: '~50ms',
      label: 'Edge Inference Latency',
      description: 'Dual-stage parallel classification eliminates bad matches before touching expensive cloud LLMs.',
      icon: Gauge,
      accent: 'cyan',
      tag: 'Local Decision Engine',
    },
    {
      value: '5-Tier',
      label: 'Waterfall Fallback Chain',
      description: 'Seamless failover across Gemini & OpenAI models prevents rate-limit drops and service interruptions.',
      icon: Cpu,
      accent: 'emerald',
      tag: 'Zero Dropout Resilience',
    },
    {
      value: '0% Cloud',
      label: 'Required in Local Mode',
      description: 'Operates 100% offline via Chrome window.ai or local Python FastAPI service. Zero tokens, total privacy.',
      icon: CloudOff,
      accent: 'cyan',
      tag: 'Zero-Cost Offline First',
    },
  ];

  return (
    <section className="py-12 border-y border-slate-800/80 bg-dark-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            const isCyan = item.accent === 'cyan';
            return (
              <div
                key={idx}
                className="relative rounded-xl bg-dark-900/80 border border-slate-800 hover:border-cyan-500/30 p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isCyan 
                      ? 'bg-cyan-950/70 border border-cyan-500/30 text-cyan-400' 
                      : 'bg-emerald-950/70 border border-emerald-500/30 text-emerald-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border ${
                    isCyan
                      ? 'bg-cyan-950/50 text-cyan-300 border-cyan-500/20'
                      : 'bg-emerald-950/50 text-emerald-300 border-emerald-500/20'
                  }`}>
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
                    {item.value}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-100 mb-2">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Sub-indicator bar */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Production-tested on Chrome & Firefox</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
