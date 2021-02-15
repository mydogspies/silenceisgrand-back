// ROUTES - silenceisgrand
// github.com/mydogspies/

const express = require('express');

const {
    createTest,
    getAllTests
} = require('../controller/devtest');

const router = express.Router();

router.route('/')
    .post(createTest)
    .get(getAllTests);

module.exports = router;
