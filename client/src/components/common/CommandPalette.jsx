import React, { useState, useEffect, useRef } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Search,
  Zap,
  Bot,
  FileText,
  FolderGit2,
  Cpu,
  GraduationCap,
  Award,
  Mail,
  ArrowRight,
  Sparkles,
  Music,
} from 'lucide-react';

export const CommandPalette = () => {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    setIsRecruiterModalOpen,
    setIsAiDrawerOpen,
    setActiveProjectModal,
    replayPreloader,
    projects,
    skills,
    achievements,
  } = usePortfolio();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  // Build searchable items
  const baseActions = [
    {
      title: '🎵 Replay Piano Intro Splash Symphony',
      category: 'Action',
      icon: Music,
      action: () => {
        setIsCommandPaletteOpen(false);
        replayPreloader();
      },
    },
    {
      title: '⚡ Open 60-Second Recruiter Summary',
      category: 'Action',
      icon: Zap,
      action: () => setIsRecruiterModalOpen(true),
    },
    {
      title: '🤖 Ask Aniket AI Portfolio Assistant',
      category: 'Action',
      icon: Bot,
      action: () => setIsAiDrawerOpen(true),
    },
    {
      title: '📄 View & Download ATS Resume',
      category: 'Action',
      icon: FileText,
      action: () => {
        window.location.hash = '#resume';
      },
    },
    {
      title: '💼 Check Job Description Match Score',
      category: 'Action',
      icon: Cpu,
      action: () => {
        window.location.hash = '#jd-matcher';
      },
    },
    {
      title: '📬 Send Direct Message to Aniket',
      category: 'Action',
      icon: Mail,
      action: () => {
        window.location.hash = '#contact';
      },
    },
  ];

  const projectItems = projects.map((p) => ({
    title: p.title,
    subtitle: `${p.category} • ${p.badge}`,
    category: 'Project',
    icon: FolderGit2,
    action: () => setActiveProjectModal(p),
  }));

  const achievementItems = achievements.map((a) => ({
    title: a.title,
    subtitle: `${a.category} • ${a.identifierOrId || a.organization}`,
    category: 'Patent / Research',
    icon: Award,
    action: () => {
      window.location.hash = '#research';
    },
  }));

  const skillItems = skills.map((s) => ({
    title: s.name,
    subtitle: `${s.category} (${s.proficiency}% Proficiency)`,
    category: 'Skill',
    icon: Cpu,
    action: () => {
      window.location.hash = '#skills';
    },
  }));

  const allItems = [...baseActions, ...projectItems, ...achievementItems, ...skillItems];

  const filteredItems = query.trim() === ''
    ? baseActions
    : allItems.filter((item) => {
        const text = `${item.title} ${item.subtitle || ''} ${item.category}`.toLowerCase();
        return text.includes(query.toLowerCase());
      }).slice(0, 10);

  const handleSelect = (item) => {
    setIsCommandPaletteOpen(false);
    item.action();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-md"
      onClick={() => setIsCommandPaletteOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-[#0E1526] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-slate-200 dark:border-slate-800/80">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, skills, patents, research, or type an action..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full py-4 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-base focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-2 py-1 text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-slate-500">
              No results found for "{query}". Try searching "Gita", "Patent", "React", or "Resume".
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={`${item.category}-${item.title}-${index}`}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-brand-600 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-cyan-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-sm font-semibold truncate">{item.title}</div>
                      {item.subtitle && (
                        <div
                          className={`text-xs truncate ${
                            isSelected ? 'text-indigo-100' : 'text-slate-500 dark:text-slate-400'
                          }`}
                        >
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-3 shrink-0">
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                        isSelected
                          ? 'bg-white/20 border-white/30 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {item.category}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span>↑↓ to navigate</span>
            <span>↵ to select</span>
            <span>esc to close</span>
          </div>
          <span className="font-mono">Aniket Kumar Portfolio</span>
        </div>
      </div>
    </div>
  );
};
