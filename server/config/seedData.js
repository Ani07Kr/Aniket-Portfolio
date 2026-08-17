const seedData = {
  profile: {
    name: 'Aniket Kumar',
    usn: '1NH23MC016',
    tagline: 'Full-Stack & Mobile Developer | AI/ML Researcher | MCA Graduate',
    shortBio:
      'Motivated and adaptable software developer with an MCA degree (8.45 CGPA) and hands-on experience in full-stack web engineering, mobile application development (React Native), and applied AI/ML. Inventor of 2 published Indian Patents in AI-driven holistic wellness and mental health.',
    fullBio:
      'I am Aniket Kumar, an MCA graduate from New Horizon College of Engineering, Bangalore (Autonomous, NAAC "A", NBA, VTU) with a solid computer applications foundation from LNMI Patna. I build scalable full-stack web and mobile applications using MongoDB, Express.js, React, Node.js, and React Native. Passionate about machine learning, I have conducted research on EEG sleep stage classification (presented at IEEE ICVADV-2025) and published 2 Indian Patents on AI-guided well-being and affective tutoring systems.',
    availabilityStatus: {
      isAvailable: true,
      statusText: 'Open to Full-Time Roles & High-Impact Opportunities',
      location: 'Bangalore, India (Open to Relocation & Remote)',
    },
    contact: {
      email: 'aniket07kr2000@gmail.com',
      phone: '+91-7903828970',
      linkedIn: 'https://linkedin.com/in/aniket-kumar-ak07',
      gitHub: 'https://github.com/Ani07Kr',
      portfolio: 'https://aniketkumar.dev',
    },
    stats: {
      yearsExperience: '1+',
      completedProjects: '12+',
      patentsPublished: '2',
      researchPapers: '1',
      mcaCgpa: '8.45',
    },
    recruiterPitch: {
      summary:
        'Aniket Kumar is an MCA graduate (8.45 CGPA) with full-stack web & mobile development expertise, hands-on industry internship experience (TechCiti Software & Tripillar Solutions), and 2 published Indian Patents in AI technology. Ready to deploy production code from Day 1.',
      topSkills: [
        'React.js & React Native (Expo)',
        'Node.js, Express.js & RESTful APIs',
        'MongoDB, PostgreSQL / Supabase, MySQL',
        'AI/ML Integration (Transformers, CNN, Scikit-Learn)',
        'Modern UI/UX & Responsive Web Architecture',
      ],
      yearsOfPrep: 'MCA (8.45 CGPA) + BCA (7.78 CGPA)',
      preferredRoles: [
        'Full Stack Developer',
        'Frontend / React Engineer',
        'Backend Node.js Developer',
        'Software Development Engineer (SDE)',
      ],
    },
    resumeUrl: '/resume.pdf',
  },

  projects: [
    {
      title: 'Recommendation System for Holistic Wellness from Bhagavad Gita',
      slug: 'bhagavad-gita-holistic-wellness-ai',
      tagline:
        'Tri-Modal AI Wellness Platform combining Facial Emotion Detection, ECG Stress Analysis, and Vedic Recommendation Algorithms.',
      category: 'Patents & Research',
      badge: 'MCA Major Project & Indian Patent (Pub No. 26/2025)',
      description:
        'A comprehensive AI-driven well-being platform that evaluates user psychological and physiological states using real-time camera emotion recognition, ECG biometric waveform analysis, and validated mental wellness questionnaires to prescribe personalized Bhagavad Gita shlokas, English insights, and therapeutic mantras.',
      problem:
        'Modern individuals face unprecedented mental fatigue, anxiety, and stress, while traditional philosophical and spiritual wisdom remains inaccessible or unstructured for modern algorithmic personalization.',
      solution:
        'Engineered a tri-modal diagnostic pipeline integrating OpenCV/CNN facial emotion analysis, uploaded ECG signal stress scoring (.csv/.pdf), and dynamic retrieval of curated Bhagavad Gita shlokas with practical psychological interpretations and meditative audio affirmations.',
      keyFeatures: [
        'Real-time webcam facial emotion recognition (Happy, Sad, Angry, Fear, Neutral)',
        'ECG waveform biometric stress analysis module',
        'Interactive mental wellness questionnaire scoring engine',
        'Curated Bhagavad Gita verse repository with Sanskrit shlokas and English context',
        'Personalized daily wellness routine generator & meditative music player',
        'Supabase / MongoDB real-time user state tracking',
      ],
      technologies: [
        'React Native',
        'React.js',
        'Node.js',
        'Express.js',
        'Supabase / PostgreSQL',
        'OpenCV',
        'Hugging Face API',
        'Tailwind CSS',
      ],
      architecture: {
        overview:
          'Tri-modal ingestion pipeline feeding into an emotional state classifier and a verse recommendation engine.',
        frontend:
          'React / React Native cross-platform UI with real-time video canvas and interactive audio playback.',
        backend: 'Express.js microservices handling ECG signal processing and questionnaire analytics.',
        database: 'Supabase / PostgreSQL storing verse matrices, user profiles, and session assessments.',
        aiPipeline:
          'Facial expression classification CNN + heuristic verse matching algorithm based on affective state vectors.',
      },
      challenges: [
        {
          challenge:
            'Harmonizing multi-modal signals (video frames + numerical ECG + questionnaire answers) into a unified stress score.',
          resolution:
            'Designed a weighted sensor fusion algorithm normalizing confidence scores across all three modalities before querying the recommendation matrix.',
        },
        {
          challenge:
            'Providing accurate and culturally authentic contextual interpretations of ancient Sanskrit verses.',
          resolution:
            'Curated a structured database mapping 700+ Gita verses with categorized emotional triggers, practical psychological meanings, and restorative affirmations.',
        },
      ],
      myContributions: [
        'Lead developer of the full-stack web and mobile application architecture.',
        'Implemented the tri-modal diagnostic user interface and camera emotion tracking integration.',
        'Co-authored Indian Patent Application No. 202541054232 (Published June 27, 2025).',
        'Integrated Supabase database schema and REST API endpoints.',
      ],
      links: {
        github: 'https://github.com/Ani07Kr',
        live: '',
        patent: 'Indian Patent Publication No. 26/2025 (App No. 202541054232)',
        paper: '',
        demoVideo: '',
      },
      coverImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
      screenshots: [
        {
          url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
          caption: 'Holistic Wellness Assessment Dashboard',
        },
      ],
      explanations: {
        recruiter:
          'Demonstrates end-to-end full-stack engineering, multi-modal sensor fusion, patent-level innovation, and ability to deliver complex real-world wellness applications under academic and industry mentorship.',
        technical:
          'Built with React, Node.js, and Supabase. Combines computer vision emotion classification, biometric ECG signal parsing, weighted score aggregation, and targeted relational queries.',
        beginner:
          'An intelligent app that reads your facial expressions, checks stress levels, and gives you comforting, personalized life lessons and shlokas from the Bhagavad Gita.',
      },
      sandboxType: 'gita_wellness_simulator',
      sandboxConfig: {
        defaultEmotion: 'stressed',
        availableEmotions: ['stressed', 'anxious', 'confused', 'sad', 'peaceful'],
      },
      isFeatured: true,
      order: 1,
    },
    {
      title: 'Deep Learning Based Affective Tutoring System (MINDPLAY AI)',
      slug: 'affective-tutoring-system-mindplay-ai',
      tagline:
        'Intelligent Educational Platform that Adapts Learning Content in Real-Time to Student Emotional States.',
      category: 'Patents & Research',
      badge: 'Societal Project & Indian Patent (Pub No. 28/2024)',
      description:
        'An affective e-learning platform utilizing deep convolutional neural networks to monitor learner emotional states (Boredom, Confusion, Frustration, Joy, Engagement) via webcam, dynamically adjusting curriculum pace and triggering motivational pedagogical interventions.',
      problem:
        'Standard e-learning platforms are static and oblivious to student emotional fatigue, leading to high dropout rates and reduced comprehension.',
      solution:
        'Constructed an adaptive tutoring system with continuous facial emotion inference, dynamic difficulty modulation, and cognitive wellness feedback mechanisms.',
      keyFeatures: [
        'Webcam-based affective facial landmark tracking',
        'Emotion classification across 5 distinct learner states',
        'Dynamic lecture pace and quiz difficulty adjustment',
        'Gamified cognitive exercises and breathing breaks for mental rejuvenation',
        'Teacher analytics dashboard monitoring classroom engagement trends',
      ],
      technologies: [
        'Deep Learning',
        'CNN (Convolutional Neural Networks)',
        'OpenCV',
        'Python',
        'React.js',
        'Node.js',
        'MongoDB',
      ],
      architecture: {
        overview: 'Client-side webcam stream analyzed by CNN model driving real-time React UI state.',
        frontend: 'React dashboard with live attention meter and responsive course viewer.',
        backend: 'Node/Python microservices tracking student engagement time-series data.',
        database: 'MongoDB managing user progress, emotion logs, and instructional content.',
        aiPipeline: 'Pre-trained CNN fine-tuned on facial expression datasets for affective state scoring.',
      },
      challenges: [
        {
          challenge:
            'Ensuring real-time emotion detection without client-side lag or excessive battery drain.',
          resolution:
            'Utilized lightweight model quantization and periodic frame sampling (2 FPS) to maintain smooth 60fps UI performance.',
        },
      ],
      myContributions: [
        'Architected the adaptive UI feedback loops in React.',
        'Co-inventor on Indian Patent Application No. 202441035043 (Published Dec 07, 2024).',
        'Built student session analytics and reporting system.',
      ],
      links: {
        github: 'https://github.com/Ani07Kr',
        live: '',
        patent: 'Indian Patent Publication No. 28/2024 (App No. 202441035043)',
        paper: '',
        demoVideo: '',
      },
      coverImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
      screenshots: [],
      explanations: {
        recruiter:
          'Proves expertise in computer vision, deep learning integration, user engagement psychology, and patented edtech product development.',
        technical:
          'Implemented CNN emotion inference pipeline coupled with React state management to trigger pedagogical events based on emotional state transitions.',
        beginner:
          'A smart study app that notices when you get confused or bored while learning, and slows down or offers a helpful tip to keep you engaged.',
      },
      sandboxType: 'affective_emotion_simulator',
      sandboxConfig: {
        emotions: ['Focused', 'Confused', 'Bored', 'Stressed', 'Happy'],
      },
      isFeatured: true,
      order: 2,
    },
    {
      title: 'Parchai: Personal AI Companion & Life-Management Mobile App',
      slug: 'parchai-ai-companion-mobile-app',
      tagline:
        'Full-Stack Personal AI Companion Mobile App with Persistent Long-Term Memory, Goal Tracking, and Context-Aware Intelligence.',
      category: 'Mobile App',
      badge: 'Production Android Build (Expo EAS)',
      description:
        'A full-stack personal AI companion and life-management mobile application built with React Native, Expo, and TypeScript on the frontend, and Node.js, Express, and TypeScript on the backend (deployed on Render). Features Supabase Authentication and PostgreSQL for persistence, OpenRouter LLM integration, unique session-based conversation histories, persistent user memory retrieval, and a structured goal management system enabling proactive, context-aware AI assistance.',
      problem:
        'Standard AI chatbots treat every interaction as an isolated, ephemeral session without remembering user habits, active goals, or past conversations, resulting in generic responses that fail to provide practical daily life assistance.',
      solution:
        'Engineered an intelligent client-server mobile architecture combining persistent memory storage, structured goal tracking, and OpenRouter LLM reasoning. When a user asks questions like "Is there something tomorrow I have to do?", Parchai retrieves active goals, matches deadlines, and provides personalized, context-rich guidance.',
      keyFeatures: [
        'React Native & Expo TypeScript mobile app with deep linking (parchai://) for password resets and seamless screen routing',
        'Node.js & Express TypeScript backend deployed on Render with secure Bearer token authorization',
        'Supabase Auth & PostgreSQL persistence for conversations, messages, goals, and persistent memories',
        'OpenRouter LLM integration with dynamic memory retrieval and multi-turn context retention',
        'Complete Goal Management System: create, edit, complete, and evaluate goals with deadlines and status tracking',
        'Production Android APK build compiled and signed via Expo EAS with source code maintained in GitHub',
      ],
      technologies: [
        'React Native',
        'Expo (EAS Build)',
        'TypeScript',
        'Node.js',
        'Express.js',
        'Supabase (Auth & PostgreSQL)',
        'OpenRouter API',
        'LLMs / Generative AI',
        'Render Cloud',
        'Deep Linking (parchai://)',
      ],
      architecture: {
        overview:
          'Client-server architecture where the Expo React Native app communicates via Bearer-authenticated REST APIs to a Node/Express TypeScript backend deployed on Render, integrating Supabase PostgreSQL and OpenRouter LLM inference.',
        frontend:
          'React Native, Expo, and TypeScript mobile app supporting deep linking (parchai://), secure token storage, conversation view, and goal management dashboards.',
        backend:
          'Node.js, Express, and TypeScript backend on Render enforcing Bearer auth verification, memory curation, and OpenRouter API integration while keeping secret keys protected.',
        database:
          'Supabase PostgreSQL persisting user profiles, conversation threads, chat messages, active/completed goals, and long-term memory records.',
        aiPipeline:
          'OpenRouter API pipeline retrieving relevant user memories and active goal deadlines to construct contextual prompts for intelligent, personalized LLM responses.',
      },
      challenges: [
        {
          challenge:
            'Enabling the AI to answer time-sensitive and goal-oriented questions (e.g., "What do I need to finish tomorrow?") without hallucination.',
          resolution:
            'Structured a real-time retrieval layer on the backend that fetches active goals with impending deadlines and user memories, injecting them into the system prompt before calling OpenRouter.',
        },
        {
          challenge:
            'Securing API keys and preventing exposure of OpenRouter secrets and Supabase service role tokens on client mobile devices.',
          resolution:
            'Enforced strict server-side proxying where all AI inference and privileged database operations occur on Render, exposing only public Supabase keys to the mobile app.',
        },
      ],
      myContributions: [
        'Architected and built the full-stack mobile application from scratch using React Native, Expo, and TypeScript.',
        'Developed the Node.js/Express TypeScript backend, implemented REST endpoints, and deployed to Render.',
        'Configured Supabase Auth, PostgreSQL relational schema, and deep linking (parchai://) for email password recovery.',
        'Integrated OpenRouter LLM API with persistent memory and goal context injection.',
        'Configured and executed production Android builds using Expo EAS.',
      ],
      links: {
        github: 'https://github.com/Ani07Kr',
        live: 'https://expo.dev/accounts/ani07kr/projects/parchai/builds/d5f3e183-8441-4f4e-80b2-43beec072340',
        patent: '',
        paper: '',
        demoVideo: '',
      },
      coverImage: '/images/parchai-icon.jpg',
      screenshots: [
        {
          url: '/images/parchai-icon.jpg',
          caption: 'Parchai Official Mobile App Branding & Icon',
        },
      ],
      explanations: {
        recruiter:
          'Demonstrates end-to-end full-stack mobile development in React Native & TypeScript, cloud backend deployment on Render, Supabase database design, production Android APK builds via Expo EAS, and practical LLM integration with persistent memory and goal reasoning.',
        technical:
          'Built with React Native + Expo TypeScript, Express TypeScript backend on Render, Supabase Auth/Postgres, OpenRouter API with dynamic memory augmentation, Bearer token security, and deep linking.',
        beginner:
          'A personal AI companion on your phone that actually remembers your past chats and current goals—so if you ask what you need to do tomorrow, it checks your real deadlines and helps you stay on track.',
      },
      sandboxType: 'parchai_companion_simulator',
      sandboxConfig: {
        companionName: 'Parchai',
        sampleMemories: [
          'Prefers concise bullet points in technical explanations',
          'Preparing for Full-Stack Developer & AI Engineer interviews',
          'Working on Indian Patent documentation and research submissions',
        ],
        sampleGoals: [
          { title: 'Submit Final MCA Portfolio Review', date: 'Tomorrow, 5:00 PM', status: 'In Progress' },
          { title: 'Test Android APK Build on Device', date: 'Today, 8:00 PM', status: 'Completed' },
          { title: 'Review IEEE Sleep Stage Benchmark Metrics', date: 'Friday, 11:00 AM', status: 'Upcoming' },
        ],
      },
      isFeatured: true,
      order: 3,
    },
    {
      title: 'Semantic Understanding of Ancient Philosophical Texts using LLMs',
      slug: 'semantic-nlp-philosophical-llm',
      tagline:
        'Transformer-Powered NLP Pipeline for Abstractive Summarization and Zero-Shot Philosophical Theme Classification.',
      category: 'AI / ML',
      badge: 'Technical Seminar Project (23MCA42)',
      description:
        'An advanced natural language processing research project employing state-of-the-art Transformer LLM architectures (`facebook/bart-large-cnn` and `facebook/bart-large-mnli`) to perform deep abstractive summarization, sentence extraction, and zero-shot multi-label classification of complex philosophical treatises into classical philosophical doctrines (Realism, Idealism, Existentialism, Rationalism, Empiricism, Absurdism).',
      problem:
        'Ancient and modern philosophical texts feature dense prose, non-linear reasoning, and abstract semantics that standard rule-based NLP techniques fail to parse accurately.',
      solution:
        'Developed a dual-stage transformer pipeline: Stage 1 creates concise abstractive summaries preserving philosophical nuance; Stage 2 performs zero-shot Natural Language Inference (NLI) to map textual passages to philosophical schools with confidence probability scores.',
      keyFeatures: [
        'Abstractive text summarization using fine-tuned BART transformer models',
        'Zero-shot classification into 6 core philosophical disciplines',
        'Semantic coherence scoring and key sentence extractive highlighting',
        'Interactive web UI powered by Gradio and modern JavaScript',
        'Comparative sentiment and philosophical polarity visualization',
      ],
      technologies: [
        'Python',
        'PyTorch',
        'Transformers (Hugging Face)',
        'BART Large CNN & MNLI',
        'Gradio',
        'JavaScript / React',
      ],
      architecture: {
        overview: 'Hugging Face Transformer pipeline exposed via REST API to modern web interface.',
        frontend: 'Interactive React/Gradio text input with live confidence distribution charts.',
        backend: 'Python FastAPI/Node service running BART tokenizers and inference pipelines.',
        database: 'Philosophical corpus taxonomy and cached inference vectors.',
        aiPipeline:
          'facebook/bart-large-cnn (Summarization) + facebook/bart-large-mnli (Zero-Shot NLI Classification).',
      },
      challenges: [
        {
          challenge:
            'Managing inference memory footprints for large transformer models during live text processing.',
          resolution:
            'Implemented text chunking with sliding window attention and half-precision (FP16) inference.',
        },
      ],
      myContributions: [
        'Developed model evaluation harness and benchmarked BART against T5 and RoBERTa models.',
        'Built the web demonstration interface with dynamic theme probability graphs.',
        'Authored technical seminar analysis on semantic attention maps in philosophical discourse.',
      ],
      links: {
        github: 'https://github.com/Ani07Kr',
        live: '',
        patent: '',
        paper: '',
        demoVideo: '',
      },
      coverImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
      screenshots: [],
      explanations: {
        recruiter:
          'Demonstrates deep understanding of state-of-the-art NLP, Transformer architectures (BART, BERT), zero-shot learning, and applied AI research.',
        technical:
          'Utilizes Hugging Face transformers pipeline with facebook/bart-large-mnli for cross-encoder zero-shot classification and facebook/bart-large-cnn for abstractive reduction.',
        beginner:
          'An AI tool that reads long philosophical books and instantly tells you the main ideas and which school of philosophy (like Realism or Existentialism) it belongs to.',
      },
      sandboxType: 'philosophical_nlp_analyzer',
      sandboxConfig: {
        themes: ['Realism', 'Idealism', 'Existentialism', 'Rationalism', 'Empiricism', 'Absurdism'],
      },
      isFeatured: true,
      order: 3,
    },
    {
      title: 'Sleep Stage Classification via Hybrid Machine Learning',
      slug: 'sleep-stage-classification-eeg-ml',
      tagline:
        'Polysomnographic EEG Signal Classification Combining KNN, Decision Trees, and Logistic Regression.',
      category: 'Patents & Research',
      badge: 'Presented at IEEE ICVADV-2025 Conference',
      description:
        'A high-accuracy biomedical machine learning research project presented at the IEEE International Conference on Visual Analytics and Data Visualization (ICVADV-2025). Classifies polysomnography EEG signals into sleep stages (Wake, N1, N2, N3, REM) using feature extraction and a hybrid ensemble that achieves 97% accuracy.',
      problem:
        'Manual sleep scoring of multi-channel overnight EEG data is time-intensive, expensive, and subject to inter-scorer variability.',
      solution:
        'Engineered an automated spectral and temporal feature extraction pipeline paired with a comparative machine learning benchmark, identifying an optimal hybrid ensemble model outperforming standalone classifiers.',
      keyFeatures: [
        'Preprocessed polysomnographic EEG signals with bandpass filtering and artifact removal',
        'Extracted frequency-domain (Delta, Theta, Alpha, Beta) and time-domain statistical features',
        'Benchmarked KNN (97% Accuracy, 0.99 Precision, 0.98 F1), Decision Tree (96%), and Logistic Regression (90%)',
        'Confusion matrix visualization and ROC-AUC curve performance analysis',
        'Published & presented at IEEE ICVADV-2025 (Francis Xavier Engineering College, Tamil Nadu)',
      ],
      technologies: [
        'Python',
        'Scikit-Learn',
        'NumPy',
        'Pandas',
        'Matplotlib / Seaborn',
        'Signal Processing',
        'React Dashboard',
      ],
      architecture: {
        overview:
          'Raw EEG Signal Ingestion -> Bandpass Filtering -> Feature Extraction -> Hybrid Classifier -> Sleep Hypnogram.',
        frontend: 'Interactive React analytics dashboard with sleep stage hypnograms and metric charts.',
        backend: 'Python ML inference engine.',
        database: 'Standard PhysioNet Sleep-EDF benchmark dataset.',
        aiPipeline:
          'Ensemble voting classifier combining K-Nearest Neighbors, Decision Trees, and Logistic Regression.',
      },
      challenges: [
        {
          challenge: 'Class imbalance across brief transitional sleep stages (N1) versus dominant deep sleep (N3/N2).',
          resolution:
            'Applied SMOTE oversampling and stratified cross-validation to maintain high precision and recall across all stages.',
        },
      ],
      myContributions: [
        'Implemented feature engineering pipeline and model training scripts in Scikit-Learn.',
        'Presented research paper findings at IEEE ICVADV-2025 Conference (04–06 March 2025).',
        'Built interactive visual confusion matrix and performance evaluation dashboards.',
      ],
      links: {
        github: 'https://github.com/Ani07Kr',
        live: '',
        patent: '',
        paper: 'IEEE ICVADV-2025 Conference Presentation',
        demoVideo: '',
      },
      coverImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
      screenshots: [],
      explanations: {
        recruiter:
          'Demonstrates rigor in scientific methodology, biomedical data analytics, machine learning model benchmarking, and oral defense at an international IEEE conference.',
        technical:
          'Signal processing with PSD analysis, statistical feature extraction, and ensemble learning achieving 97% accuracy on EEG polysomnography data.',
        beginner:
          'An intelligent program that reads brainwave signals while someone is sleeping to automatically detect whether they are in deep sleep, light sleep, or dreaming.',
      },
      sandboxType: 'sleep_stage_classifier',
      sandboxConfig: {
        models: [
          { name: 'K-Nearest Neighbors (KNN)', accuracy: '97%', precision: '0.99', recall: '0.98', f1: '0.98' },
          { name: 'Decision Tree Classifier', accuracy: '96%', precision: '0.95', recall: '0.96', f1: '0.95' },
          { name: 'Logistic Regression', accuracy: '90%', precision: '0.89', recall: '0.90', f1: '0.89' },
          { name: 'Hybrid Ensemble Model', accuracy: '98%', precision: '0.99', recall: '0.98', f1: '0.99' },
        ],
      },
      isFeatured: true,
      order: 4,
    },
    {
      title: 'DocConnect: Doctor–Patient Healthcare Management Portal',
      slug: 'docconnect-healthcare-management-portal',
      tagline:
        'Full-Stack Healthcare Ecosystem for Telehealth Appointments, Digital Prescriptions, and Medical Record Vaults.',
      category: 'Full Stack',
      badge: 'Academic Mini-Project (22MCAL29)',
      description:
        'A production-style healthcare management web platform connecting patients and medical practitioners. Features automated appointment booking with doctor slot scheduling, role-based access control (Admin, Doctor, Patient), electronic health record (EHR) vaults, and digital prescription issuance.',
      problem:
        'Fragmented clinic appointment scheduling and paper prescriptions cause long waiting times, lost medical history, and communication breakdowns.',
      solution:
        'Engineered a secure full-stack portal with dynamic schedule availability, automated notifications, prescription archives, and comprehensive medical record management.',
      keyFeatures: [
        'Role-Based Authentication (Patients, Doctors, Hospital Admin)',
        'Real-time doctor calendar slot booking with clash prevention',
        'Digital prescription generation with downloadable PDF receipts',
        'Patient medical history timeline with diagnosis logs',
        'Doctor specialty filtering and hospital department directory',
      ],
      technologies: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB / MySQL',
        'JWT Authentication',
        'Tailwind CSS',
      ],
      architecture: {
        overview:
          'Client-Server RESTful architecture with secure JWT authorization and relational appointment scheduling.',
        frontend: 'React single-page application with Tailwind CSS and responsive UI components.',
        backend: 'Express.js REST API enforcing role-based permission middlewares.',
        database: 'Relational/Document DBMS storing patient records, doctor profiles, and appointments.',
        aiPipeline: 'None',
      },
      challenges: [
        {
          challenge: 'Preventing double-booking of doctor slots during simultaneous patient checkout requests.',
          resolution:
            'Implemented atomic database transaction locking and status flags for pending reservation windows.',
        },
      ],
      myContributions: [
        'Designed database schema for appointments, doctors, patients, and prescriptions.',
        'Built full frontend user workflows for patient booking and doctor prescription issuance.',
        'Implemented JWT token authentication and role authorization middleware.',
      ],
      links: {
        github: 'https://github.com/Ani07Kr',
        live: '',
        patent: '',
        paper: '',
        demoVideo: '',
      },
      coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      screenshots: [],
      explanations: {
        recruiter:
          'Highlights solid full-stack CRUD capabilities, database transaction management, role-based access control, and user-centric frontend workflows.',
        technical:
          'Built with React, Node.js, and DBMS architecture with role authorization middleware, atomic appointment locking, and structured REST API endpoints.',
        beginner:
          'An online clinic platform where you can search for doctors, book appointments, and see your digital prescriptions from any device.',
      },
      sandboxType: 'docconnect_booking_simulator',
      sandboxConfig: {
        specialties: ['Cardiology', 'Neurology', 'General Medicine', 'Dermatology', 'Psychiatry'],
      },
      isFeatured: true,
      order: 5,
    },
    {
      title: 'HRMS Announcement & Workforce Lifecycle Management System',
      slug: 'hrms-announcement-workforce-system',
      tagline:
        'Enterprise Internal Communication Portal with Scheduled Announcement Publishing, Role Targeting, and Lifecycle Tracking.',
      category: 'Enterprise / Tool',
      badge: 'Tripillar Solutions Internship Project (23MCA38)',
      description:
        'An enterprise Human Resource Management System module engineered during internship at Tripillar Solutions LLP. Handles dynamic organization-wide announcements, priority tagging (Critical, Important, General), scheduled publishing, automated expiration triggers, and department-specific filtering.',
      problem:
        'Enterprise teams struggle with cluttered email broadcasts and missed organizational updates due to lack of a centralized, priority-aware notification board.',
      solution:
        'Developed an interactive announcement lifecycle management module enabling HR admins to publish, schedule, update, archive, and target announcements by department with zero communication friction.',
      keyFeatures: [
        'Dynamic announcement creation with rich text and priority levels',
        'Automated expiration cron scheduling & status toggling',
        'Department-level filtering (Engineering, HR, Sales, Management)',
        'Pinned announcement carousel for urgent company-wide alerts',
        'Full CRUD lifecycle with audit trail and read status counters',
      ],
      technologies: ['React.js', 'Java Full Stack / Node.js', 'Express.js', 'MySQL / MongoDB', 'Bootstrap / Tailwind CSS'],
      architecture: {
        overview: 'Role-guarded corporate portal communicating with backend announcement services.',
        frontend: 'Modern responsive UI with priority badges, status filters, and live search.',
        backend: 'REST endpoints handling CRUD operations and automated expiration checks.',
        database: 'Workforce communication schema storing announcement logs and recipient reads.',
        aiPipeline: 'None',
      },
      challenges: [
        {
          challenge: 'Automatically handling announcement expiration without manual HR intervention.',
          resolution:
            'Created server-side time-check triggers and dynamic query filters separating active vs. archived feeds.',
        },
      ],
      myContributions: [
        'Designed and implemented the complete UI for the Announcement Management page.',
        'Built search, category filtering, and status badge interactions.',
        'Collaborated directly with project manager Mr. Saurav Sarkar at Tripillar Solutions LLP.',
      ],
      links: {
        github: 'https://github.com/Ani07Kr',
        live: '',
        patent: '',
        paper: '',
        demoVideo: '',
      },
      coverImage: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      screenshots: [],
      explanations: {
        recruiter:
          'Exhibits corporate internship experience, enterprise UI component craftsmanship, clean lifecycle state handling, and effective teamwork.',
        technical:
          'Built with responsive frontend architecture, optimized database queries for active vs. expired items, and clean RESTful API integration.',
        beginner:
          'A company bulletin board website where managers can post important updates, set expiration dates, and ensure everyone sees company news.',
      },
      sandboxType: 'hrms_announcement_simulator',
      sandboxConfig: {
        departments: ['All Employees', 'Engineering', 'Human Resources', 'Sales & Marketing', 'Product & Design'],
      },
      isFeatured: true,
      order: 6,
    },
    {
      title: 'Car With Driver India: Commercial Tour Booking Platform',
      slug: 'car-with-driver-india-travel-booking',
      tagline:
        'Live Commercial Travel Platform for Chauffeur-Driven Car Rentals, Itinerary Packages, and Tourist Reservations.',
      category: 'Full Stack',
      badge: 'Live Commercial Web App',
      description:
        'A production commercial travel reservation platform providing domestic and international tourists with customized tour packages, transparent fleet rental pricing, and direct chauffeur reservations across top destinations in India.',
      problem:
        'Tourists visiting India often experience unpredictable transport pricing, lack of reliable driver verification, and complicated itinerary booking workflows.',
      solution:
        'Created a modern, high-converting booking web application with structured tour packages, transparent fare estimators, vehicle fleet catalogs, and instant WhatsApp / inquiry lead routing.',
      keyFeatures: [
        'Dynamic tour package explorer (Golden Triangle, Rajasthan Heritage, South India)',
        'Vehicle fleet catalog (Sedans, SUVs, Luxury Tempo Travellers)',
        'Custom route price estimator and enquiry submission engine',
        'Mobile-optimized WhatsApp booking integration for fast conversion',
        'SEO-optimized landing pages for international tourist acquisition',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'CSS3 / Tailwind', 'SEO Best Practices'],
      architecture: {
        overview: 'SEO-optimized single-page web app with backend reservation lead capture.',
        frontend: 'High-conversion travel UI with interactive cards and quick contact drawers.',
        backend: 'Express.js API sending instant lead alerts to operations team.',
        database: 'Tour itinerary and customer inquiry database.',
        aiPipeline: 'None',
      },
      challenges: [
        {
          challenge: 'Achieving sub-second load times for international visitors on mobile devices.',
          resolution:
            'Optimized image assets, lazy-loaded offscreen media, and structured responsive layout without bloated third-party libraries.',
        },
      ],
      myContributions: [
        'Engineered full frontend interface and responsive layouts.',
        'Implemented tour package catalogs and booking inquiry flows.',
        'Optimized site structure for search engines and international tourists.',
      ],
      links: {
        github: 'https://github.com/Ani07Kr',
        live: 'https://carwithdriverindia.com',
        patent: '',
        paper: '',
        demoVideo: '',
      },
      coverImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
      screenshots: [],
      explanations: {
        recruiter:
          'Proves capability in delivering live, commercial-grade customer-facing web applications that drive real business results and lead conversions.',
        technical:
          'Responsive React architecture, optimized Core Web Vitals, high-converting UX design, and robust lead capture handling.',
        beginner:
          'A travel website where tourists can pick tour routes, choose a car with a verified driver, and book their holiday easily.',
      },
      sandboxType: 'none',
      sandboxConfig: {},
      isFeatured: true,
      order: 7,
    },
  ],

  skills: [
    // Frontend & Mobile
    {
      name: 'React.js',
      category: 'Frontend & Mobile',
      proficiency: 92,
      experienceLevel: 'Advanced',
      icon: 'Atom',
      highlight: 'Hooks, Context, Router, State Management & Custom Micro-interactions',
      isTopSkill: true,
      order: 1,
    },
    {
      name: 'React Native / Expo',
      category: 'Frontend & Mobile',
      proficiency: 86,
      experienceLevel: 'Proficient',
      icon: 'Smartphone',
      highlight: 'Cross-platform mobile apps, Camera & Biometric device APIs',
      isTopSkill: true,
      order: 2,
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'Frontend & Mobile',
      proficiency: 94,
      experienceLevel: 'Advanced',
      icon: 'FileCode2',
      highlight: 'Async/Await, Closures, Event Loop, DOM API, Functional Programming',
      isTopSkill: true,
      order: 3,
    },
    {
      name: 'TypeScript',
      category: 'Frontend & Mobile',
      proficiency: 84,
      experienceLevel: 'Proficient',
      icon: 'FileCode',
      highlight: 'Type Safety, Generics, Interfaces, Component Props typing',
      isTopSkill: true,
      order: 4,
    },
    {
      name: 'HTML5 & CSS3',
      category: 'Frontend & Mobile',
      proficiency: 95,
      experienceLevel: 'Advanced',
      icon: 'Layout',
      highlight: 'Semantic HTML, Flexbox, CSS Grid, Media Queries, Keyframe Animations',
      isTopSkill: false,
      order: 5,
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend & Mobile',
      proficiency: 90,
      experienceLevel: 'Advanced',
      icon: 'Palette',
      highlight: 'Modern Utility-first Styling, Responsive Design, Dark Mode, Custom Themes',
      isTopSkill: true,
      order: 6,
    },
    {
      name: 'Bootstrap',
      category: 'Frontend & Mobile',
      proficiency: 88,
      experienceLevel: 'Proficient',
      icon: 'Boxes',
      highlight: 'Grid system, UI components, Rapid responsive prototyping',
      isTopSkill: false,
      order: 7,
    },

    // Backend & APIs
    {
      name: 'Node.js',
      category: 'Backend & APIs',
      proficiency: 90,
      experienceLevel: 'Advanced',
      icon: 'Server',
      highlight: 'Event-driven architecture, File Streams, Modular backend services',
      isTopSkill: true,
      order: 8,
    },
    {
      name: 'Express.js',
      category: 'Backend & APIs',
      proficiency: 90,
      experienceLevel: 'Advanced',
      icon: 'Cpu',
      highlight: 'RESTful API design, Middleware chains, Error handling, Rate limiting',
      isTopSkill: true,
      order: 9,
    },
    {
      name: 'RESTful API Architecture',
      category: 'Backend & APIs',
      proficiency: 92,
      experienceLevel: 'Advanced',
      icon: 'Network',
      highlight: 'Clean route structure, HTTP verbs, JWT authentication, JSON payloads',
      isTopSkill: true,
      order: 10,
    },
    {
      name: 'Authentication & Security',
      category: 'Backend & APIs',
      proficiency: 85,
      experienceLevel: 'Proficient',
      icon: 'ShieldCheck',
      highlight: 'JWT Tokens, Bcrypt hashing, Helmet headers, CORS policies',
      isTopSkill: false,
      order: 11,
    },

    // Databases & Cloud
    {
      name: 'MongoDB & Mongoose',
      category: 'Databases & Cloud',
      proficiency: 90,
      experienceLevel: 'Advanced',
      icon: 'Database',
      highlight: 'Document schemas, Aggregation pipelines, Indexing, CRUD optimization',
      isTopSkill: true,
      order: 12,
    },
    {
      name: 'MySQL & Relational DBMS',
      category: 'Databases & Cloud',
      proficiency: 86,
      experienceLevel: 'Proficient',
      icon: 'Table',
      highlight: 'Complex JOINs, Relational schema normalization, ACID transactions',
      isTopSkill: false,
      order: 13,
    },
    {
      name: 'Supabase / PostgreSQL',
      category: 'Databases & Cloud',
      proficiency: 84,
      experienceLevel: 'Proficient',
      icon: 'Flame',
      highlight: 'Row Level Security, Real-time subscriptions, SQL queries',
      isTopSkill: true,
      order: 14,
    },
    {
      name: 'Firebase',
      category: 'Databases & Cloud',
      proficiency: 80,
      experienceLevel: 'Proficient',
      icon: 'Cloud',
      highlight: 'Firestore, Cloud Storage, Authentication services',
      isTopSkill: false,
      order: 15,
    },

    // AI, ML & NLP
    {
      name: 'Python (AI / ML)',
      category: 'AI, ML & NLP',
      proficiency: 88,
      experienceLevel: 'Advanced',
      icon: 'Binary',
      highlight: 'NumPy, Pandas, Scikit-Learn, PyTorch, Signal Processing',
      isTopSkill: true,
      order: 16,
    },
    {
      name: 'Transformer LLMs & Hugging Face',
      category: 'AI, ML & NLP',
      proficiency: 85,
      experienceLevel: 'Proficient',
      icon: 'BrainCircuit',
      highlight: 'BART, BERT, Zero-Shot Classification, Abstractive Summarization',
      isTopSkill: true,
      order: 17,
    },
    {
      name: 'Computer Vision & CNN',
      category: 'AI, ML & NLP',
      proficiency: 82,
      experienceLevel: 'Proficient',
      icon: 'Eye',
      highlight: 'OpenCV, Facial Emotion Recognition, Affective Tutoring Models',
      isTopSkill: false,
      order: 18,
    },
    {
      name: 'Machine Learning Classification',
      category: 'AI, ML & NLP',
      proficiency: 89,
      experienceLevel: 'Advanced',
      icon: 'BarChart3',
      highlight: 'KNN, Decision Trees, Logistic Regression, Ensemble Classifiers',
      isTopSkill: true,
      order: 19,
    },

    // Languages
    {
      name: 'Java',
      category: 'Languages',
      proficiency: 85,
      experienceLevel: 'Proficient',
      icon: 'Coffee',
      highlight: 'OOP principles, Collections Framework, Multithreading, Enterprise patterns',
      isTopSkill: false,
      order: 20,
    },
    {
      name: 'C & C++',
      category: 'Languages',
      proficiency: 80,
      experienceLevel: 'Proficient',
      icon: 'Terminal',
      highlight: 'Data structures, Algorithms, Memory management, Pointers',
      isTopSkill: false,
      order: 21,
    },
    {
      name: 'SQL',
      category: 'Languages',
      proficiency: 88,
      experienceLevel: 'Advanced',
      icon: 'DatabaseZap',
      highlight: 'Complex queries, Subqueries, Stored Procedures, Views',
      isTopSkill: false,
      order: 22,
    },

    // Developer Tools
    {
      name: 'Git & GitHub',
      category: 'Developer Tools',
      proficiency: 92,
      experienceLevel: 'Advanced',
      icon: 'GitBranch',
      highlight: 'Branch management, Pull Requests, Merge Conflict resolution, CI/CD basics',
      isTopSkill: true,
      order: 23,
    },
    {
      name: 'VS Code & JetBrains IDEs',
      category: 'Developer Tools',
      proficiency: 94,
      experienceLevel: 'Advanced',
      icon: 'Wrench',
      highlight: 'IntelliJ IDEA, Eclipse, VS Code debugging, Extensions workflow',
      isTopSkill: false,
      order: 24,
    },
    {
      name: 'Postman & API Testing',
      category: 'Developer Tools',
      proficiency: 90,
      experienceLevel: 'Advanced',
      icon: 'Send',
      highlight: 'Endpoint validation, Environment variables, Automated collections',
      isTopSkill: false,
      order: 25,
    },
  ],

  experiences: [
    {
      role: 'Software Developer - Intern',
      company: 'TechCiti Software Consulting Private Limited',
      companyUrl: 'https://techciti.in',
      location: 'Bangalore, India',
      employmentType: 'Internship',
      startDate: '22 April 2025',
      endDate: '22 July 2025',
      isCurrent: false,
      description:
        'Engineered an AI-driven Holistic Wellness Recommendation System utilizing multi-modal diagnostics and Bhagavad Gita philosophical knowledge bases. Worked closely under Senior Software Developer Ms. Keerthana S and faculty mentor Arpana Prasada (Professor and Mentor).',
      keyResponsibilities: [
        'Developed full-stack web and mobile application modules using React, React Native, and Node.js.',
        'Integrated facial emotion analysis and biometric stress algorithms with backend recommendation engines.',
        'Collaborated on database schema design, Supabase authentication, and RESTful API endpoints.',
        'Documented software architecture and user validation workflows.',
      ],
      achievements: [
        'Co-authored and published an Indian Patent (Publication No. 26/2025) based on the system architecture developed during this internship.',
        'Received outstanding performance feedback from company leadership.',
      ],
      technologies: ['React.js', 'React Native', 'Node.js', 'Express.js', 'Supabase', 'OpenCV', 'AI/ML'],
      certificateUrl: '',
      order: 1,
    },
    {
      role: 'Full Stack Java / UI Developer Intern',
      company: 'Tripillar Solutions LLP',
      companyUrl: 'https://tripillarsolution.com',
      location: 'Bangalore, India',
      employmentType: 'Internship',
      startDate: '21 October 2024',
      endDate: '03 December 2024',
      isCurrent: false,
      description:
        'Developed the UI design and interactive lifecycle management features for the Human Resource Management System (HRMS) Announcement Page. Supervised by Project Manager Mr. Saurav Sarkar and faculty mentor Arpana Prasada (Professor and Mentor).',
      keyResponsibilities: [
        'Engineered responsive announcement management interfaces for creating, viewing, scheduling, and expiring organization-wide notices.',
        'Implemented search, department-level filtering, and priority indicators (Critical, Important, General).',
        'Connected frontend UI components with backend Java/REST services for seamless CRUD operations.',
      ],
      achievements: [
        'Successfully completed Academic Internship 23MCA38 with high grade and verified company certificate.',
        'Delivered clean, modular components that improved internal employee communication efficiency.',
      ],
      technologies: ['Java Full Stack', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'MySQL'],
      certificateUrl: '',
      order: 2,
    },
    {
      role: 'Web Development Intern',
      company: 'Dotplus Technologies',
      companyUrl: '',
      location: 'Patna, India',
      employmentType: 'Internship',
      startDate: 'May 2022',
      endDate: 'August 2022',
      isCurrent: false,
      description:
        'Contributed to client web development projects focusing on responsive frontend designs, cross-browser compatibility, and backend database integrations.',
      keyResponsibilities: [
        'Built interactive and mobile-first user interfaces using HTML, CSS, JavaScript, and Bootstrap.',
        'Assisted in .NET backend integration and database querying.',
        'Resolved UI/UX bugs and enhanced page loading performance.',
      ],
      achievements: [
        'Completed multiple client web templates and strengthened core frontend engineering foundation.',
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', '.NET', 'SQL'],
      certificateUrl: '',
      order: 3,
    },
  ],

  educations: [
    {
      degree: 'Master of Computer Applications (MCA)',
      fieldOfStudy: 'Computer Applications & Software Engineering',
      institution: 'New Horizon College of Engineering',
      institutionDetails:
        'Autonomous College, Affiliated to Visvesvaraya Technological University (VTU), Accredited by NAAC with "A" Grade, NBA Accredited',
      location: 'Bangalore, Karnataka, India',
      startYear: '2023',
      endYear: '2025',
      scoreType: 'CGPA',
      score: '8.45 / 10',
      highlights: [
        'USN: 1NH23MC016',
        'Published 2 Indian Patents in AI & Mental Health during tenure.',
        'Presented research paper on EEG Sleep Stage Classification at IEEE ICVADV-2025 Conference.',
        'Mastered advanced full-stack web and mobile development, Deep Learning, Cloud Computing, and Software Architecture.',
      ],
      coursework: [
        'Full Stack Web & Mobile Development',
        'Data Structures & Algorithms',
        'Deep Learning & Machine Learning',
        'Database Management Systems (RDBMS & NoSQL)',
        'Object-Oriented Programming with Java',
        'Cloud Computing & Distributed Systems',
        'Software Engineering & Agile Methodologies',
      ],
      order: 1,
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      fieldOfStudy: 'Computer Applications',
      institution: 'L. N. Mishra Institute of Economic Development and Social Change (LNMI)',
      institutionDetails: 'Premier State Institution for Computer Science & Management',
      location: 'Patna, Bihar, India',
      startYear: '2020',
      endYear: '2023',
      scoreType: 'CGPA',
      score: '7.78 / 10',
      highlights: [
        'Built solid foundation in C, C++, Java, Data Structures, Web Development, and Relational Databases.',
        'Developed multiple academic software projects and web applications.',
      ],
      coursework: [
        'C & C++ Programming',
        'Core Java & Object-Oriented Design',
        'Computer Networks & Security',
        'Operating Systems & System Architecture',
        'Relational Database Management Systems (SQL)',
      ],
      order: 2,
    },
    {
      degree: 'Higher Secondary (12th / Intermediate)',
      fieldOfStudy: 'Science Stream (PCM)',
      institution: 'Ram Krishna Dwarika College',
      institutionDetails: 'BSEB Board',
      location: 'Patna, Bihar, India',
      startYear: '2017',
      endYear: '2019',
      scoreType: 'Percentage',
      score: '6.67 / 10',
      highlights: ['Specialized in Physics, Chemistry, and Mathematics.'],
      coursework: ['Physics', 'Chemistry', 'Mathematics', 'English'],
      order: 3,
    },
    {
      degree: 'Secondary School Certificate (10th / Matriculation)',
      fieldOfStudy: 'General Academics',
      institution: 'J.M.V Residential School',
      institutionDetails: 'CBSE Board',
      location: 'Bihar, India',
      startYear: '2016',
      endYear: '2017',
      scoreType: 'CGPA',
      score: '7.4 / 10',
      highlights: ['Strong performance in Mathematics and Science.'],
      coursework: ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'],
      order: 4,
    },
  ],

  achievements: [
    {
      title: 'Indian Patent: Method for AI-Based Personalized Guidance from the Bhagavad Gita for Holistic Well-Being',
      category: 'Patent',
      organization: 'Intellectual Property India (Controller General of Patents, Designs and Trade Marks)',
      identifierOrId: 'Application No. 202541054232 · Publication No. 26/2025',
      date: 'Published on 27 June 2025',
      badgeText: 'Official Indian Patent',
      description:
        'Patented invention proposing an innovative AI framework for multi-modal emotional and physiological assessment mapped to structured philosophical guidance for mental well-being.',
      coAuthorsOrInventors: ['Aniket Kumar', 'Arpana Prasada (Professor & Mentor)', 'Arpita S. Kulkarni (Co-inventor)', 'Abhinav Reddy'],
      impactHighlights: [
        'Tri-modal assessment combining computer vision facial emotion recognition, ECG waveform analysis, and validated psychological scoring.',
        'Dynamic recommendation algorithm delivering tailored Sanskrit shlokas, English insights, and therapeutic affirmations.',
      ],
      documentOrVerifyUrl: '',
      icon: 'ScrollText',
      order: 1,
    },
    {
      title: 'Indian Patent: MINDPLAY: Nurturing Mental Health',
      category: 'Patent',
      organization: 'Intellectual Property India (Controller General of Patents, Designs and Trade Marks)',
      identifierOrId: 'Application No. 202441035043 · Publication No. 28/2024',
      date: 'Published on 07 December 2024',
      badgeText: 'Official Indian Patent',
      description:
        'Patented affective computing and mental health innovation designed to evaluate cognitive and affective states for personalized wellness and adaptive learning.',
      coAuthorsOrInventors: [
        'Aniket Kumar',
        'J. Sathya',
        'V. Asha',
        'A. Kalaivani',
        'N. S. Sukanya',
        'M. T. Vasumathi',
      ],
      impactHighlights: [
        'Real-time deep learning facial emotion detection to monitor stress and emotional fatigue.',
        'Adaptive intervention engine promoting student mental wellness and customized learning paces.',
      ],
      documentOrVerifyUrl: '',
      icon: 'ShieldCheck',
      order: 2,
    },
    {
      title: 'IEEE Conference Presentation: Sleep Stage Classification Combining KNN, Decision Tree, and Regression',
      category: 'IEEE Conference',
      organization:
        'International Conference on Visual Analytics and Data Visualization (ICVADV-2025) in association with IEEE',
      identifierOrId: 'ICVADV-2025 Conference Presentation',
      date: 'Presented on 04–06 March 2025',
      badgeText: 'IEEE Association',
      description:
        'Presented peer-reviewed research paper on automated polysomnography EEG signal classification using machine learning at Francis Xavier Engineering College, Tamil Nadu.',
      coAuthorsOrInventors: ['Aniket Kumar', 'Faculty Mentors at NHCE'],
      impactHighlights: [
        'Hybrid ensemble model achieved 97% classification accuracy, 0.99 precision, and 0.98 recall.',
        'Validated on PhysioNet polysomnographic datasets with comprehensive confusion matrix analysis.',
      ],
      documentOrVerifyUrl: '',
      icon: 'Presentation',
      order: 3,
    },
  ],

  blogPosts: [
    {
      title: 'Building a Multi-Modal AI Wellness Recommender: From Video Frames to Vedic Wisdom',
      slug: 'multi-modal-ai-wellness-bhagavad-gita',
      summary:
        'An architectural deep dive into combining computer vision emotion recognition, ECG biometric stress analysis, and knowledge graph mapping to deliver personalized psychological insights.',
      content: `## Introduction
In an age where digital distractions and workplace pressures are at an all-time high, individuals seek holistic well-being solutions that combine empirical biometric validation with timeless philosophical wisdom. In this article, I share the architecture and engineering insights behind our published Indian Patent (Pub No. 26/2025).

## Tri-Modal Diagnostic Pipeline
Rather than relying on subjective questionnaires alone, our system captures three distinct data streams:
1. **Facial Emotion Recognition (FER)**: Real-time video frame parsing using convolutional networks to identify affective states (Joy, Sadness, Anger, Fear, Neutrality).
2. **ECG Biometric Signal Processing**: Analysis of cardiac time-domain and frequency-domain stress markers from uploaded signal data.
3. **Validated Wellness Surveys**: Standardized Likert scale evaluations capturing cognitive feedback.

\`\`\`javascript
// Simplified weighted fusion algorithm
function calculateHolisticWellnessScore(facialScore, ecgScore, surveyScore) {
  const WEIGHTS = { facial: 0.35, ecg: 0.35, survey: 0.30 };
  const compositeStress = (facialScore * WEIGHTS.facial) + 
                          (ecgScore * WEIGHTS.ecg) + 
                          (surveyScore * WEIGHTS.survey);
  return compositeStress;
}
\`\`\`

## Knowledge Retrieval Matrix
Once the affective vector is calculated, the system queries a structured Bhagavad Gita knowledge matrix, extracting verses with exact Sanskrit shlokas, English transliterations, psychological rationales, and restorative guided audio.

## Conclusion
Combining full-stack technologies (React Native, Node.js, Supabase) with applied AI opens tremendous possibilities for accessible digital health and emotional resilience.`,
      coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
      category: 'AI & Full Stack',
      tags: ['AI/ML', 'React Native', 'Node.js', 'Patents', 'Mental Health'],
      readTimeMinutes: 6,
      author: {
        name: 'Aniket Kumar',
        role: 'Full-Stack & AI Developer',
        avatar: '',
      },
      publishedAt: new Date('2025-07-10'),
      isPublished: true,
      likesCount: 34,
      viewsCount: 310,
    },
    {
      title: 'Classifying Sleep Stages with EEG: Why Ensemble Models Outperform Single Classifiers',
      slug: 'sleep-stage-classification-eeg-ensemble-ml',
      summary:
        'A breakdown of our IEEE ICVADV-2025 research on polysomnographic EEG feature extraction and how a hybrid KNN-Decision Tree model achieved 97% accuracy.',
      content: `## The Challenge in Polysomnography
Manual sleep staging requires trained clinicians to spend hours inspecting 30-second epochs of multi-channel electroencephalogram (EEG) recordings. 

## Feature Engineering from Brainwaves
We extracted both temporal statistical properties and spectral frequency band energies:
- **Delta Waves (0.5 - 4 Hz)**: Deep, restorative slow-wave sleep (N3).
- **Theta Waves (4 - 8 Hz)**: Drowsiness and light sleep (N1).
- **Alpha Waves (8 - 12 Hz)**: Relaxed wakefulness with eyes closed.
- **Beta Waves (12 - 30 Hz)**: Active cognition and REM state correlations.

\`\`\`python
# Feature extraction snippet using Scikit-Learn and NumPy
def extract_spectral_powers(eeg_epoch, sampling_rate=100):
    freqs, psd = signal.welch(eeg_epoch, fs=sampling_rate, nperseg=256)
    delta_power = np.trapz(psd[(freqs >= 0.5) & (freqs < 4)])
    theta_power = np.trapz(psd[(freqs >= 4) & (freqs < 8)])
    alpha_power = np.trapz(psd[(freqs >= 8) & (freqs < 12)])
    beta_power  = np.trapz(psd[(freqs >= 12) & (freqs < 30)])
    return [delta_power, theta_power, alpha_power, beta_power]
\`\`\`

## Results & Benchmark
- **KNN**: 97% Accuracy (Precision: 0.99, Recall: 0.98, F1: 0.98)
- **Decision Tree**: 96% Accuracy
- **Logistic Regression**: 90% Accuracy
- **Hybrid Ensemble**: 98% Peak Accuracy across test epochs

Presented at the **IEEE International Conference on Visual Analytics and Data Visualization (ICVADV-2025)**.`,
      coverImage: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80',
      category: 'Machine Learning',
      tags: ['EEG', 'Machine Learning', 'IEEE', 'Python', 'Scikit-Learn'],
      readTimeMinutes: 5,
      author: {
        name: 'Aniket Kumar',
        role: 'AI Researcher',
        avatar: '',
      },
      publishedAt: new Date('2025-03-20'),
      isPublished: true,
      likesCount: 29,
      viewsCount: 245,
    },
    {
      title: 'Mastering Full-Stack Web Development in 2026: Architecture Best Practices for High Performance',
      slug: 'modern-full-stack-web-architecture-best-practices',
      summary:
        'Key architectural patterns for building ultra-responsive React frontends and secure Express backends with JWT authentication and real-time state sync.',
      content: `## Full-Stack Web Development Essentials
The combination of React, Express, Node.js, and modern database architectures provides unprecedented agility, allowing developers to share a unified JavaScript/TypeScript mental model across client and server.

## Key Architectural Principles
1. **Clean Separation of Concerns**: Controllers, Services, Middlewares, and Models.
2. **Defensive API Security**: Helmet, Rate Limiting, Strict CORS, and Bcrypt Password Hashing.
3. **Resilient Database Layer**: Connecting to MongoDB Atlas in cloud production with graceful local fallbacks for development.
4. **Fluid UI Motion**: Using Framer Motion and GPU-accelerated CSS properties (\`translate3d\`, \`opacity\`) to guarantee 60 FPS interactions.

Building production-ready software requires both clean code and high-velocity execution.`,
      coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
      category: 'Web Development',
      tags: ['Web Development', 'React', 'Node.js', 'Express', 'MongoDB'],
      readTimeMinutes: 4,
      author: {
        name: 'Aniket Kumar',
        role: 'Full-Stack Developer',
        avatar: '',
      },
      publishedAt: new Date('2025-08-01'),
      isPublished: true,
      likesCount: 42,
      viewsCount: 410,
    },
  ],
};

module.exports = seedData;
