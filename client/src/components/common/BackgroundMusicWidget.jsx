import React, { useState, useEffect } from 'react';
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

  // Auto-dismiss notification toast after 8.5 seconds
  useEffect(() => {
    if (showMusicNotification) {
      const timer = setTimeout(() => {
        setShowMusicNotification(false);
      }, 8500);
      return () => clearTimeout(timer);
    }
  }, [showMusicNotification, setShowMusicNotification]);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 pointer-events-auto select-none font-sans">
      {/* 1. Corner Pop-up Notification (Points to the music controller) */}
      <AnimatePresence>
        {showMusicNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-72 sm:w-80 p-4 rounded-2xl bg-slate-900/95 dark:bg-[#090D1A]/95 border border-indigo-500/40 shadow-[0_10px_35px_rgba(99,102,241,0.25)] backdrop-blur-xl relative overflow-hidden"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500" />

            <div className="flex items-start justify-between gap-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-cyan-400 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <Music className="w-4 h-4 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>Soothing Ambient Music</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </h4>
                  <p className="text-[11px] text-cyan-300 font-mono mt-0.5 truncate max-w-[170px]">
                    {currentTrack.name}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowMusicNotification(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="text-[11px] text-slate-300 mt-2.5 leading-relaxed">
              Enjoy relaxing background music while exploring! You can <strong className="text-white">play, pause, or switch between 2 tracks</strong> anytime using this music widget.
            </p>

            <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-800/80">
              <button
                onClick={() => {
                  setIsExpanded(true);
                  setShowMusicNotification(false);
                }}
                className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <Sliders className="w-3 h-3" />
                <span>Open Controller</span>
              </button>

              <button
                onClick={() => setShowMusicNotification(false)}
                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-bold text-slate-200 transition-colors"
              >
                Got it
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Expanded Music Controller Drawer */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-72 sm:w-84 p-4 rounded-2xl bg-slate-950/95 dark:bg-[#070A14]/95 border border-slate-800 shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl space-y-3"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span className="text-xs font-bold text-white">Portfolio Soundtrack</span>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                title="Minimize player"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Currently Playing Card */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center gap-3">
              {/* Vinyl Disc Animation */}
              <div
                className={`w-11 h-11 rounded-full bg-gradient-to-tr from-slate-800 to-slate-950 border border-slate-700 flex items-center justify-center shadow-lg shrink-0 ${
                  isMusicPlaying ? 'animate-[spin_4s_linear_infinite]' : ''
                }`}
                style={{
                  boxShadow: isMusicPlaying
                    ? `0 0 15px ${currentTrack.color}55`
                    : 'none',
                }}
              >
                <div
                  className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center"
                  style={{ backgroundColor: currentTrack.color }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-950" />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase tracking-wider font-mono text-cyan-400 font-bold block">
                  Track {currentTrackIndex + 1} of 2
                </span>
                <h5 className="text-xs font-bold text-white truncate">
                  {currentTrack.name}
                </h5>
                <span className="text-[10px] text-slate-400 block truncate">
                  {currentTrack.genre}
                </span>
              </div>
            </div>

            {/* Track Switcher Tabs (2 Music Options) */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block px-0.5">
                Select Soothing Track:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {TRACKS.map((trk, idx) => (
                  <button
                    key={trk.id}
                    onClick={() => switchTrack(idx)}
                    className={`px-2.5 py-2 rounded-xl text-left border transition-all ${
                      currentTrackIndex === idx
                        ? 'bg-indigo-600/30 border-cyan-400 text-white shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                    }`}
                  >
                    <span className="text-[10px] font-bold block truncate">
                      {idx === 0 ? '🎹 Piano Nocturne' : '☕ Lo-Fi Chill'}
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono block">
                      {trk.tempo}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Playback Controls & Volume Slider */}
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
              {/* Play / Pause */}
              <button
                onClick={toggleMusic}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 text-white text-xs font-bold shadow-md shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                {isMusicPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 fill-white" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Play</span>
                  </>
                )}
              </button>

              {/* Next Track Switcher */}
              <button
                onClick={() => switchTrack((currentTrackIndex + 1) % TRACKS.length)}
                className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Switch to Next Track"
              >
                <SkipForward className="w-3.5 h-3.5" />
              </button>

              {/* Volume Slider */}
              <div className="flex items-center gap-1.5 flex-1 max-w-[100px]">
                <Volume2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
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

      {/* 3. Floating Mini Music Pill (Persistent Controller Button) */}
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className={`flex items-center gap-2.5 px-3.5 py-2 rounded-full border shadow-xl backdrop-blur-xl transition-all cursor-pointer ${
            isMusicPlaying
              ? 'bg-slate-950/90 dark:bg-[#070A14]/90 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] text-white'
              : 'bg-slate-900/90 dark:bg-[#0B0F19]/90 border-slate-800 text-slate-400 hover:text-slate-200'
          }`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {/* Soundwave Equalizer Animation */}
          <div className="flex items-end gap-0.5 h-3.5 shrink-0">
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

          {/* Track Name */}
          <div className="flex flex-col text-left pr-1">
            <span className="text-[11px] font-bold text-slate-100 leading-none truncate max-w-[120px] sm:max-w-[150px]">
              {currentTrack.name}
            </span>
            <span className="text-[9px] text-cyan-400 font-mono leading-none mt-0.5">
              {isMusicPlaying ? 'Playing Ambient 🎵' : 'Music Paused'}
            </span>
          </div>

          {/* Quick Play/Pause Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMusic();
            }}
            className="p-1.5 rounded-full bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 transition-colors"
            title={isMusicPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isMusicPlaying ? (
              <Pause className="w-3 h-3 fill-cyan-300" />
            ) : (
              <Play className="w-3 h-3 fill-cyan-300 ml-0.5" />
            )}
          </button>

          {/* Expand/Collapse Chevron */}
          <span className="text-slate-400 hover:text-white">
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5" />
            )}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default BackgroundMusicWidget;
