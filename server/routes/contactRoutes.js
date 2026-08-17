const express = require('express');
const router = express.Router();
const {
  submitMessage,
  getMessages,
  updateMessageStatus,
  deleteMessage,
} = require('../controllers/contactController');
const { protect } = require('../middleware/auth');
const { contactLimiter } = require('../middleware/rateLimiter');

router.route('/').post(contactLimiter, submitMessage).get(protect, getMessages);
router.route('/:id').put(protect, updateMessageStatus).delete(protect, deleteMessage);

module.exports = router;
