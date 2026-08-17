import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { usePortfolio } from './context/PortfolioContext';
import { Preloader } from './components/common/Preloader';
import { BackgroundMusicWidget } from './components/common/BackgroundMusicWidget';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { CommandPalette } from './components/common/CommandPalette';
import { RecruiterModal } from './components/common/RecruiterModal';
import { AdminLoginModal } from './components/common/AdminLoginModal';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { ResearchPatents } from './components/research/ResearchPatents';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { SkillsMatrix } from './components/skills/SkillsMatrix';
import { ExperienceTimeline } from './components/experience/ExperienceTimeline';
import { EducationSection } from './components/education/EducationSection';
import { JobDescriptionMatcher } from './components/jdmatcher/JobDescriptionMatcher';
import { BlogSection } from './components/blog/BlogSection';
import { ResumeViewer } from './components/resume/ResumeViewer';
import { ContactSection } from './components/contact/ContactSection';
import { AiAssistantDrawer } from './components/ai/AiAssistantDrawer';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { Bot, Zap } from 'lucide-react';

export function App() {
  const { showPreloader, handlePreloaderComplete, setIsAiDrawerOpen, setIsRecruiterModalOpen } = usePortfolio();

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#080B14] dark:text-slate-100 selection:bg-brand-500 selection:text-white transition-colors duration-300 font-sans">
      {/* Piano Music Programming Languages Preloader Splash Screen */}
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {/* Floating Soothing Background Music Controller & Corner Notification */}
      <BackgroundMusicWidget />
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="space-y-4">
        <Hero />
        <About />
        <ResearchPatents />
        <ProjectsSection />
        <SkillsMatrix />
        <ExperienceTimeline />
        <EducationSection />
        <JobDescriptionMatcher />
        <BlogSection />
        <ResumeViewer />
        <ContactSection />
        <AdminDashboard />
      </main>

      {/* Footer */}
      <Footer />

      {/* Overlays & Modals */}
      <CommandPalette />
      <RecruiterModal />
      <AdminLoginModal />
      <AiAssistantDrawer />

      {/* Floating Action Button (Mobile & Desktop AI / Recruiter Trigger) */}
      <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 flex flex-col gap-2 pointer-events-auto">
        <button
          onClick={() => setIsRecruiterModalOpen(true)}
          className="p-2.5 sm:p-3.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/25 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center touch-manipulation"
          title="Open Recruiter Mode (60s Summary)"
        >
          <Zap className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
        </button>

        <button
          onClick={() => setIsAiDrawerOpen(true)}
          className="p-2.5 sm:p-3.5 rounded-full bg-gradient-to-r from-brand-600 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 hover:scale-110 active:scale-95 transition-transform flex items-center justify-center touch-manipulation"
          title="Chat with Aniket AI"
        >
          <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}

export default App;
