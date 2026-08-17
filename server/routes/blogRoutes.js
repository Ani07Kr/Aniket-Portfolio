const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getAllBlogsAdmin,
  getBlog,
  likeBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');
const { protect } = require('../middleware/auth');

router.route('/').get(getBlogs).post(protect, createBlog);
router.route('/all').get(protect, getAllBlogsAdmin);
router.route('/:slugOrId').get(getBlog);
router.route('/:id/like').post(likeBlog);
router.route('/:id').put(protect, updateBlog).delete(protect, deleteBlog);

module.exports = router;
