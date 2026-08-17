import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, Search, Filter, Sparkles } from 'lucide-react';

export const ProjectsSection = () => {
  const { projects } = usePortfolio();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Patents & Research', 'AI / ML', 'Full Stack', 'Mobile App'];

  const filteredProjects = projects.filter((p) => {
    const slug = p.slug || '';

    const isPatentOrResearch = [
      'bhagavad-gita-holistic-wellness-ai',
      'affective-tutoring-system-mindplay-ai',
      'sleep-stage-classification-eeg-ml',
    ].includes(slug) || p.badge?.toLowerCase().includes('patent') || p.badge?.toLowerCase().includes('ieee');

    const isAiMl = [
      'parchai-ai-companion-mobile-app',
      'bhagavad-gita-holistic-wellness-ai',
      'affective-tutoring-system-mindplay-ai',
      'semantic-nlp-philosophical-llm',
      'sleep-stage-classification-eeg-ml',
    ].includes(slug) || p.category === 'AI / ML';

    const isFullStack = [
      'parchai-ai-companion-mobile-app',
      'docconnect-healthcare-management-portal',
      'hrms-announcement-workforce-system',
      'car-with-driver-india-travel-booking',
    ].includes(slug) || p.category === 'Full Stack' || p.category === 'Enterprise / Tool';

    const isMobile = [
      'parchai-ai-companion-mobile-app',
      'bhagavad-gita-holistic-wellness-ai',
    ].includes(slug) || p.category === 'Mobile App' || p.technologies?.some(t => t.toLowerCase().includes('react native') || t.toLowerCase().includes('expo'));

    let matchesCategory = false;
    if (selectedCategory === 'All') {
      matchesCategory = true;
    } else if (selectedCategory === 'Patents & Research') {
      matchesCategory = isPatentOrResearch;
    } else if (selectedCategory === 'AI / ML') {
      matchesCategory = isAiMl;
    } else if (selectedCategory === 'Full Stack') {
      matchesCategory = isFullStack;
    } else if (selectedCategory === 'Mobile App') {
      matchesCategory = isMobile;
    } else {
      matchesCategory = p.category === selectedCategory;
    }

    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.badge?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-900/60">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Featured Engineering</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Verified Projects & <span className="text-gradient">Live Sandboxes</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Explore real-world full-stack architectures, patented AI applications, and interactive in-browser simulators.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search stack, title, patents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 shadow-sm"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="py-16 text-center text-sm text-slate-500 glass-card rounded-3xl">
          No projects match your filter. Try clearing the search query.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug || project._id} project={project} />
          ))}
        </div>
      )}

      {/* Project Deep Dive Modal */}
      <ProjectModal />
    </section>
  );
};
