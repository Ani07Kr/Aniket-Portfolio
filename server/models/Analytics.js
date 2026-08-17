const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema(
  {
    eventType: {
      type: String,
      enum: [
        'page_view',
        'resume_download',
        'project_view',
        'sandbox_run',
        'ai_chat_message',
        'jd_match_run',
        'recruiter_mode_open',
        'contact_submit',
      ],
      required: true,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    userAgent: {
      type: String,
      default: '',
    },
    ipHash: {
      type: String,
      default: '',
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Analytics', analyticsSchema);
