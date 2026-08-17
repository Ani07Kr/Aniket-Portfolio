import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const ExperienceTimeline = () => {
  const { experiences } = usePortfolio();

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-900/60">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Industry Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Work History & <span className="text-gradient">Internships</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Hands-on corporate and research software development across web, mobile, and AI systems.
        </p>
      </div>

      {/* Timeline Structure */}
      <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {experiences.map((exp, idx) => (
          <div key={exp._id || idx} className="relative group">
            {/* Timeline Glowing Node */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-4 border-brand-600 dark:border-cyan-400 shadow-md group-hover:scale-125 transition-transform"></div>

            {/* Experience Card */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-200 dark:border-slate-800/80 hover:shadow-xl transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/50 text-brand-700 dark:text-cyan-300 text-[11px] font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-800">
                    {exp.employmentType}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-brand-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <span>{exp.company}</span>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-400 hover:text-brand-500 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{exp.startDate} – {exp.endDate}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities */}
              {exp.keyResponsibilities && exp.keyResponsibilities.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300">
                    {exp.keyResponsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Achievements */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    <span>Notable Milestones & Patent Outcomes</span>
                  </div>
                  <ul className="space-y-1 pl-5 list-disc">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
