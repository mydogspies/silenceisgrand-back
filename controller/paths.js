const Paths = require('../model/Path');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all paths
// @route   GET /api/v1/paths
// @access  Private
exports.getAllPaths = asyncHandler(async (req, res, next) => {
    const paths = await Paths.find();
    res.status(200).json({
        success: true,
        count: paths.length,
        data: paths
    });
});

// TODO set up this route for paths by type!
// @desc    Get a path by path type
// @route   GET /api/v1/paths/:type
// @access  Private

// exports.getPathById = asyncHandler(async (req, res, next) => {
//     const path = await Paths.findById(req.params.id);
//     if (!path) {
//         return next(new ErrorResponse(`No paths found!`, 404));
//     }
//     res.status(200).json({
//         success: true,
//         data: path
//     })
// });

// @desc    Create a new entry of type Path
// @route   POST /api/v1/paths
// @access  Private
exports.createPath = asyncHandler(async (req, res, next) => {
    const path = await Paths.create(req.body);
    res.status(200).json({
        success: true,
        data: path
    })
});

// @desc    Update an existing Path using its id
// @route   PUT /api/v1/paths/:id
// @access  Private
exports.updatePath = asyncHandler(async (req, res, next) => {
    const path = await Paths.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!path) {
        return next(new ErrorResponse(`Path not found with id ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: path
    })
});

// @desc    Delete a Path using its id
// @route   DELETE /api/v1/paths/:id
// @access  Private
exports.deletePath = asyncHandler(async (req, res, next) => {
    const path = await Paths.findByIdAndDelete(req.params.id);
    if (!path) {
        return next(new ErrorResponse(`Path not found with id ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: {}
    })
});
