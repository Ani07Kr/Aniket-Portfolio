const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    companyUrl: {
      type: String,
      default: '',
    },
    location: {
      type: String,
      default: 'Bangalore, India',
    },
    employmentType: {
      type: String,
      enum: ['Internship', 'Full-time', 'Contract', 'Freelance'],
      default: 'Internship',
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      default: 'Present',
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
    keyResponsibilities: [{ type: String }],
    achievements: [{ type: String }],
    technologies: [{ type: String }],
    certificateUrl: {
      type: String,
      default: '',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', experienceSchema);
