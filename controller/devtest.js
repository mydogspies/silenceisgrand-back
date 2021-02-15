// CONTROLLER for tests - silenceisgrand
// github.com/mydogspies/

const Test = require('../model/Test');

// @desc    Create a test entry
// @route   POST /api/v1/bootcamps
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
