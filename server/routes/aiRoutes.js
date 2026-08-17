const express = require('express');
const router = express.Router();
const { chatWithAI, matchJD } = require('../controllers/aiController');
const { aiLimiter } = require('../middleware/rateLimiter');

router.post('/chat', aiLimiter, chatWithAI);
router.post('/match-jd', aiLimiter, matchJD);

module.exports = router;
