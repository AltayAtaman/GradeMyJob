import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Does GradeMyJob store my resume or personal data?',
      answer:
        'No. GradeMyJob operates on an offline-first, client-side persistence model using the WebExtension `browser.storage.local` API. Your candidate persona, job evaluation history, and company notes stay in your local browser sandbox. No user resumes or tracking telemetry are stored on centralized analytics servers.',
    },
    {
      question: 'What job boards and platforms are currently supported?',
      answer:
        'GradeMyJob features dedicated DOM scrapers and in-page injection hooks for LinkedIn (individual job view & search result feeds), Indeed (listing feeds & job detail containers), and We Work Remotely (WWR remote job categories). Additional scrapers can be extended easily via the modular scraper architecture.',
    },
    {
      question: 'How does Local Mode work without an internet connection?',
      answer:
        'Local Mode offers two offline paths: Chrome’s built-in Prompt API (`window.ai` / Gemini Nano) executing on-device, or the bundled local Python FastAPI decision server (`laya_server.py`) running on localhost:8000. Both options analyze job text and score candidate alignment with zero external cloud API calls.',
    },
    {
      question: 'Is GradeMyJob free to use?',
      answer:
        'Yes. You can run unlimited evaluations locally without any subscription. For cloud AI mode, a generous free tier of 25 cloud evaluations is refreshed daily at 00:00 UTC.',
    },
    {
      question: 'Can I bring my own OpenAI or Gemini API keys?',
      answer:
        'Yes. GradeMyJob provides a Bring-Your-Own-Key (BYOK) settings toggle in the side panel. You can supply your own Google Gemini API key or OpenAI key (defaulting to GPT-4o-mini) to bypass default quota limits directly from your browser.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Everything You Need to Know
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Transparent architecture, privacy guarantees, and usage details.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-dark-900 border-cyan-500/40 shadow-lg shadow-cyan-950/20' 
                    : 'bg-dark-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-semibold text-base sm:text-lg text-slate-100">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-dark-800 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-cyan-400 bg-cyan-950' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
