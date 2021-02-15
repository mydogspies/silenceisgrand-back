// CONTROLLER for tests - silenceisgrand
// github.com/mydogspies/

const Test = require('../model/Test');

// @desc    Get all test entries
// @route   POST /api/v1/test
// @access  Private
exports.getAllTests = async (req, res, next) => {
    try {
        const test = await Test.find();
        res.status(200).json({
            success: true,
            count: test.length, // bug in Intellij
            data: test
        });
    } catch (err) {
        next(err);
    }
}

// @desc    Create a test entry
// @route   POST /api/v1/test
// @access  Private
exports.createTest = async (req, res, next) => {
    try {
        const test = await Test.create(req.body);
        res.status(200).json({
            success: true,
            data: test
        });
    } catch (err) {
        next(err);
    }
}
