import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Award,
  ScrollText,
  Presentation,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Users,
  Calendar,
  Sparkles,
  BarChart3,
  BrainCircuit,
  Smartphone,
} from 'lucide-react';

export const ResearchPatents = () => {
  const { achievements } = usePortfolio();
  const [activeTab, setActiveTab] = useState('all');

  const patentList = achievements.filter((a) => a.category === 'Patent');
  const ieeeList = achievements.filter((a) => a.category === 'IEEE Conference');

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-200 dark:border-amber-900/60">
          <Award className="w-3.5 h-3.5" />
          <span>Research & Intellectual Property</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Patented Innovations & <span className="text-gradient">IEEE Research</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Official intellectual property published with the Government of India and peer-reviewed conference publications.
        </p>
      </div>

      {/* Grid of Patents & Papers */}
      <div className="space-y-8">
        {/* Patent 1: Bhagavad Gita AI Wellness */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-l-4 border-l-amber-500 relative overflow-hidden group hover:shadow-xl transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-bold border border-amber-500/30">
                <ScrollText className="w-3.5 h-3.5" />
                <span>Indian Patent Publication No. 26/2025</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-1">
                Method for AI-Based Personalized Guidance from the Bhagavad Gita for Holistic Well-Being
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Application No: 202541054232 • Published: 27 June 2025 • New Horizon College of Engineering
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-2">
              <a
                href="https://bhagavadgitawellnessapp.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm shadow-indigo-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live App</span>
              </a>
              <a
                href="https://expo.dev/accounts/ani07kr/projects/bhagavadgita-wellness/builds/a99d63c8-14cb-47e9-a957-61df993cce51"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm shadow-emerald-500/20"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Download APK</span>
              </a>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-500" />
                <span>27 June 2025</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>System Summary:</strong> Patented multi-modal diagnostic and algorithmic recommendation
                system that fuses real-time facial emotion recognition, ECG biometric stress signal waveform analysis,
                and structured cognitive questionnaire scoring to dynamically prescribe customized Sanskrit shlokas,
                practical English insights, and therapeutic affirmations.
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Inventions & Architectural Breakthroughs:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Tri-modal affective sensor fusion (Camera + ECG + Survey)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Semantic verse mapping across 700+ Bhagavad Gita shlokas</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Real-time cross-platform client in React Native & React</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Supabase & Node.js session analytics architecture</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-brand-500" />
                <span>Inventors</span>
              </h4>
              <ul className="space-y-1 text-xs text-slate-800 dark:text-slate-200 font-medium">
                <li className="font-bold text-brand-600 dark:text-cyan-400">1. Aniket Kumar (Lead Author & Developer)</li>
                <li>2. Arpana Prasada (Professor & Mentor)</li>
                <li>3. Arpita S. Kulkarni (Co-inventor)</li>
                <li>4. Abhinav Reddy</li>
              </ul>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
                Official IP India Patent Registry
              </div>
            </div>
          </div>
        </div>

        {/* Patent 2: MINDPLAY Mental Health */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-l-4 border-l-purple-500 relative overflow-hidden group hover:shadow-xl transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Indian Patent Publication No. 28/2024</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-1">
                MINDPLAY: Nurturing Mental Health
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Application No: 202441035043 • Published: 07 December 2024 • New Horizon College of Engineering
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-500" />
                <span>07 December 2024</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>System Summary:</strong> Affective tutoring and digital psychological well-being system that
                continuously monitors facial emotional cues using deep learning to detect signs of mental fatigue,
                anxiety, or student disengagement, and triggers adaptive cognitive exercises and guided calming breaks.
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Key Technical Innovations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Real-time CNN facial expression inference (5 emotion states)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Automated curriculum difficulty and pace modulation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Gamified mindfulness breaks and breathing exercises</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Student engagement analytics dashboard</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-purple-500" />
                <span>Inventors</span>
              </h4>
              <ul className="space-y-1 text-xs text-slate-800 dark:text-slate-200 font-medium">
                <li className="font-bold text-brand-600 dark:text-cyan-400">1. Aniket Kumar</li>
                <li>2. J. Sathya</li>
                <li>3. V. Asha</li>
                <li>4. A. Kalaivani</li>
                <li>5. N. S. Sukanya</li>
                <li>6. M. T. Vasumathi</li>
              </ul>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
                Official IP India Patent Registry
              </div>
            </div>
          </div>
        </div>

        {/* IEEE Conference Paper */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border-l-4 border-l-cyan-500 relative overflow-hidden group hover:shadow-xl transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10 group-hover:scale-125 transition-transform"></div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-bold border border-cyan-500/30">
                <Presentation className="w-3.5 h-3.5" />
                <span>IEEE International Conference (ICVADV-2025)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white pt-1">
                Sleep Stage Classification: Combining KNN, Decision Tree, and Regression for Enhanced Performance
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Presented at ICVADV-2025 • Francis Xavier Engineering College, Tamil Nadu in association with IEEE
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                <span>04–06 March 2025</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 space-y-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                <strong>Research Overview:</strong> Automated classification of multi-channel polysomnography EEG
                signals into clinical sleep stages (Wake, N1, N2, N3, REM) using spectral band power feature
                extraction (Delta, Theta, Alpha, Beta) and a comparative ensemble machine learning framework.
              </p>

              {/* Accuracy benchmark table */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Validated Model Performance Metrics:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-center">
                    <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">97%</div>
                    <div className="text-[10px] font-semibold text-slate-500">KNN Accuracy</div>
                    <div className="text-[9px] text-slate-400">Prec: 0.99 • Rec: 0.98</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-center">
                    <div className="text-lg font-black text-cyan-600 dark:text-cyan-400">96%</div>
                    <div className="text-[10px] font-semibold text-slate-500">Decision Tree</div>
                    <div className="text-[9px] text-slate-400">Prec: 0.95 • Rec: 0.96</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-center">
                    <div className="text-lg font-black text-indigo-600 dark:text-indigo-400">90%</div>
                    <div className="text-[10px] font-semibold text-slate-500">Logistic Reg.</div>
                    <div className="text-[9px] text-slate-400">Prec: 0.89 • Rec: 0.90</div>
                  </div>
                  <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/30 text-center">
                    <div className="text-lg font-black text-brand-600 dark:text-cyan-400">98%</div>
                    <div className="text-[10px] font-semibold text-brand-700 dark:text-cyan-300">Ensemble Peak</div>
                    <div className="text-[9px] text-slate-400">F1: 0.99</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5 text-cyan-500" />
                <span>Technologies & Methods</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Python, Scikit-Learn, NumPy, Pandas</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Welch Power Spectral Density (PSD)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>PhysioNet Polysomnography Dataset</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Stratified K-Fold Cross-Validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
