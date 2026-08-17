const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: 'Aniket Kumar',
    },
    usn: {
      type: String,
      default: '1NH23MC016',
    },
    tagline: {
      type: String,
      default: 'MCA Graduate | Full-Stack Developer & AI Researcher',
    },
    shortBio: {
      type: String,
      default:
        'Motivated and adaptable software developer with an MCA degree and hands-on experience in web and mobile application development, machine learning, and software engineering. Inventor of 2 published Indian Patents in AI-driven wellness technology and mental health.',
    },
    fullBio: {
      type: String,
      default:
        'I am Aniket Kumar, an MCA graduate from New Horizon College of Engineering, Bangalore (CGPA: 8.45) with a strong foundation in Computer Applications from LNMI Patna (CGPA: 7.78). I build scalable full-stack web & mobile architectures using MongoDB, Express.js, React, React Native, Node.js, and integrate cutting-edge machine learning and NLP models. My research includes EEG sleep stage classification (presented at IEEE ICVADV-2025) and patented AI-driven holistic wellness recommendation frameworks.',
    },
    availabilityStatus: {
      isAvailable: { type: Boolean, default: true },
      statusText: { type: String, default: 'Available for Full-Time Roles & High-Impact Projects' },
      location: { type: String, default: 'Bangalore, India (Open to Remote & Relocation)' },
    },
    contact: {
      email: { type: String, default: 'aniket07kr2000@gmail.com' },
      phone: { type: String, default: '+91-7903828970' },
      linkedIn: { type: String, default: 'https://linkedin.com/in/aniket-kumar-ak07' },
      gitHub: { type: String, default: 'https://github.com/Ani07Kr' },
      portfolio: { type: String, default: 'https://aniketkumar.dev' },
    },
    stats: {
      yearsExperience: { type: String, default: '1+' },
      completedProjects: { type: String, default: '12+' },
      patentsPublished: { type: String, default: '2' },
      researchPapers: { type: String, default: '1' },
      mcaCgpa: { type: String, default: '8.45' },
    },
    recruiterPitch: {
      summary: {
        type: String,
        default:
          'Aniket Kumar is a high-velocity software engineer and MCA graduate with proven production skills in full-stack web development, mobile apps (React Native), and AI/ML pipelines. Inventor of 2 published Indian Patents with hands-on internship experience at TechCiti Software Consulting and Tripillar Solutions.',
      },
      topSkills: [{ type: String }],
      yearsOfPrep: { type: String, default: 'MCA (8.45 CGPA) + BCA (7.78 CGPA)' },
      preferredRoles: [{ type: String }],
    },
    resumeUrl: {
      type: String,
      default: '/resume.pdf',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Profile', profileSchema);
