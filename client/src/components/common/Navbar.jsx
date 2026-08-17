import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Patents', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'JD Matcher', href: '#jd-matcher' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-2.5 shadow-lg shadow-black/5 dark:shadow-black/20'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 md:gap-4">
        {/* Brand Logo & Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
        >
          {/* Custom Designed Ak Monogram Logo with clearly visible k */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/25 group-hover:scale-105 group-hover:shadow-cyan-500/30 transition-all duration-300 shrink-0">
            <div className="w-full h-full bg-slate-950 dark:bg-[#070A12] rounded-[10px] flex items-center justify-center relative overflow-hidden">
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Monogram: Big A (20px) + Clearly Visible k (15px) */}
              <div className="flex items-baseline select-none z-10 leading-none">
                <span className="text-xl font-black text-white tracking-tighter drop-shadow-sm font-sans">
                  A
                </span>
                <span className="text-[15px] font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] -ml-0.5 tracking-normal font-sans">
                  k
                </span>
              </div>

              {/* Glowing Accent Dot */}
              <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
            </div>
          </div>

          {/* Name & Subtitle in Clean Single Lines */}
          <div className="flex flex-col justify-center shrink-0">
            <span className="text-sm sm:text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap leading-none">
              Aniket Kumar
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" title="Available for hire"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap leading-none mt-1">
              MCA • Full-Stack & AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links - Compact & Shifted to preserve right-side controls */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-slate-100/80 dark:bg-slate-900/70 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200/80 dark:border-slate-800/80 text-[12px] xl:text-[13px] font-medium text-slate-700 dark:text-slate-300 shrink">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 xl:px-2.5 py-1 rounded-full hover:text-brand-600 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-800/80 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls - Always Visible on Right */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Quick Recruiter Mode Button */}
          <button
            onClick={() => setIsRecruiterModalOpen(true)}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 h-8.5 sm:h-9 px-3 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold hover:bg-amber-500/20 hover:scale-105 transition-all shadow-sm shadow-amber-500/10"
            title="Open 60-Second Recruiter Summary"
          >
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0" />
            <span className="whitespace-nowrap">Recruiter Mode</span>
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={() => setIsAiDrawerOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 h-8.5 sm:h-9 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-brand-600 hover:from-indigo-500 hover:to-brand-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 hover:scale-105 transition-all"
            title="Ask Aniket's AI Assistant"
          >
            <Bot className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Ask AI</span>
          </button>

          {/* Command Palette Trigger (Cmd+K) */}
          <button
            onClick={() => setIsCommandPaletteOpen(true)}
            className="hidden md:inline-flex items-center justify-center gap-1 h-8.5 sm:h-9 px-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 text-xs font-mono transition-colors"
            title="Press Cmd+K to search"
          >
            <Command className="w-3.5 h-3.5 shrink-0" />
            <span>K</span>
          </button>

          {/* Background Music Play/Stop Control Button */}
          <button
            onClick={toggleMusic}
            className={`hidden sm:inline-flex items-center justify-center gap-1.5 h-8.5 sm:h-9 px-2.5 rounded-xl border transition-all shrink-0 ${
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
                <span className="text-[11px] font-mono font-bold text-cyan-300">Music ON</span>
              </>
            ) : (
              <>
                <Music className="w-3.5 h-3.5" />
                <span className="text-[11px] font-mono text-slate-400">Play</span>
              </>
            )}
          </button>

          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center h-8.5 sm:h-9 w-8.5 sm:w-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80 transition-colors shrink-0"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center h-8.5 sm:h-9 w-8.5 sm:w-9 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80 shrink-0"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-6 py-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg font-medium text-slate-800 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-800/60 hover:text-brand-600 dark:hover:text-cyan-400 transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsRecruiterModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 font-semibold text-sm"
              >
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>60-Second Recruiter Summary</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsAiDrawerOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-600 text-white font-semibold text-sm"
              >
                <Bot className="w-4 h-4" />
                <span>Chat with Aniket AI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
