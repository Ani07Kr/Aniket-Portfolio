const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
    },
    fieldOfStudy: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    institutionDetails: {
      type: String, // e.g. "Autonomous, Affiliated to VTU, NAAC 'A' Grade, NBA Accredited"
      default: '',
    },
    location: {
      type: String,
      default: '',
    },
    startYear: {
      type: String,
      required: true,
    },
    endYear: {
      type: String,
      required: true,
    },
    scoreType: {
      type: String,
      enum: ['CGPA', 'Percentage', 'Grade'],
      default: 'CGPA',
    },
    score: {
      type: String,
      required: true,
    },
    highlights: [{ type: String }],
    coursework: [{ type: String }],
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Education', educationSchema);
