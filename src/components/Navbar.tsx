import React, { useState, useEffect } from 'react';
import { 
  Chrome, 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenInstallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInstallModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Capabilities', href: '#features' },
    { label: 'Download', href: '#install' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Status Indicator */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-dark-900 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors shadow-inner shadow-cyan-500/10">
              <img 
                src="./grade_my_job_dark.png" 
                alt="GradeMyJob Logo" 
                className="w-7 h-7 object-contain rounded-lg"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-mono">
                Grade<span className="text-cyan-400">My</span>Job
                <span className="text-[10px] font-medium tracking-wide uppercase px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  v0.2
                </span>
              </span>
              <span className="text-[11px] text-slate-400 tracking-wider font-mono">
                EDGE DECISION ENGINE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-dark-800/60 transition-all font-mono text-xs tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenInstallModal}
              className="relative group overflow-hidden flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
            >
              <Chrome className="w-4 h-4" />
              <span>Install Extension</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-dark-900 border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-dark-900/95 border border-cyan-500/30 backdrop-blur-xl space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-200 hover:text-cyan-400 hover:bg-dark-800/80 font-mono"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInstallModal();
                }}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 cursor-pointer"
              >
                <Chrome className="w-4 h-4" />
                <span>Install Extension</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
