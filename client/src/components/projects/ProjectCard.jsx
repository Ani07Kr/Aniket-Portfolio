import React, { useRef, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import {
  ExternalLink,
  Github,
  Award,
  Sparkles,
  ArrowRight,
  Play,
  Layers,
} from 'lucide-react';

export const ProjectCard = ({ project }) => {
  const { setActiveProjectModal } = usePortfolio();
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -7; // Max tilt 7deg
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
      className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800/80 flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group"
    >
      {/* Cover Image & Badges */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
        <img
          src={
            project.coverImage ||
            'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80'
          }
          alt={project.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80';
          }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-85 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[11px] font-bold text-cyan-300 border border-slate-700">
            {project.category}
          </span>
          {project.badge && (
            <span className="px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-md text-[10px] font-extrabold text-slate-950 flex items-center gap-1 shadow-md">
              <Award className="w-3 h-3" />
              <span>{project.badge.split('&')[0]}</span>
            </span>
          )}
        </div>

        {/* Floating Title on image */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-lg font-bold text-white leading-tight drop-shadow-md">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
          {project.tagline}
        </p>

        {/* Technologies Pills */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies?.slice(0, 4).map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-[11px] font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
            {project.technologies?.length > 4 && (
              <span className="px-2 py-0.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-[11px] font-semibold text-brand-600 dark:text-cyan-400">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
          <button
            onClick={() => setActiveProjectModal(project)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-brand-600 hover:text-white text-xs font-bold transition-all shadow-sm group-hover:border-brand-500"
          >
            <span>Deep Dive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {project.sandboxType && project.sandboxType !== 'none' && (
            <button
              onClick={() => setActiveProjectModal(project)}
              className="px-3 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white text-xs font-bold border border-cyan-500/30 transition-all flex items-center gap-1"
              title="Launch Live In-Browser Sandbox"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Sandbox</span>
            </button>
          )}

          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
