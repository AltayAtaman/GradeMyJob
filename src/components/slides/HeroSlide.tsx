import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { HeroVideoMockup } from '../HeroVideoMockup';

interface HeroSlideProps {
  onOpenInstallModal: () => void;
  onNextSlide: () => void;
}

export const HeroSlide: React.FC<HeroSlideProps> = ({ onOpenInstallModal, onNextSlide }) => {
  return (
    <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
      
      {/* Left Column: Text & Value Prop */}
      <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300 w-fit shadow-md shadow-cyan-950/40">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-[11px]">Sub-Second Edge Triage & Serverless AI Engine</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
          Stop Applying Blind.{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
            Know Your Fit
          </span>{' '}
          in Milliseconds.
        </h1>

        {/* Subheadline */}
        <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
          Sub-second edge analysis that extracts technical stacks, isolates non-negotiable requirements, and calculates real-time candidate fit directly inside <strong className="text-white font-medium">LinkedIn</strong> and <strong className="text-white font-medium">Indeed</strong>.
        </p>

        {/* Top 3 Metrics Strip */}
        <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-dark-900/90 border border-slate-800 text-xs font-mono">
          <div className="flex flex-col">
            <span className="text-cyan-400 font-bold text-base sm:text-lg">~50ms</span>
            <span className="text-zinc-400 text-[11px] truncate">Edge Latency</span>
          </div>
          <div className="flex flex-col border-x border-slate-800 px-3">
            <span className="text-emerald-400 font-bold text-base sm:text-lg">5-Tier</span>
            <span className="text-zinc-400 text-[11px] truncate">Model Fallback</span>
          </div>
          <div className="flex flex-col pl-2">
            <span className="text-cyan-300 font-bold text-base sm:text-lg">0% Cloud</span>
            <span className="text-zinc-400 text-[11px] truncate">Local Mode</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <button
            onClick={onOpenInstallModal}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/20 active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Install Extension</span>
          </button>

          <button
            onClick={onNextSlide}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-zinc-300 bg-dark-900 border border-slate-700/80 hover:border-cyan-500/40 hover:text-white transition-all active:scale-95 cursor-pointer group"
          >
            <span>Explore Capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>

      {/* Right Column: macOS Window Mockup Video Player (yiy-io style) */}
      <div className="lg:col-span-6 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-lg pointer-events-none" />
        <HeroVideoMockup />
      </div>

    </div>
  );
};
