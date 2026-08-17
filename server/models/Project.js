const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Full Stack', 'AI / ML', 'Mobile App', 'Research & Patent', 'Patents & Research', 'Enterprise / Tool'],
      default: 'Full Stack',
    },
    badge: {
      type: String, // e.g. "MCA Major Project & Patent", "IEEE Published", "Industry Internship"
      default: 'Featured Project',
    },
    description: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    keyFeatures: [{ type: String }],
    technologies: [{ type: String }],
    architecture: {
      overview: { type: String },
      frontend: { type: String },
      backend: { type: String },
      database: { type: String },
      aiPipeline: { type: String },
    },
    challenges: [{ challenge: String, resolution: String }],
    myContributions: [{ type: String }],
    links: {
      github: { type: String, default: '' },
      live: { type: String, default: '' },
      patent: { type: String, default: '' },
      paper: { type: String, default: '' },
      demoVideo: { type: String, default: '' },
    },
    coverImage: { type: String, default: '' },
    screenshots: [{ url: String, caption: String }],
    explanations: {
      recruiter: { type: String },
      technical: { type: String },
      beginner: { type: String },
    },
    sandboxType: {
      type: String,
      enum: [
        'gita_wellness_simulator',
        'affective_emotion_simulator',
        'philosophical_nlp_analyzer',
        'sleep_stage_classifier',
        'docconnect_booking_simulator',
        'hrms_announcement_simulator',
        'parchai_companion_simulator',
        'none',
      ],
      default: 'none',
    },
    sandboxConfig: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    isFeatured: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
