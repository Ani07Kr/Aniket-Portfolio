import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUp,
  Award,
  Sparkles,
  Lock,
  Heart,
} from 'lucide-react';

export const Footer = () => {
  const { profile, setIsAdminLoginOpen, isAdminLoggedIn, logoutAdmin } = usePortfolio();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-[#070A12]/80 backdrop-blur-lg pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 dark:bg-[#070A12] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="flex items-baseline select-none leading-none">
                    <span className="text-xl font-black text-white tracking-tighter drop-shadow-sm font-sans">
                      A
                    </span>
                    <span className="text-[15px] font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] -ml-0.5 tracking-normal font-sans">
                      k
                    </span>
                  </div>
                  <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Aniket Kumar
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  USN: 1NH23MC016 • NHCE Bangalore
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Full-Stack Developer, React Native Mobile Developer, and AI Researcher.
              Inventor of 2 published Indian Patents in AI-driven wellness technology and mental health.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile?.contact?.gitHub || 'https://github.com/Ani07Kr'}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-slate-900 dark:hover:bg-brand-600 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile?.contact?.linkedIn || 'https://linkedin.com/in/aniket-kumar-ak07'}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0A66C2] flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile?.contact?.email || 'aniket07kr2000@gmail.com'}`}
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-rose-500 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${profile?.contact?.phone || '+917903828970'}`}
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-emerald-600 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#about" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Patents & IEEE Research
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Featured Projects & Sandboxes
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Technical Skills Matrix
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors">
                  Education (MCA & BCA)
                </a>
              </li>
            </ul>
          </div>

          {/* Research & Patents Highlight */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Patents & Recognition</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-0.5">
                  Indian Patent Pub. 26/2025
                </span>
                AI Personalized Guidance from Bhagavad Gita
              </div>
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-0.5">
                  Indian Patent Pub. 28/2024
                </span>
                MINDPLAY: Nurturing Mental Health
              </div>
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-slate-200 block mb-0.5">
                  IEEE ICVADV-2025
                </span>
                Sleep Stage Classification (97% Acc)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p className="flex items-center gap-1">
            © {currentYear} Aniket Kumar. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Admin Login / Logout */}
            {isAdminLoggedIn ? (
              <button
                onClick={logoutAdmin}
                className="hover:text-rose-500 transition-colors flex items-center gap-1"
              >
                <Lock className="w-3 h-3 text-emerald-500" />
                <span>Admin Logout</span>
              </button>
            ) : (
              <button
                onClick={() => setIsAdminLoginOpen(true)}
                className="hover:text-brand-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
              >
                <Lock className="w-3 h-3" />
                <span>CMS Admin</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white transition-all group"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
