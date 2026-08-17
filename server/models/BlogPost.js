const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema(
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
    summary: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      default: 'AI & Engineering',
    },
    tags: [{ type: String }],
    readTimeMinutes: {
      type: Number,
      default: 5,
    },
    author: {
      name: { type: String, default: 'Aniket Kumar' },
      role: { type: String, default: 'Full-Stack & AI Engineer' },
      avatar: { type: String, default: '' },
    },
    publishedAt: {
      type: Date,
      default: Date.now,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    likesCount: {
      type: Number,
      default: 18,
    },
    viewsCount: {
      type: Number,
      default: 140,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('BlogPost', blogPostSchema);
