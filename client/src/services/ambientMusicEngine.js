/**
 * Ambient Music Synthesizer Engine (Web Audio API)
 * Provides 2 rich, soothing, zero-latency generative background tracks:
 * - Track 0: "Ambient Piano Nocturne" (Gentle Rhodes/Piano chords with calming ambient pad)
 * - Track 1: "Lo-Fi Deep Focus Chill" (Warm jazz chords with gentle atmospheric bells)
 */

export const TRACKS = [
  {
    id: 'ambient-piano',
    name: 'Ambient Piano Nocturne',
    genre: 'Soft Piano & Warm Pad',
    tempo: '64 BPM',
    description: 'Calming major 9th piano progressions with soothing ambient drones.',
    color: '#06B6D4',
  },
  {
    id: 'lofi-chill',
    name: 'Lo-Fi Deep Focus Chill',
    genre: 'Lo-Fi Jazz & Harmonic Bells',
    tempo: '72 BPM',
    description: 'Relaxing electric piano chord voicing with warm resonance.',
    color: '#A855F7',
  },
];

class AmbientMusicEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.currentTrackIndex = 0;
    this.volume = 0.55;
    this.masterGain = null;
    this.loopTimer = null;
    this.activeNodes = [];
  }

  // Initialize or resume AudioContext
  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
        this.masterGain = this.audioCtx.createGain();
        this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
        this.masterGain.connect(this.audioCtx.destination);
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume().catch(() => {});
    }
    return this.audioCtx;
  }

  // Set Master Volume
  setVolume(newVol) {
    this.volume = Math.max(0, Math.min(1, newVol));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.audioCtx.currentTime, 0.05);
    }
  }

  // Play a soft soothing bell/piano voice
  playVoice(freq, duration = 3.5, velocity = 0.4, type = 'sine') {
    if (!this.isPlaying) return;
    const ctx = this.getAudioContext();
    if (!ctx || !this.masterGain) return;

    try {
      const now = ctx.currentTime;
      const voiceGain = ctx.createGain();

      // Soft gentle attack and long soothing decay
      voiceGain.gain.setValueAtTime(0.0001, now);
      voiceGain.gain.linearRampToValueAtTime(velocity * 0.35, now + 0.12);
      voiceGain.gain.exponentialRampToValueAtTime(velocity * 0.1, now + 1.2);
      voiceGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Lowpass filter for warm soothing texture
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 3.5, now);
      filter.frequency.exponentialRampToValueAtTime(freq * 1.2, now + duration);

      // Main Oscillator
      const osc = ctx.createOscillator();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      // Soft Sub-harmonic for warmth
      const subOsc = ctx.createOscillator();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(freq / 2, now);
      const subGain = ctx.createGain();
      subGain.gain.setValueAtTime(0.15, now);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.8);

      // Harmonic Detuned Shimmer
      const shimmerOsc = ctx.createOscillator();
      shimmerOsc.type = 'triangle';
      shimmerOsc.frequency.setValueAtTime(freq * 2 + 1.5, now);
      const shimmerGain = ctx.createGain();
      shimmerGain.gain.setValueAtTime(0.08, now);
      shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.6);

      osc.connect(voiceGain);
      subOsc.connect(subGain);
      subGain.connect(voiceGain);
      shimmerOsc.connect(shimmerGain);
      shimmerGain.connect(voiceGain);

      voiceGain.connect(filter);
      filter.connect(this.masterGain);

      osc.start(now);
      subOsc.start(now);
      shimmerOsc.start(now);

      osc.stop(now + duration + 0.1);
      subOsc.stop(now + duration + 0.1);
      shimmerOsc.stop(now + duration + 0.1);
    } catch (err) {
      // Audio safe handling
    }
  }

  // Play a soothing warm ambient chord
  playChord(frequencies, duration = 4.0, velocity = 0.3) {
    frequencies.forEach((freq, idx) => {
      setTimeout(() => {
        if (this.isPlaying) {
          this.playVoice(freq, duration, velocity);
        }
      }, idx * 120); // Arpeggiated gentle roll
    });
  }

  // Start continuous generative music loop
  start(trackIndex = 0) {
    this.currentTrackIndex = trackIndex;
    this.isPlaying = true;
    const ctx = this.getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }

    if (this.loopTimer) {
      clearInterval(this.loopTimer);
    }

    let chordStep = 0;

    // Track 0: Ambient Piano Nocturne (Cmaj9, Am7, Fmaj7, Gadd9)
    const track0Chords = [
      [261.63, 329.63, 392.0, 493.88, 523.25], // Cmaj9
      [220.0, 261.63, 329.63, 392.0, 440.0],  // Am7
      [174.61, 261.63, 329.63, 349.23, 440.0], // Fmaj7
      [196.0, 246.94, 293.66, 392.0, 493.88],  // Gadd9
    ];

    // Track 1: Lo-Fi Deep Focus Chill (Em9, Cmaj7, D9, Bm7)
    const track1Chords = [
      [164.81, 246.94, 293.66, 392.0, 493.88], // Em9
      [130.81, 261.63, 329.63, 392.0, 493.88], // Cmaj7
      [146.83, 220.0, 293.66, 369.99, 440.0],  // D9
      [123.47, 246.94, 293.66, 369.99, 440.0], // Bm7
    ];

    const runStep = () => {
      if (!this.isPlaying) return;

      const chords = this.currentTrackIndex === 0 ? track0Chords : track1Chords;
      const currentChord = chords[chordStep % chords.length];

      // Play the warm chord pad
      this.playChord(currentChord, 4.2, 0.35);

      // Play soft occasional gentle high piano melody note on offbeats
      setTimeout(() => {
        if (!this.isPlaying) return;
        const melodyPool = currentChord.slice(2);
        const randomNote = melodyPool[Math.floor(Math.random() * melodyPool.length)] * 1.5;
        this.playVoice(randomNote, 2.5, 0.25, 'triangle');
      }, 1600);

      chordStep++;
    };

    // Play first chord immediately
    runStep();

    // Loop interval every 3.8 seconds for seamless breathing ambient waves
    this.loopTimer = setInterval(runStep, 3800);
  }

  // Stop background music
  stop() {
    this.isPlaying = false;
    if (this.loopTimer) {
      clearInterval(this.loopTimer);
      this.loopTimer = null;
    }
  }

  // Switch Track
  switchTrack(trackIndex) {
    const wasPlaying = this.isPlaying;
    this.stop();
    this.currentTrackIndex = trackIndex % TRACKS.length;
    if (wasPlaying) {
      this.start(this.currentTrackIndex);
    }
  }
}

export const ambientMusicEngine = new AmbientMusicEngine();
