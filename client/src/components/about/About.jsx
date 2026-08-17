import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  User,
  GraduationCap,
  Sparkles,
  Award,
  Code2,
  Rocket,
  MapPin,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

export const About = () => {
  const { profile } = usePortfolio();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-900/60">
          <User className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Engineering Scalable Apps with <span className="text-gradient">Scientific Precision</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Blending modern full-stack web architectures with applied artificial intelligence.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Bio & Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card p-6 sm:p-8 rounded-3xl space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-brand-600 dark:text-cyan-400" />
              <span>The Developer Behind the Code</span>
            </h3>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              I am <strong className="text-slate-900 dark:text-white">Aniket Kumar</strong>, an MCA graduate from{' '}
              <strong className="text-slate-900 dark:text-white">
                New Horizon College of Engineering, Bangalore (CGPA: 8.45)
              </strong>
              , with a strong computer applications foundation from{' '}
              <strong className="text-slate-900 dark:text-white">LNMI Patna (CGPA: 7.78)</strong>.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              My technical journey is driven by solving real human problems through code. During my MCA tenure, I
              co-invented and published{' '}
              <strong className="text-brand-600 dark:text-cyan-400">2 Indian Patents</strong> in AI-driven holistic
              wellness and mental health, and presented our research on{' '}
              <strong className="text-brand-600 dark:text-cyan-400">EEG Sleep Stage Classification (97% accuracy)</strong>{' '}
              at an IEEE international conference.
            </p>

            <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Through internships at <strong className="text-slate-900 dark:text-white">TechCiti Software Consulting</strong> and{' '}
              <strong className="text-slate-900 dark:text-white">Tripillar Solutions LLP</strong>, I have delivered production
              React, React Native, and Node.js code, with clean REST APIs and intuitive user experiences.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-brand-600 dark:text-cyan-400 shrink-0">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Full-Stack Velocity</h4>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400">
                    High standard full-stack web & mobile app architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Patented Innovation</h4>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400">
                    2 published Indian Patents in AI & affective computing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Academic Credential Highlights */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card p-6 sm:p-7 rounded-3xl border-l-4 border-l-brand-600 dark:border-l-cyan-400 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-brand-50 dark:bg-slate-800 text-brand-600 dark:text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                CGPA: 8.45
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-xs font-semibold text-brand-600 dark:text-cyan-400 mt-0.5">
                New Horizon College of Engineering, Bangalore
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Autonomous • Affiliated to VTU • NAAC 'A' Grade • NBA Accredited (2023–2025)
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>USN: 1NH23MC016</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>2 Indian Patents published during degree</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Presented IEEE ICVADV-2025 research paper</span>
              </li>
            </ul>
          </div>

          <div className="glass-card p-6 sm:p-7 rounded-3xl border-l-4 border-l-purple-500 space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-purple-50 dark:bg-slate-800 text-purple-600 dark:text-purple-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                CGPA: 7.78
              </span>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                L. N. Mishra Institute of Economic Development (LNMI), Patna
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                Premier Autonomous State Institution (2020–2023)
              </p>
            </div>

            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Core CS & Software Fundamentals</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>C, C++, Java, DBMS & Web Engineering</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
