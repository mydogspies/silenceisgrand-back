const Content = require('../model/Content');
const ContentSet = require('../model/ContentSet');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all contents
// @route   GET /api/v1/contents
// @access  Public
exports.getAllContents = asyncHandler(async (req, res, next) => {
    const contents = await Content.find();
    res.status(200).json({
        success: true,
        count: contents.length,
        data: contents
    });
});

// @desc    Get content by its _id
// @route   GET /api/v1/contents/:id
// @access  Public
exports.getContentById = asyncHandler(async (req, res, next) => {
    const content = await Content.findById(req.params.id);
    if (!content) {
        return next(new ErrorResponse(`No content found!`, 404));
    }
    res.status(200).json({
        success: true,
        data: content
    })
});

// @desc    Get content by its shortName
// @route   GET /api/v1/contents/search/:name
// @access  Public
exports.getContentByShortName = asyncHandler(async (req, res, next) => {
    const content = await Content.findOne({shortName: req.params.name});
    if(!content) {
        return next(new ErrorResponse('No content found', 404));
    }
    res.status(200).json({
        success: true,
        data: content
    })
});

// @desc    Create a new entry of type Content
// @route   POST /api/v1/contents
// @access  Private
exports.createContent = asyncHandler(async (req, res, next) => {
    const content = await Content.create(req.body);
    res.status(200).json({
        success: true,
        data: content
    })
});

// @desc    Create a new entry of type ContentSet
// @route   POST /api/v1/contents/set
// @access  Private
exports.createContentSet = asyncHandler(async (req, res, next) => {
    const content = await ContentSet.create(req.body);
    res.status(200).json({
        success: true,
        data: content
    })
});

// @desc    Update an existing Content using its id
// @route   PUT /api/v1/contents/:id
// @access  Private
exports.updateContent = asyncHandler(async (req, res, next) => {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!content) {
        return next(new ErrorResponse(`Content not found with id ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: content
    })
});

// @desc    Delete a blog using its id
// @route   DELETE /api/v1/blogs/:id
// @access  Private
exports.deleteContent = asyncHandler(async (req, res, next) => {
    const content = await Content.findByIdAndDelete(req.params.id);
    if (!content) {
        return next(new ErrorResponse(`Content not found with id ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: {}
    })
});
