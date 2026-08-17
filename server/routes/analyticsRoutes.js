const express = require('express');
const router = express.Router();
const { logEvent, getDashboardOverview } = require('../controllers/analyticsController');
const { protect } = require('../middleware/auth');

router.post('/event', logEvent);
router.get('/dashboard', protect, getDashboardOverview);

module.exports = router;
