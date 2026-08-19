const seedData = require('../config/seedData');

/**
 * Knowledge Base for Aniket Kumar
 */
const KNOWLEDGE_BASE = {
  profile: seedData.profile,
  projects: seedData.projects,
  skills: seedData.skills,
  experience: seedData.experiences,
  education: seedData.educations,
  achievements: seedData.achievements,
};

/**
 * Built-in Intelligent Free RAG Query Engine
 */
const answerWithLocalEngine = (query) => {
  const q = query.toLowerCase().trim();

  // 1. Patents & Inventions
  if (q.includes('patent') || q.includes('invention') || q.includes('intellectual property')) {
    return {
      text: `Aniket Kumar has published **2 Indian Patents** with the Controller General of Patents, Designs and Trade Marks (Intellectual Property India):\n\n1. 📜 **Indian Patent (Pub No. 26/2025, App No. 202541054232)**:\n*"Method for AI-Based Personalized Guidance from the Bhagavad Gita for Holistic Well-Being"*\nPublished on 27 June 2025. Combines facial emotion recognition, ECG biometric stress analysis, and Bhagavad Gita philosophical recommendation algorithms.\n\n2. 📜 **Indian Patent (Pub No. 28/2024, App No. 202441035043)**:\n*"MINDPLAY: Nurturing Mental Health"*\nPublished on 07 December 2024. An affective computing and mental health innovation monitoring learner emotional states for personalized well-being.`,
      sources: ['Indian Patents', 'Achievements', 'MCA Research'],
      suggestedQuestions: [
        'Tell me more about the Bhagavad Gita AI system',
        'What was Aniket’s role in MINDPLAY?',
        'Tell me about his IEEE research paper',
      ],
    };
  }

  // 2. IEEE Paper & Research
  if (
    q.includes('ieee') ||
    q.includes('research') ||
    q.includes('paper') ||
    q.includes('sleep') ||
    q.includes('eeg') ||
    q.includes('conference')
  ) {
    return {
      text: `Aniket presented a peer-reviewed research paper titled **"Sleep Stage Classification: Combining KNN, Decision Tree, and Regression for Enhanced Performance"** at the **IEEE International Conference on Visual Analytics and Data Visualization (ICVADV-2025)** held on 04–06 March 2025 at Francis Xavier Engineering College, Tamil Nadu.\n\nKey Highlights:\n• Automated classification of polysomnographic EEG brainwaves into sleep stages (Wake, NREM, REM).\n• Benchmarked multiple models: **KNN (97% accuracy, 0.99 precision, 0.98 recall)**, Decision Tree (96%), and Logistic Regression (90%).\n• Hybrid ensemble achieved peak **98% classification performance**.`,
      sources: ['IEEE ICVADV-2025', 'Academic Seminar 23MCA39'],
      suggestedQuestions: [
        'What technologies were used in the EEG research?',
        'What other projects has Aniket built?',
        'What is Aniket’s educational background?',
      ],
    };
  }

  // 3. Bhagavad Gita / Major Project
  if (q.includes('gita') || q.includes('holistic') || q.includes('wellness') || q.includes('major project')) {
    const p = seedData.projects[0];
    return {
      text: `**${p.title}** (MCA Major Project 23MCA43 & Indian Patent Pub No. 26/2025)\n\n${p.description}\n\n**Key Technical Architecture:**\n• **Frontend**: React & React Native cross-platform app with real-time video capture.\n• **AI Diagnostics**: Tri-modal fusion of webcam Facial Emotion Recognition (FER), ECG biometric stress signal parsing (.csv/.pdf), and standardized psychological surveys.\n• **Backend & DB**: Node.js, Express.js, and Supabase (PostgreSQL) storing verse vectors and user sessions.\n• **Outcome**: Prescribes customized Sanskrit shlokas, English insights, and restorative audio affirmations.\n\n🌐 **Live Web App**: [Open Live Deployment](https://bhagavadgitawellnessapp.onrender.com)\n📲 **Production Android Build (Expo)**: [Download Android APK](https://expo.dev/accounts/ani07kr/projects/bhagavadgita-wellness/builds/a99d63c8-14cb-47e9-a957-61df993cce51)`,
      sources: ['Major Project 23MCA43', 'Indian Patent 202541054232', 'TechCiti Internship', 'Render Deployment', 'Expo EAS Build'],
      suggestedQuestions: [
        'Can I try the Gita wellness simulator?',
        'What technologies does Aniket know best?',
        'Tell me about his work at TechCiti Consulting',
      ],
    };
  }

  // 4. Parchai AI Companion & Life-Management Mobile App
  if (q.includes('parchai') || q.includes('companion') || q.includes('mobile app') || q.includes('life management') || q.includes('expo')) {
    return {
      text: `**Parchai: Full-Stack Personal AI Companion & Life-Management Mobile App**\n\n${seedData.projects[2]?.description || 'A full-stack personal AI companion mobile application built with React Native, Expo TypeScript, Express TypeScript, and Supabase.'}\n\n**Key Technical Highlights:**\n• **Frontend**: React Native, Expo, and TypeScript with deep linking (\`parchai://\`) for seamless authentication workflows and password resets.\n• **Backend**: Node.js, Express, and TypeScript deployed on **Render** with secure Bearer token authorization.\n• **Data & Auth Persistence**: **Supabase Auth** & **Supabase PostgreSQL** storing multi-turn conversation histories, structured goals, and long-term user memories.\n• **AI Reasoning Engine**: **OpenRouter LLM integration** that inspects upcoming user goals and long-term memories to answer contextual queries (e.g., *"Is there something tomorrow I have to do?"*).\n• **Production Android Build**: Built, signed, and distributed via **Expo EAS**.\n\n📲 **Live Build Link**: [Download Production Android APK](https://expo.dev/accounts/ani07kr/projects/parchai/builds/6494f829-9e33-4e4a-93fb-0afed87a00e8)`,
      sources: ['Parchai Mobile Project', 'Expo EAS Production Build', 'Render Cloud Deployment'],
      suggestedQuestions: [
        'How does Parchai implement persistent long-term memory?',
        'Can I test the Parchai in-browser simulator?',
        'What other full-stack projects has Aniket built?',
      ],
    };
  }

  // 5. Affective Tutoring / MINDPLAY
  if (q.includes('affective') || q.includes('tutoring') || q.includes('mindplay')) {
    const p = seedData.projects[1];
    return {
      text: `**${p.title}** (Societal Project 23MCA37 & Indian Patent Pub No. 28/2024)\n\n${p.description}\n\n**Technical Highlights:**\n• Real-time webcam emotion tracking across 5 states (Joy, Confusion, Boredom, Frustration, Neutral).\n• Dynamic modulation of curriculum difficulty and learning pace based on student emotional fatigue.\n• Stack: Deep Learning CNN, OpenCV, Python, React.js, and Node.js.`,
      sources: ['Societal Project 23MCA37', 'Indian Patent 202441035043'],
      suggestedQuestions: [
        'What other AI projects has Aniket worked on?',
        'Tell me about the Indian Patents Aniket holds',
        'How does the Bhagavad Gita AI system work?',
      ],
    };
  }

  // 6. NLP / Transformer Seminar
  if (q.includes('nlp') || q.includes('transformer') || q.includes('bart') || q.includes('philosophy') || q.includes('llm')) {
    const p = seedData.projects[2];
    return {
      text: `**${p.title}** (Technical Seminar 23MCA42)\n\n${p.description}\n\n**Technical Architecture:**\n• Utilizes \`facebook/bart-large-cnn\` for abstractive text summarization.\n• Employs \`facebook/bart-large-mnli\` for zero-shot classification of complex philosophical passages into 6 doctrines (Realism, Idealism, Existentialism, Rationalism, Empiricism, Absurdism).\n• Stack: Python, PyTorch, Hugging Face Transformers, Gradio, and JavaScript.`,
      sources: ['Technical Seminar 23MCA42', 'Hugging Face Transformers'],
      suggestedQuestions: [
        'Tell me about Aniket’s full-stack development experience',
        'What internships has Aniket completed?',
        'Is Aniket available for hire?',
      ],
    };
  }

  // 6. Experience & Internships
  if (
    q.includes('internship') ||
    q.includes('experience') ||
    q.includes('work') ||
    q.includes('techciti') ||
    q.includes('tripillar') ||
    q.includes('dotplus')
  ) {
    return {
      text: `Aniket Kumar has completed **3 verified software engineering internships**:\n\n1. 💼 **TechCiti Software Consulting Private Limited, Bangalore** (Apr 2025 – Jul 2025)\n• *Role*: Software Developer - Intern\n• *Domain*: Full-stack Web/Mobile & AI development for Bhagavad Gita Wellness Recommendation System.\n• *Outcome*: Co-authored published Indian Patent No. 202541054232.\n\n2. 💼 **Tripillar Solutions LLP, Bangalore** (Oct 2024 – Dec 2024)\n• *Role*: Full Stack Java / UI Developer Intern (23MCA38)\n• *Domain*: Designed and engineered the UI and lifecycle management for the HRMS Announcement module.\n\n3. 💼 **Dotplus Technologies** (May 2022 – Aug 2022)\n• *Role*: Web Development Intern\n• *Domain*: Responsive frontend development with HTML5, CSS3, JavaScript, Bootstrap, and backend database integrations.`,
      sources: ['Industry Internships', 'TechCiti', 'Tripillar Solutions', 'Dotplus'],
      suggestedQuestions: [
        'What is Aniket’s CGPA in MCA?',
        'What are Aniket’s top frontend skills?',
        'Tell me about his Indian Patents',
      ],
    };
  }

  // 7. Education & Academic Scores
  if (
    q.includes('education') ||
    q.includes('college') ||
    q.includes('university') ||
    q.includes('mca') ||
    q.includes('bca') ||
    q.includes('cgpa') ||
    q.includes('gpa') ||
    q.includes('new horizon') ||
    q.includes('lnmi')
  ) {
    return {
      text: `**Aniket Kumar's Academic Credentials:**\n\n🎓 **Master of Computer Applications (MCA)** (2023 – 2025)\n• Institution: New Horizon College of Engineering (NHCE), Bangalore (Autonomous, NAAC 'A', NBA, Affiliated to VTU)\n• **CGPA: 8.45 / 10** | USN: 1NH23MC016\n• Advanced Coursework: Full-Stack Web Architecture, Deep Learning, Cloud Computing, Database Engineering.\n\n🎓 **Bachelor of Computer Applications (BCA)** (2020 – 2023)\n• Institution: L. N. Mishra Institute of Economic Development and Social Change (LNMI), Patna\n• **CGPA: 7.78 / 10**\n• Coursework: Data Structures, OOP (Java & C++), Relational Databases (SQL), Web Technologies.`,
      sources: ['Academic Credentials', 'NHCE Bangalore', 'LNMI Patna'],
      suggestedQuestions: [
        'What projects did he build during MCA?',
        'What was his research paper about?',
        'Download his verified resume',
      ],
    };
  }

  // 8. Skills & Technologies
  if (
    q.includes('skill') ||
    q.includes('tech stack') ||
    q.includes('technologies') ||
    q.includes('react') ||
    q.includes('node') ||
    q.includes('mongodb') ||
    q.includes('python') ||
    q.includes('java') ||
    q.includes('frontend') ||
    q.includes('backend')
  ) {
    return {
      text: `**Aniket Kumar's Core Technical Skills Matrix:**\n\n• **Programming**: JavaScript (ES6+), TypeScript, Python, Java, SQL, C, C++, HTML5, CSS3\n• **Frontend & Mobile**: React.js, React Native (Expo), Tailwind CSS, Bootstrap, Redux/Context API\n• **Backend & APIs**: Node.js, Express.js, RESTful Architecture, JWT Auth, Helmet Security\n• **Databases & Cloud**: MongoDB & Mongoose, PostgreSQL / Supabase, MySQL, Firebase Firestore\n• **AI / Machine Learning**: PyTorch, Scikit-Learn, Hugging Face Transformers (BART, BERT), OpenCV, EEG Signal Classification`,
      sources: ['Skills Inventory', 'Production Stacks'],
      suggestedQuestions: [
        'Tell me about his React Native experience',
        'What AI models has he implemented?',
        'Check his match with a job description',
      ],
    };
  }

  // 9. Recruiter Pitch / Why Hire Aniket
  if (
    q.includes('hire') ||
    q.includes('why should') ||
    q.includes('summary') ||
    q.includes('pitch') ||
    q.includes('strengths') ||
    q.includes('roles') ||
    q.includes('recruiter')
  ) {
    return {
      text: `**Why You Should Hire Aniket Kumar:**\n\n1. **Proven Full-Stack Velocity**: Expert in building end-to-end web applications, responsive interfaces, and React Native mobile apps with clean, maintainable architecture.\n2. **Patent-Published Innovation**: Inventor of 2 published Indian Patents in AI wellness & affective computing, demonstrating original problem-solving and patent-level execution.\n3. **Research Rigor**: Authored and presented an EEG sleep classification paper at an IEEE international conference.\n4. **Industry & Corporate Ready**: Solid internship track record at TechCiti Software Consulting and Tripillar Solutions delivering production UI and backend services.\n5. **Top Academic Standing**: MCA graduate with **8.45 CGPA** from NAAC 'A' accredited New Horizon College of Engineering.\n\n🎯 **Preferred Roles**: Full-Stack Developer, Frontend Engineer (React/React Native), Backend Node.js Developer, SDE.`,
      sources: ['Recruiter Pitch', 'Career Profile'],
      suggestedQuestions: [
        'How do I contact Aniket for an interview?',
        'Can I see Aniket’s live projects?',
        'Does Aniket know MongoDB and Node.js?',
      ],
    };
  }

  // 10. Contact / Availability
  if (
    q.includes('contact') ||
    q.includes('email') ||
    q.includes('phone') ||
    q.includes('reach') ||
    q.includes('available') ||
    q.includes('location') ||
    q.includes('github') ||
    q.includes('linkedin')
  ) {
    return {
      text: `**Get in Touch with Aniket Kumar:**\n\n🟢 **Availability**: Available for Full-Time Roles & High-Impact Opportunities\n📍 **Location**: Bangalore, India (Open to Remote & Relocation)\n\n• 📧 **Email**: [aniket07kr2000@gmail.com](mailto:aniket07kr2000@gmail.com)\n• 📱 **Phone**: [+91-7903828970](tel:+917903828970)\n• 💼 **LinkedIn**: [linkedin.com/in/aniket-kumar-ak07](https://linkedin.com/in/aniket-kumar-ak07)\n• 🐙 **GitHub**: [github.com/Ani07Kr](https://github.com/Ani07Kr)\n\nYou can also send a direct message through the Contact section on this website!`,
      sources: ['Contact Card', 'Profile'],
      suggestedQuestions: [
        'Tell me about Aniket’s projects',
        'Download Aniket’s resume',
        'Run the Job Description Matcher',
      ],
    };
  }

  // 11. Projects Overview
  if (q.includes('project') || q.includes('portfolio') || q.includes('apps') || q.includes('built')) {
    return {
      text: `Aniket has engineered several verified, production-grade applications:\n\n1. 🧠 **Bhagavad Gita AI Holistic Wellness System** (Major Project & Patent Pub No. 26/2025)\n2. 🎓 **Affective Tutoring System (MINDPLAY AI)** (Societal Project & Patent Pub No. 28/2024)\n3. 📱 **Parchai: Personal AI Companion & Life-Management App** (React Native, TypeScript, Expo EAS, Supabase, Render)\n4. 📚 **Semantic NLP for Ancient Philosophical Texts** (BART Transformers & Zero-Shot Classification)\n5. 📊 **Sleep Stage EEG Signal Classification** (IEEE ICVADV-2025 Conference Presentation)\n6. 🏥 **DocConnect Healthcare Management Portal** (Full-Stack Appointment & Prescription Portal)\n7. 🏢 **HRMS Announcement Lifecycle Module** (Tripillar Solutions Internship Project)\n8. 🚗 **Car With Driver India** (Live Commercial Tour Booking Web App)`,
      sources: ['Projects Repository', 'Patents', 'Academic Reports', 'Expo EAS Production Builds'],
      suggestedQuestions: [
        'Tell me about the Parchai mobile companion app',
        'Tell me about the Bhagavad Gita AI app',
        'What was the EEG sleep research about?',
        'Tell me about Aniket’s published Indian Patents',
      ],
    };
  }

  // Default fallback response with smart context
  return {
    text: `Hello! I am Aniket Kumar's AI Portfolio Assistant. Aniket is a Full-Stack Developer, AI Researcher, and MCA graduate (8.45 CGPA) from New Horizon College of Engineering, Bangalore.\n\nHe has published **2 Indian Patents** in AI technology, presented research at an **IEEE International Conference**, and completed software engineering internships at **TechCiti Consulting** and **Tripillar Solutions**.\n\nHow can I help you explore his background, projects, or credentials today?`,
    sources: ['Aniket Kumar Portfolio Knowledge Base'],
    suggestedQuestions: [
      'Tell me about Aniket’s 2 published Indian Patents',
      'What is Aniket’s experience with full-stack web and mobile development?',
      'Tell me about his IEEE conference presentation',
      'Why should we hire Aniket for a software role?',
    ],
  };
};

/**
 * Main AI Query Handler
 */
const generateAIResponse = async (query, history = []) => {
  // If user has a free Google Gemini key configured, it can be plugged in here.
  // By default, it executes the free, zero-latency local RAG knowledge engine.
  const localResponse = answerWithLocalEngine(query);
  return localResponse;
};

module.exports = { generateAIResponse, answerWithLocalEngine };
