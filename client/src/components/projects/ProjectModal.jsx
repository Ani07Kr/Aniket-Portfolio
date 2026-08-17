import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectSandbox } from './ProjectSandbox';
import {
  X,
  ExternalLink,
  Github,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Code2,
  Terminal,
  Play,
  Briefcase,
} from 'lucide-react';

export const ProjectModal = () => {
  const { activeProjectModal, setActiveProjectModal } = usePortfolio();
  const [explanationMode, setExplanationMode] = useState('recruiter'); // 'recruiter' | 'technical' | 'beginner'
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'architecture' | 'sandbox'

  if (!activeProjectModal) return null;

  const p = activeProjectModal;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={() => setActiveProjectModal(null)}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] sm:max-h-[86vh] flex flex-col bg-white dark:bg-[#0D1322] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar - Fixed at top */}
        <div className="shrink-0 relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-5 sm:p-6 text-white border-b border-slate-800 pr-16">
          <button
            onClick={() => setActiveProjectModal(null)}
            className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 shadow-md z-30"
            aria-label="Close modal"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-brand-500/20 text-cyan-300 text-xs font-bold border border-brand-500/30">
              {p.category}
            </span>
            {p.badge && (
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>{p.badge}</span>
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
            {p.title}
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-1.5 font-medium line-clamp-2 sm:line-clamp-none">
            {p.tagline}
          </p>
        </div>

        {/* Tab Navigation - Fixed below header */}
        <div className="shrink-0 flex items-center justify-between px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
          <div className="flex gap-1 sm:gap-2">
            {[
              { id: 'overview', label: 'Deep Dive' },
              { id: 'architecture', label: 'Architecture & Stack' },
              { id: 'sandbox', label: 'Live Sandbox Simulator' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-3 sm:px-4 font-semibold text-xs sm:text-sm border-b-2 transition-all whitespace-nowrap ${activeTab === tab.id
                    ? 'border-brand-600 dark:border-cyan-400 text-brand-600 dark:text-cyan-400'
                    : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Explanation Switcher */}
          <div className="hidden sm:flex items-center gap-1 p-1 bg-slate-200 dark:bg-slate-800 rounded-xl text-xs font-semibold my-1">
            {['recruiter', 'technical', 'beginner'].map((mode) => (
              <button
                key={mode}
                onClick={() => setExplanationMode(mode)}
                className={`px-2.5 py-1 rounded-lg capitalize transition-all ${explanationMode === mode
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-6">
          {/* Explanation Callout Banner */}
          {p.explanations && p.explanations[explanationMode] && (
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 text-xs sm:text-sm text-slate-800 dark:text-indigo-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-brand-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold capitalize block mb-0.5 text-slate-900 dark:text-white">
                  {explanationMode} Perspective:
                </strong>
                <span>{p.explanations[explanationMode]}</span>
              </div>
            </div>
          )}

          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Problem Statement</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {p.problem}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Engineered Solution</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {p.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key System Features & Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {p.keyFeatures?.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Contributions */}
              {p.myContributions && p.myContributions.length > 0 && (
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-brand-500" />
                    <span>Aniket's Direct Technical Contributions</span>
                  </h3>
                  <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {p.myContributions.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0"></span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Technologies Pill Grid */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Full Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {p.technologies?.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Breakdown */}
              {p.architecture && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <strong className="text-brand-600 dark:text-cyan-400 block mb-1">Frontend Layer</strong>
                    <p className="text-slate-600 dark:text-slate-300">{p.architecture.frontend || 'Modern responsive UI.'}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <strong className="text-purple-600 dark:text-purple-400 block mb-1">Backend & Services</strong>
                    <p className="text-slate-600 dark:text-slate-300">{p.architecture.backend || 'RESTful API controllers.'}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Database & Storage</strong>
                    <p className="text-slate-600 dark:text-slate-300">{p.architecture.database || 'Relational / Document DB.'}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <strong className="text-amber-600 dark:text-amber-400 block mb-1">AI / ML Pipeline</strong>
                    <p className="text-slate-600 dark:text-slate-300">{p.architecture.aiPipeline || 'Applied algorithms & inference.'}</p>
                  </div>
                </div>
              )}

              {/* Challenges and Resolutions */}
              {p.challenges && p.challenges.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Technical Challenges & Engineered Resolutions
                  </h3>
                  {p.challenges.map((c, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs"
                    >
                      <div className="font-bold text-rose-600 dark:text-rose-400">
                        Challenge: {c.challenge}
                      </div>
                      <div className="text-slate-700 dark:text-slate-300">
                        <strong className="text-emerald-600 dark:text-emerald-400">Resolution:</strong> {c.resolution}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'sandbox' && <ProjectSandbox project={p} />}
        </div>

        {/* Footer Links - Fixed at bottom */}
        <div className="shrink-0 p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500 font-mono hidden sm:block">
            {p.slug}
          </div>

          <div className="flex items-center gap-3">
            {p.links?.github && (
              <a
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-900 hover:text-white transition-colors text-xs font-bold border border-slate-200 dark:border-slate-700"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Code</span>
              </a>
            )}

            {p.links?.live && (
              <a
                href={p.links.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-xs font-bold shadow-md shadow-indigo-500/20"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Deployment</span>
              </a>
            )}

            <button
              onClick={() => setActiveTab('sandbox')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-white text-xs font-bold shadow-md shadow-cyan-500/20"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Try In-Browser Sandbox</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
