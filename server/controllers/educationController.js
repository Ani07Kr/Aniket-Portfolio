const Education = require('../models/Education');
const seedData = require('../config/seedData');

// @desc    Get all education records
// @route   GET /api/education
// @access  Public
const getEducations = async (req, res, next) => {
  try {
    let educations = await Education.find().sort({ order: 1 });

    if (!educations || educations.length === 0) {
      educations = await Education.insertMany(seedData.educations);
    }

    res.status(200).json({ success: true, count: educations.length, data: educations });
  } catch (error) {
    next(error);
  }
};

// @desc    Create education record
// @route   POST /api/education
// @access  Private (Admin)
const createEducation = async (req, res, next) => {
  try {
    const edu = await Education.create(req.body);
    res.status(201).json({ success: true, data: edu, message: 'Education record added successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Update education record
// @route   PUT /api/education/:id
// @access  Private (Admin)
const updateEducation = async (req, res, next) => {
  try {
    const edu = await Education.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!edu) {
      return res.status(404).json({ success: false, message: 'Education record not found' });
    }

    res.status(200).json({ success: true, data: edu, message: 'Education updated successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete education record
// @route   DELETE /api/education/:id
// @access  Private (Admin)
const deleteEducation = async (req, res, next) => {
  try {
    const edu = await Education.findByIdAndDelete(req.params.id);

    if (!edu) {
      return res.status(404).json({ success: false, message: 'Education record not found' });
    }

    res.status(200).json({ success: true, data: {}, message: 'Education deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getEducations, createEducation, updateEducation, deleteEducation };
