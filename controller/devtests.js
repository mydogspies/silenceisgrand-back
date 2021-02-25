const DevTest = require('../model/DevTest');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc Get all devtests
// @route GET /api/v1/devtests
// @access Private
exports.getAllDevTests = asyncHandler(async (req, res, next) => {
    const devtests = await DevTest.find();
    res.status(200).json({
       success: true,
        count: devtests.length,
        data: devtests
    });
});

// @desc Get a DevTest by its _ID
// @route GET /api/v1/devtests/:id
// @access Private
exports.getDevTestById = asyncHandler(async (req, res, next) => {
    const devtest = await DevTest.findById(req.params.id);
    if (!devtest) {
        return next(new ErrorResponse('No DevTest entries found', 404));
    }
    res.status(200).json({
        success: true,
        data: devtest
    })
});

// @desc Create a new DevTest
// @route POST /api/v1/devtests
// @access Private
exports.createDevTest = asyncHandler(async (req, res, next) => {
    const devtests = await DevTest.create(req.body);
    res.status(200).json({
        success: true,
        data: devtests
    });
});

// @desc    Update an existing DevTest using its _ID
// @route   PUT /api/v1/devtests/:id
// @access  Private
exports.updateDevTest = asyncHandler(async (req, res, next) => {
    const devtest = await DevTest.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!devtest) {
        return next(new ErrorResponse(`DevTest not found with ID ${req.params.id}`, 404));
    }
    res.status(200).json({
        success: true,
        data: devtest
    })
});

// @desc    Delete an existing DevTest using its _ID
// @route   DELETE /api/v1/devtests/:id
// @access  Private
exports.deleteDevTest = asyncHandler(async (req, res, next) => {
    const devtest = await DevTest.findByIdAndDelete(req.params.id);
    if (!devtest) {
        return next(new ErrorResponse(`DevTest not found with ID ${req.params.id}`))
    }
    res.status(200).json({
        success: true,
        data: devtest
    })
});
