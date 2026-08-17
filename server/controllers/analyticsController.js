const Analytics = require('../models/Analytics');
const Project = require('../models/Project');
const Message = require('../models/Message');
const BlogPost = require('../models/BlogPost');

// @desc    Log client analytics event
// @route   POST /api/analytics/event
// @access  Public
const logEvent = async (req, res, next) => {
  try {
    const { eventType, metadata } = req.body;

    if (!eventType) {
      return res.status(400).json({ success: false, message: 'Event type is required' });
    }

    const event = await Analytics.create({
      eventType,
      metadata: metadata || {},
      userAgent: req.headers['user-agent'] || '',
    });

    res.status(201).json({ success: true, data: event });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dashboard analytics overview (Admin)
// @route   GET /api/analytics/dashboard
// @access  Private (Admin)
const getDashboardOverview = async (req, res, next) => {
  try {
    const totalProjects = await Project.countDocuments();
    const totalMessages = await Message.countDocuments();
    const unreadMessages = await Message.countDocuments({ isRead: false });
    const totalBlogs = await BlogPost.countDocuments();

    // Event aggregation
    const events = await Analytics.aggregate([
      {
        $group: {
          _id: '$eventType',
          count: { $sum: 1 },
        },
      },
    ]);

    const eventCounts = {};
    events.forEach((e) => {
      eventCounts[e._id] = e.count;
    });

    const recentEvents = await Analytics.find().sort({ timestamp: -1 }).limit(20);

    res.status(200).json({
      success: true,
      data: {
        totalProjects,
        totalMessages,
        unreadMessages,
        totalBlogs,
        eventCounts,
        recentEvents,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { logEvent, getDashboardOverview };
