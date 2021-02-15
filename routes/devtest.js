// ROUTES - silenceisgrand
// github.com/mydogspies/

const express = require('express');

const {
    createTest
} = require('../controller/devtest');

const router = express.Router();

router.route('/').post(createTest);

module.exports = router;
