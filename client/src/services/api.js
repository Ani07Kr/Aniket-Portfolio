const BASE_URL = '/api';

const getHeaders = (isAuthRequired = false) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (isAuthRequired) {
    const token = localStorage.getItem('aniket_admin_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return headers;
};

export const api = {
  // Profile
  getProfile: async () => {
    const res = await fetch(`${BASE_URL}/profile`);
    return await res.json();
  },
  updateProfile: async (data) => {
    const res = await fetch(`${BASE_URL}/profile`, {
      method: 'PUT',
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });
    return await res.json();
  },

  // Projects
  getProjects: async () => {
    const res = await fetch(`${BASE_URL}/projects`);
    return await res.json();
  },
  getProject: async (slugOrId) => {
    const res = await fetch(`${BASE_URL}/projects/${slugOrId}`);
    return await res.json();
  },
  createProject: async (data) => {
    const res = await fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });
    return await res.json();
  },
  updateProject: async (id, data) => {
    const res = await fetch(`${BASE_URL}/projects/${id}`, {
      method: 'PUT',
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });
    return await res.json();
  },
  deleteProject: async (id) => {
    const res = await fetch(`${BASE_URL}/projects/${id}`, {
      method: 'DELETE',
      headers: getHeaders(true),
    });
    return await res.json();
  },

  // Skills
  getSkills: async () => {
    const res = await fetch(`${BASE_URL}/skills`);
    return await res.json();
  },
  createSkill: async (data) => {
    const res = await fetch(`${BASE_URL}/skills`, {
      method: 'POST',
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });
    return await res.json();
  },
  updateSkill: async (id, data) => {
    const res = await fetch(`${BASE_URL}/skills/${id}`, {
      method: 'PUT',
      headers: getHeaders(true),
      body: JSON.stringify(data),
    });
    return await res.json();
  },
  deleteSkill: async (id) => {
    const res = await fetch(`${BASE_URL}/skills/${id}`, {
      method: 'DELETE',
      headers: getHeaders(true),
    });
    return await res.json();
  },

  // Experience
  getExperiences: async () => {
    const res = await fetch(`${BASE_URL}/experience`);
    return await res.json();
  },

  // Education
  getEducations: async () => {
    const res = await fetch(`${BASE_URL}/education`);
    return await res.json();
  },

  // Achievements
  getAchievements: async () => {
    const res = await fetch(`${BASE_URL}/achievements`);
    return await res.json();
  },

  // Blogs
  getBlogs: async () => {
    const res = await fetch(`${BASE_URL}/blogs`);
    return await res.json();
  },
  getBlog: async (slugOrId) => {
    const res = await fetch(`${BASE_URL}/blogs/${slugOrId}`);
    return await res.json();
  },
  likeBlog: async (id) => {
    const res = await fetch(`${BASE_URL}/blogs/${id}/like`, { method: 'POST' });
    return await res.json();
  },

  // Contact
  submitContact: async (data) => {
    const res = await fetch(`${BASE_URL}/contact`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify(data),
    });
    return await res.json();
  },
  getMessages: async () => {
    const res = await fetch(`${BASE_URL}/contact`, {
      headers: getHeaders(true),
    });
    return await res.json();
  },

  // AI Assistant & JD Matcher
  chatAI: async (message, history = []) => {
    const res = await fetch(`${BASE_URL}/ai/chat`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify({ message, history }),
    });
    return await res.json();
  },
  matchJD: async (jobDescription) => {
    const res = await fetch(`${BASE_URL}/ai/match-jd`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify({ jobDescription }),
    });
    return await res.json();
  },

  // Auth
  login: async (email, password) => {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: getHeaders(false),
      body: JSON.stringify({ email, password }),
    });
    return await res.json();
  },
  getMe: async () => {
    const res = await fetch(`${BASE_URL}/auth/me`, {
      headers: getHeaders(true),
    });
    return await res.json();
  },

  // Analytics
  logEvent: async (eventType, metadata = {}) => {
    try {
      await fetch(`${BASE_URL}/analytics/event`, {
        method: 'POST',
        headers: getHeaders(false),
        body: JSON.stringify({ eventType, metadata }),
      });
    } catch (err) {
      // non-blocking
    }
  },
  getDashboardAnalytics: async () => {
    const res = await fetch(`${BASE_URL}/analytics/dashboard`, {
      headers: getHeaders(true),
    });
    return await res.json();
  },
};
