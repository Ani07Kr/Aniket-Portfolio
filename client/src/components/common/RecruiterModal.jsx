import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import confetti from 'canvas-confetti';
import {
  X,
  Zap,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Download,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Sparkles,
} from 'lucide-react';

export const RecruiterModal = () => {
  const { isRecruiterModalOpen, setIsRecruiterModalOpen, profile } = usePortfolio();

  if (!isRecruiterModalOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleResumeDownload = () => {
    triggerConfetti();
    const link = document.createElement('a');
    link.href = profile?.resumeUrl || '/resume.pdf';
    link.download = 'Aniket_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={() => setIsRecruiterModalOpen(false)}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] sm:max-h-[86vh] flex flex-col bg-white dark:bg-[#0E1526] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Pinned at top */}
        <div className="shrink-0 relative bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 p-5 sm:p-7 text-white pr-16">
          <button
            onClick={() => setIsRecruiterModalOpen(false)}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110 shadow-md z-30"
            aria-label="Close modal"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-xs font-semibold mb-2.5 border border-white/20">
            <Zap className="w-3.5 h-3.5 fill-amber-300" />
            <span>60-Second Executive Summary</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Aniket Kumar
          </h2>
          <p className="text-indigo-100 text-xs sm:text-sm mt-1 font-medium max-w-xl">
            Full-Stack & Mobile Developer | AI Researcher | MCA Graduate (8.45 CGPA)
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 text-xs text-indigo-100">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-300" />
              Bangalore, India (Open to Remote & Relocation)
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Immediate Availability for Full-Time Roles
            </span>
          </div>
        </div>

        {/* Content Body - Scrollable */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Key Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-slate-800/60 border border-indigo-100 dark:border-slate-700/60 text-center">
              <div className="text-2xl font-black text-brand-600 dark:text-cyan-400">8.45</div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                MCA CGPA (NHCE)
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-purple-50 dark:bg-slate-800/60 border border-purple-100 dark:border-slate-700/60 text-center">
              <div className="text-2xl font-black text-purple-600 dark:text-purple-400">2</div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Indian Patents
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-slate-800/60 border border-amber-100 dark:border-slate-700/60 text-center">
              <div className="text-2xl font-black text-amber-600 dark:text-amber-400">1</div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                IEEE Conference
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-slate-800/60 border border-emerald-100 dark:border-slate-700/60 text-center">
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">3</div>
              <div className="text-[11px] font-medium text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Internships
              </div>
            </div>
          </div>

          {/* Quick Pitch */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span>Elevator Summary for Hiring Managers</span>
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {profile?.recruiterPitch?.summary ||
                'Aniket Kumar is an MCA graduate (8.45 CGPA) with full-stack web & mobile development expertise, hands-on industry internship experience (TechCiti Software Consulting & Tripillar Solutions), and 2 published Indian Patents in AI technology. Ready to deploy production code from Day 1.'}
            </p>
          </div>

          {/* Core Strengths Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Verified Technical Strengths
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                'Full-Stack Web Architecture (React, Node.js, Express, MongoDB, SQL)',
                'Mobile App Engineering (React Native & Expo)',
                'Indian Patent Inventor: AI Holistic Guidance (Pub No. 26/2025)',
                'Indian Patent Inventor: MINDPLAY Mental Health (Pub No. 28/2024)',
                'IEEE ICVADV-2025 Presenter: EEG Sleep Classification (97% Acc)',
                'Corporate Internship at TechCiti Software Consulting (Bangalore)',
                'Corporate Internship at Tripillar Solutions LLP (Bangalore)',
                'High Code Velocity & Strong CS Fundamentals (DSA, OOP, SQL)',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Preferred Roles & Tech */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Target Roles
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Full Stack Developer',
                  'Frontend Engineer (React)',
                  'Backend Node.js Developer',
                  'Software Development Engineer (SDE)',
                ].map((role, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-brand-700 dark:text-cyan-300 text-xs font-semibold border border-indigo-100 dark:border-indigo-900/60"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Primary Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'React.js',
                  'Node.js',
                  'Express.js',
                  'MongoDB',
                  'React Native',
                  'TypeScript',
                  'Python AI/ML',
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Footer - Fixed at bottom */}
        <div className="shrink-0 p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${profile?.contact?.email || 'aniket07kr2000@gmail.com'}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-brand-600 hover:border-brand-500 transition-colors"
              title="Email Aniket"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profile?.contact?.phone || '+917903828970'}`}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-emerald-500 hover:border-emerald-500 transition-colors"
              title="Call Aniket"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={profile?.contact?.linkedIn || 'https://linkedin.com/in/aniket-kumar-ak07'}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-blue-500 hover:border-blue-500 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile?.contact?.gitHub || 'https://github.com/Ani07Kr'}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleResumeDownload}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white text-sm font-bold shadow-lg shadow-indigo-500/25 hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download ATS Resume</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
