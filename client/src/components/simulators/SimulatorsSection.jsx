import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectSandbox } from '../projects/ProjectSandbox';
import {
  Sparkles,
  Play,
  ExternalLink,
  Smartphone,
  Globe,
  Award,
  Cpu,
  Layers,
  Download,
  CheckCircle2,
  Terminal,
  Copy,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Box,
  Zap,
  Activity,
  Brain,
  ChevronRight,
} from 'lucide-react';

export const SimulatorsSection = () => {
  const { projects, setActiveProjectModal } = usePortfolio();
  const [copiedLink, setCopiedLink] = useState(null);

  // Deployments registry with live links, build types, and sandbox pairings
  const deployments = [
    {
      id: 'bhagavad-gita',
      title: 'Bhagavad Gita AI Wellness Platform',
      slug: 'bhagavad-gita-holistic-wellness-ai',
      category: 'Patented AI & Holistic Health',
      badge: 'Indian Patent Pub. No. 26/2025',
      badgeColor: 'amber',
      tagline:
        'Tri-Modal AI Wellness system combining Real-Time Facial Emotion Detection, ECG Biometric Stress Analysis, and Vedic Recommendation Algorithms.',
      technologies: ['React Native', 'React.js', 'Node.js', 'Supabase', 'OpenCV', 'CNN'],
      sandboxType: 'gita_wellness_simulator',
      links: {
        web: 'https://bhagavadgitawellnessapp.onrender.com',
        apk: 'https://expo.dev/accounts/ani07kr/projects/bhagavadgita-wellness/builds/a99d63c8-14cb-47e9-a957-61df993cce51',
        github: 'https://github.com/Ani07Kr',
        patentApp: 'Application No. 202541054232 (Published 27 June 2025)',
      },
      status: 'Live & Distributed',
      features: [
        'Live Web Application deployed on Render Cloud',
        'Production Android APK built & signed via Expo EAS',
        'Real-time webcam facial emotion recognition (CNN)',
        'ECG waveform biometric stress analysis module',
      ],
      icon: Sparkles,
      accentColor: 'from-amber-500 to-orange-600',
      borderAccent: 'border-amber-500/30',
      bgGlow: 'bg-amber-500/10',
    },
    {
      id: 'parchai',
      title: 'Parchai: Personal AI Companion',
      slug: 'parchai-ai-companion-mobile-app',
      category: 'Full-Stack Mobile & GenAI',
      badge: 'Production Android Build (Expo EAS)',
      badgeColor: 'cyan',
      tagline:
        'Full-Stack AI Companion Mobile App with Persistent Long-Term Memory, Supabase Goal Management, and Context-Aware LLM Reasoning.',
      technologies: ['React Native', 'Expo EAS', 'TypeScript', 'Node.js', 'Supabase', 'OpenRouter LLM'],
      sandboxType: 'parchai_companion_simulator',
      links: {
        web: '',
        apk: 'https://expo.dev/accounts/ani07kr/projects/parchai/builds/6494f829-9e33-4e4a-93fb-0afed87a00e8',
        github: 'https://github.com/Ani07Kr',
        backend: 'Render Cloud (TypeScript Express API with Bearer Auth)',
      },
      status: 'Production APK Ready',
      features: [
        'Compiled & signed Android APK via Expo EAS',
        'Persistent memory & structured goal retrieval',
        'Deep linking (parchai://) for password recovery & auth',
        'OpenRouter multi-turn LLM reasoning engine',
      ],
      icon: Smartphone,
      accentColor: 'from-cyan-500 to-indigo-600',
      borderAccent: 'border-cyan-500/30',
      bgGlow: 'bg-cyan-500/10',
    },
    {
      id: 'mindplay',
      title: 'MINDPLAY: Affective Tutoring AI',
      slug: 'affective-tutoring-system-mindplay-ai',
      category: 'Patented Affective Computing',
      badge: 'Indian Patent Pub. No. 28/2024',
      badgeColor: 'purple',
      tagline:
        'Real-time affective computing platform that monitors student facial emotions and dynamically modulates learning curriculum difficulty.',
      technologies: ['Deep Learning CNN', 'OpenCV', 'React.js', 'Python', 'Node.js'],
      sandboxType: 'affective_emotion_simulator',
      links: {
        web: '',
        apk: '',
        github: 'https://github.com/Ani07Kr',
        patentApp: 'Application No. 202441035043 (Published 07 Dec 2024)',
      },
      status: 'Patent Verified Simulator',
      features: [
        '5-state facial emotion tracking (Joy, Confusion, Boredom, etc.)',
        'Adaptive curriculum pace modulation (0.75x to 1.25x)',
        'Cognitive load and mental fatigue prevention loops',
        'Interactive real-time pedagogical feedback simulator',
      ],
      icon: Brain,
      accentColor: 'from-purple-500 to-pink-600',
      borderAccent: 'border-purple-500/30',
      bgGlow: 'bg-purple-500/10',
    },
    {
      id: 'semantic-nlp',
      title: 'Semantic NLP Philosophical Transformer',
      slug: 'semantic-nlp-philosophical-llm',
      category: 'Transformer NLP & LLMs',
      badge: 'BART Large CNN & MNLI',
      badgeColor: 'emerald',
      tagline:
        'Abstractive text summarization and zero-shot doctrinal classification of complex philosophical passages into 6 historical doctrines.',
      technologies: ['Hugging Face', 'PyTorch', 'BART Transformer', 'Python', 'Gradio'],
      sandboxType: 'philosophical_nlp_analyzer',
      links: {
        web: '',
        apk: '',
        github: 'https://github.com/Ani07Kr',
      },
      status: 'NLP Pipeline Simulator',
      features: [
        'facebook/bart-large-cnn abstractive summarization',
        'facebook/bart-large-mnli zero-shot classification',
        'Real-time multi-doctrine confidence vector scoring',
      ],
      icon: Terminal,
      accentColor: 'from-emerald-500 to-teal-600',
      borderAccent: 'border-emerald-500/30',
      bgGlow: 'bg-emerald-500/10',
    },
    {
      id: 'sleep-stage',
      title: 'Sleep Stage EEG ML Classifier',
      slug: 'sleep-stage-classification-eeg-ml',
      category: 'Biomedical Signal Processing',
      badge: 'IEEE ICVADV-2025 Conference',
      badgeColor: 'blue',
      tagline:
        'High-precision machine learning pipeline classifying sleep stages (Wake, N1, N2, N3, REM) from single-channel EEG signals with 97% accuracy.',
      technologies: ['Scikit-Learn', 'SciPy', 'Python', 'Signal Processing', 'Hypnograms'],
      sandboxType: 'sleep_stage_classifier',
      links: {
        web: '',
        apk: '',
        github: 'https://github.com/Ani07Kr',
        paper: 'IEEE ICVADV-2025 Conference Proceedings',
      },
      status: 'IEEE Validated Benchmark',
      features: [
        '97% accuracy across Wake, Light, Deep, and REM sleep',
        'Real-time frequency band extraction (Delta, Theta, Alpha, Beta)',
        'Automated hypnogram architecture visualization',
      ],
      icon: Activity,
      accentColor: 'from-blue-500 to-indigo-600',
      borderAccent: 'border-blue-500/30',
      bgGlow: 'bg-blue-500/10',
    },
  ];

  const [activeDeploymentId, setActiveDeploymentId] = useState('bhagavad-gita');

  const selectedDeployment =
    deployments.find((d) => d.id === activeDeploymentId) || deployments[0];

  const correspondingProject =
    projects.find((p) => p.slug === selectedDeployment.slug) || {
      ...selectedDeployment,
      links: {
        github: selectedDeployment.links.github,
        live: selectedDeployment.links.web,
        apk: selectedDeployment.links.apk,
      },
    };

  const handleCopyLink = (url, label) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section
      id="simulators"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/30 shadow-sm">
          <Zap className="w-3.5 h-3.5" />
          <span>Interactive Sandbox & Deployment Hub</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Live Simulators & <span className="text-gradient">Production Deployments</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Test real-time in-browser simulators of patented AI models, download production Android APK
          builds (compiled via Expo EAS), or launch live cloud web deployments directly.
        </p>
      </div>

      {/* Deployment Quick-Cards Grid (Columns for each major project) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {deployments.slice(0, 3).map((dep) => {
          const isSelected = dep.id === activeDeploymentId;
          const IconComponent = dep.icon;

          return (
            <div
              key={dep.id}
              onClick={() => setActiveDeploymentId(dep.id)}
              className={`cursor-pointer rounded-3xl p-5 sm:p-6 transition-all border flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? 'glass-card border-brand-500 dark:border-cyan-400 shadow-xl shadow-indigo-500/10 ring-2 ring-brand-500/20'
                  : 'glass-card border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-lg'
              }`}
            >
              {/* Background ambient glow */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl -z-10 ${dep.bgGlow} transition-opacity duration-300 ${
                  isSelected ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'
                }`}
              />

              <div className="space-y-4">
                {/* Header / Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div
                    className={`w-10 h-10 rounded-2xl bg-gradient-to-tr ${dep.accentColor} text-white flex items-center justify-center shadow-md`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wide border ${
                      dep.badgeColor === 'amber'
                        ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
                        : dep.badgeColor === 'cyan'
                        ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
                        : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30'
                    }`}
                  >
                    {dep.badge.split('&')[0]}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors">
                    {dep.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {dep.category}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {dep.tagline}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {dep.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Deployment Links & Simulator Trigger */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  {dep.links.web && (
                    <a
                      href={dep.links.web}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-sm shadow-indigo-500/20 transition-all"
                      title="Open Live Web Application"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Web App</span>
                      <ArrowUpRight className="w-3 h-3 opacity-70" />
                    </a>
                  )}

                  {dep.links.apk && (
                    <a
                      href={dep.links.apk}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm shadow-emerald-500/20 transition-all"
                      title="Download Production Android APK (Expo EAS)"
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>APK Build</span>
                      <Download className="w-3 h-3 opacity-70" />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  className={`w-full py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    isSelected
                      ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isSelected ? 'Active Simulator Below ↓' : 'Launch In-Page Simulator'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Simulator Selection Tabs & Interactive Sandbox Workspace */}
      <div className="glass-card rounded-3xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800/90 space-y-6 shadow-2xl">
        {/* Workspace Header with Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${selectedDeployment.accentColor} animate-pulse`}
              />
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>{selectedDeployment.title}</span>
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Live interactive in-browser simulation running authentic heuristics and state pipelines.
            </p>
          </div>

          {/* Tab Selector for all 5 Simulators */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
            {deployments.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDeploymentId(d.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeDeploymentId === d.id
                    ? 'bg-brand-600 text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <span>{d.title.split(':')[0].split(' ')[0]}</span>
                {d.links.apk && (
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1 py-0.2 rounded font-mono">
                    APK
                  </span>
                )}
                {d.links.web && (
                  <span className="text-[9px] bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 px-1 py-0.2 rounded font-mono">
                    Web
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Action Link Bar for Current Selected Simulator */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Deployment Targets:
            </span>

            {selectedDeployment.links.web && (
              <a
                href={selectedDeployment.links.web}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-sm shadow-indigo-500/20 transition-all"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Open Live Web App</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {selectedDeployment.links.apk && (
              <a
                href={selectedDeployment.links.apk}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-sm shadow-emerald-500/20 transition-all"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Download Android APK (Expo EAS)</span>
                <Download className="w-3.5 h-3.5" />
              </a>
            )}

            {selectedDeployment.links.backend && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono">
                <Box className="w-3 h-3 text-cyan-400" />
                <span>{selectedDeployment.links.backend}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {selectedDeployment.links.web && (
              <button
                onClick={() => handleCopyLink(selectedDeployment.links.web, 'web')}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-medium flex items-center gap-1 transition-all"
                title="Copy Web Deployment Link"
              >
                {copiedLink === 'web' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 text-[11px]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy Web Link</span>
                  </>
                )}
              </button>
            )}

            {selectedDeployment.links.apk && (
              <button
                onClick={() => handleCopyLink(selectedDeployment.links.apk, 'apk')}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-medium flex items-center gap-1 transition-all"
                title="Copy APK Build URL"
              >
                {copiedLink === 'apk' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 text-[11px]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Copy APK Link</span>
                  </>
                )}
              </button>
            )}

            <button
              onClick={() => setActiveProjectModal(correspondingProject)}
              className="px-3 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-900 hover:text-white transition-colors text-xs font-bold flex items-center gap-1"
            >
              <span>Full Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Live In-Page Interactive Simulator Render */}
        <div className="pt-2">
          <ProjectSandbox project={correspondingProject} />
        </div>
      </div>

      {/* Future Deployments & Registry Extensibility Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              CI/CD & Cloud Build Pipeline
            </span>
          </div>
          <h4 className="text-base font-bold">
            Continuous Mobile & Web Deployment Infrastructure
          </h4>
          <p className="text-xs text-slate-400 max-w-xl">
            Automated production deployments via Expo Application Services (EAS) for Android APKs,
            Render Cloud for web frontends & Node/Express backends, and Supabase for real-time data synchronization.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <a
            href="https://github.com/Ani07Kr"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold border border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>GitHub CI/CD</span>
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1.5"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Request Demo Access</span>
          </a>
        </div>
      </div>
    </section>
  );
};
