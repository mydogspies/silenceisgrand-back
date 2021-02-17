const Blog = require('../model/Blog');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all blogs
// @route   GET /api/v1/blogs
// @access  Public
exports.getAllBlogs = asyncHandler(async(req, res, next) => {
        const blogs = await Blog.find();
        res.status(200).json({
            success: true,
            count: blogs.length,
            data: blogs
        });
});

// @desc    Get a blog by its _id
// @route   GET /api/v1/blogs/:id
// @access  Public
exports.getBlogById = asyncHandler(async (req, res, next) => {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return next(new ErrorResponse(`No blogs found!`, 404));
        }
        res.status(200).json({
            success: true,
            data: blog
        })
});

// @desc    Create a new entry of type Blog
// @route   POST /api/v1/blogs
// @access  Private
exports.createBlog = asyncHandler(async (req, res, next) => {
        const blog = await Blog.create(req.body);
        res.status(200).json({
            success: true,
            data: blog
        })
});

// @desc    Update an existing Blog using its id
// @route   PUT /api/v1/blogs/:id
// @access  Private
exports.updateBlog = asyncHandler(async (req, res, next) => {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!blog) {
            return next(new ErrorResponse(`Blog not found with id ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: blog
        })
});

// @desc    Delete a blog using its id
// @route   DELETE /api/v1/blogs/:id
// @access  Private
exports.deleteBlog = asyncHandler(async (req, res, next) => {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return next(new ErrorResponse(`Blog not found with id ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: {}
        })
});
