import React, { useRef, useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Radio, 
  Film,
  Layers
} from 'lucide-react';

export const VideoShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeShot, setActiveShot] = useState(0);

  const shots = [
    { src: './shot1.png', label: 'Side Panel Setup' },
    { src: './shot2.png', label: 'Candidate Persona' },
    { src: './shot3.png', label: 'Job Deconstruction' },
    { src: './shot4.png', label: 'In-Page Evaluation' },
    { src: './shot5.png', label: 'Filter & Search' },
    { src: './shot6.png', label: 'Batch Scan Results' },
  ];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration || 1;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = pos * (videoRef.current.duration || 1);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section id="demo" className="py-24 bg-dark-950/70 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-4">
            <Film className="w-3.5 h-3.5" />
            <span>INTERACTIVE MOTION DEMO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            See GradeMyJob in Action
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Watch how GradeMyJob parses live postings in real time, computes candidate match scores, and saves eligible roles automatically.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="relative max-w-4xl mx-auto rounded-2xl bg-dark-900 border border-slate-700/80 p-3 sm:p-5 shadow-2xl overflow-hidden group">
          
          {/* Top metadata pill bar */}
          <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-800 text-xs font-mono text-slate-400 mb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-slate-300">DEMO_WALKTHROUGH.MP4</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-dark-800 text-[10px] text-cyan-300 border border-slate-700">1080p 60FPS</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-[10px] text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <Radio className="w-3 h-3 text-emerald-400" /> Stereo Audio
              </span>
            </div>
          </div>

          {/* HTML5 Video Element */}
          <div className="relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center">
            <video
              ref={videoRef}
              src="./grademyjob-ad.mp4"
              poster="./f_batch.png"
              onTimeUpdate={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-contain"
              playsInline
            />

            {/* Large center play trigger overlay if paused */}
            {!isPlaying && (
              <div 
                onClick={togglePlay}
                className="absolute inset-0 bg-dark-950/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all hover:bg-dark-950/20"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-400 p-0.5 shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-transform flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-dark-950/90 flex items-center justify-center">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-300 fill-cyan-300 ml-1" />
                  </div>
                </div>
              </div>
            )}

            {/* Custom Control Overlay (visible on hover or pause) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-950/95 via-dark-950/60 to-transparent flex flex-col gap-2 opacity-95 group-hover:opacity-100 transition-opacity">
              
              {/* Progress Seek Bar */}
              <div 
                onClick={handleSeek}
                className="w-full h-2 rounded-full bg-slate-800 cursor-pointer overflow-hidden relative group/seek"
              >
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 relative"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Controls Toolbar */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-1">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={togglePlay} 
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  <button 
                    onClick={toggleMute} 
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-400">GradeMyJob Walkthrough</span>
                  <button 
                    onClick={handleFullscreen} 
                    className="p-1.5 rounded-lg hover:bg-slate-800 text-white transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Screenshots Showcase Gallery */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" /> Extension UI Highlights
            </span>
            <span className="text-xs font-mono text-cyan-400">
              {activeShot + 1} / {shots.length}
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {shots.map((shot, idx) => (
              <button
                key={idx}
                onClick={() => setActiveShot(idx)}
                className={`relative rounded-xl overflow-hidden border p-1 text-left transition-all cursor-pointer ${
                  activeShot === idx 
                    ? 'border-cyan-400 bg-cyan-950/40 ring-2 ring-cyan-500/30' 
                    : 'border-slate-800 bg-dark-900/80 hover:border-slate-700'
                }`}
              >
                <img 
                  src={shot.src} 
                  alt={shot.label} 
                  className="w-full h-16 object-cover rounded-lg"
                />
                <div className="mt-1.5 text-[10px] font-mono text-slate-300 truncate">
                  {shot.label}
                </div>
              </button>
            ))}
          </div>

          {/* Active Preview Popout */}
          <div className="mt-4 rounded-xl border border-slate-800 bg-dark-900/90 p-3 overflow-hidden shadow-xl">
            <div className="text-xs font-mono text-cyan-300 mb-2 px-1">
              Active View: {shots[activeShot].label}
            </div>
            <img 
              src={shots[activeShot].src} 
              alt={shots[activeShot].label}
              className="w-full max-h-[460px] object-contain rounded-lg mx-auto bg-dark-950"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
