const BlogPost = require('../models/BlogPost');
const seedData = require('../config/seedData');

// @desc    Get all published blogs
// @route   GET /api/blogs
// @access  Public
const getBlogs = async (req, res, next) => {
  try {
    let blogs = await BlogPost.find({ isPublished: true }).sort({ publishedAt: -1 });

    if (!blogs || blogs.length === 0) {
      blogs = await BlogPost.insertMany(seedData.blogPosts);
    }

    res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all blogs including drafts (Admin)
// @route   GET /api/blogs/all
// @access  Private (Admin)
const getAllBlogsAdmin = async (req, res, next) => {
  try {
    const blogs = await BlogPost.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: blogs.length, data: blogs });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single blog by slug or ID
// @route   GET /api/blogs/:slugOrId
// @access  Public
const getBlog = async (req, res, next) => {
  try {
    const param = req.params.slugOrId;
    let blog = null;

    if (param.match(/^[0-9a-fA-F]{24}$/)) {
      blog = await BlogPost.findById(param);
    }

    if (!blog) {
      blog = await BlogPost.findOne({ slug: param });
    }

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }

    // Increment view count
    blog.viewsCount += 1;
    await blog.save({ validateBeforeSave: false });

    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

// @desc    Like a blog post
// @route   POST /api/blogs/:id/like
// @access  Public
const likeBlog = async (req, res, next) => {
  try {
    const blog = await BlogPost.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }

    blog.likesCount += 1;
    await blog.save({ validateBeforeSave: false });

    res.status(200).json({ success: true, data: { likesCount: blog.likesCount } });
  } catch (error) {
    next(error);
  }
};

// @desc    Create blog post
// @route   POST /api/blogs
// @access  Private (Admin)
const createBlog = async (req, res, next) => {
  try {
    const blog = await BlogPost.create(req.body);
    res.status(201).json({ success: true, data: blog, message: 'Blog post created successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Update blog post
// @route   PUT /api/blogs/:id
// @access  Private (Admin)
const updateBlog = async (req, res, next) => {
  try {
    const blog = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }

    res.status(200).json({ success: true, data: blog, message: 'Blog post updated successfully' });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete blog post
// @route   DELETE /api/blogs/:id
// @access  Private (Admin)
const deleteBlog = async (req, res, next) => {
  try {
    const blog = await BlogPost.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog post not found' });
    }

    res.status(200).json({ success: true, data: {}, message: 'Blog post deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBlogs, getAllBlogsAdmin, getBlog, likeBlog, createBlog, updateBlog, deleteBlog };
