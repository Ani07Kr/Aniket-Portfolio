const Experience = require('../models/Experience');
const seedData = require('../config/seedData');

// @desc    Get all experience records
// @route   GET /api/experience
// @access  Public
const getExperiences = async (req, res, next) => {
  try {
    let experiences = await Experience.find().sort({ order: 1, createdAt: -1 });

    if (!experiences || experiences.length === 0) {
      experiences = await Experience.insertMany(seedData.experiences);
    }

    res.status(200).json({ success: true, count: experiences.length, data: experiences });
  } catch (error) {
    next(error);
  }
};

// @desc    Create experience record
// @route   POST /api/experience
// @access  Private (Admin)
const createExperience = async (req, res, next) => {
  try {
    const exp = await Experience.create(req.body);
    res.status(201).json({ success: true, data: exp, message: 'Experience added successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Update experience record
// @route   PUT /api/experience/:id
// @access  Private (Admin)
const updateExperience = async (req, res, next) => {
  try {
    const exp = await Experience.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!exp) {
      return res.status(404).json({ success: false, message: 'Experience not found' });
    }

    res.status(200).json({ success: true, data: exp, message: 'Experience updated successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete experience record
// @route   DELETE /api/experience/:id
// @access  Private (Admin)
const deleteExperience = async (req, res, next) => {
  try {
    const exp = await Experience.findByIdAndDelete(req.params.id);

    if (!exp) {
      return res.status(404).json({ success: false, message: 'Experience not found' });
    }

    res.status(200).json({ success: true, data: {}, message: 'Experience deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getExperiences, createExperience, updateExperience, deleteExperience };
