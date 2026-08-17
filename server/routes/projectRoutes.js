const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectController');
const { protect } = require('../middleware/auth');

router.route('/').get(getProjects).post(protect, createProject);
router.route('/:slugOrId').get(getProject);
router.route('/:id').put(protect, updateProject).delete(protect, deleteProject);

module.exports = router;
