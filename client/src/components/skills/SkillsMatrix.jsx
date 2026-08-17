import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Cpu,
  Search,
  Sparkles,
  Code2,
  Database,
  BrainCircuit,
  Terminal,
  Wrench,
  CheckCircle2,
  Star,
} from 'lucide-react';

export const SkillsMatrix = () => {
  const { skills } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Frontend & Mobile',
    'Backend & APIs',
    'Databases & Cloud',
    'AI, ML & NLP',
    'Languages',
    'Developer Tools',
  ];

  const filteredSkills = skills.filter((s) => {
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.highlight?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-900/60">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Proficiency</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Comprehensive <span className="text-gradient">Skills Matrix</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Evaluated against production web architectures, mobile engineering, and deep learning research.
        </p>
      </div>

      {/* Category Tabs & Search Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Filter skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-sm"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredSkills.map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className="glass-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 hover:border-brand-500/50 dark:hover:border-cyan-400/40 transition-all hover:scale-[1.02] space-y-3 group"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-slate-800 flex items-center justify-center text-brand-600 dark:text-cyan-400 font-bold text-xs">
                  {skill.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{skill.name}</span>
                    {skill.isTopSkill && (
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" title="Core Specialization" />
                    )}
                  </h3>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                    {skill.category}
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-brand-600 dark:text-cyan-400 bg-brand-50 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                {skill.proficiency}%
              </span>
            </div>

            {/* Proficiency Bar */}
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-600 to-cyan-400 rounded-full transition-all duration-1000 ease-out group-hover:from-indigo-500 group-hover:to-cyan-300"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>

            {/* Highlight Notes */}
            {skill.highlight && (
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-normal pt-1 border-t border-slate-100 dark:border-slate-800/60">
                {skill.highlight}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
