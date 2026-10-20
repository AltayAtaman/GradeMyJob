import React from 'react';
import { 
  UserCheck, 
  Compass, 
  Send, 
  CheckCircle2, 
  MousePointerClick 
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Install & Define Your Candidate Persona',
      description: 'Add GradeMyJob to Chrome or Firefox. Enter your core engineering proficiencies, preferred seniority level, and dealbreakers (e.g. visa requirements, relocation).',
      icon: UserCheck,
      badge: '30 Seconds Setup',
      accent: 'cyan',
    },
    {
      num: '02',
      title: 'Browse Job Boards as Usual',
      description: 'Open LinkedIn, Indeed, or We Work Remotely. GradeMyJob hooks directly into the DOM to inject instantaneous match score gauges right next to Easy Apply.',
      icon: Compass,
      badge: 'Zero Behavior Change',
      accent: 'emerald',
    },
    {
      num: '03',
      title: 'Apply to High-Fit Roles Only',
      description: 'Filter search feeds to inspect only 8.0+ fit postings. Batch scan entire job search pages in seconds and let GradeMyJob automatically bookmark high-confidence roles.',
      icon: Send,
      badge: '3x Higher Interview Rate',
      accent: 'cyan',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-dark-900/50 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <MousePointerClick className="w-3.5 h-3.5" />
            <span>STREAMLINED WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            How GradeMyJob Works
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            From setup to high-converting job applications in three effortless steps.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCyan = step.accent === 'cyan';
            return (
              <div 
                key={idx}
                className="relative rounded-2xl bg-dark-900 border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-mono text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                      {step.num}
                    </span>
                    <span className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-md border ${
                      isCyan
                        ? 'bg-cyan-950 text-cyan-300 border-cyan-500/30'
                        : 'bg-emerald-950 text-emerald-300 border-emerald-500/30'
                    }`}>
                      {step.badge}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    isCyan
                      ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-400'
                      : 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-400'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Step {step.num} Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
