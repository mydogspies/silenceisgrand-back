const Content = require('../model/Content');
const ErrorResponse = require('../utils/errorResponse');

// @desc    Get all contents
// @route   GET /api/v1/contents
// @access  Public
exports.getAllContents = async (req, res, next) => {
    try {
        const contents = await Content.find();
        if (contents.length === 0) {
            return next(new ErrorResponse(`No blogs found!`, 404));
        }
        res.status(200).json({
            success: true,
            count: contents.length,
            data: contents
        });
    } catch (err) {
        next(err);
    }
}

// @desc    Get content by its _id
// @route   GET /api/v1/contents/:id
// @access  Public
exports.getContentById = async (req, res, next) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) {
            return next(new ErrorResponse(`No blogs found!`, 404));
        }
        res.status(200).json({
            success: true,
            data: content
        })
    } catch (err) {
        next(err);
    }
}

// @desc    Create a new entry of type Content
// @route   POST /api/v1/contents
// @access  Private
exports.createContent = async (req, res, next) => {
    try {
        const content = await Content.create(req.body);
        res.status(200).json({
            success: true,
            data: content
        })
    } catch (err) {
        next(err);
    }
}

// @desc    Update an existing Content using its id
// @route   PUT /api/v1/contents/:id
// @access  Private
exports.updateContent = async (req, res, next) => {
    try {
        const content = await Content.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!content) {
            return next(new ErrorResponse(`Blog not found with id ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: content
        })
    } catch (err) {
        next(err);
    }
}

// @desc    Delete a blog using its id
// @route   DELETE /api/v1/blogs/:id
// @access  Private
exports.deleteContent = async (req, res, next) => {
    try {
        const content = await Content.findByIdAndDelete(req.params.id);
        if (!content) {
            return next(new ErrorResponse(`Blog not found with id ${req.params.id}`, 404));
        }
        res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        next(err);
    }

}
