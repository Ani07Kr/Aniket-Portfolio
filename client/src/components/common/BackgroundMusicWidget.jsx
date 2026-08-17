import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Music,
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  Sparkles,
  X,
  Sliders,
  Radio,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { TRACKS } from '../../services/ambientMusicEngine';

export const BackgroundMusicWidget = () => {
  const {
    isMusicPlaying,
    toggleMusic,
    currentTrackIndex,
    switchTrack,
    musicVolume,
    setMusicVolume,
    showMusicNotification,
    setShowMusicNotification,
  } = usePortfolio();

  const [isExpanded, setIsExpanded] = useState(false);
  const currentTrack = TRACKS[currentTrackIndex] || TRACKS[0];
  const widgetRef = useRef(null);

  // Auto-dismiss notification toast on scroll or timer (6.5s)
  useEffect(() => {
    if (showMusicNotification) {
      const timer = setTimeout(() => {
        setShowMusicNotification(false);
      }, 6500);

      const handleScroll = () => {
        setShowMusicNotification(false);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [showMusicNotification, setShowMusicNotification]);

  // Close expanded drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    if (isExpanded) {
      document.addEventListener('pointerdown', handleClickOutside);
      return () => document.removeEventListener('pointerdown', handleClickOutside);
    }
  }, [isExpanded]);

  return (
    <>
      {/* Mobile Backdrop Overlay when Expanded Drawer is open */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
            className="fixed inset-0 z-40 bg-black/40 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none"
          />
        )}
      </AnimatePresence>

      <div
        ref={widgetRef}
        className="fixed bottom-3 left-3 sm:bottom-6 sm:left-6 z-40 flex flex-col items-start gap-2.5 pointer-events-auto select-none font-sans max-w-[calc(100vw-1.5rem)] sm:max-w-sm"
      >
        {/* 1. Corner Pop-up Notification (Mobile Optimized: Non-intrusive, Clean Margin) */}
        <AnimatePresence>
          {showMusicNotification && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-[calc(100vw-1.5rem)] max-w-[310px] sm:max-w-[330px] p-3 sm:p-4 rounded-2xl bg-slate-950/95 dark:bg-[#070A14]/95 border border-indigo-500/40 shadow-[0_12px_35px_rgba(0,0,0,0.7)] backdrop-blur-2xl relative overflow-hidden"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-indigo-500/20 text-cyan-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                    <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[11px] sm:text-xs font-bold text-white flex items-center gap-1">
                      <span>Soothing Music Playing</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-cyan-300 font-mono truncate max-w-[170px]">
                      {currentTrack.name}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setShowMusicNotification(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors shrink-0"
                  title="Dismiss"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10px] sm:text-[11px] text-slate-300 mt-2 leading-snug">
                You can <strong className="text-white">play, pause, or switch between 2 tracks</strong> anytime using this music widget.
              </p>

              <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    setIsExpanded(true);
                    setShowMusicNotification(false);
                  }}
                  className="text-[10px] sm:text-[11px] font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <Sliders className="w-3 h-3" />
                  <span>Choose Track</span>
                </button>

                <button
                  onClick={() => setShowMusicNotification(false)}
                  className="px-2.5 py-0.5 sm:py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-bold text-slate-200 transition-colors"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. Expanded Music Controller Drawer / Popover */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-[calc(100vw-1.5rem)] max-w-[300px] sm:max-w-[340px] p-3.5 sm:p-4 rounded-2xl bg-slate-950/95 dark:bg-[#070A14]/95 border border-slate-800 shadow-[0_20px_45px_rgba(0,0,0,0.85)] backdrop-blur-2xl space-y-2.5 sm:space-y-3"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold text-white">Portfolio Soundtrack</span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                  title="Close controller"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Currently Playing Track Info */}
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-2.5">
                {/* Vinyl Disc Animation */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-slate-800 to-slate-950 border border-slate-700 flex items-center justify-center shadow-lg shrink-0 ${
                    isMusicPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
                  }`}
                  style={{
                    boxShadow: isMusicPlaying
                      ? `0 0 12px ${currentTrack.color}55`
                      : 'none',
                  }}
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-slate-600 flex items-center justify-center"
                    style={{ backgroundColor: currentTrack.color }}
                  >
                    <div className="w-1 h-1 rounded-full bg-slate-950" />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-[9px] uppercase tracking-wider font-mono text-cyan-400 font-bold block">
                    Track {currentTrackIndex + 1} of 2
                  </span>
                  <h5 className="text-[11px] sm:text-xs font-bold text-white truncate leading-tight">
                    {currentTrack.name}
                  </h5>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 block truncate">
                    {currentTrack.genre}
                  </span>
                </div>
              </div>

              {/* 2 Track Switcher Buttons */}
              <div className="space-y-1">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase text-slate-400 font-semibold block px-0.5">
                  Select Track:
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {TRACKS.map((trk, idx) => (
                    <button
                      key={trk.id}
                      onClick={() => switchTrack(idx)}
                      className={`px-2 py-1.5 rounded-xl text-left border transition-all touch-manipulation ${
                        currentTrackIndex === idx
                          ? 'bg-indigo-600/30 border-cyan-400 text-white shadow-[0_0_10px_rgba(6,182,212,0.25)]'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                      }`}
                    >
                      <span className="text-[10px] font-bold block truncate">
                        {idx === 0 ? '🎹 Piano Calm' : '☕ Lo-Fi Chill'}
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-slate-400 font-mono block">
                        {trk.tempo}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Playback Controls & Volume Slider */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2">
                {/* Play / Pause */}
                <button
                  onClick={toggleMusic}
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 text-white text-[11px] font-bold shadow-md hover:scale-105 transition-all touch-manipulation shrink-0"
                >
                  {isMusicPlaying ? (
                    <>
                      <Pause className="w-3 h-3 fill-white" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 fill-white" />
                      <span>Play</span>
                    </>
                  )}
                </button>

                {/* Next Track Switcher */}
                <button
                  onClick={() => switchTrack((currentTrackIndex + 1) % TRACKS.length)}
                  className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors touch-manipulation shrink-0"
                  title="Switch to Next Track"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>

                {/* Volume Slider */}
                <div className="flex items-center gap-1 flex-1 max-w-[85px] sm:max-w-[100px]">
                  <Volume2 className="w-3 h-3 text-slate-400 shrink-0" />
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={musicVolume}
                    onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                    title={`Volume: ${Math.round(musicVolume * 100)}%`}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3. Floating Mini Music Pill (Compact & Non-Intrusive on Mobile) */}
        <div className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded((prev) => !prev)}
            className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border shadow-xl backdrop-blur-xl transition-all cursor-pointer touch-manipulation ${
              isMusicPlaying
                ? 'bg-slate-950/90 dark:bg-[#070A14]/90 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)] text-white'
                : 'bg-slate-900/90 dark:bg-[#0B0F19]/90 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            {/* Equalizer Wave Animation */}
            <div className="flex items-end gap-0.5 h-3 shrink-0">
              <span
                className={`w-0.5 rounded-full bg-cyan-400 transition-all ${
                  isMusicPlaying
                    ? 'h-full animate-[bounce_0.6s_infinite_ease-in-out]'
                    : 'h-1.5'
                }`}
              />
              <span
                className={`w-0.5 rounded-full bg-indigo-400 transition-all ${
                  isMusicPlaying
                    ? 'h-2/3 animate-[bounce_0.8s_infinite_ease-in-out_0.2s]'
                    : 'h-2'
                }`}
              />
              <span
                className={`w-0.5 rounded-full bg-purple-400 transition-all ${
                  isMusicPlaying
                    ? 'h-full animate-[bounce_0.5s_infinite_ease-in-out_0.1s]'
                    : 'h-1'
                }`}
              />
            </div>

            {/* Track Name (Truncated cleanly on mobile) */}
            <div className="flex flex-col text-left pr-0.5 max-w-[95px] xs:max-w-[130px] sm:max-w-[160px]">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-100 leading-none truncate">
                {currentTrack.name}
              </span>
              <span className="text-[8px] sm:text-[9px] text-cyan-400 font-mono leading-none mt-0.5">
                {isMusicPlaying ? 'Playing 🎵' : 'Paused'}
              </span>
            </div>

            {/* Quick Play/Pause Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMusic();
              }}
              className="p-1 rounded-full bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors touch-manipulation shrink-0"
              title={isMusicPlaying ? 'Pause Music' : 'Play Music'}
            >
              {isMusicPlaying ? (
                <Pause className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-cyan-300" />
              ) : (
                <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-cyan-300 ml-0.5" />
              )}
            </button>

            {/* Expand / Minimize Arrow */}
            <span className="text-slate-400 hover:text-white shrink-0">
              {isExpanded ? (
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              ) : (
                <ChevronUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              )}
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BackgroundMusicWidget;
