import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import confetti from 'canvas-confetti';
import {
  FileText,
  Download,
  Printer,
  Sparkles,
  Award,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const ResumeViewer = () => {
  const { profile } = usePortfolio();

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
    const link = document.createElement('a');
    link.href = profile?.resumeUrl || '/resume.pdf';
    link.download = 'Aniket_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/40 text-brand-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-brand-200 dark:border-brand-900/60">
          <FileText className="w-3.5 h-3.5" />
          <span>Curriculum Vitae</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Interactive <span className="text-gradient">ATS Resume</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Verified academic credentials, published patents, and technical experience formatted for hiring systems.
        </p>

        {/* Action Controls */}
        <div className="flex items-center justify-center gap-3 pt-3">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 hover:scale-105 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-semibold text-xs border border-slate-200 dark:border-slate-700 transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Layout</span>
          </button>
        </div>
      </div>

      {/* Resume Document Box */}
      <div className="bg-white dark:bg-[#0B0F19] p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8 font-sans text-slate-800 dark:text-slate-200">
        {/* Resume Header */}
        <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            ANIKET KUMAR
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-brand-600 dark:text-cyan-400 font-mono">
            Full-Stack Developer • React Native Mobile Developer • AI/ML Researcher • MCA Graduate
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-500 dark:text-slate-400 pt-2 font-medium">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> Bangalore, India
            </span>
            <span>•</span>
            <a href="tel:+917903828970" className="flex items-center gap-1 hover:text-brand-500">
              <Phone className="w-3.5 h-3.5" /> +91-7903828970
            </a>
            <span>•</span>
            <a href="mailto:aniket07kr2000@gmail.com" className="flex items-center gap-1 hover:text-brand-500">
              <Mail className="w-3.5 h-3.5" /> aniket07kr2000@gmail.com
            </a>
            <span>•</span>
            <a href="https://linkedin.com/in/aniket-kumar-ak07" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-blue-500">
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <span>•</span>
            <a href="https://github.com/Ani07Kr" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white">
              <Github className="w-3.5 h-3.5" /> GitHub
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-black uppercase tracking-wider text-brand-600 dark:text-cyan-400 border-b border-brand-500/20 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            High-velocity software engineer and MCA graduate (8.45 CGPA) from New Horizon College of Engineering, Bangalore.
            Inventor of 2 published Indian Patents in AI wellness & affective computing, and IEEE ICVADV-2025 conference presenter.
            Demonstrated production capability in developing scalable full-stack web applications, cross-platform mobile apps (React Native),
            and machine learning signal processing workflows across corporate internships at TechCiti Software Consulting and Tripillar Solutions.
          </p>
        </div>

        {/* Published Patents & IEEE Research */}
        <div className="space-y-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-brand-600 dark:text-cyan-400 border-b border-brand-500/20 pb-1 flex items-center justify-between">
            <span>Patents & Scientific Publications</span>
            <span className="text-[10px] font-mono text-slate-400">Official Government Registry & IEEE</span>
          </h2>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between items-start">
                <strong className="text-slate-900 dark:text-white font-bold">
                  Indian Patent Pub. No. 26/2025 (App No. 202541054232): Method for AI-Based Personalized Guidance from Bhagavad Gita
                </strong>
                <span className="text-slate-400 font-mono shrink-0 ml-2">Published: 27 June 2025</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                Tri-modal AI wellness system combining computer vision facial emotion recognition, ECG biometric stress signal analysis, and structured Gita verse mapping. Co-inventors: Aniket Kumar, Arpana Prasada (Professor & Mentor), Arpita S. Kulkarni (Co-inventor), Abhinav Reddy.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <strong className="text-slate-900 dark:text-white font-bold">
                  Indian Patent Pub. No. 28/2024 (App No. 202441035043): MINDPLAY: Nurturing Mental Health
                </strong>
                <span className="text-slate-400 font-mono shrink-0 ml-2">Published: 07 Dec 2024</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                Affective computing platform using real-time CNN facial expression monitoring to customize educational learning pace and cognitive wellness interventions.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <strong className="text-slate-900 dark:text-white font-bold">
                  IEEE International Conference (ICVADV-2025): Sleep Stage Classification Combining KNN, Decision Tree, and Regression
                </strong>
                <span className="text-slate-400 font-mono shrink-0 ml-2">Presented: 04–06 March 2025</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                Machine learning framework for automated polysomnography EEG classification. Achieved 97% classification accuracy, 0.99 precision, and 0.98 recall on clinical PhysioNet datasets.
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-wider text-brand-600 dark:text-cyan-400 border-b border-brand-500/20 pb-1">
            Work Experience & Industry Internships
          </h2>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between items-start font-bold text-slate-900 dark:text-white">
                <span>Software Developer - Intern • TechCiti Software Consulting Private Limited</span>
                <span className="text-slate-400 font-mono shrink-0 ml-2">22 Apr 2025 – 22 Jul 2025</span>
              </div>
              <div className="text-[11px] text-brand-600 dark:text-cyan-400 font-medium">Bangalore, India</div>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-600 dark:text-slate-300">
                <li>Built full-stack web and mobile application modules using React, React Native, and Node.js.</li>
                <li>Integrated computer vision facial emotion recognition algorithms with backend recommendation matrices.</li>
                <li>Co-authored and published Indian Patent Application No. 202541054232 resulting from internship research.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start font-bold text-slate-900 dark:text-white">
                <span>Full Stack UI Developer Intern • Tripillar Solutions LLP</span>
                <span className="text-slate-400 font-mono shrink-0 ml-2">21 Oct 2024 – 03 Dec 2024</span>
              </div>
              <div className="text-[11px] text-brand-600 dark:text-cyan-400 font-medium">Bangalore, India (Academic Internship 23MCA38)</div>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-600 dark:text-slate-300">
                <li>Designed and developed the complete UI and lifecycle management features for the HRMS Announcement module.</li>
                <li>Implemented priority filters (Critical, Important, General), scheduled publishing, and automated expiration triggers.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start font-bold text-slate-900 dark:text-white">
                <span>Web Development Intern • Dotplus Technologies</span>
                <span className="text-slate-400 font-mono shrink-0 ml-2">May 2022 – Aug 2022</span>
              </div>
              <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-600 dark:text-slate-300">
                <li>Engineered responsive frontend interfaces using HTML5, CSS3, JavaScript, and Bootstrap with backend SQL integration.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3">
          <h2 className="text-xs font-black uppercase tracking-wider text-brand-600 dark:text-cyan-400 border-b border-brand-500/20 pb-1">
            Education
          </h2>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between items-start font-bold text-slate-900 dark:text-white">
                <span>Master of Computer Applications (MCA) — CGPA: 8.45 / 10</span>
                <span className="text-slate-400 font-mono shrink-0 ml-2">2023 – 2025</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                New Horizon College of Engineering, Bangalore (Autonomous, VTU, NAAC 'A', NBA) • USN: 1NH23MC016
              </div>
            </div>

            <div>
              <div className="flex justify-between items-start font-bold text-slate-900 dark:text-white">
                <span>Bachelor of Computer Applications (BCA) — CGPA: 7.78 / 10</span>
                <span className="text-slate-400 font-mono shrink-0 ml-2">2020 – 2023</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                L. N. Mishra Institute of Economic Development and Social Change (LNMI), Patna
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-2">
          <h2 className="text-xs font-black uppercase tracking-wider text-brand-600 dark:text-cyan-400 border-b border-brand-500/20 pb-1">
            Technical Skills Matrix
          </h2>

          <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            <p>
              <strong className="text-slate-900 dark:text-white">Languages:</strong> JavaScript (ES6+), TypeScript, Python, Java, C, C++, SQL, HTML5, CSS3.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Web & Mobile:</strong> React.js, React Native (Expo), Node.js, Express.js, Tailwind CSS, Bootstrap, RESTful APIs.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Databases & Cloud:</strong> MongoDB & Mongoose, Supabase (PostgreSQL), MySQL, Firebase Firestore.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">AI / ML:</strong> PyTorch, Scikit-Learn, Hugging Face Transformers (BART, BERT), OpenCV, EEG Signal Processing.
            </p>
            <p>
              <strong className="text-slate-900 dark:text-white">Developer Tools:</strong> Git, GitHub, VS Code, IntelliJ IDEA, Eclipse, Postman, MySQL Workbench.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
