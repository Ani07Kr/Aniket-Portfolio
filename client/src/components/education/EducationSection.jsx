import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Award,
  Sparkles,
} from 'lucide-react';

export const EducationSection = () => {
  const { educations } = usePortfolio();

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-900/60">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Education & <span className="text-gradient">Qualifications</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Rigorous computer applications, software engineering, and machine learning foundation.
        </p>
      </div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educations.map((edu, idx) => (
          <div
            key={edu._id || idx}
            className="glass-card rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-slate-800 text-brand-600 dark:text-cyan-400">
                  <GraduationCap className="w-7 h-7" />
                </div>

                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
                  {edu.scoreType}: {edu.score}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-brand-600 dark:text-cyan-400 mt-0.5">
                  {edu.institution}
                </p>
                {edu.institutionDetails && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {edu.institutionDetails}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-brand-500" />
                  <span>{edu.startYear} – {edu.endYear}</span>
                </span>
                {edu.location && (
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </span>
                )}
              </div>

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Highlights & Distinctions:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {edu.highlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Coursework */}
            {edu.coursework && edu.coursework.length > 0 && (
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-brand-500" />
                  <span>Key Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
