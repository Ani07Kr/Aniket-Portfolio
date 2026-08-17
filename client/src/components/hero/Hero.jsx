import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  ArrowRight,
  Zap,
  Bot,
  FileText,
  Award,
  Sparkles,
  Github,
  Linkedin,
  Mail,
  MapPin,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

const ROLES = [
  'Full-Stack Developer',
  'AI / ML & NLP Researcher',
  'React Native Mobile Developer',
  '2x Published Indian Patent Inventor',
  'MCA Graduate (8.45 CGPA)',
];

export const Hero = () => {
  const { profile, setIsRecruiterModalOpen, setIsAiDrawerOpen } = usePortfolio();

  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentFullText = ROLES[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        setTypingSpeed(80);

        if (displayedText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        setTypingSpeed(40);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] bg-gradient-to-tr from-brand-600/20 via-purple-600/15 to-cyan-400/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Availability & Patent Status Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for Full-Time Roles</span>
          </div>

          <a
            href="#research"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold backdrop-blur-md hover:bg-amber-500/20 transition-colors shadow-sm"
          >
            <Award className="w-3.5 h-3.5" />
            <span>2 Published Indian Patents</span>
          </a>
        </div>

        {/* Main Title & Typewriter */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm{' '}
            <span className="text-gradient">Aniket Kumar</span>
          </h1>

          <div className="h-10 sm:h-12 flex items-center justify-center">
            <div className="font-mono text-lg sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 flex items-center">
              <span className="text-brand-600 dark:text-cyan-400 mr-2">&gt;</span>
              <span>{displayedText}</span>
              <span className="w-2.5 h-6 sm:h-8 bg-brand-500 dark:bg-cyan-400 ml-1 inline-block animate-pulse"></span>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            MCA Graduate (8.45 CGPA) from New Horizon College of Engineering, Bangalore.
            Building scalable web applications, React Native mobile apps, robust REST microservices,
            and applied machine learning solutions.
          </p>
        </div>

        {/* Primary Call-to-Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:scale-105 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsRecruiterModalOpen(true)}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/40 text-amber-700 dark:text-amber-300 hover:bg-amber-500/25 font-bold text-sm shadow-md shadow-amber-500/10 hover:scale-105 transition-all"
          >
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Recruiter Mode (60s)</span>
          </button>

          <button
            onClick={() => setIsAiDrawerOpen(true)}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-brand-500 font-semibold text-sm hover:scale-105 transition-all"
          >
            <Bot className="w-4 h-4 text-brand-600 dark:text-cyan-400" />
            <span>Ask Aniket AI</span>
          </button>
        </div>

        {/* Social / Contact Quick Links */}
        <div className="flex items-center justify-center gap-4 pt-2 text-slate-500 dark:text-slate-400">
          <a
            href={profile?.contact?.gitHub || 'https://github.com/Ani07Kr'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors text-xs font-medium"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span>•</span>
          <a
            href={profile?.contact?.linkedIn || 'https://linkedin.com/in/aniket-kumar-ak07'}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-500 transition-colors text-xs font-medium"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <span>•</span>
          <a
            href={`mailto:${profile?.contact?.email || 'aniket07kr2000@gmail.com'}`}
            className="flex items-center gap-1.5 hover:text-rose-500 transition-colors text-xs font-medium"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>

        {/* Metrics Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-4xl mx-auto pt-6">
          <div className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-brand-600 dark:text-cyan-400">
              8.45
            </div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
              MCA CGPA (NHCE)
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-purple-600 dark:text-purple-400">
              2
            </div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Published Indian Patents
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400">
              1
            </div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
              IEEE Conference Paper
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 dark:text-emerald-400">
              3
            </div>
            <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-1">
              Industry Internships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
