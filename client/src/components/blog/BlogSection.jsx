import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { api } from '../../services/api';
import ReactMarkdown from 'react-markdown';
import {
  BookOpen,
  Clock,
  Heart,
  Eye,
  X,
  ArrowRight,
  Sparkles,
  Calendar,
} from 'lucide-react';

export const BlogSection = () => {
  const { blogs } = usePortfolio();
  const [activeArticle, setActiveArticle] = useState(null);
  const [likesMap, setLikesMap] = useState({});

  const handleLike = async (e, blogId) => {
    e.stopPropagation();
    try {
      const res = await api.likeBlog(blogId);
      if (res.success && res.data) {
        setLikesMap((prev) => ({ ...prev, [blogId]: res.data.likesCount }));
      }
    } catch (err) {
      // non-blocking
    }
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-900/60">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Technical Insights</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Articles & <span className="text-gradient">Engineering Notes</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Architectural breakdowns, machine learning deep dives, and full-stack software paradigms.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.slug || blog._id}
            onClick={() => setActiveArticle(blog)}
            className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:shadow-xl transition-all cursor-pointer group hover:scale-[1.02]"
          >
            <div className="relative h-48 overflow-hidden bg-slate-900">
              <img
                src={
                  blog.coverImage ||
                  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
                }
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-cyan-300 border border-slate-700">
                  {blog.category}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blog.readTimeMinutes} min read</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {blog.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-600 dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <button
                    onClick={(e) => handleLike(e, blog._id)}
                    className="flex items-center gap-1 hover:text-rose-500 transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-rose-500/20 text-rose-500" />
                    <span>{likesMap[blog._id] !== undefined ? likesMap[blog._id] : blog.likesCount}</span>
                  </button>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{blog.viewsCount}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[90vh] sm:max-h-[86vh] flex flex-col bg-white dark:bg-[#0D1322] rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pinned Header */}
            <div className="shrink-0 p-5 sm:p-7 bg-slate-900 text-white relative border-b border-slate-800 pr-16">
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all hover:scale-110 shadow-md z-30"
                aria-label="Close modal"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30 inline-block mb-2">
                {activeArticle.category}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-2.5 font-mono">
                <span>By Aniket Kumar</span>
                <span>•</span>
                <span>{activeArticle.readTimeMinutes} min read</span>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-8 prose dark:prose-invert prose-sm sm:prose-base max-w-none">
              <ReactMarkdown>{activeArticle.content}</ReactMarkdown>
            </div>

            {/* Pinned Footer */}
            <div className="shrink-0 p-4 sm:p-5 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {activeArticle.tags?.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-[11px] font-semibold text-slate-700 dark:text-slate-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
