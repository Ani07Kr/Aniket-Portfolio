const Achievement = require('../models/Achievement');
const seedData = require('../config/seedData');

// @desc    Get all achievements (Patents, IEEE paper, honors)
// @route   GET /api/achievements
// @access  Public
const getAchievements = async (req, res, next) => {
  try {
    let achievements = await Achievement.find().sort({ order: 1 });

    if (!achievements || achievements.length === 0) {
      achievements = await Achievement.insertMany(seedData.achievements);
    }

    res.status(200).json({ success: true, count: achievements.length, data: achievements });
  } catch (error) {
    next(error);
  }
};

// @desc    Create achievement
// @route   POST /api/achievements
// @access  Private (Admin)
const createAchievement = async (req, res, next) => {
  try {
    const achievement = await Achievement.create(req.body);
    res.status(201).json({ success: true, data: achievement, message: 'Achievement added successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Update achievement
// @route   PUT /api/achievements/:id
// @access  Private (Admin)
const updateAchievement = async (req, res, next) => {
  try {
    const achievement = await Achievement.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!achievement) {
      return res.status(404).json({ success: false, message: 'Achievement not found' });
    }

    res.status(200).json({ success: true, data: achievement, message: 'Achievement updated successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete achievement
// @route   DELETE /api/achievements/:id
// @access  Private (Admin)
const deleteAchievement = async (req, res, next) => {
  try {
    const achievement = await Achievement.findByIdAndDelete(req.params.id);

    if (!achievement) {
      return res.status(404).json({ success: false, message: 'Achievement not found' });
    }

    res.status(200).json({ success: true, data: {}, message: 'Achievement deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAchievements, createAchievement, updateAchievement, deleteAchievement };
