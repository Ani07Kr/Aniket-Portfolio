const Message = require('../models/Message');
const { sendContactNotificationEmail } = require('../services/emailService');

// @desc    Submit contact message
// @route   POST /api/contact
// @access  Public
const submitMessage = async (req, res, next) => {
  try {
    const { name, email, subject, message, senderType } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
    }

    const newMessage = await Message.create({
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      senderType: senderType || 'Recruiter',
      ipAddress: req.ip || '',
    });

    // Trigger instant email notification asynchronously (does not block response)
    sendContactNotificationEmail({
      name,
      email,
      subject: subject || 'Portfolio Inquiry',
      message,
      senderType: senderType || 'Recruiter',
    }).catch((err) => console.error('Email dispatch error:', err.message));

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent directly to Aniket Kumar.',
      data: newMessage,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all messages (Admin)
// @route   GET /api/contact
// @access  Private (Admin)
const getMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    next(error);
  }
};

// @desc    Mark message as read/replied
// @route   PUT /api/contact/:id
// @access  Private (Admin)
const updateMessageStatus = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    res.status(200).json({ success: true, data: message });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete message
// @route   DELETE /api/contact/:id
// @access  Private (Admin)
const deleteMessage = async (req, res, next) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }

    res.status(200).json({ success: true, data: {}, message: 'Message deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitMessage, getMessages, updateMessageStatus, deleteMessage };
