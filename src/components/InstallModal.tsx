import React from 'react';
import { X, Chrome, Download, ExternalLink } from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-dark-900 border border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-dark-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Chrome className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white font-mono">Install GradeMyJob</h3>
            <span className="text-xs text-slate-400">Cross-Browser Extension (Chrome MV3 & Firefox MV2)</span>
          </div>
        </div>

        {/* Browser Store Options */}
        <div className="space-y-4 mb-6">
          {/* Chrome Web Store - Live */}
          <a
            href="https://chromewebstore.google.com/detail/grademyjob-ai-job-assista/ejhkkeaanbligdgpjmbpahjkidejnake"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-dark-950 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-950/20 transition-all group shadow-lg shadow-cyan-950/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Chrome className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white group-hover:text-cyan-300">Chrome Web Store</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    Live
                  </span>
                </div>
                <div className="text-xs text-slate-400">Official Google Chrome Web Store</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Firefox Add-on - Live */}
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/grademyjob/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-xl bg-dark-950 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-950/20 transition-all group shadow-lg shadow-emerald-950/30"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Download className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-300">Firefox Add-on Store</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live
                  </span>
                </div>
                <div className="text-xs text-slate-400">Official Mozilla Add-ons Directory</div>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-dark-800 hover:bg-dark-700 transition-colors cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
