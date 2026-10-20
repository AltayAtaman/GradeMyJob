import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Chrome 
} from 'lucide-react';

import { HeroSlide } from './components/slides/HeroSlide';
import { CapabilitiesSlide } from './components/slides/CapabilitiesSlide';
import { DownloadSlide } from './components/slides/DownloadSlide';
import { InstallModal } from './components/InstallModal';

interface SlideConfig {
  id: string;
  name: string;
}

const SLIDES: SlideConfig[] = [
  { id: 'hero', name: 'Overview' },
  { id: 'features', name: 'Capabilities' },
  { id: 'install', name: 'Download' },
];

export const App: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isProgrammaticScroll = useRef(false);

  // Scroll to slide index
  const scrollToSlide = useCallback((index: number) => {
    const target = Math.max(0, Math.min(index, SLIDES.length - 1));
    if (trackRef.current) {
      isProgrammaticScroll.current = true;
      const slideWidth = trackRef.current.clientWidth;
      trackRef.current.scrollTo({
        left: target * slideWidth,
        behavior: 'smooth',
      });
      setActiveSlide(target);
      window.history.replaceState(null, '', `#${SLIDES[target].id}`);
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 600);
    }
  }, []);

  const nextSlide = useCallback(() => {
    scrollToSlide(activeSlide + 1);
  }, [activeSlide, scrollToSlide]);

  const prevSlide = useCallback(() => {
    scrollToSlide(activeSlide - 1);
  }, [activeSlide, scrollToSlide]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          scrollToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSlide(SLIDES.length - 1);
          break;
        case 'f':
        case 'F':
          toggleFullscreen();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, scrollToSlide]);

  // Sync scroll on swipe / touch / manual drag
  const handleScroll = () => {
    if (isProgrammaticScroll.current || !trackRef.current) return;
    const slideWidth = trackRef.current.clientWidth;
    const scrollLeft = trackRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / slideWidth);
    if (newIndex !== activeSlide && newIndex >= 0 && newIndex < SLIDES.length) {
      setActiveSlide(newIndex);
      window.history.replaceState(null, '', `#${SLIDES[newIndex].id}`);
    }
  };

  // Initial hash routing on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const matchIndex = SLIDES.findIndex((s) => s.id === hash);
      if (matchIndex !== -1) {
        scrollToSlide(matchIndex);
      }
    }
  }, [scrollToSlide]);

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-[#0a0c10] text-zinc-200 select-none">
      
      {/* CAD Blueprint 40px grid background */}
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,#171b22_1px,transparent_1px),linear-gradient(to_bottom,#171b22_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      {/* Top-left ambient white spotlight beam */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Top-right subtle cyan accent glow (#06b6d4, opacity ~0.10) */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#06b6d4]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Persistent Floating Top Header */}
      <header className="fixed top-4 left-6 right-6 z-40 flex items-center justify-between pointer-events-none">
        {/* Brand */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-dark-900 border border-cyan-500/30 shadow-inner">
            <img 
              src="./grade_my_job_dark.png" 
              alt="GradeMyJob" 
              className="w-5 h-5 object-contain"
            />
            <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold tracking-tight text-white">
              Grade<span className="text-cyan-400">My</span>Job
            </span>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-dark-900 border border-slate-800 text-zinc-400">
              DECK v1.0
            </span>
          </div>
        </div>

        {/* Top Right Quick Actions */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsInstallModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-dark-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md shadow-cyan-500/20 active:scale-95 cursor-pointer"
          >
            <Chrome className="w-3.5 h-3.5" />
            <span>Install</span>
          </button>
        </div>
      </header>

      {/* Floating Left Arrow Button */}
      <button
        onClick={prevSlide}
        disabled={activeSlide === 0}
        aria-label="Previous slide"
        className={`fixed left-4 top-1/2 -translate-y-1/2 z-40 p-2.5 rounded-full bg-dark-900/90 border border-slate-700/80 text-zinc-300 transition-all shadow-xl backdrop-blur-md ${
          activeSlide === 0 
            ? 'opacity-20 cursor-not-allowed' 
            : 'hover:border-cyan-500/50 hover:text-white hover:scale-110 active:scale-95 cursor-pointer'
        }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Floating Right Arrow Button */}
      <button
        onClick={nextSlide}
        disabled={activeSlide === SLIDES.length - 1}
        aria-label="Next slide"
        className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 p-2.5 rounded-full bg-dark-900/90 border border-slate-700/80 text-zinc-300 transition-all shadow-xl backdrop-blur-md ${
          activeSlide === SLIDES.length - 1 
            ? 'opacity-20 cursor-not-allowed' 
            : 'hover:border-cyan-500/50 hover:text-white hover:scale-110 active:scale-95 cursor-pointer'
        }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Horizontal Flex Slide Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {/* Slide 1: Hero & Embedded Video */}
        <section 
          id="hero" 
          className="min-w-full h-full snap-start flex items-center justify-center px-6 md:px-16 pt-20 pb-20 relative z-10"
        >
          <HeroSlide 
            onOpenInstallModal={() => setIsInstallModalOpen(true)} 
            onNextSlide={nextSlide} 
          />
        </section>

        {/* Slide 2: Capabilities (Clean Bento, No Media Images) */}
        <section 
          id="features" 
          className="min-w-full h-full snap-start flex items-center justify-center px-6 md:px-16 pt-20 pb-20 relative z-10"
        >
          <CapabilitiesSlide />
        </section>

        {/* Slide 3: Download Center (Vertically Centered) */}
        <section 
          id="install" 
          className="min-w-full h-full snap-start flex items-center justify-center px-6 md:px-16 pt-20 pb-20 relative z-10"
        >
          <DownloadSlide onOpenInstallModal={() => setIsInstallModalOpen(true)} />
        </section>
      </div>

      {/* Floating Bottom Pill Status Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-4 py-2 rounded-full bg-dark-900/90 border border-slate-800 shadow-2xl backdrop-blur-md">
        
        {/* Interactive Indicator Dots */}
        <div className="flex items-center gap-1.5 pr-2 border-r border-slate-800">
          {SLIDES.map((slide, idx) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Jump to slide ${idx + 1}: ${slide.name}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive 
                    ? 'w-6 h-2 bg-gradient-to-r from-cyan-400 to-emerald-400' 
                    : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-400'
                }`}
              />
            );
          })}
        </div>

        {/* Slide Counter & Active Name */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-zinc-400">
            Slide <strong className="text-white">{activeSlide + 1}</strong> / {SLIDES.length}
          </span>
          <span className="text-slate-600">•</span>
          <span className="text-cyan-400 font-semibold truncate max-w-[120px] sm:max-w-none">
            {SLIDES[activeSlide].name}
          </span>
        </div>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="p-1.5 ml-1 rounded-md text-zinc-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
          title="Toggle Fullscreen (F)"
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>

      </nav>

      {/* Cross-Browser Install Modal */}
      <InstallModal 
        isOpen={isInstallModalOpen} 
        onClose={() => setIsInstallModalOpen(false)} 
      />

    </div>
  );
};

export default App;
