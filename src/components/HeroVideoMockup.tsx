import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Expand, X } from 'lucide-react';

interface HeroVideoMockupProps {
  videoSrc?: string;
  posterSrc?: string;
  title?: string;
}

export const HeroVideoMockup: React.FC<HeroVideoMockupProps> = ({
  videoSrc = './grademyjob-ad.mp4',
  posterSrc = './f_batch.png',
  title = 'GradeMyJob — Live Triage & Fit Demo',
}) => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const lightboxVideoRef = useRef<HTMLVideoElement>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Toggle ambient hero sound
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!heroVideoRef.current) return;
    const nextState = !heroVideoRef.current.muted;
    heroVideoRef.current.muted = nextState;
    setIsMuted(nextState);
  };

  // Open Lightbox: pause hero, sync time, unmute & play lightbox video
  const openLightbox = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!heroVideoRef.current) return;

    const currentTime = heroVideoRef.current.currentTime;
    heroVideoRef.current.pause();

    setIsLightboxOpen(true);

    // Sync time and autoplay with sound after modal mounts
    setTimeout(() => {
      if (lightboxVideoRef.current) {
        lightboxVideoRef.current.currentTime = currentTime;
        lightboxVideoRef.current.muted = false;
        lightboxVideoRef.current.play().catch(() => {
          // Autoplay fallback if restricted
          if (lightboxVideoRef.current) {
            lightboxVideoRef.current.muted = true;
            lightboxVideoRef.current.play();
          }
        });
      }
    }, 50);
  };

  // Close Lightbox: pause lightbox, sync time back, resume hero video
  const closeLightbox = () => {
    if (lightboxVideoRef.current && heroVideoRef.current) {
      const currentTime = lightboxVideoRef.current.currentTime;
      lightboxVideoRef.current.pause();
      heroVideoRef.current.currentTime = currentTime;
      heroVideoRef.current.play().catch(() => {});
    }
    setIsLightboxOpen(false);
  };

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <>
      {/* macOS Window Mockup Frame (Adapted to 4:5 Portrait Video) */}
      <div className="relative w-full max-w-[360px] sm:max-w-[420px] mx-auto rounded-2xl overflow-hidden border border-slate-700/60 bg-dark-900 shadow-2xl shadow-cyan-950/40 group">
        
        {/* macOS Window Header (44px, yiy-io exact) */}
        <div className="h-11 px-4 bg-slate-900/95 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            <span className="ml-2 font-mono text-xs text-slate-400 truncate">
              {title}
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
            <span>Click to expand</span>
          </div>
        </div>

        {/* Video Body (4:5 Aspect Ratio — Zero Cropping) */}
        <div className="relative aspect-[4/5] bg-black overflow-hidden">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={posterSrc}
            onClick={openLightbox}
            className="w-full h-full object-contain bg-black cursor-pointer hover:brightness-105 transition-all"
            title="Click to watch full demo"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {/* Floating Overlay Controls (Bottom-Left) */}
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2.5">
            {/* Sound Toggle Button */}
            <button
              onClick={toggleSound}
              type="button"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all shadow-lg cursor-pointer ${
                isMuted
                  ? 'bg-slate-950/80 hover:bg-cyan-500/90 border border-slate-700/80 hover:border-cyan-400 text-slate-200 hover:text-dark-950 hover:-translate-y-0.5 hover:shadow-cyan-500/35'
                  : 'bg-emerald-500/90 border border-emerald-400 text-white shadow-emerald-500/30'
              }`}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isMuted ? 'Unmute' : 'Mute'}</span>
            </button>

            {/* Fullscreen / Lightbox Modal Button */}
            <button
              onClick={openLightbox}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-slate-950/80 hover:bg-white border border-slate-700/80 hover:border-white text-slate-200 hover:text-dark-950 hover:-translate-y-0.5 backdrop-blur-md transition-all shadow-lg cursor-pointer hover:shadow-white/20"
              aria-label="Watch Fullscreen"
            >
              <Expand className="w-3.5 h-3.5" />
              <span>Fullscreen</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cinematic Video Lightbox Modal (4:5 Aspect Ratio) */}
      {isLightboxOpen && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-6 bg-[#04070d]/95 backdrop-blur-xl animate-fadeIn"
          aria-hidden="false"
        >
          {/* Rotating Close Button (Top-Right) */}
          <button
            onClick={closeLightbox}
            type="button"
            className="absolute top-5 right-5 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white hover:text-cyan-400 flex items-center justify-center transition-all duration-300 hover:rotate-90 cursor-pointer shadow-xl z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Lightbox Content Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm sm:max-w-md flex flex-col items-center relative animate-scaleUp"
          >
            <video
              ref={lightboxVideoRef}
              controls
              playsInline
              preload="auto"
              className="w-full max-h-[82vh] aspect-[4/5] object-contain rounded-2xl border border-cyan-500/40 shadow-2xl shadow-cyan-950/70 bg-black outline-none"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>

            {/* Lightbox Caption */}
            <div className="mt-3.5 text-sm font-mono font-medium text-slate-400 text-center">
              {title}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
