const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['Patent', 'IEEE Conference', 'Academic Honor', 'Certification', 'Leadership'],
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    identifierOrId: {
      type: String, // Application No, Publication No, Paper ID
      default: '',
    },
    date: {
      type: String,
      required: true,
    },
    badgeText: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
    },
    coAuthorsOrInventors: [{ type: String }],
    impactHighlights: [{ type: String }],
    documentOrVerifyUrl: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: 'Award',
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Achievement', achievementSchema);
