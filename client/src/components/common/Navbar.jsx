import React, { useState, useEffect, useRef } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Sun,
  Moon,
  Command,
  Zap,
  Bot,
  Menu,
  X,
  FileText,
  Briefcase,
  Layers,
  Award,
  Sparkles,
  Lock,
  Music,
  ChevronDown,
  GraduationCap,
  Cpu,
  BookOpen,
} from 'lucide-react';

export const Navbar = () => {
  const {
    isDark,
    toggleTheme,
    setIsRecruiterModalOpen,
    setIsCommandPaletteOpen,
    setIsAiDrawerOpen,
    setIsAdminLoginOpen,
    isAdminLoggedIn,
    replayPreloader,
    isMusicPlaying,
    toggleMusic,
  } = usePortfolio();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close "More" dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Primary links visible directly on desktop navbar
  const primaryNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Patents', href: '#research' },
    { name: 'Simulators', href: '#simulators' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  // Secondary links nested under "More" dropdown on desktop
  const secondaryNavLinks = [
    { name: 'JD Matcher', href: '#jd-matcher', icon: Cpu, desc: 'Live resume-to-job matching score' },
    { name: 'Education', href: '#education', icon: GraduationCap, desc: 'MCA & BCA credentials' },
    { name: 'Resume', href: '#resume', icon: FileText, desc: 'Interactive ATS resume & PDF' },
    { name: 'Blog', href: '#blog', icon: BookOpen, desc: 'Engineering & AI articles' },
  ];

  // All links combined for mobile drawer
  const allNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Patents & Research', href: '#research' },
    { name: '⚡ Live Simulators & Builds', href: '#simulators' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills Matrix', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'JD Matcher', href: '#jd-matcher' },
    { name: 'Resume Viewer', href: '#resume' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 w-full ${
        isScrolled
          ? 'glass-nav py-2 shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 lg:gap-3 w-full">
        {/* Brand Logo & Name */}
        <a
          href="#"
          className="flex items-center gap-2 sm:gap-2.5 group focus:outline-none shrink-0"
        >
          {/* Custom Designed Ak Monogram Logo */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-cyan-500/30 transition-all duration-300 shrink-0">
            <div className="w-full h-full bg-slate-950 dark:bg-[#070A12] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-baseline select-none z-10 leading-none">
                <span className="text-lg sm:text-xl font-black text-white tracking-tighter drop-shadow-sm font-sans">
                  A
                </span>
                <span className="text-sm sm:text-[15px] font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] -ml-0.5 tracking-normal font-sans">
                  k
                </span>
              </div>

              <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
            </div>
          </div>

          {/* Name & Subtitle */}
          <div className="flex flex-col justify-center shrink-0">
            <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap leading-none">
              Aniket Kumar
              <span
                className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"
                title="Available for hire"
              ></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap leading-none mt-1">
              MCA • Full-Stack & AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links - Perfectly Balanced & Responsive with More Dropdown */}
        <nav className="hidden xl:flex items-center gap-0.5 bg-slate-100/80 dark:bg-slate-900/70 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200/80 dark:border-slate-800/80 text-[12px] font-medium text-slate-700 dark:text-slate-300 shrink">
          {primaryNavLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2.5 py-1 rounded-full hover:text-brand-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-800/80 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}

          {/* "More" Dropdown Menu for Secondary Links */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setMoreDropdownOpen((prev) => !prev)}
              className={`px-2.5 py-1 rounded-full flex items-center gap-1 hover:text-brand-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-800/80 transition-colors whitespace-nowrap ${
                moreDropdownOpen ? 'bg-white dark:bg-slate-800 text-brand-600 dark:text-cyan-400 font-bold' : ''
              }`}
            >
              <span>More</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${moreDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {moreDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-2 z-50 animate-fadeIn">
                {secondaryNavLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMoreDropdownOpen(false)}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 transition-colors group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-brand-600 dark:group-hover:text-cyan-400 shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold group-hover:text-brand-600 dark:group-hover:text-cyan-400">
                          {item.name}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                          {item.desc}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Action Controls - Always 100% Visible on Right Without Overflow */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 flex-nowrap">
          {/* Quick Recruiter Mode Button */}
          <button
            onClick={() => setIsRecruiterModalOpen(true)}
            className="hidden md:inline-flex items-center justify-center gap-1.5 h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold hover:bg-amber-500/20 hover:scale-105 transition-all shadow-sm shadow-amber-500/10 shrink-0"
            title="Open 60-Second Recruiter Summary"
          >
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
            <span className="hidden lg:inline whitespace-nowrap">Recruiter Mode</span>
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={() => setIsAiDrawerOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 h-8 sm:h-9 px-2.5 sm:px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-brand-600 hover:from-indigo-500 hover:to-brand-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 hover:scale-105 transition-all shrink-0"
            title="Ask Aniket's AI Assistant"
          >
            <Bot className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Ask AI</span>
          </button>

          {/* Command Palette Trigger (Cmd+K) */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="hidden lg:inline-flex items-center justify-center gap-1 h-8 sm:h-9 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-mono transition-colors shrink-0"
            title="Press Cmd+K to search"
          >
            <Command className="w-3.5 h-3.5 shrink-0" />
            <span>K</span>
          </button>

          {/* Background Music Play/Stop Control Button */}
          <button
            onClick={toggleMusic}
            className={`inline-flex items-center justify-center gap-1.5 h-8 sm:h-9 px-2 sm:px-2.5 rounded-xl border transition-all shrink-0 ${
              isMusicPlaying
                ? 'bg-indigo-600/20 text-cyan-300 border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200/80 dark:border-slate-700/80'
            }`}
            title={isMusicPlaying ? 'Stop / Pause Background Music' : 'Play Soothing Background Music'}
            aria-label="Toggle background music"
          >
            {isMusicPlaying ? (
              <>
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 h-full bg-cyan-400 animate-[bounce_0.6s_infinite_ease-in-out]" />
                  <span className="w-0.5 h-2/3 bg-indigo-400 animate-[bounce_0.8s_infinite_ease-in-out_0.2s]" />
                  <span className="w-0.5 h-4/5 bg-purple-400 animate-[bounce_0.5s_infinite_ease-in-out_0.1s]" />
                </div>
                <span className="hidden sm:inline text-[11px] font-mono font-bold text-cyan-300">ON</span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px] font-mono text-slate-400">Music</span>
              </>
            )}
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center h-8 sm:h-9 w-8 sm:w-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 transition-colors shrink-0"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Mobile/Tablet Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="xl:hidden inline-flex items-center justify-center h-8 sm:h-9 w-8 sm:w-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shrink-0"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-5 py-5 shadow-2xl transition-all max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {allNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-xl font-medium text-slate-800 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800/60 hover:text-brand-600 dark:hover:text-cyan-400 transition-colors text-sm flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronDown className="w-3.5 h-3.5 -rotate-90 opacity-40" />
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsRecruiterModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-semibold text-xs"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>60-Second Recruiter Summary</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAiDrawerOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-600 text-white font-semibold text-xs shadow-md shadow-indigo-500/20"
              >
                <Bot className="w-3.5 h-3.5" />
                <span>Chat with Aniket AI Assistant</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

