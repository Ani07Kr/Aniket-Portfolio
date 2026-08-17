import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  // Theme state
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('aniket_theme');
    return saved ? saved === 'dark' : true;
  });

  // Global modals
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [activeProjectModal, setActiveProjectModal] = useState(null); // Project object for deep dive
  const [isAiDrawerOpen, setIsAiDrawerOpen] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    return !!localStorage.getItem('aniket_admin_token');
  });

  // Data states
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [educations, setEducations] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Sync theme
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('aniket_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('aniket_theme', 'light');
    }
  }, [isDark]);

  // Global Keyboard shortcuts (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
        setActiveProjectModal(null);
        setIsRecruiterModalOpen(false);
        setIsAdminLoginOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch initial portfolio data
  const fetchData = async () => {
    try {
      setLoading(true);
      const [profRes, projRes, skillRes, expRes, eduRes, achRes, blogRes] = await Promise.allSettled([
        api.getProfile(),
        api.getProjects(),
        api.getSkills(),
        api.getExperiences(),
        api.getEducations(),
        api.getAchievements(),
        api.getBlogs(),
      ]);

      if (profRes.status === 'fulfilled' && profRes.value.data) setProfile(profRes.value.data);
      if (projRes.status === 'fulfilled' && projRes.value.data) setProjects(projRes.value.data);
      if (skillRes.status === 'fulfilled' && skillRes.value.data) setSkills(skillRes.value.data);
      if (expRes.status === 'fulfilled' && expRes.value.data) setExperiences(expRes.value.data);
      if (eduRes.status === 'fulfilled' && eduRes.value.data) setEducations(eduRes.value.data);
      if (achRes.status === 'fulfilled' && achRes.value.data) setAchievements(achRes.value.data);
      if (blogRes.status === 'fulfilled' && blogRes.value.data) setBlogs(blogRes.value.data);
    } catch (err) {
      console.error('Error loading portfolio data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    api.logEvent('page_view', { path: window.location.pathname });
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const logoutAdmin = () => {
    localStorage.removeItem('aniket_admin_token');
    setIsAdminLoggedIn(false);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isDark,
        toggleTheme,
        isRecruiterModalOpen,
        setIsRecruiterModalOpen,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        activeProjectModal,
        setActiveProjectModal,
        isAiDrawerOpen,
        setIsAiDrawerOpen,
        isAdminLoginOpen,
        setIsAdminLoginOpen,
        isAdminLoggedIn,
        setIsAdminLoggedIn,
        logoutAdmin,
        profile,
        projects,
        skills,
        experiences,
        educations,
        achievements,
        blogs,
        loading,
        refreshData: fetchData,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);
