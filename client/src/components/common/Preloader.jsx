import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, FastForward, Music, Zap, Code2, Play } from 'lucide-react';

// 12 Programming Languages & Tech Stacks with Tuned Musical Piano Frequencies (C4 to B4)
const TECH_KEYS = [
  {
    id: 'js',
    name: 'JavaScript',
    short: 'JS',
    symbol: '{ }',
    color: '#F7DF1E',
    glow: 'rgba(247, 223, 30, 0.5)',
    bgGrad: 'from-amber-400/25 to-yellow-500/15',
    border: 'border-yellow-400/50',
    note: 'C4',
    freq: 261.63,
    isBlack: false,
    keyLabel: 'C',
    codeSnip: 'const ak = dev();',
  },
  {
    id: 'ts',
    name: 'TypeScript',
    short: 'TS',
    symbol: '<T>',
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.5)',
    bgGrad: 'from-blue-500/25 to-indigo-600/15',
    border: 'border-blue-400/50',
    note: 'C#4',
    freq: 277.18,
    isBlack: true,
    keyLabel: 'C#',
    codeSnip: 'type Skill = AI;',
  },
  {
    id: 'py',
    name: 'Python',
    short: 'PY',
    symbol: 'def',
    color: '#60A5FA',
    glow: 'rgba(96, 165, 250, 0.5)',
    bgGrad: 'from-sky-400/25 to-blue-600/15',
    border: 'border-sky-400/50',
    note: 'D4',
    freq: 293.66,
    isBlack: false,
    keyLabel: 'D',
    codeSnip: 'import torch, eeg',
  },
  {
    id: 'react',
    name: 'React.js',
    short: 'React',
    symbol: '<JSX>',
    color: '#22D3EE',
    glow: 'rgba(34, 211, 238, 0.5)',
    bgGrad: 'from-cyan-400/25 to-teal-500/15',
    border: 'border-cyan-400/50',
    note: 'D#4',
    freq: 311.13,
    isBlack: true,
    keyLabel: 'D#',
    codeSnip: 'const [val] = use()',
  },
  {
    id: 'node',
    name: 'Node.js',
    short: 'Node',
    symbol: 'async',
    color: '#4ADE80',
    glow: 'rgba(74, 222, 128, 0.5)',
    bgGrad: 'from-emerald-400/25 to-green-600/15',
    border: 'border-emerald-400/50',
    note: 'E4',
    freq: 329.63,
    isBlack: false,
    keyLabel: 'E',
    codeSnip: 'express().listen()',
  },
  {
    id: 'java',
    name: 'Java',
    short: 'Java',
    symbol: 'class',
    color: '#FB923C',
    glow: 'rgba(251, 146, 60, 0.5)',
    bgGrad: 'from-orange-400/25 to-amber-600/15',
    border: 'border-orange-400/50',
    note: 'F4',
    freq: 349.23,
    isBlack: false,
    keyLabel: 'F',
    codeSnip: 'public static void',
  },
  {
    id: 'cpp',
    name: 'C++',
    short: 'C++',
    symbol: 'std::',
    color: '#818CF8',
    glow: 'rgba(129, 140, 248, 0.5)',
    bgGrad: 'from-indigo-400/25 to-violet-600/15',
    border: 'border-indigo-400/50',
    note: 'F#4',
    freq: 369.99,
    isBlack: true,
    keyLabel: 'F#',
    codeSnip: '#include <vector>',
  },
  {
    id: 'ai',
    name: 'AI / PyTorch',
    short: 'AI/ML',
    symbol: 'tensor',
    color: '#F43F5E',
    glow: 'rgba(244, 63, 94, 0.5)',
    bgGrad: 'from-rose-400/25 to-pink-600/15',
    border: 'border-rose-400/50',
    note: 'G4',
    freq: 392.0,
    isBlack: false,
    keyLabel: 'G',
    codeSnip: 'model.forward(x)',
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    short: 'Mongo',
    symbol: 'db.find',
    color: '#34D399',
    glow: 'rgba(52, 211, 153, 0.5)',
    bgGrad: 'from-teal-400/25 to-emerald-600/15',
    border: 'border-teal-400/50',
    note: 'G#4',
    freq: 415.3,
    isBlack: true,
    keyLabel: 'G#',
    codeSnip: 'Schema({ ai: true })',
  },
  {
    id: 'sql',
    name: 'SQL DB',
    short: 'SQL',
    symbol: 'SELECT',
    color: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.5)',
    bgGrad: 'from-cyan-500/25 to-blue-600/15',
    border: 'border-cyan-500/50',
    note: 'A4',
    freq: 440.0,
    isBlack: false,
    keyLabel: 'A',
    codeSnip: 'SELECT * FROM work',
  },
  {
    id: 'next',
    name: 'Next.js',
    short: 'Next',
    symbol: 'App()',
    color: '#C084FC',
    glow: 'rgba(192, 132, 252, 0.5)',
    bgGrad: 'from-purple-400/25 to-fuchsia-600/15',
    border: 'border-purple-400/50',
    note: 'A#4',
    freq: 466.16,
    isBlack: true,
    keyLabel: 'A#',
    codeSnip: 'export default App;',
  },
  {
    id: 'docker',
    name: 'Cloud & Git',
    short: 'Cloud',
    symbol: 'deploy',
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.5)',
    bgGrad: 'from-blue-400/25 to-cyan-600/15',
    border: 'border-blue-400/50',
    note: 'B4',
    freq: 493.88,
    isBlack: false,
    keyLabel: 'B',
    codeSnip: 'git push origin main',
  },
];

// Rich Multi-Stage Symphony Narrative across 12-14 seconds
const SYMPHONY_MOVEMENTS = [
  {
    progressThreshold: 0,
    title: 'Movement I: The Prelude',
    description: 'Tuning developer piano soundstage & pentatonic scale...',
  },
  {
    progressThreshold: 20,
    title: 'Movement II: Full-Stack Polyphony',
    description: 'Harmonizing React.js, Node.js, Express & TypeScript...',
  },
  {
    progressThreshold: 45,
    title: 'Movement III: Neural Network Resonance',
    description: 'Synthesizing PyTorch weights & EEG sleep research harmonics...',
  },
  {
    progressThreshold: 70,
    title: 'Movement IV: Indian Patents & Inventions',
    description: 'Orchestrating Vedic AI algorithms (Patent 26/2025 & 28/2024)...',
  },
  {
    progressThreshold: 90,
    title: 'Movement V: Grand Finale & Launch',
    description: 'Symphony complete! Launching Aniket Kumar Portfolio...',
  },
];

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [activeMovement, setActiveMovement] = useState(SYMPHONY_MOVEMENTS[0]);
  const [activeKeyIndices, setActiveKeyIndices] = useState([]);
  const [floatingNotes, setFloatingNotes] = useState([]);
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [currentChordName, setCurrentChordName] = useState('Prelude Arpeggio');

  const audioCtxRef = useRef(null);
  const isAudioMutedRef = useRef(isAudioMuted);
  isAudioMutedRef.current = isAudioMuted;

  // Safe Web Audio Context initializer
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  }, []);

  // Unlock AudioContext on iOS Safari & mobile Android
  const unlockAudio = useCallback(() => {
    const ctx = getAudioContext();
    if (ctx) {
      if (ctx.state === 'suspended') {
        ctx
          .resume()
          .then(() => setAudioUnlocked(true))
          .catch(() => {});
      } else {
        setAudioUnlocked(true);
      }
    }
  }, [getAudioContext]);

  // Touch & Click listeners to auto-unlock audio on mobile phones
  useEffect(() => {
    const handleFirstGesture = () => {
      unlockAudio();
    };

    window.addEventListener('pointerdown', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('touchend', handleFirstGesture, { passive: true });
    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('keydown', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('touchend', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, [unlockAudio]);

  // Play warm acoustic grand piano note
  const playPianoNote = useCallback(
    (freq, duration = 1.1, velocity = 0.9) => {
      if (isAudioMutedRef.current) return;

      try {
        const ctx = getAudioContext();
        if (!ctx) return;

        if (ctx.state === 'suspended') {
          ctx.resume().catch(() => {});
        }

        const now = ctx.currentTime;

        // Master Gain Node for volume envelope
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, now);
        masterGain.gain.linearRampToValueAtTime(velocity * 0.65, now + 0.008);
        masterGain.gain.exponentialRampToValueAtTime(velocity * 0.32, now + 0.18);
        masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        // Lowpass tone filter
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(freq * 6.5, now);
        filter.frequency.exponentialRampToValueAtTime(freq * 1.6, now + duration);

        // 1. Fundamental Sine
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(freq, now);

        // 2. Second Harmonic (Triangle for hammer impact)
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq * 2, now);
        const osc2Gain = ctx.createGain();
        osc2Gain.gain.setValueAtTime(0.35, now);
        osc2Gain.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.65);

        // 3. Third Harmonic for chime
        const osc3 = ctx.createOscillator();
        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(freq * 3, now);
        const osc3Gain = ctx.createGain();
        osc3Gain.gain.setValueAtTime(0.18, now);
        osc3Gain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.5);

        // Connect graph
        osc1.connect(masterGain);
        osc2.connect(osc2Gain);
        osc2Gain.connect(masterGain);
        osc3.connect(osc3Gain);
        osc3Gain.connect(masterGain);

        masterGain.connect(filter);
        filter.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc3.start(now);

        osc1.stop(now + duration + 0.05);
        osc2.stop(now + duration + 0.05);
        osc3.stop(now + duration + 0.05);
      } catch (err) {
        // audio safe handling
      }
    },
    [getAudioContext]
  );

  // Play chord progression
  const playChord = useCallback(
    (indices, chordTitle = '', rolled = true) => {
      setActiveKeyIndices(indices);
      if (chordTitle) setCurrentChordName(chordTitle);

      indices.forEach((idx, order) => {
        const key = TECH_KEYS[idx];
        if (!key) return;

        const delay = rolled ? order * 75 : 0;
        setTimeout(() => {
          playPianoNote(key.freq, 1.3, 0.85);

          const noteSymbols = ['♪', '♫', '♬', '✦', '✧', '🎹', '✨'];
          const newNote = {
            id: `${idx}-${Date.now()}-${Math.random()}`,
            symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)],
            x: (idx / TECH_KEYS.length) * 90 + 5,
            color: key.color,
          };

          setFloatingNotes((prev) => [...prev.slice(-14), newNote]);
          setTimeout(() => {
            setFloatingNotes((prev) => prev.filter((n) => n.id !== newNote.id));
          }, 1600);
        }, delay);
      });
    },
    [playPianoNote]
  );

  // Trigger individual key
  const triggerKey = useCallback(
    (index, playSound = true) => {
      const key = TECH_KEYS[index];
      if (!key) return;

      setActiveKeyIndices([index]);
      if (playSound) {
        playPianoNote(key.freq, 1.1, 0.9);
      }

      const noteSymbols = ['♪', '♫', '♬', '✦', '✧', '🎹', '✨'];
      const newNote = {
        id: `${index}-${Date.now()}-${Math.random()}`,
        symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)],
        x: (index / TECH_KEYS.length) * 90 + 5,
        color: key.color,
      };

      setFloatingNotes((prev) => [...prev.slice(-14), newNote]);
      setTimeout(() => {
        setFloatingNotes((prev) => prev.filter((n) => n.id !== newNote.id));
      }, 1600);
    },
    [playPianoNote]
  );

  // 12-14s Musical Symphony Routine
  useEffect(() => {
    const TOTAL_DURATION_MS = 13000;
    const startTime = Date.now();

    let stepCount = 0;
    const melodyInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / TOTAL_DURATION_MS) * 100));

      stepCount++;

      if (pct < 22) {
        const arpeggioIdx = stepCount % TECH_KEYS.length;
        triggerKey(arpeggioIdx, true);
        setCurrentChordName(`Note: ${TECH_KEYS[arpeggioIdx].name}`);
      } else if (pct < 45) {
        const fullStackChords = [
          { name: 'JavaScript & React Triad', keys: [0, 3, 4] },
          { name: 'TypeScript & Next.js Duo', keys: [1, 10, 7] },
          { name: 'Backend & DB Harmony', keys: [4, 8, 9] },
          { name: 'Systems Triad (C++ & Java)', keys: [5, 6, 0] },
        ];
        const chord = fullStackChords[stepCount % fullStackChords.length];
        playChord(chord.keys, chord.name, true);
      } else if (pct < 70) {
        if (stepCount % 2 === 0) {
          playChord([2, 7, 11], 'AI PyTorch Major 9', true);
        } else {
          const bounceIdx = [0, 2, 3, 5, 7, 9, 11][stepCount % 7];
          triggerKey(bounceIdx, true);
          setCurrentChordName(`AI Melody: ${TECH_KEYS[bounceIdx].name}`);
        }
      } else if (pct < 90) {
        const patentChords = [
          { name: 'Patent 26/2025: Vedic AI', keys: [0, 2, 7, 9] },
          { name: 'Patent 28/2024: MINDPLAY', keys: [1, 3, 4, 10] },
          { name: 'IEEE ICVADV Sleep Octave', keys: [2, 6, 8, 11] },
        ];
        const chord = patentChords[stepCount % patentChords.length];
        playChord(chord.keys, chord.name, true);
      } else {
        const finaleNotes = [0, 2, 4, 7, 9, 11, 0, 3, 7, 10];
        const noteIdx = finaleNotes[stepCount % finaleNotes.length];
        triggerKey(noteIdx, true);
        setCurrentChordName('Resolution Fanfare');
      }
    }, 320);

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / TOTAL_DURATION_MS) * 100));
      setProgress(pct);

      const currentMove = SYMPHONY_MOVEMENTS.slice().reverse().find((m) => pct >= m.progressThreshold);
      if (currentMove) {
        setActiveMovement(currentMove);
      }

      if (pct >= 100) {
        clearInterval(melodyInterval);
        clearInterval(progressInterval);

        const finalFanfare = [261.63, 329.63, 392.0, 493.88, 523.25, 659.25];
        finalFanfare.forEach((f, i) => {
          setTimeout(() => playPianoNote(f, 2.0, 0.9), i * 85);
        });

        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1100);
      }
    }, 50);

    return () => {
      clearInterval(melodyInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete, playChord, playPianoNote, triggerKey]);

  // Handle key interaction
  const handleKeyClick = (index) => {
    unlockAudio();
    triggerKey(index, true);
    setCurrentChordName(`Playing ${TECH_KEYS[index].name} (${TECH_KEYS[index].note})`);
  };

  const handleToggleSound = (e) => {
    e.stopPropagation();
    unlockAudio();
    setIsAudioMuted((prev) => !prev);
  };

  const handleSkip = (e) => {
    e.stopPropagation();
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(14px)' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#05070F] text-slate-100 flex flex-col justify-between items-center select-none overflow-y-auto overflow-x-hidden font-sans min-h-[100dvh] p-3 sm:p-6"
    >
      {/* Background Ambience, Piano Glow & Musical Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[800px] h-[60vh] max-h-[500px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-purple-600/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-60" />

        {/* Floating Musical Note Particles */}
        <AnimatePresence>
          {floatingNotes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 0, scale: 0.6 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: -140 - Math.random() * 80,
                scale: [0.6, 1.3, 1.1, 0.8],
                x: (Math.random() - 0.5) * 40,
                rotate: Math.random() * 30 - 15,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              style={{ left: `${note.x}%`, color: note.color }}
              className="absolute bottom-36 sm:bottom-48 text-2xl sm:text-3xl font-black pointer-events-none drop-shadow-[0_0_12px_currentColor]"
            >
              {note.symbol}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Header: Compact on Mobile, Rich on Desktop */}
      <header className="relative w-full max-w-7xl mx-auto flex items-center justify-between z-10 shrink-0 pb-2">
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-indigo-500/25 shrink-0">
            <div className="w-full h-full bg-slate-950 rounded-[10px] sm:rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <span className="text-lg sm:text-xl font-black text-white tracking-tighter">A</span>
              <span className="text-sm sm:text-[15px] font-black text-cyan-400 -ml-0.5">k</span>
              <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <h1 className="text-sm sm:text-lg font-extrabold text-white tracking-tight leading-none">
                Aniket Kumar
              </h1>
              <span className="inline-flex items-center gap-0.5 px-1.5 sm:px-2 py-0.5 rounded-full bg-indigo-500/20 text-cyan-300 text-[9px] sm:text-[10px] font-mono border border-indigo-500/30">
                <Music className="w-2.5 h-2.5 text-cyan-400" />
                <span className="hidden xs:inline">12s Symphony</span>
              </span>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-tight mt-0.5">
              Full-Stack & AI Engineer • 2x Patent Inventor
            </p>
          </div>
        </div>

        {/* Audio Toggle & Fast-Forward Skip Button */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={handleToggleSound}
            className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold backdrop-blur-md transition-all border shadow-sm ${
              isAudioMuted
                ? 'bg-rose-500/10 text-rose-300 border-rose-500/30'
                : 'bg-gradient-to-r from-brand-600/30 to-cyan-600/30 text-cyan-200 border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
            }`}
            title={isAudioMuted ? 'Turn Sound ON' : 'Mute Sound'}
          >
            {isAudioMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-rose-400" />
                <span className="hidden xs:inline">Sound OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Audio ON</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </>
            )}
          </button>

          <button
            onClick={handleSkip}
            className="flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 backdrop-blur-md transition-all group"
            title="Skip directly to Portfolio"
          >
            <span>Skip</span>
            <FastForward className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </header>

      {/* Main Piano Stage: Optimized for Mobile Viewports & Desktop */}
      <main className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center z-10 flex-1 py-1 sm:py-2">
        {/* Movement Title & Subtitle */}
        <div className="text-center mb-2 sm:mb-4 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:py-1 rounded-full bg-slate-900/90 border border-indigo-500/30 text-cyan-300 text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-inner">
            <Sparkles className="w-3 h-3 text-amber-400 animate-spin" />
            <span className="truncate max-w-[130px] sm:max-w-none">{activeMovement.title}</span>
            <span className="text-slate-500">•</span>
            <span className="text-indigo-300 font-mono truncate max-w-[120px] sm:max-w-none">
              {currentChordName}
            </span>
          </div>

          <h2 className="text-lg sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-300 tracking-tight leading-tight">
            Programming Languages Striking Like Piano Notes
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-400 max-w-md mx-auto line-clamp-1 sm:line-clamp-2">
            {activeMovement.description}
          </p>
        </div>

        {/* Audio Click Hint Pill on Mobile/Desktop */}
        {!audioUnlocked && !isAudioMuted && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={unlockAudio}
            className="cursor-pointer mb-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300 text-[11px] font-bold flex items-center gap-1.5 animate-pulse shadow-sm"
          >
            <Play className="w-3 h-3 fill-amber-300 shrink-0" />
            <span>Tap anywhere to enable live piano audio 🎵</span>
          </motion.div>
        )}

        {/* The Jumping Programming Languages Grid (6 cols on mobile x 2 rows, 12 cols on desktop) */}
        <div className="relative w-full max-w-5xl h-36 sm:h-48 md:h-52 flex items-end justify-center mb-2 px-1">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-1.5 sm:gap-2 md:gap-2.5 w-full items-end">
            {TECH_KEYS.map((tech, idx) => {
              const isJumping = activeKeyIndices.includes(idx);
              return (
                <div key={tech.id} className="relative flex flex-col items-center">
                  {/* Floating / Bouncing Language Capsule */}
                  <motion.div
                    onClick={() => handleKeyClick(idx)}
                    animate={
                      isJumping
                        ? {
                            y: [0, -35, -45, -12, 0],
                            scale: [1, 1.15, 1.2, 1.05, 1],
                            rotate: [0, -6, 6, -2, 0],
                          }
                        : {
                            y: 0,
                            scale: 1,
                            rotate: 0,
                          }
                    }
                    transition={{
                      duration: 0.45,
                      ease: [0.175, 0.885, 0.32, 1.275],
                    }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      borderColor: isJumping ? tech.color : undefined,
                      boxShadow: isJumping
                        ? `0 0 20px ${tech.glow}, 0 0 40px ${tech.glow}`
                        : `0 2px 10px rgba(0,0,0,0.4)`,
                    }}
                    className={`cursor-pointer w-full py-1.5 sm:py-2.5 md:py-3 px-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-b ${
                      tech.bgGrad
                    } bg-slate-900/95 border ${
                      tech.border
                    } backdrop-blur-md flex flex-col items-center justify-center gap-0.5 sm:gap-1 transition-colors duration-150 group relative overflow-hidden touch-manipulation`}
                  >
                    {/* Glowing highlight ping */}
                    {isJumping && (
                      <span
                        className="absolute inset-0 bg-white/20 animate-ping rounded-xl sm:rounded-2xl pointer-events-none"
                        style={{ animationDuration: '0.4s' }}
                      />
                    )}

                    {/* Tech Badge / Icon */}
                    <div
                      className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg sm:rounded-xl flex items-center justify-center font-black text-[9px] sm:text-xs shadow-sm"
                      style={{
                        backgroundColor: `${tech.color}25`,
                        color: tech.color,
                        border: `1px solid ${tech.color}77`,
                      }}
                    >
                      {tech.short.slice(0, 3)}
                    </div>

                    {/* Tech Name */}
                    <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-slate-100 tracking-tight text-center truncate max-w-full px-0.5 leading-none">
                      {tech.short}
                    </span>

                    {/* Note Tag & Syntax */}
                    <div className="flex items-center gap-0.5 text-[8px] sm:text-[9px] font-mono text-slate-400 group-hover:text-cyan-300 leading-none">
                      <span className="font-bold text-cyan-400">{tech.keyLabel}</span>
                      <span className="opacity-75 hidden sm:inline">{tech.symbol}</span>
                    </div>
                  </motion.div>

                  {/* Impact Glow Ripple on Piano Bed */}
                  <div
                    className={`w-5 sm:w-6 md:w-7 h-1.5 rounded-full mt-1 transition-all duration-300 ${
                      isJumping ? 'opacity-100 scale-125' : 'opacity-20 scale-75'
                    }`}
                    style={{
                      backgroundColor: tech.color,
                      boxShadow: `0 0 8px ${tech.color}`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Illuminated Piano Keyboard Base */}
        <div className="w-full max-w-4xl p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-950/95 border border-slate-800 shadow-[0_8px_30px_rgba(0,0,0,0.85)] backdrop-blur-xl relative px-2">
          <div className="flex items-center justify-between px-1.5 py-0.5 mb-1.5 border-b border-slate-800/80 text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-cyan-400 font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Piano Keybed (C4 – B4)</span>
            </span>
            <span className="text-slate-400 hidden xs:inline">Tap any key to play 🎹</span>
            <span className="text-indigo-400">12 Keys</span>
          </div>

          {/* Piano Key Strips */}
          <div className="grid grid-cols-12 gap-1 sm:gap-1.5 h-12 sm:h-16 md:h-18 relative touch-manipulation">
            {TECH_KEYS.map((tech, idx) => {
              const isKeyActive = activeKeyIndices.includes(idx);
              return (
                <button
                  key={`piano-key-${tech.id}`}
                  onClick={() => handleKeyClick(idx)}
                  className={`rounded-lg sm:rounded-xl relative transition-all duration-150 flex flex-col items-center justify-end pb-1.5 cursor-pointer select-none ${
                    tech.isBlack
                      ? 'bg-slate-900 border border-slate-700 text-slate-400 shadow-inner'
                      : 'bg-gradient-to-b from-slate-100 to-slate-300 text-slate-800 border border-white/70 shadow-md'
                  } ${
                    isKeyActive
                      ? 'translate-y-1 scale-95 shadow-[0_0_20px_inset_currentColor]'
                      : 'hover:brightness-110 active:translate-y-1'
                  }`}
                  style={{
                    backgroundColor: isKeyActive ? tech.color : undefined,
                    color: isKeyActive ? '#000' : tech.isBlack ? '#94A3B8' : '#1E293B',
                  }}
                  title={`Play ${tech.name} (${tech.note})`}
                >
                  <span className="text-[8px] sm:text-[9px] font-black font-mono leading-none">
                    {tech.keyLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom Area: Progress Bar, Status Message & Countdown */}
      <footer className="relative w-full max-w-4xl mx-auto flex flex-col items-center gap-1.5 sm:gap-2.5 z-10 shrink-0 pt-1">
        {/* Progress Narrative & Percentage */}
        <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-medium">
          <div className="flex items-center gap-1.5 text-slate-200 truncate max-w-[78%]">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse shrink-0" />
            <span className="truncate">{activeMovement.description}</span>
          </div>
          <span className="font-mono font-black text-cyan-400 text-xs sm:text-base">
            {progress}%
          </span>
        </div>

        {/* Glowing Dynamic Progress Bar */}
        <div className="w-full h-2.5 sm:h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-600 via-indigo-500 to-cyan-400 rounded-full relative"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] animate-[shimmer_1.5s_infinite]" />
          </motion.div>
        </div>

        {/* Footer Sub-links */}
        <div className="flex items-center justify-between w-full text-[10px] sm:text-xs text-slate-400">
          <span className="flex items-center gap-1 text-slate-400 truncate max-w-[65%]">
            <Code2 className="w-3 h-3 text-indigo-400 shrink-0" />
            <span className="truncate">MCA Graduate • AI Researcher</span>
          </span>
          <button
            onClick={handleSkip}
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors font-semibold shrink-0"
          >
            Skip ➔
          </button>
        </div>
      </footer>
    </motion.div>
  );
};

export default Preloader;
