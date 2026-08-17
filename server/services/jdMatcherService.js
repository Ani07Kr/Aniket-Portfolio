const seedData = require('../config/seedData');

const SKILL_KEYWORDS_MAP = {
  // Frontend
  react: { name: 'React.js', category: 'Frontend & Mobile', weight: 1.2 },
  'react.js': { name: 'React.js', category: 'Frontend & Mobile', weight: 1.2 },
  'react native': { name: 'React Native / Expo', category: 'Frontend & Mobile', weight: 1.3 },
  expo: { name: 'React Native / Expo', category: 'Frontend & Mobile', weight: 1.1 },
  javascript: { name: 'JavaScript (ES6+)', category: 'Frontend & Mobile', weight: 1.2 },
  typescript: { name: 'TypeScript', category: 'Frontend & Mobile', weight: 1.2 },
  html: { name: 'HTML5 & CSS3', category: 'Frontend & Mobile', weight: 0.9 },
  html5: { name: 'HTML5 & CSS3', category: 'Frontend & Mobile', weight: 0.9 },
  css: { name: 'HTML5 & CSS3', category: 'Frontend & Mobile', weight: 0.9 },
  css3: { name: 'HTML5 & CSS3', category: 'Frontend & Mobile', weight: 0.9 },
  tailwind: { name: 'Tailwind CSS', category: 'Frontend & Mobile', weight: 1.1 },
  'tailwind css': { name: 'Tailwind CSS', category: 'Frontend & Mobile', weight: 1.1 },
  bootstrap: { name: 'Bootstrap', category: 'Frontend & Mobile', weight: 0.9 },
  redux: { name: 'React.js State Management', category: 'Frontend & Mobile', weight: 1.0 },

  // Backend
  node: { name: 'Node.js', category: 'Backend & APIs', weight: 1.2 },
  'node.js': { name: 'Node.js', category: 'Backend & APIs', weight: 1.2 },
  express: { name: 'Express.js', category: 'Backend & APIs', weight: 1.2 },
  'express.js': { name: 'Express.js', category: 'Backend & APIs', weight: 1.2 },
  rest: { name: 'RESTful API Architecture', category: 'Backend & APIs', weight: 1.1 },
  'rest api': { name: 'RESTful API Architecture', category: 'Backend & APIs', weight: 1.2 },
  'restful apis': { name: 'RESTful API Architecture', category: 'Backend & APIs', weight: 1.2 },
  api: { name: 'RESTful API Architecture', category: 'Backend & APIs', weight: 1.0 },
  jwt: { name: 'Authentication & Security', category: 'Backend & APIs', weight: 1.0 },
  auth: { name: 'Authentication & Security', category: 'Backend & APIs', weight: 1.0 },

  // Databases
  mongo: { name: 'MongoDB & Mongoose', category: 'Databases & Cloud', weight: 1.2 },
  mongodb: { name: 'MongoDB & Mongoose', category: 'Databases & Cloud', weight: 1.2 },
  mongoose: { name: 'MongoDB & Mongoose', category: 'Databases & Cloud', weight: 1.1 },
  sql: { name: 'SQL & Relational Databases', category: 'Databases & Cloud', weight: 1.1 },
  mysql: { name: 'MySQL & Relational DBMS', category: 'Databases & Cloud', weight: 1.1 },
  postgres: { name: 'Supabase / PostgreSQL', category: 'Databases & Cloud', weight: 1.1 },
  postgresql: { name: 'Supabase / PostgreSQL', category: 'Databases & Cloud', weight: 1.1 },
  supabase: { name: 'Supabase / PostgreSQL', category: 'Databases & Cloud', weight: 1.1 },
  firebase: { name: 'Firebase', category: 'Databases & Cloud', weight: 1.0 },
  database: { name: 'Databases & Cloud', category: 'Databases & Cloud', weight: 0.9 },

  // AI/ML
  python: { name: 'Python (AI / ML)', category: 'AI, ML & NLP', weight: 1.2 },
  'machine learning': { name: 'Machine Learning Classification', category: 'AI, ML & NLP', weight: 1.3 },
  ml: { name: 'Machine Learning Classification', category: 'AI, ML & NLP', weight: 1.2 },
  'deep learning': { name: 'Computer Vision & CNN', category: 'AI, ML & NLP', weight: 1.3 },
  nlp: { name: 'Transformer LLMs & Hugging Face', category: 'AI, ML & NLP', weight: 1.3 },
  llm: { name: 'Transformer LLMs & Hugging Face', category: 'AI, ML & NLP', weight: 1.3 },
  transformers: { name: 'Transformer LLMs & Hugging Face', category: 'AI, ML & NLP', weight: 1.3 },
  'hugging face': { name: 'Transformer LLMs & Hugging Face', category: 'AI, ML & NLP', weight: 1.2 },
  opencv: { name: 'Computer Vision & CNN', category: 'AI, ML & NLP', weight: 1.2 },
  pytorch: { name: 'Python (AI / ML)', category: 'AI, ML & NLP', weight: 1.2 },
  scikit: { name: 'Machine Learning Classification', category: 'AI, ML & NLP', weight: 1.2 },

  // Languages & Fundamentals
  java: { name: 'Java', category: 'Languages', weight: 1.1 },
  'c++': { name: 'C & C++', category: 'Languages', weight: 1.0 },
  c: { name: 'C & C++', category: 'Languages', weight: 0.9 },
  dsa: { name: 'Data Structures & Algorithms', category: 'Core Fundamentals', weight: 1.1 },
  algorithms: { name: 'Data Structures & Algorithms', category: 'Core Fundamentals', weight: 1.1 },
  'data structures': { name: 'Data Structures & Algorithms', category: 'Core Fundamentals', weight: 1.1 },
  oop: { name: 'Object-Oriented Design', category: 'Core Fundamentals', weight: 1.0 },

  // Tools & Version Control
  git: { name: 'Git & GitHub', category: 'Developer Tools', weight: 1.0 },
  github: { name: 'Git & GitHub', category: 'Developer Tools', weight: 1.0 },
  postman: { name: 'Postman & API Testing', category: 'Developer Tools', weight: 0.9 },
  agile: { name: 'Agile & Teamwork', category: 'Core Fundamentals', weight: 0.9 },
};

const matchJobDescription = (jobDescription) => {
  if (!jobDescription || jobDescription.trim().length < 10) {
    return {
      matchScore: 0,
      matchedSkills: [],
      missingSkills: [],
      relevantProjects: [],
      recruiterPitch: 'Please provide a detailed job description to calculate match score.',
    };
  }

  const jdText = jobDescription.toLowerCase();
  const matchedSkillsSet = new Set();
  let totalWeight = 0;
  let matchedWeight = 0;

  // Check detected skills
  Object.keys(SKILL_KEYWORDS_MAP).forEach((keyword) => {
    // Regex matching whole word or bounded phrase
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
    if (regex.test(jdText)) {
      const skillInfo = SKILL_KEYWORDS_MAP[keyword];
      matchedSkillsSet.add(skillInfo.name);
      matchedWeight += skillInfo.weight * 10;
      totalWeight += skillInfo.weight * 10;
    }
  });

  const matchedSkills = Array.from(matchedSkillsSet);

  // If few skills explicitly extracted, use standard baseline
  let matchScore = 82;
  if (matchedSkills.length > 0) {
    // Calculate realistic ATS score between 85% and 98% based on match density
    const scoreCalc = Math.min(98, Math.max(80, 75 + matchedSkills.length * 4));
    matchScore = scoreCalc;
  } else {
    matchScore = 85;
  }

  // Find most relevant projects matching the JD
  const relevantProjects = seedData.projects
    .map((project) => {
      let relevance = 0;
      const projectTech = project.technologies.map((t) => t.toLowerCase());
      matchedSkills.forEach((skill) => {
        if (projectTech.some((tech) => tech.includes(skill.toLowerCase()) || skill.toLowerCase().includes(tech))) {
          relevance += 2;
        }
      });
      return {
        title: project.title,
        slug: project.slug,
        category: project.category,
        badge: project.badge,
        tagline: project.tagline,
        technologies: project.technologies,
        relevanceScore: relevance,
      };
    })
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 3);

  // Tailored recruiter pitch
  const recruiterPitch = `Based on your job description, Aniket Kumar is an exceptional **${matchScore}% ATS match**. Aniket is an MCA graduate (8.45 CGPA) with proven hands-on expertise in ${
    matchedSkills.slice(0, 4).join(', ') || 'Full Stack Web Development, React Native, and AI'
  }. He has published 2 Indian Patents in AI wellness, presented an IEEE conference paper on machine learning, and completed corporate internships at TechCiti Consulting and Tripillar Solutions. He is ready to deliver high-velocity, production-quality code from Day 1.`;

  return {
    matchScore,
    matchedSkills: matchedSkills.length > 0 ? matchedSkills : ['Full Stack Development', 'React.js', 'Node.js', 'REST APIs'],
    relevantProjects,
    recruiterPitch,
    candidateHighlights: [
      'MCA Degree with 8.45 CGPA from NAAC "A" Accredited NHCE Bangalore',
      'Inventor of 2 Published Indian Patents in AI & Mental Health',
      'IEEE Conference Presenter (ICVADV-2025)',
      'Hands-on Corporate Internships at TechCiti Software & Tripillar Solutions',
      'Immediate Joiner / Open to Relocation & Remote',
    ],
  };
};

module.exports = { matchJobDescription };
