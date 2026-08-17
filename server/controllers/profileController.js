const Profile = require('../models/Profile');
const seedData = require('../config/seedData');

// @desc    Get profile details
// @route   GET /api/profile
// @access  Public
const getProfile = async (req, res, next) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create(seedData.profile);
    }
    res.status(200).json({ success: true, data: profile });
  } catch (error) {
    next(error);
  }
};

// @desc    Update profile details
// @route   PUT /api/profile
// @access  Private (Admin)
const updateProfile = async (req, res, next) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = await Profile.create(req.body);
    } else {
      profile = await Profile.findByIdAndUpdate(profile._id, req.body, {
        new: true,
        runValidators: true,
      });
    }
    res.status(200).json({ success: true, data: profile, message: 'Profile updated successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProfile, updateProfile };
