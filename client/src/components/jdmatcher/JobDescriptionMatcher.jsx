import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { api } from '../../services/api';
import {
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Check,
  FolderGit2,
  Award,
} from 'lucide-react';

export const JobDescriptionMatcher = () => {
  const { setActiveProjectModal } = usePortfolio();
  const [jdText, setJdText] = useState('');
  const [loading, setLoading] = useState(false);
  const [matchResult, setMatchResult] = useState(null);
  const [error, setError] = useState('');

  const sampleJDs = [
    {
      title: 'Full Stack React & Node Developer',
      text: 'Looking for a Full Stack Developer proficient in React.js, Node.js, Express, and MongoDB. Experience with REST APIs, authentication, TypeScript, and responsive UI design is required. Mobile app experience (React Native) is a strong plus.',
    },
    {
      title: 'AI / Full-Stack Engineer',
      text: 'Seeking an innovative Software Engineer with strong background in Python, Deep Learning, NLP, and modern full-stack development. Experience with computer vision, transformer models, REST API architecture, and research publications or patents is highly valued.',
    },
  ];

  const handleMatch = async (e) => {
    if (e) e.preventDefault();
    if (!jdText || jdText.trim().length < 10) {
      setError('Please paste a job description (minimum 10 characters).');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await api.matchJD(jdText);
      if (res.success && res.data) {
        setMatchResult(res.data);
      } else {
        setError(res.message || 'Failed to match job description.');
      }
    } catch (err) {
      setError('Unable to analyze JD at the moment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="jd-matcher" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-200 dark:border-cyan-900/60">
          <Zap className="w-3.5 h-3.5" />
          <span>Interactive ATS Engine</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Job Description <span className="text-gradient">ATS Matcher</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Paste your open role's job description to immediately compute Aniket's ATS match score, extracted skill alignments, and verified project proofs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form Column */}
        <div className="lg:col-span-6 space-y-4">
          <div className="glass-card p-6 sm:p-7 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Paste Job Description
              </label>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Quick Samples:</span>
                {sampleJDs.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setJdText(s.text);
                      setError('');
                    }}
                    className="text-[11px] font-semibold text-brand-600 dark:text-cyan-400 hover:underline"
                  >
                    {s.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              rows={8}
              value={jdText}
              onChange={(e) => {
                setJdText(e.target.value);
                if (error) setError('');
              }}
              placeholder="Paste responsibilities, required skills, and tech stack here (e.g. React, Node.js, Express, MongoDB, Python, AI)..."
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:border-brand-500 font-sans leading-relaxed"
            />

            {error && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleMatch}
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-cyan-600 hover:from-brand-500 hover:to-cyan-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 disabled:opacity-50 transition-all hover:scale-[1.01]"
            >
              {loading ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  <span>Calculating Semantic & Skill Match...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-white" />
                  <span>Analyze & Compute Match Score</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Output Column */}
        <div className="lg:col-span-6">
          {matchResult ? (
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-brand-500/30 space-y-6 animate-fadeIn">
              {/* Score Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    ATS Match Analysis
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Candidate Compatibility
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                    {matchResult.matchScore}%
                  </div>
                  <span className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    High ATS Alignment
                  </span>
                </div>
              </div>

              {/* Matched Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Direct Matched Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {matchResult.matchedSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-900/60 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Recruiter Pitch */}
              <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50 text-xs sm:text-sm text-slate-800 dark:text-indigo-200 leading-relaxed space-y-2">
                <strong className="text-brand-600 dark:text-cyan-400 block">
                  Tailored Pitch for This Role:
                </strong>
                <p>{matchResult.recruiterPitch}</p>
              </div>

              {/* Candidate Highlights */}
              {matchResult.candidateHighlights && (
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Candidate Strengths:
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
                    {matchResult.candidateHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="glass-card p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 mx-auto flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Instant Recruiter Fit Analysis
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                Paste any job description on the left or click a sample role to see Aniket's ATS match score and mapped project proof.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
