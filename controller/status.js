const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get server status
// @route   GET /api/v1/status
// @access  Public
exports.getServerStatus = asyncHandler(async (req, res, next) => {
    res.status(200).json({
        success: true,
        status: 'online'
    });
});
