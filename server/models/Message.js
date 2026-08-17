const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      lowercase: true,
      trim: true,
    },
    subject: {
      type: String,
      default: 'General Inquiry / Opportunity',
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Please provide a message'],
    },
    senderType: {
      type: String,
      enum: ['Recruiter', 'Engineering Manager', 'Collaborator', 'Student / Peer', 'Other'],
      default: 'Recruiter',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    isArchived: {
      type: Boolean,
      default: false,
    },
    replyStatus: {
      type: String,
      enum: ['Pending', 'Replied', 'Ignored'],
      default: 'Pending',
    },
    ipAddress: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
