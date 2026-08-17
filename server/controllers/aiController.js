const { generateAIResponse } = require('../services/aiService');
const { matchJobDescription } = require('../services/jdMatcherService');
const Analytics = require('../models/Analytics');

// @desc    Chat with Aniket AI Portfolio Assistant
// @route   POST /api/ai/chat
// @access  Public
const chatWithAI = async (req, res, next) => {
  try {
    const { message, history } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ success: false, message: 'Please provide a message' });
    }

    const aiResult = await generateAIResponse(message, history || []);

    // Fire & forget analytics log
    Analytics.create({
      eventType: 'ai_chat_message',
      metadata: { query: message },
      userAgent: req.headers['user-agent'] || '',
    }).catch((err) => console.error('Analytics log error:', err.message));

    res.status(200).json({
      success: true,
      data: aiResult,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Match Job Description against Aniket's profile
// @route   POST /api/ai/match-jd
// @access  Public
const matchJD = async (req, res, next) => {
  try {
    const { jobDescription } = req.body;

    if (!jobDescription || jobDescription.trim().length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Please paste a complete job description (minimum 10 characters)',
      });
    }

    const matchResult = matchJobDescription(jobDescription);

    // Fire & forget analytics log
    Analytics.create({
      eventType: 'jd_match_run',
      metadata: { score: matchResult.matchScore, matchedCount: matchResult.matchedSkills.length },
      userAgent: req.headers['user-agent'] || '',
    }).catch((err) => console.error('Analytics log error:', err.message));

    res.status(200).json({
      success: true,
      data: matchResult,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { chatWithAI, matchJD };
