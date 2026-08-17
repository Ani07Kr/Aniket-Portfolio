const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: [
        'Frontend & Mobile',
        'Backend & APIs',
        'Databases & Cloud',
        'AI, ML & NLP',
        'Languages',
        'Developer Tools',
        'Core Fundamentals',
      ],
      required: true,
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      default: 85,
    },
    experienceLevel: {
      type: String,
      enum: ['Advanced', 'Proficient', 'Familiar'],
      default: 'Proficient',
    },
    icon: {
      type: String,
      default: 'Code',
    },
    highlight: {
      type: String,
      default: '',
    },
    isTopSkill: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', skillSchema);
