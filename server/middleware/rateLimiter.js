const rateLimit = require('express-rate-limit');

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // Limit each IP to 300 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // Limit contact form submissions to 10 per hour per IP
  message: {
    success: false,
    message: 'Too many messages sent from this IP. Please try again in an hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 60, // Limit AI chat interactions to 60 per 15 minutes
  message: {
    success: false,
    message: 'AI Assistant rate limit reached. Please wait a few moments before sending more questions.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = { generalLimiter, contactLimiter, aiLimiter };
