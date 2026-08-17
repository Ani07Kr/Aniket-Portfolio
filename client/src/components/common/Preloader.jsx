import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Sparkles, FastForward, Music, Zap, Code2, Play } from 'lucide-react';

// 12 Programming Languages & Tech Stacks with Tuned Musical Piano Frequencies (C4 to B4)
const TECH_KEYS = [
  {
    id: 'js',
    name: 'JavaScript',
    short: 'JS',
    symbol: '{ ... }',
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
    symbol: '<Type>',
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
    short: 'Python',
    symbol: 'def()',
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
    symbol: '<JSX />',
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
    description: 'Initializing developer acoustic soundstage & tuning pentatonic scale...',
  },
  {
    progressThreshold: 20,
    title: 'Movement II: Full-Stack Polyphony',
    description: 'Harmonizing React.js, Node.js, Express & TypeScript chord progressions...',
  },
  {
    progressThreshold: 45,
    title: 'Movement III: Neural Network Resonance',
    description: 'Synthesizing PyTorch deep learning weights & EEG sleep research harmonics...',
  },
  {
    progressThreshold: 70,
    title: 'Movement IV: Indian Patents & Inventions',
    description: 'Orchestrating Vedic AI algorithms (Patent 26/2025 & 28/2024)...',
  },
  {
    progressThreshold: 90,
    title: 'Movement V: Grand Finale & Launch',
    description: 'Symphony complete! Launching Aniket Kumar Portfolio experience...',
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

  // Unlock AudioContext immediately on any user action
  const unlockAudio = useCallback(() => {
    const ctx = getAudioContext();
    if (ctx) {
      if (ctx.state === 'suspended') {
        ctx.resume().then(() => setAudioUnlocked(true)).catch(() => {});
      } else {
        setAudioUnlocked(true);
      }
    }
  }, [getAudioContext]);

  // Global touch/click listeners to auto-unlock audio seamlessly
  useEffect(() => {
    const handleFirstGesture = () => {
      unlockAudio();
    };

    window.addEventListener('pointerdown', handleFirstGesture, { passive: true });
    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('keydown', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
    };
  }, [unlockAudio]);

  // Play rich, warm acoustic grand piano note
  const playPianoNote = useCallback(
    (freq, duration = 1.2, velocity = 0.9) => {
      if (isAudioMutedRef.current) return;

      try {
        const ctx = getAudioContext();
        if (!ctx) return;

        // Auto-resume if suspended
        if (ctx.state === 'suspended') {
          ctx.resume().catch(() => {});
        }

        const now = ctx.currentTime;

        // Master Gain Node for volume envelope
        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, now);
        masterGain.gain.linearRampToValueAtTime(velocity * 0.7, now + 0.008); // Sharp hammer impact
        masterGain.gain.exponentialRampToValueAtTime(velocity * 0.35, now + 0.2); // Decay
        masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration); // Warm acoustic ring-out

        // Acoustic Tone Lowpass Filter (brightness based on hammer strike)
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(freq * 7, now);
        filter.frequency.exponentialRampToValueAtTime(freq * 1.8, now + duration);

        // 1. Fundamental Oscillator (Warm Sine)
        const osc1 = ctx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(freq, now);

        // 2. Second Harmonic (Triangle for piano hammer bite)
        const osc2 = ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(freq * 2, now);
        const osc2Gain = ctx.createGain();
        osc2Gain.gain.setValueAtTime(0.4, now);
        osc2Gain.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.7);

        // 3. Third Harmonic for crystal chime resonance
        const osc3 = ctx.createOscillator();
        osc3.type = 'sine';
        osc3.frequency.setValueAtTime(freq * 3, now);
        const osc3Gain = ctx.createGain();
        osc3Gain.gain.setValueAtTime(0.2, now);
        osc3Gain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.5);

        // 4. Sub-octave resonance for deep body
        const oscSub = ctx.createOscillator();
        oscSub.type = 'sine';
        oscSub.frequency.setValueAtTime(freq / 2, now);
        const oscSubGain = ctx.createGain();
        oscSubGain.gain.setValueAtTime(0.18, now);
        oscSubGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.8);

        // Connect audio graph
        osc1.connect(masterGain);
        osc2.connect(osc2Gain);
        osc2Gain.connect(masterGain);
        osc3.connect(osc3Gain);
        osc3Gain.connect(masterGain);
        oscSub.connect(oscSubGain);
        oscSubGain.connect(masterGain);

        masterGain.connect(filter);
        filter.connect(ctx.destination);

        // Start oscillators
        osc1.start(now);
        osc2.start(now);
        osc3.start(now);
        oscSub.start(now);

        // Stop oscillators after duration
        osc1.stop(now + duration + 0.05);
        osc2.stop(now + duration + 0.05);
        osc3.stop(now + duration + 0.05);
        oscSub.stop(now + duration + 0.05);
      } catch (err) {
        console.warn('Web Audio playback handled:', err);
      }
    },
    [getAudioContext]
  );

  // Play a multi-note chord simultaneously or rolled (arpeggiated)
  const playChord = useCallback(
    (indices, chordTitle = '', rolled = true) => {
      setActiveKeyIndices(indices);
      if (chordTitle) setCurrentChordName(chordTitle);

      indices.forEach((idx, order) => {
        const key = TECH_KEYS[idx];
        if (!key) return;

        const delay = rolled ? order * 80 : 0;
        setTimeout(() => {
          playPianoNote(key.freq, 1.4, 0.85);

          // Add floating note
          const noteSymbols = ['♪', '♫', '♬', '✦', '✧', '🎹', '✨'];
          const newNote = {
            id: `${idx}-${Date.now()}-${Math.random()}`,
            symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)],
            x: (idx / TECH_KEYS.length) * 100 + (Math.random() * 4 - 2),
            color: key.color,
          };

          setFloatingNotes((prev) => [...prev.slice(-20), newNote]);
          setTimeout(() => {
            setFloatingNotes((prev) => prev.filter((n) => n.id !== newNote.id));
          }, 1800);
        }, delay);
      });
    },
    [playPianoNote]
  );

  // Trigger individual key jump on click or automated melody
  const triggerKey = useCallback(
    (index, playSound = true) => {
      const key = TECH_KEYS[index];
      if (!key) return;

      setActiveKeyIndices([index]);
      if (playSound) {
        playPianoNote(key.freq, 1.2, 0.9);
      }

      // Add particle note
      const noteSymbols = ['♪', '♫', '♬', '✦', '✧', '🎹', '✨'];
      const newNote = {
        id: `${index}-${Date.now()}-${Math.random()}`,
        symbol: noteSymbols[Math.floor(Math.random() * noteSymbols.length)],
        x: (index / TECH_KEYS.length) * 100 + (Math.random() * 4 - 2),
        color: key.color,
      };

      setFloatingNotes((prev) => [...prev.slice(-20), newNote]);
      setTimeout(() => {
        setFloatingNotes((prev) => prev.filter((n) => n.id !== newNote.id));
      }, 1800);
    },
    [playPianoNote]
  );

  // 12-14 Seconds Multi-Movement Musical Symphony Orchestration
  useEffect(() => {
    const TOTAL_DURATION_MS = 13000; // 13.0 Seconds duration
    const startTime = Date.now();

    // Symphony Musical Score Routine
    let stepCount = 0;
    const melodyInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / TOTAL_DURATION_MS) * 100));

      stepCount++;

      // Pattern 1: Movement I (0% - 22%): Ascending & Descending Arpeggio Waves
      if (pct < 22) {
        const arpeggioIdx = stepCount % TECH_KEYS.length;
        triggerKey(arpeggioIdx, true);
        setCurrentChordName(`Prelude Note: ${TECH_KEYS[arpeggioIdx].name}`);
      }
      // Pattern 2: Movement II (22% - 45%): Full-Stack Triad & 7th Chords
      else if (pct < 45) {
        const fullStackChords = [
          { name: 'JavaScript & React Harmonics', keys: [0, 3, 4] }, // JS, React, Node
          { name: 'TypeScript & Next.js Duo', keys: [1, 10, 7] }, // TS, Next, AI
          { name: 'Backend & Database Resonance', keys: [4, 8, 9] }, // Node, Mongo, SQL
          { name: 'Systems Triad (C++ & Java)', keys: [5, 6, 0] }, // Java, C++, JS
        ];
        const chord = fullStackChords[stepCount % fullStackChords.length];
        playChord(chord.keys, chord.name, true);
      }
      // Pattern 3: Movement III (45% - 70%): AI & Machine Learning Melodic Dance
      else if (pct < 70) {
        if (stepCount % 2 === 0) {
          playChord([2, 7, 11], 'AI PyTorch Major 9', true); // Python, AI, Cloud
        } else {
          const bounceIdx = [0, 2, 3, 5, 7, 9, 11][stepCount % 7];
          triggerKey(bounceIdx, true);
          setCurrentChordName(`Neural Melody: ${TECH_KEYS[bounceIdx].name}`);
        }
      }
      // Pattern 4: Movement IV (70% - 90%): High-Energy Indian Patents Grooving Polyphony
      else if (pct < 90) {
        const patentChords = [
          { name: 'Patent 26/2025: Vedic AI Symphony', keys: [0, 2, 7, 9] },
          { name: 'Patent 28/2024: MINDPLAY Harmony', keys: [1, 3, 4, 10] },
          { name: 'IEEE ICVADV Sleep AI Octave', keys: [2, 6, 8, 11] },
        ];
        const chord = patentChords[stepCount % patentChords.length];
        playChord(chord.keys, chord.name, true);
      }
      // Pattern 5: Movement V (90% - 100%): Grand Finale Cascading Sweep
      else {
        const finaleNotes = [0, 2, 4, 7, 9, 11, 0, 3, 7, 10];
        const noteIdx = finaleNotes[stepCount % finaleNotes.length];
        triggerKey(noteIdx, true);
        setCurrentChordName('Grand Symphony Resolution Fanfare');
      }
    }, 320); // 320ms per musical step

    // Progress Bar Timer (smooth 13.0s total)
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / TOTAL_DURATION_MS) * 100));
      setProgress(pct);

      // Update movement narrative
      const currentMove = SYMPHONY_MOVEMENTS.slice().reverse().find((m) => pct >= m.progressThreshold);
      if (currentMove) {
        setActiveMovement(currentMove);
      }

      if (pct >= 100) {
        clearInterval(melodyInterval);
        clearInterval(progressInterval);

        // Play glorious final C Major 9 chord fanfare
        const finalFanfare = [261.63, 329.63, 392.0, 493.88, 523.25, 659.25];
        finalFanfare.forEach((f, i) => {
          setTimeout(() => playPianoNote(f, 2.2, 0.95), i * 90);
        });

        setTimeout(() => {
          if (onComplete) onComplete();
        }, 1200);
      }
    }, 50);

    return () => {
      clearInterval(melodyInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete, playChord, playPianoNote, triggerKey]);

  // Click on language or piano key
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
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(16px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-[#05070F] text-slate-100 flex flex-col justify-between items-center select-none overflow-hidden font-sans"
    >
      {/* Background Ambience, Piano Glow & Musical Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Dynamic Multi-Color Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/20 to-purple-600/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Floating Matrix Grid Staff */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />

        {/* Floating Musical Note Particles */}
        <AnimatePresence>
          {floatingNotes.map((note) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 0, scale: 0.6, x: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: -220 - Math.random() * 120,
                scale: [0.6, 1.5, 1.2, 0.8],
                x: (Math.random() - 0.5) * 80,
                rotate: Math.random() * 40 - 20,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              style={{ left: `${note.x}%`, color: note.color }}
              className="absolute bottom-48 text-3xl font-black pointer-events-none drop-shadow-[0_0_15px_currentColor]"
            >
              {note.symbol}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Top Header: Brand, Live Soundwave Equalizer & Sound Toggle */}
      <header className="relative w-full max-w-7xl mx-auto px-5 sm:px-8 pt-5 sm:pt-6 flex items-center justify-between z-10">
        {/* Monogram & Title */}
        <div className="flex items-center gap-3.5">
          <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center relative overflow-hidden">
              <span className="text-xl font-black text-white tracking-tighter">A</span>
              <span className="text-[15px] font-black text-cyan-400 -ml-0.5">k</span>
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                Aniket Kumar
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-cyan-300 text-[11px] font-mono border border-indigo-500/40">
                <Music className="w-3 h-3 text-cyan-400" />
                12-Sec Symphony
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              Full-Stack Developer • AI/ML Researcher • 2x Patent Inventor
            </p>
          </div>
        </div>

        {/* Sound Toggle & Fast-Forward Button */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={handleToggleSound}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md transition-all border shadow-lg ${
              isAudioMuted
                ? 'bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20'
                : 'bg-gradient-to-r from-brand-600/40 to-cyan-600/40 text-cyan-200 border-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105'
            }`}
            title={isAudioMuted ? 'Turn Sound ON' : 'Mute Sound'}
          >
            {isAudioMuted ? (
              <>
                <VolumeX className="w-4 h-4 text-rose-400" />
                <span>Sound OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400 animate-bounce" />
                <span>Piano Audio ON</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </>
            )}
          </button>

          <button
            onClick={handleSkip}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 backdrop-blur-md transition-all group hover:scale-105"
            title="Skip directly to Portfolio"
          >
            <span>Skip</span>
            <FastForward className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>

      {/* Main Piano Stage: Jumping Programming Languages */}
      <main className="relative w-full max-w-6xl mx-auto px-4 py-2 flex flex-col items-center justify-center z-10">
        {/* Movement Title & Subtitle */}
        <div className="text-center mb-4 space-y-1.5">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/90 border border-indigo-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>{activeMovement.title}</span>
            <span className="text-slate-500">•</span>
            <span className="text-indigo-300 font-mono">{currentChordName}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-300 tracking-tight">
            Every Programming Language Striking Like Piano Notes
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
            {activeMovement.description}
          </p>
        </div>

        {/* Audio Click Hint Pill if AudioContext was suspended */}
        {!audioUnlocked && !isAudioMuted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={unlockAudio}
            className="cursor-pointer mb-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center gap-2 animate-pulse shadow-md shadow-amber-500/10"
          >
            <Play className="w-3.5 h-3.5 fill-amber-300" />
            <span>Click anywhere or tap any key to start piano sound!</span>
          </motion.div>
        )}

        {/* The Jumping Programming Languages Carousel Grid */}
        <div className="relative w-full max-w-5xl h-48 sm:h-56 flex items-end justify-center mb-3">
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-2.5 w-full items-end">
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
                            y: [0, -65, -75, -20, 0],
                            scale: [1, 1.22, 1.25, 1.08, 1],
                            rotate: [0, -8, 8, -3, 0],
                          }
                        : {
                            y: 0,
                            scale: 1,
                            rotate: 0,
                          }
                    }
                    transition={{
                      duration: 0.5,
                      ease: [0.175, 0.885, 0.32, 1.275],
                    }}
                    whileHover={{ scale: 1.18, y: -12 }}
                    whileTap={{ scale: 0.92 }}
                    style={{
                      borderColor: isJumping ? tech.color : undefined,
                      boxShadow: isJumping
                        ? `0 0 30px ${tech.glow}, 0 0 60px ${tech.glow}`
                        : `0 4px 15px rgba(0,0,0,0.4)`,
                    }}
                    className={`cursor-pointer w-full py-2.5 sm:py-3.5 px-1 rounded-2xl bg-gradient-to-b ${
                      tech.bgGrad
                    } bg-slate-900/95 border ${
                      tech.border
                    } backdrop-blur-md flex flex-col items-center justify-center gap-1 transition-colors duration-150 group relative overflow-hidden`}
                  >
                    {/* Glowing highlight ping */}
                    {isJumping && (
                      <span
                        className="absolute inset-0 bg-white/25 animate-ping rounded-2xl pointer-events-none"
                        style={{ animationDuration: '0.45s' }}
                      />
                    )}

                    {/* Tech Badge / Icon */}
                    <div
                      className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm shadow-md"
                      style={{
                        backgroundColor: `${tech.color}25`,
                        color: tech.color,
                        border: `1.5px solid ${tech.color}77`,
                      }}
                    >
                      {tech.short.slice(0, 3)}
                    </div>

                    {/* Tech Name */}
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-100 tracking-tight text-center truncate max-w-full px-0.5">
                      {tech.short}
                    </span>

                    {/* Note Tag & Syntax */}
                    <div className="flex items-center gap-0.5 text-[9px] font-mono text-slate-400 group-hover:text-cyan-300">
                      <span className="text-[9px] font-bold text-cyan-400">{tech.keyLabel}</span>
                      <span className="opacity-75">{tech.symbol}</span>
                    </div>
                  </motion.div>

                  {/* Impact Glow Ripple on Piano Bed */}
                  <div
                    className={`w-7 h-2 rounded-full mt-1.5 transition-all duration-300 ${
                      isJumping ? 'opacity-100 scale-150' : 'opacity-25 scale-75'
                    }`}
                    style={{
                      backgroundColor: tech.color,
                      boxShadow: `0 0 14px ${tech.color}`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Illuminated Piano Keyboard Base */}
        <div className="w-full max-w-4xl p-2.5 sm:p-3.5 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-[0_12px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl relative">
          <div className="flex items-center justify-between px-3 py-1 mb-2 border-b border-slate-800/80 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Acoustic Piano Keybed (C4 – B4)</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">
              Tap any key to play notes & bounce
            </span>
            <span className="text-indigo-400 font-semibold">12-Key Chromatic Octave</span>
          </div>

          {/* Piano Key Strips */}
          <div className="grid grid-cols-12 gap-1.5 h-16 sm:h-20 relative">
            {TECH_KEYS.map((tech, idx) => {
              const isKeyActive = activeKeyIndices.includes(idx);
              return (
                <button
                  key={`piano-key-${tech.id}`}
                  onClick={() => handleKeyClick(idx)}
                  className={`rounded-xl relative transition-all duration-150 flex flex-col items-center justify-end pb-2 cursor-pointer ${
                    tech.isBlack
                      ? 'bg-slate-900 border border-slate-700 text-slate-400 shadow-inner'
                      : 'bg-gradient-to-b from-slate-100 to-slate-300 text-slate-800 border border-white/70 shadow-lg'
                  } ${
                    isKeyActive
                      ? 'translate-y-1.5 scale-95 shadow-[0_0_25px_inset_currentColor]'
                      : 'hover:brightness-110 active:translate-y-1'
                  }`}
                  style={{
                    backgroundColor: isKeyActive ? tech.color : undefined,
                    color: isKeyActive ? '#000' : tech.isBlack ? '#94A3B8' : '#1E293B',
                  }}
                  title={`Play ${tech.name} (${tech.note})`}
                >
                  <span className="text-[10px] font-black font-mono">
                    {tech.keyLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom Area: Progress Bar, Status Message & Symphony Countdown */}
      <footer className="relative w-full max-w-4xl mx-auto px-6 pb-7 z-10 flex flex-col items-center gap-2.5">
        {/* Progress Narrative & Percentage */}
        <div className="w-full flex items-center justify-between text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2 text-slate-200 truncate max-w-[75%]">
            <Zap className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
            <span className="truncate">{activeMovement.description}</span>
          </div>
          <span className="font-mono font-black text-cyan-400 text-base sm:text-lg">
            {progress}%
          </span>
        </div>

        {/* Glowing Dynamic Progress Bar */}
        <div className="w-full h-3 sm:h-3.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative shadow-inner">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-600 via-indigo-500 to-cyan-400 rounded-full relative"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'linear' }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.45),transparent)] animate-[shimmer_1.5s_infinite]" />
          </motion.div>
        </div>

        {/* Footer Sub-links */}
        <div className="flex items-center justify-between w-full text-xs text-slate-400 pt-1">
          <span className="flex items-center gap-1.5 text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Symphony in Full Scale • MCA Graduate (8.45 CGPA)</span>
          </span>
          <button
            onClick={handleSkip}
            className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors font-semibold"
          >
            Skip to Portfolio ➔
          </button>
        </div>
      </footer>
    </motion.div>
  );
};

export default Preloader;
