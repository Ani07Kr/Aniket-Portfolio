import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  RotateCcw,
  BookOpen,
  Volume2,
  CheckCircle2,
  Brain,
  Activity,
  Smile,
  Frown,
  Meh,
  AlertTriangle,
  Flame,
  Send,
  Calendar,
  Clock,
  Bell,
} from 'lucide-react';

export const ProjectSandbox = ({ project }) => {
  if (!project || project.sandboxType === 'none') {
    return (
      <div className="p-8 text-center text-sm text-slate-500 glass-card rounded-2xl">
        Interactive sandbox not enabled for this project.
      </div>
    );
  }

  // 1. GITA WELLNESS SIMULATOR
  if (project.sandboxType === 'gita_wellness_simulator') {
    const [selectedEmotion, setSelectedEmotion] = useState('Anxious');
    const [stressLevel, setStressLevel] = useState(72);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState(null);

    const versesDb = {
      Anxious: {
        shloka: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
        chapter: 'Chapter 2, Verse 47',
        transliteration: 'Karmanye vadhikaraste ma phaleshu kadachana...',
        meaning:
          'You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never let the fruits of action be your motive, nor let your attachment be to inaction.',
        psychologicalInsight:
          'Cognitive Behavioral insight: Anxiety arises from attempting to control uncontrollable future outcomes. Shifting focus to immediate process reduces cortisol spikes.',
        restorativeAffirmation: 'I channel all my energy into my present actions with peaceful detachment.',
      },
      Stressed: {
        shloka: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥',
        chapter: 'Chapter 2, Verse 62',
        transliteration: 'Dhyayato vishayan pumsah sangas teshu pajayate...',
        meaning:
          'While contemplating the objects of the senses, a person develops attachment to them, and from such attachment lust/desire develops, and from desire anger arises.',
        psychologicalInsight:
          'Mindfulness insight: Over-fixation on unmet expectations triggers the neurological stress cascade. Taking a conscious step back restores executive control.',
        restorativeAffirmation: 'I release overthinking and center my awareness on inner calmness.',
      },
      Confused: {
        shloka: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
        chapter: 'Chapter 4, Verse 7',
        transliteration: 'Yada yada hi dharmasya glanir bhavati bharata...',
        meaning:
          'Whenever there is a decline in righteousness and an increase in unrighteousness, at that time I manifest Myself on earth.',
        psychologicalInsight:
          'Clarity insight: Moments of intense confusion precede breakthrough reorganization of mental models. Trust in foundational principles.',
        restorativeAffirmation: 'Every challenge is an opportunity to align with my higher purpose.',
      },
      Sad: {
        shloka: 'न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥',
        chapter: 'Chapter 2, Verse 20',
        transliteration: 'Na jayate mriyate va kadachin...',
        meaning:
          'The soul is never born nor dies at any time. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.',
        psychologicalInsight:
          'Resilience insight: Emotional pain is temporary like changing weather. Your core identity remains untouched and capable of renewal.',
        restorativeAffirmation: 'I am stronger than transient circumstances; peace is my fundamental nature.',
      },
    };

    const handleRunAnalysis = () => {
      setIsAnalyzing(true);
      setTimeout(() => {
        setResult(versesDb[selectedEmotion] || versesDb.Anxious);
        setIsAnalyzing(false);
      }, 700);
    };

    return (
      <div className="space-y-6 p-4 sm:p-6 rounded-2xl bg-slate-900/90 text-white border border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="font-bold text-sm">Gita AI Wellness Simulator</span>
          </div>
          <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
            Tri-Modal Fusion
          </span>
        </div>

        {/* Input selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Detected Facial Emotion
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Anxious', 'Stressed', 'Confused', 'Sad'].map((emo) => (
                <button
                  key={emo}
                  type="button"
                  onClick={() => setSelectedEmotion(emo)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border text-center transition-all ${
                    selectedEmotion === emo
                      ? 'bg-brand-600 border-brand-400 text-white shadow-md'
                      : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {emo}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Simulated ECG Stress Score
              </label>
              <span className="text-xs font-mono font-bold text-amber-400">{stressLevel}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="95"
              value={stressLevel}
              onChange={(e) => setStressLevel(e.target.value)}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-500"
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
              <span>20% (Calm)</span>
              <span>60% (Moderate)</span>
              <span>95% (High Alert)</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleRunAnalysis}
          disabled={isAnalyzing}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <RotateCcw className="w-4 h-4 animate-spin" />
              <span>Synthesizing Multi-Modal Signals & Gita Matrix...</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              <span>Execute Diagnostic & Prescribe Verse</span>
            </>
          )}
        </button>

        {/* Output card */}
        {result && (
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950 border border-amber-500/30 space-y-3 animate-fadeIn">
            <div className="flex items-center justify-between text-xs text-amber-400 font-bold">
              <span>{result.chapter}</span>
              <span className="flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5" />
                Audio Affirmation Ready
              </span>
            </div>

            <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/20 text-center">
              <p className="text-amber-200 font-serif text-sm sm:text-base leading-relaxed tracking-wide">
                {result.shloka}
              </p>
              <p className="text-[11px] text-amber-300/70 italic mt-1 font-mono">{result.transliteration}</p>
            </div>

            <div className="space-y-2 text-xs">
              <p className="text-slate-200">
                <strong className="text-amber-400">English Translation:</strong> {result.meaning}
              </p>
              <p className="text-slate-300 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <strong className="text-cyan-400">Psychological Insight:</strong> {result.psychologicalInsight}
              </p>
              <p className="text-emerald-300 bg-emerald-950/30 p-2.5 rounded-lg border border-emerald-900/50">
                <strong className="text-emerald-400">Daily Affirmation:</strong> "{result.restorativeAffirmation}"
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. AFFECTIVE TUTORING SIMULATOR
  if (project.sandboxType === 'affective_emotion_simulator') {
    const [studentState, setStudentState] = useState('Confused');

    const stateReactions = {
      Focused: {
        pace: 'Optimal Pace (1.0x)',
        color: 'text-emerald-400',
        action: 'Student is in flow state. Maintaining current advanced challenge level.',
        intervention: 'Continue interactive coding challenge.',
      },
      Confused: {
        pace: 'Slowed Pace (0.75x)',
        color: 'text-amber-400',
        action: 'Facial brow furrowing detected. Offering contextual step-by-step hint.',
        intervention: 'Displaying visual flowchart & concept breakdown popup.',
      },
      Bored: {
        pace: 'Accelerated Pace (1.25x)',
        color: 'text-cyan-400',
        action: 'Low eye saccade velocity detected. Triggering gamified speed-quiz.',
        intervention: 'Switching to interactive gamified puzzle mode.',
      },
      Stressed: {
        pace: 'Paused (Mindfulness Mode)',
        color: 'text-purple-400',
        action: 'High affective agitation score. Offering 60-second breathing relaxation.',
        intervention: 'Initiating 4-7-8 breathing circle animation.',
      },
    };

    const current = stateReactions[studentState];

    return (
      <div className="space-y-5 p-4 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="font-bold text-sm">Affective Tutoring State Machine</span>
          </div>
          <span className="text-xs font-mono text-purple-400 bg-purple-400/10 px-2 py-0.5 rounded-full border border-purple-400/20">
            CNN Real-Time Loop
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Simulate Student Affective State:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.keys(stateReactions).map((state) => (
              <button
                key={state}
                onClick={() => setStudentState(state)}
                className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                  studentState === state
                    ? 'bg-purple-600 border-purple-400 text-white shadow-md'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {state}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Pace Adjustment:</span>
            <span className={`text-xs font-mono font-bold ${current.color}`}>{current.pace}</span>
          </div>
          <div className="text-xs text-slate-300">
            <strong className="text-white block mb-1">System Decision:</strong>
            {current.action}
          </div>
          <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-300">
            <strong>Pedagogical Intervention:</strong> {current.intervention}
          </div>
        </div>
      </div>
    );
  }

  // 3. PHILOSOPHICAL NLP ANALYZER
  if (project.sandboxType === 'philosophical_nlp_analyzer') {
    const [sampleText, setSampleText] = useState(
      'Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.'
    );
    const [analyzing, setAnalyzing] = useState(false);
    const [nlpResult, setNlpResult] = useState(null);

    const handleRunNlp = () => {
      setAnalyzing(true);
      setTimeout(() => {
        setNlpResult({
          summary:
            'Human existence precedes essence, placing total personal responsibility and unavoidable freedom upon the individual.',
          dominantDoctrine: 'Existentialism (94.2% Confidence)',
          scores: [
            { doctrine: 'Existentialism', score: 94.2 },
            { doctrine: 'Absurdism', score: 62.1 },
            { doctrine: 'Rationalism', score: 38.4 },
            { doctrine: 'Idealism', score: 21.0 },
          ],
        });
        setAnalyzing(false);
      }, 600);
    };

    return (
      <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-sm">BART Philosophical NLP Classifier</span>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded-full border border-cyan-400/20">
            facebook/bart-large-mnli
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Philosophical Passage Input
          </label>
          <textarea
            rows={3}
            value={sampleText}
            onChange={(e) => setSampleText(e.target.value)}
            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-cyan-500 font-serif leading-relaxed"
          />
        </div>

        <button
          onClick={handleRunNlp}
          disabled={analyzing}
          className="w-full py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2"
        >
          {analyzing ? <RotateCcw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
          <span>Run Abstractive Summarization & Zero-Shot NLI</span>
        </button>

        {nlpResult && (
          <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-3">
            <div className="text-xs">
              <strong className="text-cyan-400 block mb-1">Abstractive BART Summary:</strong>
              <p className="text-slate-300 italic">"{nlpResult.summary}"</p>
            </div>

            <div>
              <strong className="text-xs text-white block mb-2">
                Zero-Shot Doctrine Classification Probabilities:
              </strong>
              <div className="space-y-1.5">
                {nlpResult.scores.map((s) => (
                  <div key={s.doctrine}>
                    <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-0.5">
                      <span>{s.doctrine}</span>
                      <span>{s.score}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-brand-500 h-full rounded-full"
                        style={{ width: `${s.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // 4. SLEEP STAGE CLASSIFIER
  if (project.sandboxType === 'sleep_stage_classifier') {
    const models = [
      { name: 'K-Nearest Neighbors (KNN)', accuracy: '97%', precision: '0.99', recall: '0.98', f1: '0.98' },
      { name: 'Decision Tree Classifier', accuracy: '96%', precision: '0.95', recall: '0.96', f1: '0.95' },
      { name: 'Logistic Regression', accuracy: '90%', precision: '0.89', recall: '0.90', f1: '0.89' },
      { name: 'Hybrid Ensemble Model', accuracy: '98%', precision: '0.99', recall: '0.98', f1: '0.99' },
    ];

    return (
      <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm">EEG Polysomnography Benchmarks</span>
          </div>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
            IEEE ICVADV-2025
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px] font-mono">
                <th className="py-2 px-3">Model Architecture</th>
                <th className="py-2 px-3 text-center">Accuracy</th>
                <th className="py-2 px-3 text-center">Precision</th>
                <th className="py-2 px-3 text-center">Recall</th>
                <th className="py-2 px-3 text-center">F1 Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-mono">
              {models.map((m, i) => (
                <tr key={i} className={i === 3 ? 'bg-brand-950/40 text-cyan-300 font-bold' : 'text-slate-300'}>
                  <td className="py-2.5 px-3 font-sans font-medium">{m.name}</td>
                  <td className="py-2.5 px-3 text-center text-emerald-400">{m.accuracy}</td>
                  <td className="py-2.5 px-3 text-center">{m.precision}</td>
                  <td className="py-2.5 px-3 text-center">{m.recall}</td>
                  <td className="py-2.5 px-3 text-center">{m.f1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 5. DOCCONNECT BOOKING SIMULATOR
  if (project.sandboxType === 'docconnect_booking_simulator') {
    const [selectedDoc, setSelectedDoc] = useState('Dr. Priya Sharma (Cardiology)');
    const [date, setDate] = useState('Tomorrow, 10:00 AM');
    const [confirmed, setConfirmed] = useState(false);

    return (
      <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="font-bold text-sm">DocConnect Appointment Workflow</span>
          <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
            Instant Slot Lock
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-slate-400 mb-1">Select Physician & Specialty</label>
            <select
              value={selectedDoc}
              onChange={(e) => setSelectedDoc(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
            >
              <option>Dr. Priya Sharma (Cardiology)</option>
              <option>Dr. Rajesh Verma (Neurology)</option>
              <option>Dr. Ananya Roy (Psychiatry)</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-400 mb-1">Available Schedule Slot</label>
            <select
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
            >
              <option>Tomorrow, 10:00 AM</option>
              <option>Tomorrow, 02:30 PM</option>
              <option>Day After, 11:15 AM</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setConfirmed(true)}
          className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs uppercase text-white shadow-md shadow-emerald-500/20"
        >
          Confirm Reservation & Generate Digital Prescription Vault
        </button>

        {confirmed && (
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Appointment confirmed with {selectedDoc} on {date}. Digital token generated!</span>
          </div>
        )}
      </div>
    );
  }

  // 6. HRMS ANNOUNCEMENT SIMULATOR
  if (project.sandboxType === 'hrms_announcement_simulator') {
    const [title, setTitle] = useState('Annual Engineering Hackathon 2026');
    const [priority, setPriority] = useState('Critical');
    const [published, setPublished] = useState(false);

    return (
      <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="font-bold text-sm">HRMS Broadcast Publisher</span>
          <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
            Tripillar Lifecycle Module
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div>
            <label className="block text-slate-400 mb-1">Notice Headline</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
            />
          </div>
          <div>
            <label className="block text-slate-400 mb-1">Priority Broadcast Tier</label>
            <div className="flex gap-2">
              {['Critical', 'Important', 'General'].map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  className={`py-1.5 px-3 rounded-lg text-xs font-bold border ${
                    priority === p ? 'bg-amber-600 border-amber-400 text-white' : 'bg-slate-800 border-slate-700'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={() => setPublished(true)}
          className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-xs uppercase text-white"
        >
          Publish to Internal Workforce Board
        </button>

        {published && (
          <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/40 text-xs text-indigo-200">
            Announcement broadcast live to all active employee dashboards with priority tag: <strong>{priority}</strong>.
          </div>
        )}
      </div>
    );
  }

  // 7. PARCHAI AI COMPANION SIMULATOR
  if (project.sandboxType === 'parchai_companion_simulator') {
    const [messages, setMessages] = useState([
      {
        sender: 'parchai',
        text: 'Hey Aniket! I am Parchai, your personal AI companion. I have your active goals and personal context loaded from Supabase. How can I help you today?',
        time: 'Just now',
      },
    ]);
    const [input, setInput] = useState('');
    const [activeTab, setActiveTab] = useState('chat'); // 'chat', 'goals', 'memories'
    const [isTyping, setIsTyping] = useState(false);

    const goals = [
      { id: 1, title: 'Submit Final MCA Portfolio Review', deadline: 'Tomorrow, 5:00 PM', status: 'In Progress', priority: 'High' },
      { id: 2, title: 'Test Android APK Build on Device', deadline: 'Today, 8:00 PM', status: 'Completed', priority: 'Urgent' },
      { id: 3, title: 'Review IEEE Sleep Stage Benchmark Metrics', deadline: 'Friday, 11:00 AM', status: 'Upcoming', priority: 'Medium' },
    ];

    const memories = [
      'Prefers concise bullet points in technical explanations',
      'Preparing for Full-Stack Developer & AI Engineer roles',
      'Co-inventor of 2 published Indian Patents in AI & EdTech',
      'Prefers dark mode UI aesthetics and TypeScript codebases',
    ];

    const quickPrompts = [
      'Is there something tomorrow I have to do?',
      'What are my active goals this week?',
      'What do you remember about my background?',
    ];

    const handleSend = (textToSend) => {
      const q = textToSend || input;
      if (!q.trim()) return;

      const userMsg = { sender: 'user', text: q, time: 'Now' };
      setMessages((prev) => [...prev, userMsg]);
      setInput('');
      setIsTyping(true);

      setTimeout(() => {
        let reply = '';
        const lower = q.toLowerCase();

        if (lower.includes('tomorrow') || lower.includes('have to do') || lower.includes('schedule')) {
          reply = `🔍 **Context Retrieved from Supabase Goals:**\n\nYes! Tomorrow you have **1 critical goal**:\n• **Submit Final MCA Portfolio Review** (Deadline: Tomorrow at 5:00 PM • Status: In Progress).\n\nSince you completed your Android APK test today, you are right on schedule! Would you like me to set a reminder for 2:00 PM tomorrow?`;
        } else if (lower.includes('goal') || lower.includes('week') || lower.includes('progress')) {
          reply = `🎯 **Your Active Goal Breakdown:**\n\n1. ✅ **Test Android APK Build on Device** (Completed)\n2. ⏳ **Submit Final MCA Portfolio Review** (Due Tomorrow, 5:00 PM)\n3. 📅 **Review IEEE Sleep Stage Benchmark Metrics** (Due Friday, 11:00 AM)\n\nOverall completion rate is at 67% for this cycle!`;
        } else if (lower.includes('remember') || lower.includes('background') || lower.includes('memory')) {
          reply = `🧠 **Retrieved from Persistent User Memory:**\n\n• You are an MCA graduate from NHCE Bangalore specializing in Full-Stack Web, React Native, and AI.\n• You hold **2 Indian Patents** (Bhagavad Gita AI & MINDPLAY Tutoring) and an **IEEE Conference Publication**.\n• You prefer concise, high-signal explanations with TypeScript and modular architecture.`;
        } else {
          reply = `I understand! As your personal companion, I've noted that into your active session context. I'll factor this in alongside your upcoming **MCA Portfolio Review** deadline tomorrow. Let me know if you want to create a new goal or breakdown tasks!`;
        }

        setMessages((prev) => [...prev, { sender: 'parchai', text: reply, time: 'Just now' }]);
        setIsTyping(false);
      }, 700);
    };

    return (
      <div className="space-y-4 p-4 sm:p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">Parchai AI Companion Simulator</span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">React Native • Supabase • OpenRouter LLM</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://expo.dev/accounts/ani07kr/projects/parchai/builds/d5f3e183-8441-4f4e-80b2-43beec072340"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-xl bg-gradient-to-r from-cyan-500/20 to-brand-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/30 transition-all flex items-center gap-1.5"
            >
              <span>Download APK</span>
              <span className="text-[10px] font-mono bg-cyan-500/30 px-1.5 py-0.5 rounded">Expo EAS</span>
            </a>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex gap-2 border-b border-slate-800 pb-2">
          {[
            { id: 'chat', label: '💬 Live Companion Chat' },
            { id: 'goals', label: '🎯 Supabase Goals (3)' },
            { id: 'memories', label: '🧠 Long-Term Memories (4)' },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === t.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Chat Tab */}
        {activeTab === 'chat' && (
          <div className="space-y-3">
            {/* Quick Prompt Pills */}
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[11px] text-slate-400 self-center mr-1">Try asking:</span>
              {quickPrompts.map((qp, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(qp)}
                  className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-600/60 border border-slate-700 text-[11px] text-slate-200 transition-colors"
                >
                  "{qp}"
                </button>
              ))}
            </div>

            {/* Chat Box */}
            <div className="h-60 overflow-y-auto space-y-2.5 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-line leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-brand-600 text-white rounded-br-none'
                        : 'bg-slate-800 text-slate-200 border border-slate-700/80 rounded-bl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1 px-1">{m.time}</span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs p-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
                  <span className="text-[10px] text-slate-400 ml-1">Parchai is reading goals & reasoning via OpenRouter...</span>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                placeholder="Ask Parchai about your schedule, goals, or memories..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold text-xs disabled:opacity-50 hover:scale-105 transition-all shadow-md shadow-indigo-500/20"
              >
                Send
              </button>
            </form>
          </div>
        )}

        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <div className="space-y-2.5">
            <div className="text-xs text-slate-400">
              Persisted in <strong>Supabase PostgreSQL</strong> table <code className="text-cyan-400">user_goals</code>. Queried automatically by Parchai's LLM context engine:
            </div>
            <div className="space-y-2">
              {goals.map((g) => (
                <div
                  key={g.id}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-semibold text-white flex items-center gap-2">
                      <span>{g.title}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${
                        g.status === 'Completed'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : g.status === 'In Progress'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      }`}>
                        {g.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400">Target Deadline: {g.deadline}</div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">Priority: {g.priority}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Memories Tab */}
        {activeTab === 'memories' && (
          <div className="space-y-2.5">
            <div className="text-xs text-slate-400">
              Long-term user knowledge persisted in <code className="text-cyan-400">user_memories</code> for multi-turn semantic personalization:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {memories.map((m, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-start gap-2 text-slate-300"
                >
                  <span className="text-cyan-400 font-bold">#0{i + 1}</span>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return null;
};
