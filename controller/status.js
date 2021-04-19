const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require("../model");
const DevTest = db.devtest;
const Op = db.Sequelize.Op;

// @desc    Get server status
// @route   GET /api/v1/status
// @access  Public
exports.getServerStatus = asyncHandler(async (req, res, next) => {
    const status = await DevTest.findOne();
    res.status(200).json({
        success: true,
        data: status
    });
});
